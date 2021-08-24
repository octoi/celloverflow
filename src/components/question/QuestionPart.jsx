import React from 'react';
import { QuestionPart as Container } from '../../styles/questionStyles';

export default function QuestionPart() {
  return (
    <Container>
      <h1>Why I’m getting headache ??</h1>
      <div className="tags">
        <span>head</span>
        <span>pain in head</span>
      </div>
      <h2>2 days ago</h2>
    </Container>
  )
}
