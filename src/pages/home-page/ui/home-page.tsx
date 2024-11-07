import { ContactSection } from "@/features/contact-section";
import { Footer } from "@/features/footer";

import { useDescription, useTitle } from "@/shared/lib/use-page-meta-hooks";

import { GetStartedSection } from "./sections/get-started-section";
import { OurVisionSection } from "./sections/our-vision-section";
import { StartSection } from "./sections/start-section";

const HomePage = () => {
    useTitle("AR Spatially - Home");

    useDescription(
        "Unique AR platform where digital meets. Dive into immersive experiences, engage with 3D AR objects, and explore geolocation-based interactions.",
    );

    return (
        <div className="overflow-x-hidden">
            {/* <Helmet>
                <title>AR Spatially home page</title>
            </Helmet> */}

            <StartSection />
            <OurVisionSection />
            <GetStartedSection />
            <ContactSection />
            <Footer />
        </div>
    );
};

export default HomePage;
