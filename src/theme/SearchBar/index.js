import {useEffect} from 'react';
import SearchBar from '@theme-original/SearchBar';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

// Max suggestions to show (Hick's Law: fewer choices = faster decisions)
const MAX_SUGGESTIONS = 4;
const ALLOWED_PARTS = new Set(['step-start', 'text']);

function injectSuggestionButtons(suggestions) {
  document.querySelectorAll('.askai-suggestions').forEach((el) => el.remove());

  const responseArea = document.querySelector(
    '.DocSearch-AskAiScreen-Response-Container'
  );
  if (!responseArea || !suggestions.length) return;

  const limited = suggestions.slice(0, MAX_SUGGESTIONS);

  // Accessible wrapper: role="group" + aria-live for screen readers
  const wrapper = document.createElement('div');
  wrapper.className = 'askai-suggestions';
  wrapper.setAttribute('role', 'group');
  wrapper.setAttribute('aria-label', 'Follow-up suggestions');
  wrapper.setAttribute('aria-live', 'polite');

  // Screen reader announcement
  const srAnnounce = document.createElement('span');
  srAnnounce.className = 'askai-sr-only';
  srAnnounce.textContent = `${limited.length} follow-up suggestions available`;
  wrapper.appendChild(srAnnounce);

  limited.forEach((text) => {
    const btn = document.createElement('button');
    btn.className = 'askai-suggestion-btn';
    btn.textContent = text;
    btn.type = 'button';
    btn.onclick = () => {
      const input = document.querySelector(
        '.DocSearch-Input, input[placeholder*="Ask"]'
      );
      if (input) {
        const nativeSetter = Object.getOwnPropertyDescriptor(
          HTMLInputElement.prototype,
          'value'
        ).set;
        nativeSetter.call(input, text);
        input.dispatchEvent(new Event('input', {bubbles: true}));
        input.focus();
        input.dispatchEvent(
          new KeyboardEvent('keydown', {
            key: 'Enter',
            code: 'Enter',
            keyCode: 13,
            bubbles: true,
          })
        );
      }
    };
    wrapper.appendChild(btn);
  });

  const containers = document.querySelectorAll(
    '.DocSearch-AskAiScreen-Response-Container'
  );
  const last = containers[containers.length - 1] || responseArea;
  last.after(wrapper);
}

function extractSuggestionsFromStream(response) {
  if (!response.ok || !response.body) return;
  const clone = response.clone();
  const reader = clone.body.getReader();
  const decoder = new TextDecoder();
  let buffer = '';

  function pump() {
    reader.read().then(({done, value}) => {
      if (done) return;
      buffer += decoder.decode(value, {stream: true});
      const lines = buffer.split('\n');
      buffer = lines.pop() || '';
      for (const line of lines) {
        if (line.startsWith('data: ')) {
          try {
            const data = JSON.parse(line.slice(6));
            if (
              data.type === 'data-suggestions' &&
              data.data?.suggestions
            ) {
              setTimeout(
                () => injectSuggestionButtons(data.data.suggestions),
                500
              );
            }
          } catch {
            // ignore
          }
        }
      }
      pump();
    });
  }
  pump();
}

function useAgentStudioFetchPatch(appId) {
  useEffect(() => {
    if (!appId) return;
    const endpoint = `https://${appId}.algolia.net/agent-studio/1`;
    const originalFetch = window.fetch;

    window.fetch = function (url, options) {
      if (
        typeof url === 'string' &&
        url.startsWith(endpoint) &&
        options?.method === 'POST' &&
        options?.body
      ) {
        try {
          const body = JSON.parse(options.body);

          // Fix assistant message parts for follow-ups
          if (Array.isArray(body.messages) && body.messages.length > 1) {
            body.messages = body.messages.map((msg) => {
              if (msg.role === 'assistant' && Array.isArray(msg.parts)) {
                const cleaned = msg.parts.filter((p) =>
                  ALLOWED_PARTS.has(p.type)
                );
                if (!cleaned.some((p) => p.type === 'step-start')) {
                  cleaned.unshift({type: 'step-start'});
                }
                return {...msg, parts: cleaned};
              }
              return msg;
            });
          }

          const result = originalFetch.call(this, url, {
            ...options,
            body: JSON.stringify(body),
          });

          result.then(extractSuggestionsFromStream);

          return result;
        } catch {
          // pass through
        }
      }
      return originalFetch.apply(this, arguments);
    };

    return () => {
      window.fetch = originalFetch;
    };
  }, [appId]);
}

export default function SearchBarWrapper(props) {
  const {siteConfig} = useDocusaurusContext();
  const askAi = siteConfig.themeConfig.algolia?.askAi;
  if (askAi) {
    if (!askAi.agentStudio) askAi.agentStudio = true;
  }
  useAgentStudioFetchPatch(siteConfig.themeConfig.algolia?.appId);
  return <SearchBar {...props} />;
}
