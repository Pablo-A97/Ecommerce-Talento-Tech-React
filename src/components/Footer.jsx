import { FaXTwitter, FaSquareFacebook } from "react-icons/fa6";
import { GrInstagram } from "react-icons/gr";
import { IoLogoYoutube } from "react-icons/io";

function Footer() {
    return (
        <footer>

            <div style={{ display: "inline-flex", width: "99%" }}>
                <p className="tituloFooter">Segui a Mundo Gamer en sus redes:</p>

                <ul className="redes">
                    <li className="redesItem"><GrInstagram /></li>
                    <li className="redesItem"><FaSquareFacebook /></li>
                    <li className="redesItem"><FaXTwitter /></li>
                    <li className="redesItem"><IoLogoYoutube /></li>
                </ul>
            </div>

            <p className="copy">&copy; 2025 - Mundo Gamer</p>
        </footer>
    );
}

export default Footer;