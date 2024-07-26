import logo from "../../images/LOGO_LOJA_ONLINE-removebg-preview.png";
import "./Navbar.css"

export function Navbar() {
    return (
        <>
            <nav>
                <img src={logo} alt="Logo da loja DSA" />

                <div className="iconemenu">
                    <ul><i className="bi bi-list"></i>
                        {/* <li><a href="#"><i>Perfil</i></a></li>
                        <li><a href="#"><i>Pagamento</i></a></li>
                        <li><a href="#"><i>Rastrear</i></a></li>
                        <li><a href="#"><i>Agenda</i></a></li> */}
                    </ul>
                </div>

                <div className="inicio-pesquisa-sacola">
                    <i className="bi bi-house"><a href="#"></a></i>
                    <i className="bi bi-search"></i>
                    {/* <input type="text" placeholder="Pesquise o Produto" /> */}
                    <i className="bi bi-bag"></i>
                </div>
            </nav>
        </>
    );
}