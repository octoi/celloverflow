import styled from 'styled-components';

export const Container = styled.div`
  margin: 150px 50px;

  @media (max-width: 1300px) {
    margin: 100px 30px;
  }

  @media(max-width: 570px) {
    margin: 50px 10px;
  }
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