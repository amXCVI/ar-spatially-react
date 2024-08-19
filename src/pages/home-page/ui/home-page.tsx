import { Footer } from "@/features/footer";

import { ContactSection } from "./sections/contact-section";
import { GetStartedSection } from "./sections/get-started-section";
import { OurVisionSection } from "./sections/our-vision-section";
import { StartSection } from "./sections/start-section";

const HomePage = () => {
    return (
        <div className="overflow-x-hidden">
            <StartSection />
            <OurVisionSection />
            <GetStartedSection />
            <ContactSection />
            <Footer />
        </div>
    );
};

export default HomePage;
