import React from 'react';
import AuthWrapper from '../components/auth/AuthWrapper';
import stethoscope from '../assets/stethoscope.svg';
import { useHistory } from 'react-router-dom';
import { Container, Main } from '../styles/homeStyles';

export default function Home() {
  const history = useHistory();

  return (
    <AuthWrapper authenticationRequired={false}>
      <Container>
        <Main>
          <div>
            <h1>
              Lets, <br />
              Take control of <span>your health</span>, <br />
              <span>Together</span> !!
            </h1>
            <button onClick={() => history.push('/login')}>Get Started</button>
          </div>
          <img src={stethoscope} alt="stethoscope" />
        </Main>
      </Container>
    </AuthWrapper>
  )
}
