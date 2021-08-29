import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 10px;
  font-size: 1.1rem;

  a {
    color: var(--accent-color);
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

  p, blockquote, ul, ol, dl, table, pre {
    margin: 15px 0;
  }

  ul, ol {
    padding-left: 30px;
  }

  h1 {
    color: var(--text-color);
    font-size: 2.5em;
  }

  h2 {
    color: var(--text-color);
    font-size: 2.0em;
  }

  h3 {
    font-size: 1.5em;
  }

  h4 {
    font-size: 1.2em;
  }

  h5 {
    font-size: 1.0em;
  }

  h6 {
    color: #777;
    font-size: 1.0em;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: bold;
    line-height: 1.7;
    margin: 1em 0 15px 0;
  }

  h1 + p, h2 + p, h3 + p {
    margin-top: 10px;
  }
    
  code {
    background-color: var(--accent-color);
    border-radius: 3px;
    font-family: Consolas, "Liberation Mono", Courier, monospace;
    margin: 0 2px;
    padding: 10px 15px;
    white-space: pre;
	}
`
