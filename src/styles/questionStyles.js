import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const QuestionAndAnswerWrapper = styled.div`
  width: 100%;
  margin-right: 20px;

  @media (max-width: 1446px) {
    margin-right: 0px;
  }
`

export const ParticipantsWrapper = styled.div`
  width: 480px;
  background: var(--secondary-color);
  border-radius: 25px;
  padding: 40px;
  height: fit-content;

  @media (max-width: 1446px) {
    display: none;
  }
`