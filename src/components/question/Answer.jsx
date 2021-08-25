import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import MarkdownPreview from '../../components/MarkdownPreview';

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

  const updateVotesInFirestore = (currentVotes, isUpVote, isRemove) => {
    const voters = { ...answer?.voters, [user?.username]: { username: user?.username, isUpVote } }

    if (isRemove) {
      delete voters[user?.username]
    }
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
    </div>
  )
}
