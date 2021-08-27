import styled from 'styled-components';

export const Container = styled.div`
  margin: 150px 50px;

  @media (max-width: 1300px) {
    margin: 100px 30px;
  }

  @media(max-width: 570px) {
    margin: 50px 10px;
  }

  margin-bottom: 30px !important;
`

export const Main = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    font-size: 80px;
    font-weight: 500;

    span {
      color: var(--accent-color);
      font-weight: 700;
    }
  }

  button {
    margin-top: 30px;
    padding: 15px 35px;
    border: 2px solid var(--accent-color);
    color: var(--accent-color);
    border-radius: 15px;
    font-size: 22px;
    transition: 0.3s;

    &:hover {
      background: var(--accent-color);
      color: var(--text-color);
    }
  }

  img {
    width: 400px;
  }
  
  @media (max-width: 1300px) {
    h1 {
      font-size: 60px;
    }
    
    img {
      width: 250px;
    }
  }
 
  @media (max-width: 1000px) {
    img {
      display: none;
    }
  }

  @media(max-width: 570px) {
    h1 {
      font-size: 40px;
    }
  }
`

export const Content = styled.div`
  margin-top: 250px;

  h2 {
    font-size: 40px;
  }

  p {
    font-size: 30px;
    margin-top: 30px;

    span {
      color: var(--accent-color);
      font-weight: 600;
      cursor: pointer;
    }
  }

  button {
    margin-top: 30px;
    padding: 15px 35px;
    border: 2px solid var(--accent-color);
    color: var(--accent-color);
    border-radius: 15px;
    font-size: 22px;
    transition: 0.3s;

    &:hover {
      background: var(--accent-color);
      color: var(--text-color);
    }
  }

  @media(max-width: 570px) {
    margin-top: 100px;

    h2 {
      font-size: 30px;
    }
    
    p {
      font-size: 22px;
    }
  }
`