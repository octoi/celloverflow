import React, { useState } from 'react';
import AuthWrapper from '../components/auth/AuthWrapper';
import { Container } from '../styles/askStyles';

export default function Ask() {
  const [title, setTitle] = useState('');

  return (
    <AuthWrapper authenticationRequired={true}>
      <Container>
        <h2>Ask your health problems 🧑‍⚕️</h2>
        <div className='input'>
          <h3>Title ({title.length} / 100)</h3>
          <input
            placeholder='I got headache :('
            value={title}
            onChange={(e) => {
              if (e.target.value.length > 100) return;
              setTitle(e.target.value);
            }}
          />
        </div>
      </Container>
    </AuthWrapper>
  )
}
