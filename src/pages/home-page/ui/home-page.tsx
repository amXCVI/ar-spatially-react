import { Footer } from "@/features/footer";

import { SectionLayout } from "@/shared/ui/layouts";

import { ContactSection } from "./sections/contact-section";
import { GetStartedSection } from "./sections/get-started-section";
import { OurVisionSection } from "./sections/our-vision-section";
import { StartSection } from "./sections/start-section";

const HomePage = () => {
    return (
        <SectionLayout className="overflow-x-hidden flex flex-col gap-6">
            <StartSection />
            <OurVisionSection />
            <GetStartedSection />
            <ContactSection />
            <Footer />
        </SectionLayout>
    );
};

export default HomePage;
