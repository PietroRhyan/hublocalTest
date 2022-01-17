import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  padding: 24px 0;
  background: #272D2D;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;

  
  img {
    width: 14em;
    min-width: 150px;

    @media (max-width: 500px){
      width: 10em;
    }
  }
  
  h3 {
    font-size: 1.2em;
    font-weight: 300;
    text-align: center;
    color: #F5F5F5;

    @media (max-width: 500px){
      font-size: 0.8em;
    }
    
  }

  @media (max-width: 500px){
    padding: 24px 2em;
  }

`;

export const MainContent = styled.div`
  background: #eef5db;
  width: 100%;
  padding: 50px 10em;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  flex-wrap: wrap;

  .contentBox {
    display: flex;
    flex-direction: column;
  }

  .primary {
    width: 300px;

    ol {
      list-style: none;
      counter-reset: li;
    }

    li::before {
      content: counter(li) ".  ";
      color: #0385FD;
      font-size: 1.2em;

      @media (max-width: 500px){
        font-size: 0.7em;
      }
    }

    li {
      line-height: 20px;
      font-size: 1em;
      font-weight: 300;
      margin-bottom: 15px;
      text-align: justify;
      counter-increment: li;
      flex-wrap: wrap;

      @media (max-width: 500px){
        line-height: 18px;
        font-size: 0.6em;
        margin-bottom: 12px;
      }

      strong {
        background: #0385FD;
        font-weight: 400;
      }
    }

    li:last-child {
      margin-bottom: 0;
    }
  }

  .formBox {
    width: 280px;
    background: #F5F5F5;
    box-shadow: 4px 4px 8px rgba(120, 120, 120, 0.3);
    border-radius: 10px;
    overflow: hidden;
    display: flex;
    flex-direction: column;

    @media (max-width: 500px){
      width: 200px;
    }


    div {
      background: #0285FD;
      padding: 12px 12px;


      h4 {
        text-align: center;
        font-size: 0.9em;
        color: #F5F5F5;
        font-weight: 300;

        @media (max-width: 500px){
          font-size: 0.6em;
        }
      }
    }

    form {
      display: flex;
      flex-direction: column;

      label {
        margin: 10px 0 0 12px;
        font-size: 0.7em;

        @media (max-width: 500px){
          font-size: 0.5em;
        }
      }

      input {
        border: 1px solid #888;
        border-radius: 4px;
        outline: none;
        padding: 5px 5px;
        max-width: 280px;
        margin: 4px 12px;
        font-size: 0.8em;

        @media (max-width: 500px){
          font-size: 0.5em;
        }
      }

      input[type=button] {
        margin: 40px 12px 12px 12px;
        padding: 10px 0;
        border: none;
        background: #23CE6B;
        cursor: pointer;
        transition: 200ms;

      }

      input[type=button]:hover {
        opacity: 0.8;
      }
    }
  }

  @media (max-width: 940px){
    padding: 40px 5em;
  }

  @media (max-width: 730px){
    padding: 40px 2em;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 30px;
  }
`;

export const Footer = styled.footer`
  background: #272D2D;
  padding: 20px 0 80px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;

  img {
    width: 10em;

    @media (max-width: 500px){
      width: 7em;
    }
  }

  span {
    color: #f5f5f5;
    font-weight: 300;
    font-size: 0.8em;
    text-align: center;

    @media (max-width: 500px){
      font-size: 0.5em;
    
    }

  }
`;
