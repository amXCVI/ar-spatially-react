import Header from "@/features/header";

import { DefaultButton } from "@/shared/ui/buttons";
import { DarkLayout } from "@/shared/ui/layouts";
import { Socials } from "@/shared/ui/socials";
import { Title } from "@/shared/ui/text-components";

import dots from "/images/landing/footer/dots.svg";
import scrollDownIcon from "/images/landing/footer/scroll-down-to-explore.svg";

import { PhoneSlider } from "./phone-slider";
import bulb from "/images/product/bulb.png";

const ProductPage = () => {
    return (
        <DarkLayout
            className="flex flex-col justify-between 
                       bg-[url(/images/product/bg.svg)] bg-cover bg-no-repeat bg-center
                       pt-40
                       "
        >
            <Header white />
            <div></div>
            <div
                className="container mx-auto
                            grid grid-cols-12 gap-10
            "
            >
                <div className="col-span-12 lg:col-span-5 flex flex-col my-auto">
                    <Title className="text-white" title="Our Product" />
                    <h3 className="bold-20 text-white mt-8">For developers</h3>
                    <p className="regular-16 mt-7">
                        We aim to create a comprehensive toolkit that allows both existing and emerging applications to
                        connect and utilize the open features of other applications in the ecosystem, including
                        blockchain functions.
                    </p>

                    <div className="mx-auto mt-10">
                        <DefaultButton className="bg-dark30">Playground</DefaultButton>
                    </div>
                </div>

                <div className="col-span-12 lg:col-span-3">
                    <PhoneSlider
                        bgElement={
                            <div className="absolute animate-spin-slow h-full -left-1/2 -right-1/2 z-0 flex justify-center items-center">
                                <img src={bulb} />
                            </div>
                        }
                        videos={["/video/car_web.webm", "/video/cat_web.webm", "/video/cat1_web.webm"]}
                    />
                </div>

                <div className="col-span-12 lg:col-span-4 mt-auto flex flex-col gap-5">
                    <p className="regular-14 text-white">
                        <span className="bold-14">For AR Artists </span>we offer tools for creating 3D objects and a
                        unified AR space for showcasing your work. Create and sell AR-NFTs, receive commissions from
                        developers and businesses, and connect with peers, brands, and collectors.
                    </p>
                    <p className="regular-14 text-white">
                        <span className="bold-14">For Businesses </span>we utilize AR to attract nearby consumers.
                        Inform customers about promotions and discounts directly through AR-driven advertising events.
                    </p>
                </div>
            </div>
            <footer className="container mx-auto flex justify-between mt-20 lg:mt-0">
                <div className="hidden md:flex items-center regular-14 text-white">
                    <img src={scrollDownIcon} className="mr-2" />
                    Scroll down
                    <br />
                    to explore
                    <img src={dots} className="ml-12" />
                </div>

                <div className="flex flex-col items-end gap-2 ml-auto">
                    <div className="medium-14 text-spanish-gray">Spatially AR-Planet</div>
                    <div className="light-12 text-spanish-gray">helps businesses create unique AR content</div>
                    <Socials className="mt-2" itemClassName="fill-spanish-gray" />
                </div>
            </footer>
        </DarkLayout>
    );
};

export { ProductPage };
