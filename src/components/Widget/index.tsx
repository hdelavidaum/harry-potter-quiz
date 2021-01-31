import styled, { StyledComponentBase, keyframes, css } from 'styled-components';

interface IWidget extends StyledComponentBase<any, {}> {
  Content?: any;
  Header?: any;
  nameForm?: boolean;
  quizesDaGalera?: boolean;
}


const bottomUp = keyframes`
  0% {
    transform: translateY(100px);
    opacity: 0;
  }

  100% {
    transform: translateY(0);
    opacity: .9;
  }
`

const show = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: .9;
  }
`

const Widget: IWidget = styled.div`
  margin-top: 16px;
  margin-bottom: 16px;
  border: 1px solid ${({ theme }) => theme.colors.caramel};
  background-color: ${({ theme }) => {
    return theme.colors.darkRed;
  }};
  border-radius: 6px;
  overflow: hidden;
  
  ${({nameForm}) =>
    nameForm && 
    css `
      animation: ${bottomUp} 750ms ease-in-out;
    `
  }

  ${({quizesDaGalera}) =>
      quizesDaGalera && 
      css `
        animation: ${show} 1050ms ease-in-out;
        /* animation-delay: 500ms; */
      `
    }

  opacity: .9;

  h1, h2, h3 {
    font-size: 16px;
    font-weight: 700;
    line-height: 1;
    margin-bottom: 0;
  }
  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 1;
  }
`;

Widget.Header = styled.header`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 18px 32px;
  background-color: ${({ theme }) => theme.colors.darkerRed};
  
  * {
    margin: 0;
  }
`;

Widget.Content = styled.div`
  padding: 24px 32px 32px 32px;

  & > *:first-child {
    margin-top: 0;
  }
  & > *:last-child {
    margin-bottom: 0;
  }
  ul {
    list-style: none;
    padding: 0;
  }
`;

export default Widget;