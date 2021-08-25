import React from 'react';
import upVoteImage from '../../assets/upvote.svg';
import downVoteImage from '../../assets/downvote.svg';
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

      <div className="question">
        <div className="description-vote">
          <div className="vote">
            <button>
              <img src={upVoteImage} alt="Up Vote" />
            </button>
            <p>32</p>
            <button>
              <img src={downVoteImage} alt="Down Vote" />
            </button>
          </div>
          <p className="description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. has been the industry's standard dummy text ever since the 1500s, when an unknown ✨</p>
        </div>
      </div>
    </Container>
  )
}
