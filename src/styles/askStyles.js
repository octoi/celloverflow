import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 30px;

  h2 {
    font-size: 25px;
    margin-bottom: 30px;
  }

  .input {
    margin-bottom: 20px;

    h3 {
      margin-bottom: 10px;
    }
  }

  h3 {
    font-size: 22px;
    color: var(--text-opacity-color);
  }

  input {
    margin-top: 10px;
    width: 100%;
    background: var(--secondary-color);
    padding: 20px;
    border-radius: 12px;
    font-size: 20px;
  }
  
  textarea {
    margin-top: 20px;
    width: 100%;
    background: var(--secondary-color);
    color: #fff;
    padding: 20px;
    font-size: 22px;
    border-radius: 12px;
  }
`