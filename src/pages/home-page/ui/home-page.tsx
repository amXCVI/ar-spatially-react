import { SectionLayout } from "@/shared/ui/layouts";

import { GetStartedSection } from "./sections/get-started-section";
import { OurVisionSection } from "./sections/our-vision-section";
import { StartSection } from "./sections/start-section";

const HomePage = () => {
    return (
        <SectionLayout className="overflow-x-hidden flex flex-col gap-5">
            <StartSection />
            <OurVisionSection />
            <GetStartedSection />
        </SectionLayout>
    );
};

export default HomePage;
