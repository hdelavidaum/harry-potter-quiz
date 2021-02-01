import styled, { keyframes, css } from 'styled-components';

import { IWidget } from '../../types'

const bottomUp = keyframes`
  0% {
    transform: translateY(100px);
    opacity: 0;
  }

  100% {
    transform: translateY(0);
    opacity: 1;
  }
`

const show = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`

const Widget: IWidget  = styled.div`
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
      `
    }


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

Widget.Content = styled.div<IWidget>`
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

  ${({loader}) => 
    loader &&
    css`
      display: flex;
      justify-content: center;
      place-content: center center;
    `
  }
`;

Widget.Image = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
`

Widget.Topic = styled.a`
  outline: 0;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.contrastText};
  background-color: ${({ theme }) => `${theme.colors.primary}40`};
  padding: 10px 15px;
  margin-bottom: 8px;
  cursor: pointer;
  border-radius: ${({ theme }) => theme.borderRadius};
  transition: .3s;
  display: block;

  &:hover,
  &:focus {
    opacity: .5;
  }
`;

export default Widget;