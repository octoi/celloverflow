import React from 'react';
import AuthWrapper from '../components/auth/AuthWrapper';
import stethoscope from '../assets/stethoscope.svg';
import { useHistory } from 'react-router-dom';
import { Container, Main, Content } from '../styles/homeStyles';

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
        <Content>
          <h2>CellOverflow, what ??</h2>
          <p>
            <span>CellOverflow</span> is an online community to ask questions about
            your health issues . You can ask questions or help others by answer their questions .
            Its basically <span>StackOverflow</span> but for health care 😉
          </p>
          <button onClick={() => history.push('/page/guilty')}>Give me a guilty feeling</button>
        </Content>
      </Container>
    </AuthWrapper>
  )
}
