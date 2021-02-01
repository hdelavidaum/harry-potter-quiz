import styled, { css, keyframes} from 'styled-components'

const show = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`

// src/components/Footer/index.js
const FooterWrapper = styled.footer<IFooter>`
  background-color: #00000070;
  margin-top: 24px;
  padding: 20px;
  display: flex;
  align-items: center;
  border-radius: 4px; 

  ${({quizesDaGalera}) =>
      quizesDaGalera && 
      css `
        animation: ${show} 1050ms ease-in-out;
        /* animation-delay: 500ms; */
      `
  }

  img {
    width: 58px;
    margin-right: 23px;
  }
  p {
    font-weight: 300;
  }
  a {
    color: white;
    text-decoration: none;
    transition: .3s;
    &:hover,
    &:focus {
      opacity: .5;
    }
    span {
      text-decoration: underline;
    }
  }
`;

export default function Footer(props: any) {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <FooterWrapper {...props}>
      <a href="https://www.alura.com.br/">
        <img src="https://www.alura.com.br/assets/img/alura-logo-white.1570550707.svg" alt="Logo Alura" />
      </a>
      <p>
        Proudly created at{' '}
        <a href="https://www.alura.com.br/">
          <span style={{fontStyle: 'italic'}}lang="pt-BR">Imersão React da Alura</span>
        </a>
      </p>
    </FooterWrapper>
  );
}