import { Footer } from "@/features/footer";
import Header from "@/features/header";

import { DefaultButton } from "@/shared/ui/buttons";
import { DarkLayout } from "@/shared/ui/layouts";
import { PhoneSlider } from "@/shared/ui/phones-video-slider";
import { TextP, Title } from "@/shared/ui/text-components";

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
                           grid grid-cols-8 gap-10
                           mb-20
            "
            >
                <div className="col-span-8 xl:col-span-3 flex flex-col m-auto max-w-xl">
                    <Title className="text-white" title="Our Product" />
                    <h3 className="bold-20 text-white mt-8">For Developers</h3>
                    <TextP className="text-white mt-7">
                        We aim to create a comprehensive toolkit that allows both existing and emerging applications to
                        connect and utilize the open features of other applications in the ecosystem, including
                        blockchain functions.
                    </TextP>

                    <div className="mx-auto mt-10">
                        <DefaultButton>Playground</DefaultButton>
                    </div>
                </div>

                <div className="col-span-8 xl:col-span-2">
                    <PhoneSlider
                        bgElement={
                            <div className="absolute animate-spin-slow h-full -left-1/2 -right-1/2 z-0 flex justify-center items-center">
                                <img src={bulb} />
                            </div>
                        }
                        videos={["/video/cat1_web.webm", "/video/cat_web.webm", "/video/car_web.webm"]}
                        className="mx-auto"
                        height="60vh"
                    />
                </div>

                <div className="col-span-8 xl:col-span-3 m-auto xl:mt-auto max-w-xl flex flex-col gap-5">
                    <TextP className="text-white">
                        <b className="bold-20">For AR Artists </b>we offer tools for creating 3D objects and a unified
                        AR space for showcasing your work. Create and sell AR-NFTs, receive commissions from developers
                        and businesses, and connect with peers, brands, and collectors.
                    </TextP>
                    <TextP className="text-white">
                        <b className="bold-20">For Businesses </b>we utilize AR to attract nearby consumers. Inform
                        customers about promotions and discounts directly through AR-driven advertising events.
                    </TextP>
                </div>
            </div>
            <Footer />
        </DarkLayout>
    );
};

export { ProductPage };
