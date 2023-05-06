import Suggestions from "./suggestions";
import User from "./user";


export default function Sidebar() {
    return (
        <div className="sidebar">
            <User />
            <Suggestions />

            <div className="links">
                Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes •
                Hashtags • Idioma
            </div>

            <div className="copyright">
                © 2021 INSTAGRAM DO FACEBOOK
            </div>
        </div>
    );
}