import SearchBar from '@theme-original/SearchBar';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

// Wrap SearchBar to inject agentStudio: true into askAi config.
// Docusaurus 3.9.2's Joi validation doesn't recognize agentStudio yet,
// but @docsearch/react 4.6+ requires it for Agent Studio assistants.
export default function SearchBarWrapper(props) {
  const {siteConfig} = useDocusaurusContext();
  const askAi = siteConfig.themeConfig.algolia?.askAi;
  if (askAi && !askAi.agentStudio) {
    askAi.agentStudio = true;
  }
  return <SearchBar {...props} />;
}
