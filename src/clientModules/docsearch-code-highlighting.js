import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';
import {Prism} from 'prism-react-renderer';
import '../css/docsearch-syntax.css';

const contentSelector = '.DocSearch-Markdown-Content';
const highlighted = new WeakMap();
const pending = new Set();
let observer;
let frame;

function highlightContent(content) {
  // DocSearch replaces its HTML while streaming. Highlight the completed block
  // so its renderer and the highlighter never compete over partial tokens.
  if (!content.isConnected || content.classList.contains('DocSearch-Markdown-Content--streaming')) {
    return;
  }

  content.querySelectorAll('.DocSearch-CodeSnippet pre code').forEach((code) => {
    const languageClass = [...code.classList].find((name) => name.startsWith('language-'));
    const language = languageClass?.slice('language-'.length).toLowerCase();
    const grammar = language && Prism.languages[language];
    if (!grammar || typeof grammar !== 'object') {
      return;
    }

    const source = code.textContent;
    const previous = highlighted.get(code);
    if (previous?.source === source && previous.language === language && previous.html === code.innerHTML) {
      return;
    }

    // Prism escapes source text before producing token spans. Leave DocSearch's
    // Copy button and its original data-code value intact.
    code.innerHTML = Prism.highlight(source, grammar, language);
    highlighted.set(code, {source, language, html: code.innerHTML});
  });
}

function queueContent(node, includeChildren = false) {
  const element = node.nodeType === 1 ? node : node.parentElement;
  if (!element) {
    return;
  }
  const content = element.closest(contentSelector);
  if (content) {
    pending.add(content);
  } else if (includeChildren) {
    element.querySelectorAll(contentSelector).forEach((child) => pending.add(child));
  }
}

function flush() {
  frame = undefined;
  pending.forEach(highlightContent);
  pending.clear();
}

export function onRouteDidUpdate() {
  if (!ExecutionEnvironment.canUseDOM || observer) {
    return;
  }

  document.querySelectorAll(contentSelector).forEach(highlightContent);
  observer = new MutationObserver((records) => {
    for (const record of records) {
      queueContent(record.target);
      record.addedNodes.forEach((node) => queueContent(node, true));
    }
    if (pending.size && frame === undefined) {
      frame = requestAnimationFrame(flush);
    }
  });
  // Both the search modal and the full-page AI panel use portals under body.
  observer.observe(document.body, {
    subtree: true,
    childList: true,
    characterData: true,
    attributes: true,
    attributeFilter: ['class'],
  });
}

if (module.hot) {
  module.hot.dispose(() => {
    observer?.disconnect();
    if (frame !== undefined) {
      cancelAnimationFrame(frame);
    }
    pending.clear();
  });
}
