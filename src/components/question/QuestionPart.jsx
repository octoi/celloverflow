import React, { useState } from 'react';
import { QuestionPart as Container } from '../../styles/questionStyles';
import { voteQuestion } from '../../firebase/helpers/questionHelper';
import { useToast } from '@chakra-ui/react';
import MarkdownPreview from '../../components/MarkdownPreview';
import DeleteBtn from './DeleteBtn';

// Vote icons
import upVoteOutlined from '../../assets/upvoteoutlined.svg';
import downVoteOutlined from '../../assets/downvoteoutlined.svg';
import upVoteFilled from '../../assets/upvotefilled.svg';
import downVoteFilled from '../../assets/downvotefilled.svg';


export default function QuestionPart({ question, user }) {
  const [votes, setVotes] = useState(0 || question?.votes);
  const [isUpVote, setIsUpVote] = useState(false);
  const [isDownVote, setIsDownVote] = useState(false);

  const showToast = useToast();

  const updateVotesInFirestore = (currentVotes, isUpVote) => {
    const voters = [...question?.voters, { username: user?.username, isUpVote }]
    voteQuestion(question?.id, currentVotes, voters).catch((err) => {
      showToast({
        title: 'Failed to vote 😶',
        duration: 3000,
        isClosable: true,
        position: 'top-right',
        status: 'error',
      });
    })
  }

  const upVote = () => {
    if (isUpVote) {
      setIsUpVote(false);
      setVotes(votes - 1);
    } else {
      setVotes(votes + 1);
      updateVotesInFirestore(votes + 1, true)
      setIsUpVote(true)
      setIsDownVote(false)
    }
  }

  const downVote = () => {
    if (isDownVote) {
      setIsDownVote(false);
    } else {
      setVotes(votes - 1);
      updateVotesInFirestore(votes - 1, false)
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
            <p>{votes}</p>
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
