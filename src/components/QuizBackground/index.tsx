// src/components/QuizBackground/index.js
import styled from 'styled-components';


const QuizBackground = styled.div<{ backgroundImage?: string }>`
  width: 100%;
  background-size: cover;
  background-position: center;
  background-image: url(${({ backgroundImage }: any) => backgroundImage});
  background-color: ${({ theme }: any) => theme.colors.mainBg};
  flex: 1;
  
  @media screen and (max-width: 500px) {
    background-image: none;
    &:after {
        content: "";
        background-size: cover;
        background-position: center;
        background-image:
            linear-gradient(transparent, ${({ theme }: any) => theme.colors.mainBg}),
            url(${({ backgroundImage }: any) => backgroundImage});
        display: block;
        width: 100;
        height: 100vh;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        z-index: 1;
    }
    *:first-child {
      position: relative;
      z-index: 10;
    }
  }
`;

export default QuizBackground;