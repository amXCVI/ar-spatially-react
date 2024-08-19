import { Socials } from "@/shared/ui/socials";

import footerStars from "/images/landing/footer/footer-stars.svg";
import scrollDownIcon from "/images/landing/footer/scroll-down-to-explore.svg";

const SectionFooter = ({ allFooter = true }: { allFooter?: boolean }) => {
    return (
        <div className="container mx-auto flex flex-col items-center px-9">
            {allFooter ? (
                <div className="hidden xl:flex justify-between items-center w-full mb-4 -mt-20">
                    <img src={footerStars} className="-ml-2" />
                </div>
            ) : (
                <></>
            )}

            <div className="hidden xl:flex justify-between items-center w-full">
                <div className="flex items-center regular-14 text-gray90">
                    <img src={scrollDownIcon} className="mr-2" />
                    Scroll down
                    <br />
                    to explore
                </div>

                <div></div>
            </div>

            <Socials className="lg:mb-16 gap-8 z-10" itemClassName="fill-charleston-green" />
        </div>
    );
};

export default SectionFooter;
