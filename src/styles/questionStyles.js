import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 30px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const QuestionAndAnswerWrapper = styled.div`
  width: 100%;

  @media (max-width: 1446px) {
    margin-right: 0px;
  }
`

export const QuestionPart = styled.div`
  width: 100%;

  h1 {
    font-size: 30px;
  }

  .tags {
    display: flex;
    margin-top: 40px;
    max-width: 100%;
    overflow-x: scroll;

    span {
      border-radius: 10px;
      border: 2px solid var(--accent-color);
      margin-right: 15px;
      padding: 8px 20px;
      font-size: 22px;
      white-space: nowrap;
    }
  }

  h2 {
    margin-top: 30px;
    font-size: 25px;
  }

  .question {
    background: var(--secondary-color);
    padding: 30px;
    border-radius: 20px;
    margin-top: 30px;
  }

  .description-vote { 
    display: flex;
    align-items: start;

    .description { 
      margin-left: 20px;
      font-size: 22px;
    }
  }

  .vote {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    p {
      font-size: 22px;
      margin: 5px 0px;
    }

    button {
      width: 35px;
      height: 35px;
      transition: 0.5s ease;

      &:hover {
        opacity: 0.8;
      }
    }
  }

  .utils {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 30px;
    font-size: 22px;
    
    p { 
      margin-right: 10px; 
      cursor: pointer;
      transition: 0.3s;

      &:hover {
        opacity: 0.8;
      }
    }

    div {
      display: flex;

      i {
        cursor: pointer;
        margin-right: 15px;
      }
      
      .share { 
        color: var(--accent-color); 
      }
      
      .delete { 
        font-weight: 400;
        color: var(--error-color); 
      }
    }

    p {
      .cool {
        color: var(--accent-color);
      }
    }

    @media(max-width: 450px) {
      .hide {
        display: none;
      }
    }
  }
`

export const MarkdownContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;

  .preview {
    width: 50%;
  }

  .utils {
    display: none;
  }

  textarea {
    width: 50%;
    height: 100%;
    border-right: 1px solid var(--primary-color);
    resize: none;
    font-size: 22px;
    margin-right: 20px;
  }
  
  @media (max-width: 1113px) {
    flex-direction: column;

    .preview {
      display: none;
    }

    .utils {
      display: block;
      margin: 20px 0px;
    }

    textarea {
      width: 100%;
      border: none;
      margin-right: 0px;
    }
  }
`

export const AnswerContainer = styled.div`
  margin-top: 30px;

  h2 {
    font-size: 22px;
  }

  .nop {
    font-size: 18px;
    color: var(--text-opacity-color);
    margin-top: 10px;
  }

  .answer {
    background: var(--secondary-color);
    padding: 30px;
    border-radius: 20px;
    margin-top: 30px;
  }

  .description-vote { 
    display: flex;
    align-items: start;
    width: 96%;

    .markdown { 
      width: 100%;
      margin-left: 20px;
      font-size: 22px;
    }
  }

  .vote {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    p {
      font-size: 22px;
      margin: 5px 0px;
    }

    button {
      width: 35px;
      height: 35px;
      transition: 0.5s ease;

      &:hover {
        opacity: 0.8;
      }
    }
  }

  .utils {
    display: flex;
    justify-content: space-between;
    margin-top: 30px;
    font-size: 22px;
    
    p { 
      margin-right: 10px; 
      cursor: pointer;
      transition: 0.3s;

      &:hover {
        opacity: 0.8;
      }
    }

    div {
      display: flex;

      i {
        cursor: pointer;
        margin-right: 15px;
      }
      
      .share { 
        color: var(--accent-color); 
      }
      
      .delete { 
        font-weight: 400;
        color: var(--error-color); 
      } 
    }

    p {
      .cool {
        color: var(--accent-color);
      }
    }

    @media(max-width: 450px) {
      .hide { 
        display: none;
      }
    }
  }

  @media(max-width: 750px) {
    .markdown {
      margin-left: 10px !important;
      overflow-x: scroll;
    }
  }
`
