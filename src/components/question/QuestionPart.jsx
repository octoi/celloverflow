import React, { useState } from 'react';
import { QuestionPart as Container } from '../../styles/questionStyles';
import MarkdownPreview from '../../components/MarkdownPreview';
import DeleteBtn from './DeleteBtn';

// Vote icons
import upVoteOutlined from '../../assets/upvoteoutlined.svg';
import downVoteOutlined from '../../assets/downvoteoutlined.svg';
import upVoteFilled from '../../assets/upvotefilled.svg';
import downVoteFilled from '../../assets/downvotefilled.svg';


export default function QuestionPart({ question, user }) {
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


  return (
    <Container>
      <h1>{question?.title}</h1>
      <div className="tags">
        {question?.tags?.map((tag, idx) => <span key={idx}>{tag}</span>)}
      </div>
      <h2>2 days ago</h2>

      <div className="question">
        <div className="description-vote">
          <div className="vote">
            <button onClick={upVote}>
              <img src={isUpVote ? upVoteFilled : upVoteOutlined} alt="Up Vote" />
            </button>
            <p>{question?.votes}</p>
            <button onClick={downVote}>
              <img src={isDownVote ? downVoteFilled : downVoteOutlined} alt="Down Vote" />
            </button>
          </div>
          <p className="description">{question?.description}</p>
        </div>
        <MarkdownPreview markdown={question?.body} />
      </div>

      <div className="utils">
        <div>
          <p className="share">share</p>
          {user?.email === question?.userEmail && <DeleteBtn questionId={question?.id} />}
        </div>
        <p>asked by <span>@{question?.username}</span></p>
      </div>
    </Container>
  )
}
