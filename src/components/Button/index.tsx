import styled from 'styled-components'

export const Button = styled.button`
    width: 100%;
    height: 35px;
    margin-bottom: 10px;
    padding: 10 15px;
    background-color: ${({theme}) => theme.colors.darkCaramel};
    display: flex;
    place-content: center center;
    place-items: center center;
    justify-content: space-around;

    
    transition: color 225ms ease-in-out, background-color 225ms ease-in-out;
    
    font-family: 'Lato', sans-serif;
    font-size: 18px;
    font-variant: small-caps;
    text-transform: capitalize;
    
    border-radius:  ${({ theme }) => theme.colors.borderRadius};
    border: 1px solid ${({ theme }) => theme.colors.caramel};
    border-top: none;

    &:focus {
        outline: none;
    }

    &:hover:enabled {
        background-color: ${({theme}) => theme.colors.yellow};
        color: #222;
    }

    &:disabled {
        background-color: ${({theme}) => theme.colors.darkGray};
        cursor: not-allowed;
    }
`

export default Button