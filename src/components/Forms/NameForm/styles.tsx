import styled from 'styled-components'

export const Input = styled.input`
    width: 100%;
    height: 35px;
    margin-top: 10px;
    padding: 0 15px;
    background-color: #ddd;
    
    font-family: 'Lato', sans-serif;
    font-size: 18px;
    text-align: center;
    
    border-radius: 10px 10px 0 0;
    border: 1px solid ${({ theme }) => theme.colors.caramel};
    border-bottom: 1px solid #999;

    &:focus{
        outline: none;
    }
`

export const Button = styled.button`
    width: 100%;
    height: 35px;
    margin-bottom: 10px;
    padding: 0 15px;
    background-color: ${({theme}) => theme.colors.darkCaramel};
    
    transition: background-color 180ms ease-in-out;
    
    font-family: 'Lato', sans-serif;
    font-size: 18px;
    font-variant: small-caps;
    text-transform: capitalize;
    
    border-radius:  0 0 10px 10px;
    border: 1px solid ${({ theme }) => theme.colors.caramel};
    border-top: none;

    &:focus {
        outline: none;
    }

    &:hover {
        background-color: ${({theme}) => theme.colors.yellow};
        color: #222;
    }
`