import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 30px;
`

export const PostContainer = styled.div`
  flex: 2;
`

export const UserDetailsContainer = styled.div`
  width: 400px;
  background: var(--secondary-color);
  border-radius: 10px;
  padding: 20px;

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
`