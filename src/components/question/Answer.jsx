import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { voteAnswer } from '../../firebase/helpers/answerHelper';
import { useToast } from '@chakra-ui/react';
import { useHistory } from 'react-router-dom';
import MarkdownPreview from '../../components/MarkdownPreview';
import DeleteBtn from './DeleteBtn';
import CopyToClipboard from 'react-copy-to-clipboard';

// Vote icons
import upVoteOutlined from '../../assets/upvoteoutlined.svg';
import downVoteOutlined from '../../assets/downvoteoutlined.svg';
import upVoteFilled from '../../assets/upvotefilled.svg';
import downVoteFilled from '../../assets/downvotefilled.svg';

export default function Answer({ answer }) {
  const [votes, setVotes] = useState(0 || answer?.votes);
  const [isUpVote, setIsUpVote] = useState(false);
  const [isDownVote, setIsDownVote] = useState(false);

  const user = useSelector(state => state.user?.user);

  const showToast = useToast();
  const history = useHistory()

  useEffect(() => {
    const userVote = answer?.voters[user?.username];
    if (userVote) {
      if (userVote?.isUpVote) {
        setIsUpVote(true)
      } else {
        setIsDownVote(true);
      }
    }
  }, [answer, user]);

  const updateVotesInFirestore = (currentVotes, isUpVote, isRemove) => {
    const voters = { ...answer?.voters, [user?.username]: { username: user?.username, isUpVote } }

    if (isRemove) {
      delete voters[user?.username]
    }

    voteAnswer(answer?.question, answer?.id, currentVotes, voters).catch((err) => {
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
    <div>
      <div className="answer">
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
          <div className="markdown">
            <MarkdownPreview markdown={answer?.body} />
          </div>
        </div>
      </div>
      <div className="utils">
        <div style={{ marginRight: "10px" }}>
          <CopyToClipboard
            text={window.location.href}
            onCopy={() => {
              showToast({
                title: 'Page link copied to clipboard 📋',
                duration: 3000,
                isClosable: true,
                position: 'top-right',
                status: 'info',
              });
            }}
          ><i style={{ marginRight: "15px" }} className="share fas fa-share-alt"></i></CopyToClipboard>
          {user?.email === answer?.userEmail && <DeleteBtn questionId={answer?.question} answerId={answer?.id} isAnswer />}
        </div>
        <p><span className="hide">answered by</span> <span className="cool" onClick={() => history.push(`/user/${answer?.username}`)}>@{answer?.username}</span></p>
      </div>
    </div>
  )
}
