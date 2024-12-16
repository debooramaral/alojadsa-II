import { Card } from "../../componentes/Card/Card";
import { Navbar } from "../../componentes/Navbar/Navbar";
import { produtos } from "../../Datas.js"; //array
import { HomeBody } from "./PaginaInicialStyled.jsx";
export default function PaginaInicial() {
    return (
        <> {/* FRAGMENT - tag vazia */}
            <Navbar />
            <HomeBody>
                {produtos.map((item, index) => (
                    <Card key={index} produtos={item} />
                ))}
            </HomeBody>
        </>
    );
}