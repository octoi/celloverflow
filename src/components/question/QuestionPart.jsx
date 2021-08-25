import React, { useState, useEffect } from 'react';
import { QuestionPart as Container } from '../../styles/questionStyles';
import { voteQuestion } from '../../firebase/helpers/questionHelper';
import { useToast } from '@chakra-ui/react';
import { useHistory } from 'react-router-dom';
import moment from 'moment';
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
  const history = useHistory();

  useEffect(() => {
    const userVote = question?.voters[user?.username];
    if (userVote) {
      if (userVote?.isUpVote) {
        setIsUpVote(true)
      } else {
        setIsDownVote(true);
      }
    }
  }, [question, user]);

  const updateVotesInFirestore = (currentVotes, isUpVote, isRemove) => {
    const voters = { ...question?.voters, [user?.username]: { username: user?.username, isUpVote } }

    if (isRemove) {
      delete voters[user?.username]
    }

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
      updateVotesInFirestore(votes - 1, false, true)
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
      setVotes(votes + 1);
      updateVotesInFirestore(votes + 1, false, true)
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
      <h2>{moment(question?.createdAt?.toDate()).fromNow()}</h2>

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
          <p onClick={() => {
            showToast({
              title: 'Just copy the page url and share 😜',
              description: 'Actually I\'m pretty lazy to implement this feature :)',
              duration: 3000,
              isClosable: true,
              position: 'top-right',
              status: 'info',
            });
          }} className="share">share</p>
          {user?.email === question?.userEmail && <DeleteBtn questionId={question?.id} />}
        </div>
        <p>asked by <span onClick={() => history.push(`/user/${question?.username}`)}>@{question?.username}</span></p>
      </div>
    </Container>
  )
}
