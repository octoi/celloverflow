import React from 'react';
import { QuestionPart as Container } from '../../styles/questionStyles';

// Vote icosn
import upVoteOutlined from '../../assets/upvoteoutlined.svg';
import downVoteOutlined from '../../assets/downvoteoutlined.svg';
import upVoteFilled from '../../assets/upvotefilled.svg';
import downVoteFilled from '../../assets/downvotefilled.svg';


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
              <img src={upVoteOutlined} alt="Up Vote" />
            </button>
            <p>32</p>
            <button>
              <img src={downVoteOutlined} alt="Down Vote" />
            </button>
          </div>
          <p className="description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. has been the industry's standard dummy text ever since the 1500s, when an unknown ✨</p>
        </div>
      </div>
    </Container>
  )
}
