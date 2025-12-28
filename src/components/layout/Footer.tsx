import { Link } from "react-router-dom";
import { CONTECT_US, TERM_OF_USE, PRIVACY_POLICY } from "../../utils/Strings";


const Footer = () => {
    const footerLinks = [
        {label: CONTECT_US, to: "/contact"},
        {label: TERM_OF_USE, to:"/terms"},
        {label: PRIVACY_POLICY, to:"/privacy"}
    ]
    return(
        <section className="flex flex-col place-items-start px-4 my-4 gap-[40px] text-[18px] font-thin tracking-[1.92px] md:flex-row md:justify-center">
            
            {footerLinks.map((link) => (
                <Link
                    key={link.to}
                    to={link.to}
                    className="hover:underline"
                    >
                    {link.label}
                </Link>
            ))}
            
        </section>
    );
}

export default Footer;