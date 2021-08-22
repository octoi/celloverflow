import React from 'react';
import MarkdownToJSX from 'markdown-to-jsx';
import { Container } from '../styles/mdStyles';

export default function MarkdownPreview({ markdown }) {
  return (
    <Container>
      <MarkdownToJSX>{markdown}</MarkdownToJSX>
    </Container>
  )
}
