import React, { useState } from 'react';
import AuthWrapper from '../components/auth/AuthWrapper';
import MarkdownPreview from '../components/MarkdownPreview';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Container } from '../styles/askStyles';
import { ButtonContainer } from '../styles/settingStyles';
import { Spinner, useToast } from '@chakra-ui/react';
import { saveQuestionToFirestore } from '../firebase/helpers/questionHelper';

export default function Ask() {
  const [title, setTitle] = useState('');
  const [tags, setTags] = useState([]);
  const [description, setDescription] = useState('');
  const [body, setBody] = useState('');

  const [tagInputValue, setTagInputValue] = useState('');
  const [isMarkdownPreview, setIsMarkdownPreview] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const history = useHistory();
  const showToast = useToast();
  const user = useSelector(state => state.user?.user);

  const isNotEmpty = (str) => str.trim().length !== 0;
  const canAskQuestion = isNotEmpty(title) && isNotEmpty(description) && isNotEmpty(body) && tags.length !== 0;

  const askQuestion = () => {
    setIsLoading(true);
    saveQuestionToFirestore({
      title,
      description,
      tags,
      body,
      user: user?.email,
    }).then(() => {
      setIsLoading(false);
      showToast({
        title: 'Created question successfully 🥳',
        duration: 3000,
        isClosable: true,
        position: 'top-right',
        status: 'success',
      });
      history.push('/app');
    }).catch((err) => {
      console.log(err);
      showToast({
        title: 'Failed to create ask question 🤐',
        duration: 3000,
        isClosable: true,
        position: 'top-right',
        status: 'error',
      });
    })
  }

  return (
    <AuthWrapper authenticationRequired={true}>
      <Container>
        <h2>Ask your health problems 🧑‍⚕️</h2>
        <div className='input'>
          <h3>Title ( {title.length} / 100 )</h3>
          <input
            placeholder='I got headache :('
            value={title}
            onChange={(e) => {
              if (e.target.value.length > 100) return;
              setTitle(e.target.value);
            }}
          />
        </div>
        <div className='input'>
          <h3>Tags ( separate tag by a , )</h3>
          {tags.length > 0 && <div className='tags'>
            {tags.map(tag => <span>{tag}</span>)}
          </div>}
          <input
            placeholder='Fever, Cold'
            value={tagInputValue}
            onChange={(e) => {
              let inputVal = e.target.value;
              let tagsFromValue = inputVal.split(',').filter(tag => tag.trim().length !== 0);
              setTagInputValue(inputVal);
              setTags(tagsFromValue)
            }}
          />
        </div>
        <div className='input'>
          <h3>Short Description ( {description.length} / 250 )</h3>
          <textarea
            placeholder='Short explanation of your problem'
            value={description}
            style={{ resize: 'none' }}
            onChange={(e) => {
              if (e.target.value.length > 250) return;
              setDescription(e.target.value);
            }}
          />
        </div>
        <div className='input markdown-edit'>
          <h3>Explain your problem ✍️ (Markdown supported)</h3>
          <button
            onClick={() => setIsMarkdownPreview(!isMarkdownPreview)}
            style={{ background: isMarkdownPreview ? 'var(--accent-color)' : 'var(--secondary-color)' }}
          >Show Preview</button>
          {isMarkdownPreview ? <MarkdownPreview markdown={body} /> : <textarea
            placeholder='Yesterday 12.00 PM when i was doing my work i got rick rolled'
            rows="20"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />}
        </div>
        <ButtonContainer>
          <ButtonContainer>
            <button
              onClick={askQuestion}
              style={isLoading || !canAskQuestion ? {
                opacity: '0.5',
                cursor: 'not-allowed',
              } : {}}
            >{isLoading ? <Spinner /> : 'Ask'}
            </button>
            <button
              onClick={() => history.push('/app')}
              style={isLoading ? {
                background: 'var(--error-color)',
                marginLeft: '10px',
                opacity: '0.5',
                cursor: 'not-allowed',
              } : {
                background: 'var(--error-color)',
                marginLeft: '10px',
              }}
              disabled={isLoading}
            >Cancel</button>
          </ButtonContainer>
        </ButtonContainer>
      </Container>
    </AuthWrapper>
  )
}
