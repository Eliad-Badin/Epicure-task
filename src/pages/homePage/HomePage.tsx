import Header from "../../components/layout/Header";
import HeroSection from "./sections/HeroSection";
import PopularRestaurantsSection from "./sections/PopularRestaurantsSection";
import SignatureDishesSection from "./sections/SignatureDishesSection";
import IconsMeaningSection from "./sections/IconMeaningSection";
import ChefOfTheWeekSection from "./sections/ChefOfTheWeekSection";
import AboutUsSection from "./sections/AboutUsSection";
import Footer from "../../components/layout/Footer";


const HomePage = () => {
    return (
        <div className="min-h-screen flex justify-center">
            <main className="w-full">
                <Header
                    onMenuClick={() => {console.log("menu pressed")}}
                    onSearchClick={() => {console.log("search clicked")}}
                    onBagClick={() => {console.log("bag clicked")}}
                />

                <HeroSection onSearchClick={() => {console.log("hero search clicked")}} />

                <PopularRestaurantsSection />

                <SignatureDishesSection />

                <IconsMeaningSection />

                <ChefOfTheWeekSection />

                <AboutUsSection />

                <Footer />
            </main>
        </div>
    )
}

export default HomePage;