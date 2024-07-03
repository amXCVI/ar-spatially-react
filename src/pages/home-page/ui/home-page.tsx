import { SectionLayout } from "@/shared/ui/layouts";

import { OurVisionSection } from "./sections/our-vision-section";
import { StartSection } from "./sections/start-section";

const HomePage = () => {
    return (
        <SectionLayout className="overflow-x-hidden">
            <StartSection />
            <OurVisionSection />
        </SectionLayout>
    );
};

export default HomePage;
