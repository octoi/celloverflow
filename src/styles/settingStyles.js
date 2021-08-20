import styled from 'styled-components';

export const SettingContainer = styled.div`
  width: 100%;

  div {
    width: 100%;
    margin-top: 30px;

    h3 {
      font-size: 25px;
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
  }  
`;