import { ContactSection } from "@/features/contact-section";
import { Footer } from "@/features/footer";

import { useTitle } from "@/shared/lib/use-page-meta-hooks";

import { GetStartedSection } from "./sections/get-started-section";
import { OurVisionSection } from "./sections/our-vision-section";
import { StartSection } from "./sections/start-section";

const HomePage = () => {
    useTitle("AR Spatially - Home");

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
