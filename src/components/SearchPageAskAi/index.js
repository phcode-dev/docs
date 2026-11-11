import React, {useCallback, useMemo, useRef, useState} from 'react';
import {createPortal} from 'react-dom';
import BrowserOnly from '@docusaurus/BrowserOnly';
import Translate from '@docusaurus/Translate';
import {useAlgoliaAskAi, useAlgoliaThemeConfig} from '@docsearch/docusaurus-adapter/client';
import {Sidepanel} from '@docsearch/react/sidepanelPanel';
import '@docsearch/react/style';
import '@docsearch/react/style/sidepanel';
import styles from './styles.module.css';

// Use DocSearch's supported chat component for streaming, citations and follow-ups.
// Only send a question after the reader explicitly asks for an AI answer.
export default function SearchPageAskAi({query}) {
  const config = useAlgoliaThemeConfig();
  const {sidePanelAskAi} = useAlgoliaAskAi(config);
  const [activeQuery, setActiveQuery] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef(null);
  const initialMessage = useMemo(
    () => activeQuery ? {query: activeQuery} : undefined,
    [activeQuery],
  );
  const closePanel = useCallback(() => {
    setIsOpen(false);
    buttonRef.current?.focus();
  }, []);
  const openPanel = useCallback(() => setIsOpen(true), []);
  const searchQuery = query.trim();

  if (!sidePanelAskAi) {
    return null;
  }

  return (
    <>
      {searchQuery && (
        <div className={styles.action}>
          <button
            type="button"
            className="button button--secondary"
            ref={buttonRef}
            aria-haspopup="dialog"
            aria-expanded={isOpen}
            onClick={() => {
              setActiveQuery(searchQuery);
              setIsOpen(true);
            }}>
            <Translate id="searchPage.askAi">Ask AI about this search</Translate>
          </button>
        </div>
      )}
      {activeQuery && (
        <BrowserOnly>
          {() => createPortal(
            <div className={styles.panel}>
              <Sidepanel
                key={activeQuery}
                {...sidePanelAskAi}
                initialMessage={initialMessage}
                isOpen={isOpen}
                onOpen={openPanel}
                onClose={closePanel}
                keyboardShortcuts={{'Ctrl/Cmd+I': false}}
                variant="inline"
                pushSelector="#__docusaurus"
                width={480}
                expandedWidth={680}
              />
            </div>,
            document.body,
          )}
        </BrowserOnly>
      )}
    </>
  );
}
