import styled from 'styled-components';

export const TitleWrapper = styled.div`
  width: 25%;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  padding-left: 15px;

  h1 {
    color: whitesmoke;
    font-size: calc(20px + 2vw); // min-size is 20px when screen size is reduced
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    font-weight: bold;
    font-style: italic;
  }

  h3 {
    color: whitesmoke;
  }
`;
