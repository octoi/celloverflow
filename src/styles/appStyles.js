import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 30px;
`

export const PostContainer = styled.div`
  width: 100%;
  margin-right: 20px;

  @media (max-width: 1446px) {
    margin-right: 0px;
  }
`

export const UserDetailsContainer = styled.div`
  width: 450px;
  background: var(--secondary-color);
  border-radius: 10px;
  padding: 30px;

  .profile {
    display: flex;
    align-items: center;

    img {
      width: 73px;
      height: 73px;
      border-radius: 50%;
      border: 3px solid var(--accent-color);
    }

    div {
      display: flex;
      flex-direction: column;
      margin-left: 10px;
    }

    h2 {
      font-size: 25px;
      font-weight: 600;
    }

    h3 {
      color: var(--text-opacity-color);
      font-size: 20px;
    }
  }

  button {
    width: 100%;
    margin-top: 30px;
    background: var(--accent-color);
    border-radius: 8px;
    height: 50px;
    font-size: 20px;
    transition: 0.3s;

    &:hover {
      opacity: 0.5;
    }
  }

  @media (max-width: 1446px) {
    display: none;
  }
`