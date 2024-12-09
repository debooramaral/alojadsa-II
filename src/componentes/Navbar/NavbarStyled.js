import styled from 'styled-components'

export const Nav = styled.nav` //estilo da video aula
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 100%;
    padding: 1rem;
    background-color: #fff;
    z-index: 1;
    box-shadow: rgba(17, 17, 26, 0.1) 0px 1px 0px;
`;

export const ImageLogo = styled.img` //estilo da video aula
    width: 15rem;
    height: 4rem;
    object-fit: cover;
    cursor: pointer;
`;

export const IconeMenu = styled.div`
    width: 5%;
    height: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    
    i{
        top: 1;
        z-index: 1;
        padding: 0.5rem;
        color: black;
    }
`;

export const InicioPesquisaSacola = styled.div`
    width: 80%;
    height: 3rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    cursor: pointer;
    
    i{
        top: 1;
        z-index: 1;
        padding: 0.5rem;
        color: black;
    }
`;

export const Pesquisa = styled.div` //estilo da video aula
    position: relative;
    display: flex;
    align-items: center;

    ::placeholder{
        color: gray;
        text-align: center;
    }

    i{
        position: absolute;
        top: 1;
        right: 0%.2rem;
        z-index: 10;
        border: none;
        color: black;
        border-radius: 0%.3rem;
        padding: 0.5rem;
    }

    input{
        outline: none;
        font-size: 1rem;
        padding: 0.6rem;
        border: 1px solid gray;
        width: 100%;
        border-radius: 0.3rem;
        text-align: right;
        font-family: Verdana;

        :focus{
            border: 1px solid mediumpurple;
        }
    }

`;

export const Button = styled.button`
    color: gray;
    border: none;
    cursor: pointer;
    outline: none;
    font-family: Verdana;
    font-size: 15px;
    text-transform: uppercase;
`;