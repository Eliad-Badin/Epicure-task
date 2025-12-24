import epicureLogo from "../../../assets/icons/about-logo.svg";
import appStoreBadge from "../../../assets/icons/app-store.png";
import googlePlayBadge from "../../../assets/icons/google-play.png"; 
import { ABOUT_US, ABOUT_TEXT, ABOUT_TEXT_2 } from "../../../utils/Strings";

const storesLogosDisplay = () => {
    return (
        <div
            className="
              mt-6 flex flex-col gap-[16px]
              md:mt-6 md:flex-row md:gap-4
            "
          >
            <button type="button" aria-label="Download on the App Store">
              <img
                src={appStoreBadge}
                alt="Download on the App Store"
                className="h-[36px] md:h-[40px]"
              />
            </button>

            <button type="button" aria-label="Get it on Google Play">
              <img
                src={googlePlayBadge}
                alt="Get it on Google Play"
                className="h-[36px] md:h-[40px]"
              />
            </button>
          </div>
    );
}

const epicureLogoDisplay = () => {
    return(
        <div className="flex md:items-end md:w-[40%]">
          <img
            src={epicureLogo}
            alt="Epicure logo"
            className="h-[95px] w-auto md:h-[120px]"
          />
        </div>
    );
}

const AboutUsSection = () => {
  return (
    <section className="bg-[#FAFAFA] pt-10 px-4 md:py-16 md:px-8 md:flex md:flex-row">
        <div className="flex flex-col md:hidden ">
            <div>
                {epicureLogoDisplay()}
            </div>
            <div>
                {storesLogosDisplay()}
            </div>
        </div>
        <div
            className="
            mx-auto w-full py-3 max-w-[375px] md:max-w-[1120px] md:px-8
            flex flex-col-reverse items-center gap-10
            md:flex-row md:items-center md:justify-between md:gap-16
            "
        >
        <div className="w-full md:w-[60%]">
          <h2 className="font-thin font-200 text-[18px]/[35px] tracking-[1.25px]">
            {ABOUT_US}
          </h2>

          <p className="mt-2 font-thin font-200 text-[18px]/[28px] tracking-[2.14px]">
            {ABOUT_TEXT}
          </p>

          <p className="mt-3 font-thin font-200 text-[18px]/[28px] tracking-[2.14px]">
            {ABOUT_TEXT_2}
          </p>
          <div className="hidden md:flex">
                {storesLogosDisplay()}
          </div>
        </div>
      </div>
      <div className="hidden md:flex w-[20%] justify-center my-auto">
        {epicureLogoDisplay()}
      </div>
    </section>
  );
};

export default AboutUsSection;
