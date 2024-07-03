import crosses from "/images/landing/footer/crosses.svg";
import discordIcon from "/images/landing/footer/discord.svg";
import disks from "/images/landing/footer/disks.svg";
import dots from "/images/landing/footer/dots.svg";
import footerStars from "/images/landing/footer/footer-stars.svg";
import linkedinIcon from "/images/landing/footer/linkedin.svg";
import scrollDownIcon from "/images/landing/footer/scroll-down-to-explore.svg";
import telegtamIcon from "/images/landing/footer/telegram.svg";
import ticTocIcon from "/images/landing/footer/tik-tok.svg";

const SectionFooter = ({ allFooter = true }: { allFooter?: boolean }) => {
    return (
        <div className="container mx-auto flex flex-col items-center">
            {allFooter ? (
                <div className="hidden md:flex justify-between items-center w-full mb-4 -mt-20">
                    <img src={footerStars} className="-ml-2" />
                    <img src={crosses} className="mr-4" />
                </div>
            ) : (
                <></>
            )}

            <div className="flex justify-between items-center w-full">
                <div className="flex items-center regular-14 text-gray90">
                    <img src={scrollDownIcon} className="mr-2" />
                    Scroll down
                    <br />
                    to explore
                    <img src={dots} className="ml-12" />
                </div>

                <div>
                    <img src={disks} />
                </div>
            </div>

            <div className="flex gap-10 lg:mb-5">
                <a href="">
                    <img src={discordIcon} />
                </a>
                <a href="">
                    <img src={linkedinIcon} />
                </a>
                <a href="">
                    <img src={telegtamIcon} />
                </a>
                <a href="">
                    <img src={ticTocIcon} />
                </a>
            </div>
        </div>
    );
};

export default SectionFooter;
