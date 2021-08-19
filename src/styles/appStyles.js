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

export const Post = styled.div`
  background: var(--secondary-color);
  padding: 30px;
  border-radius: 15px;
  cursor: pointer;
  transition: 0.3s;
  margin-bottom: 20px;

  h3 {
    font-size: 28px;
    font-weight: 600;
  }

  p {
    font-size: 22px;
    color: var(--text-opacity-color);
    margin-top: 20px;
  }

  .bottom {
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .tags {
      display: flex;

      span {
        padding: 8px 20px;
        border-radius: 10px;
        border: 2px solid var(--accent-color);
        margin-right: 15px;
        font-size: 22px;
      }
    }

    p {
      color: var(--text-color);
      font-size: 22px;

      span {
        color: var(--accent-color);
        cursor: pointer;
        transition: 0.3s;

        &:hover {
          opacity: 0.8;
        }
      }
    }
  }
  
  @media(max-width: 915px) {
    h3 { font-size: 23px; }
    p { font-size: 20px; }

    span { font-size: 20px !important; }
    .tags { flex-direction: column; span { width: fit-content; } }
    /* .bottom { flex-direction: column; } */
  }
`

export const UserDetailsContainer = styled.div`
  width: 450px;
  background: var(--secondary-color);
  border-radius: 15px;
  padding: 30px;
  height: fit-content;

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