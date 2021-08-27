import React from 'react';
import AuthWrapper from '../components/auth/AuthWrapper';
import stethoscope from '../assets/stethoscope.svg';
import { Container, Main } from '../styles/homeStyles';

export default function Home() {
  return (
    <AuthWrapper authenticationRequired={false}>
      <Container>
        <Main>
          <h1>
            Lets, <br />
            Take control of <span>your health</span>, <br />
            <span>Together</span> !!
          </h1>
          <img src={stethoscope} alt="stethoscope" />
        </Main>
      </Container>
    </AuthWrapper>
  )
}
