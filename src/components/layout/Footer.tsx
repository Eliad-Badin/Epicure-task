import { CONTECT_US, TERM_OF_USE, PRIVACY_POLICY } from "../../utils/Strings";

const Footer = () => {
    return(
        <section className="flex flex-col place-items-start px-4 mt-4 gap-[40px] text-[18px] font-thin font-200 tracking-[1.92px] md:flex-row md:justify-center">
            
                <button>
                    {CONTECT_US}
                </button>

                <button>
                    {TERM_OF_USE}
                </button>

                <button>
                    {PRIVACY_POLICY}
                </button>
            
        </section>
    );
}

export default Footer;