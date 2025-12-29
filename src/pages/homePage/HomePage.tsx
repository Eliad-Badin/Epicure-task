import { useState } from "react";
import Header from "../../components/layout/Header";
import HeroSection from "./sections/HeroSection";
import PopularRestaurantsSection from "./sections/PopularRestaurantsSection";
import SignatureDishesSection from "./sections/SignatureDishesSection";
import IconsMeaningSection from "./sections/IconMeaningSection";
import ChefOfTheWeekSection from "./sections/ChefOfTheWeekSection";
import AboutUsSection from "./sections/AboutUsSection";
import Footer from "../../components/layout/Footer";
import BagOverlay from "./sections/BagOverlay";
import SearchOverlay from "./sections/SearchOverlay";
import MobileMenu from "./sections/MobileMenu";

type Overlay = "none" | "bag" | "search";

const HomePage = () => {
  const [overlay, setOverlay] = useState<Overlay>("none");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchText, setSearchText] = useState("");

  const isSearch = overlay === "search";

  return (
    <div className="min-h-screen flex justify-center">
      <main className="w-full relative">
        <Header
          mode={isSearch ? "search" : "default"}
          onMenuClick={() => {
            setIsMenuOpen(true);
          }}
          onSearchClick={() => {
            setOverlay((prev) => (prev === "search" ? "none" : "search"));
          }}
          onBagClick={() => {
            setOverlay((prev) => (prev === "bag" ? "none" : "bag"));
          }}
          onCloseSearch={() => {
            setOverlay("none");
          }}
        />

        {isMenuOpen && <MobileMenu onClose={() => setIsMenuOpen(false)} />}

        <section className="relative">
          <HeroSection
            onSearchClick={(term) => {
                setSearchText(term);
                setOverlay("search");
            }}
          />

          {overlay === "bag" && <BagOverlay />}

          {overlay === "search" && <SearchOverlay initialQuery={searchText} />}
        </section>

        <PopularRestaurantsSection />

        <SignatureDishesSection />

        <IconsMeaningSection />

        <ChefOfTheWeekSection />

        <AboutUsSection />

        <Footer />
      </main>
    </div>
  );
};

export default HomePage;
