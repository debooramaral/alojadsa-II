import logo from "../../images/LOGO_LOJA_ONLINE-removebg-preview.png";
import { Button, IconeMenu, ImageLogo, InicioPesquisaSacola, Nav, Pesquisa } from "./NavbarStyled";

export function Navbar() {
    return (
        <>
            <Nav>
                <ImageLogo src={logo} alt="Logo da loja DSA" />

                <IconeMenu className="iconemenu">
                    <ul><i className="bi bi-menu-button-wide"></i>
                        {/* <li><a href="#"><i>Perfil</i></a></li>
                        <li><a href="#"><i>Pagamento</i></a></li>
                        <li><a href="#"><i>Rastrear</i></a></li>
                        <li><a href="#"><i>Agenda</i></a></li> */}
                    </ul>
                </IconeMenu>

                <InicioPesquisaSacola className="inicio-pesquisa-sacola">
                    <i className="bi bi-house"><a href="#"></a></i>
                    <Pesquisa>
                        <i className="bi bi-search"></i>
                        <input type="text" placeholder="Pesquisar"/>
                    </Pesquisa>
                    <i className="bi bi-bag"></i>
                </InicioPesquisaSacola>

                <Button>Entrar</Button>
            </Nav>

            <></>
        </>
    );
}

