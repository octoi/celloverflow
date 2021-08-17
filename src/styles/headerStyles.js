import styled from 'styled-components';

export const HeaderContainer = styled.div `
  display: flex;
  align-items: center;
  justify-content: space-between;

  /* hiding & displaying logos accordingly  */
  img { width: 200px; }

  .logo-icon { display: none; }  

  @media (max-width: 800px) {

    .logo-icon { display: block; }
    .logo-text { display: none; }
    img { width: 40px; }
    
  }
`