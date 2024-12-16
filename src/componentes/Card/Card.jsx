import { CardBody, CardContainer } from "./CardStyled";

export function Card({ produtos }) {
    return (
        <CardContainer>
            <CardBody>
                <img src={produtos.image} alt="Produto" />
                <h4>{produtos.nome}</h4>
                <h1>{produtos.preço}</h1>
                <p className="descricao">{produtos.descriçao}</p>
                <span>{produtos.tipo}</span>
                <p>
                    <button>Compre <i className="bi bi-cash"></i></button>
                </p>
            </CardBody>
        </CardContainer>
    );
}