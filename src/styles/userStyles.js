import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 30px;

  @media (max-width: 1446px) {
    flex-direction: column-reverse;

    .profile-hide {
      margin-bottom: 30px;
      width: 100%;
    }
  }
`