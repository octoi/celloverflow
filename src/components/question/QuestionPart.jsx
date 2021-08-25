import React, { useState } from 'react';
import MarkdownPreview from '../../components/MarkdownPreview';
import { QuestionPart as Container } from '../../styles/questionStyles';

// Vote icons
import upVoteOutlined from '../../assets/upvoteoutlined.svg';
import downVoteOutlined from '../../assets/downvoteoutlined.svg';
import upVoteFilled from '../../assets/upvotefilled.svg';
import downVoteFilled from '../../assets/downvotefilled.svg';


export default function QuestionPart() {
  const [isUpVote, setIsUpVote] = useState(true);
  const [isDownVote, setIsDownVote] = useState(false);

  const upVote = () => {
    if (isUpVote) {
      setIsUpVote(false);
    } else {
      setIsUpVote(true)
      setIsDownVote(false)
    }
  }

  const downVote = () => {
    if (isDownVote) {
      setIsDownVote(false);
    } else {
      setIsDownVote(true)
      setIsUpVote(false)
    }
  }

  const markdown = `# Why I’m getting headache ?? 
  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown ✨`

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
            <button onClick={upVote}>
              <img src={isUpVote ? upVoteFilled : upVoteOutlined} alt="Up Vote" />
            </button>
            <p>32</p>
            <button onClick={downVote}>
              <img src={isDownVote ? downVoteFilled : downVoteOutlined} alt="Down Vote" />
            </button>
          </div>
          <p className="description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. has been the industry's standard dummy text ever since the 1500s, when an unknown ✨</p>
        </div>
        <MarkdownPreview markdown={markdown} />
      </div>
    </Container>
  )
}
