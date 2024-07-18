import { SectionLayout } from "@/shared/ui/layouts";
import { Socials } from "@/shared/ui/socials";

import { GetStartedSection } from "./sections/get-started-section";
import { OurVisionSection } from "./sections/our-vision-section";
import { StartSection } from "./sections/start-section";

const HomePage = () => {
    return (
        <SectionLayout className="overflow-x-hidden flex flex-col gap-6">
            <StartSection />
            <OurVisionSection />
            <GetStartedSection />
            <footer className="container mx-auto flex flex-col-reverse md:flex-row justify-between gap-4 mt-20 lg:mt-0 w-full">
                <div className="mt-auto text-gray70">
                    <div>
                        A&K LABS DMCC Business Centre, Level No 1, Unit No: 4956 Jewellery & Gemplex 3 Dubai, United
                        Arab Emirates
                    </div>
                    © 2024 AR Spatially
                </div>

                <div className="flex flex-col md:items-end gap-2">
                    <div className="medium-14 text-gray70">Spatially AR-Planet</div>
                    <div className="light-12 text-gray70">helps businesses create unique AR content</div>
                    <Socials className="mt-2" itemClassName="fill-gray70" />
                </div>
            </footer>
        </SectionLayout>
    );
};

export default HomePage;
