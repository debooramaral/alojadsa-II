import styled from "styled-components";

export const CardContainer = styled.section`
    display: flex;
    width: 100%;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
    border-radius: 1rem;

    h1{
        color: rebeccapurple;
    }
    span{
        color: mediumpurple ;
    }
    .descricao{
        color: dimgrey;
    }

    button{
        cursor: pointer;
        width: 10rem;
        height: 2rem;
        border-radius: 1rem;
        border-style: none;
        background-color: purple;
        color: white;
        font-size: 20px;
    }

`
export const CardBody = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2%;
    border-radius: 3rem;
    gap: 5px;
    
    img{
        width: 90%;
        object-fit: cover;
        object-position: center;
        border-radius: 1rem;
    }
`