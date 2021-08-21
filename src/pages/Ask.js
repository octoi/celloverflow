import React, { useState } from 'react';
import AuthWrapper from '../components/auth/AuthWrapper';
import { Container } from '../styles/askStyles';

export default function Ask() {
  const [title, setTitle] = useState('');
  const [tagInputValue, setTagInputValue] = useState('');
  const [tags, setTags] = useState([]);
  const [description, setDescription] = useState('');

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
            onChange={(e) => {
              if (e.target.value.length > 250) return;
              setDescription(e.target.value);
            }}
          />
        </div>
      </Container>
    </AuthWrapper>
  )
}
