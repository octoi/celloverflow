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

  h2 {
    font-size: 25px;
    font-weight: 600;
    margin-bottom: 20px;
  }

  .profile {
    display: flex;
    align-items: center;
    margin-top: 20px;
    cursor: pointer;

    img {
      width: 70px;
      height: 70px;
      border-radius: 50%;
      border: 3px solid var(--accent-color);
      object-fit: cover;
    }
    div {
      display: flex;
      flex-direction: column;
      margin-left: 10px;
    }

    h3 {
      font-size: 22px;
      font-weight: 600;
    }

    h4 {
      color: var(--text-opacity-color);
      font-size: 18px;
    }
  }
`