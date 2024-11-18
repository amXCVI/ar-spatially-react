import { Footer } from "@/features/footer";
import Header from "@/features/header";

import { useDescription, useTitle } from "@/shared/lib/use-page-meta-hooks";
import { SignInPopupModes, useAuthContext } from "@/shared/stores/auth-provider";
import { DefaultButton } from "@/shared/ui/buttons";
import { DarkLayout } from "@/shared/ui/layouts";
import { PhoneSlider } from "@/shared/ui/phones-video-slider";
import { SectionTitle, TextP } from "@/shared/ui/text-components";

// import appStoreButton from "/images/landing/get-started-section/app-store-button.svg";
// import playMarketButton from "/images/landing/get-started-section/play-market-button.svg";
import bulb from "/images/product/bulb.png";

const ProductPage = () => {
    useTitle("AR Spatially - Product");

    useDescription(
        "A comprehensive AR toolkit, offering features like object geolocation, 3D object uploads, and real-world interaction. Perfect for creators and collectors alike.",
    );

    const { openLoginModal } = useAuthContext();

    return (
        <DarkLayout
            className="justify-between 
                       bg-[url(/images/product/bg.svg)] bg-cover bg-no-repeat bg-center
                       "
        >
            <Header white />

            <div
                className="grid grid-cols-8 lg:grid-rows-5 gap-6
                            container mx-auto h-full px-6"
            >
                <div
                    className="col-span-8 lg:col-span-5 xl:col-span-3 lg:row-span-3 lg:row-start-2
                                flex flex-col gap-6 justify-between"
                >
                    <SectionTitle className="text-white" title="Our Product" />

                    <div className="flex flex-col gap-6">
                        <TextP className="text-spanish-gray text-start">
                            <b className="text-xl text-white mr-2">For AR Artists</b>
                            we offer space to upload 3D objects and a unified AR space for showcasing your work. Create
                            and sell AR-NFTs, receive commissions from developers and businesses, and connect with
                            peers, brands, and collectors.
                        </TextP>

                        <TextP className="text-spanish-gray text-start">
                            <b className="text-xl text-white mr-2">For developers </b>
                            we aim to create a comprehensive toolkit that allows both existing and emerging applications
                            to connect and utilise the open features of other applications in the ecosystem, including
                            blockchain functions.
                        </TextP>
                    </div>

                    <div className="flex gap-4 justify-start">
                        <DefaultButton className="text-white" onClick={() => openLoginModal(SignInPopupModes.SignIn)}>
                            Log in
                        </DefaultButton>
                        <DefaultButton className="text-white" onClick={() => openLoginModal(SignInPopupModes.SignUp)}>
                            Sign up
                        </DefaultButton>
                    </div>
                </div>
                <div className="col-span-8 lg:col-span-3 xl:col-span-2 lg:row-span-5 lg:row-start-1">
                    <PhoneSlider
                        bgElement={
                            <div className="absolute animate-spin-slow h-full -left-1/2 -right-1/2 z-0 flex justify-center items-center">
                                <img src={bulb} alt="" />
                            </div>
                        }
                        videos={["/video/cat1_web.webm", "/video/cat_web.webm", "/video/tuning.webm"]}
                        className="mx-auto h-full"
                        // height="60vh"
                    />
                </div>
                <div
                    className="col-span-8 xl:col-span-3 xl:row-span-3 xl:row-start-2
                                flex flex-col gap-6 justify-between"
                >
                    <div className="flex flex-col gap-6">
                        <TextP className="text-spanish-gray text-start">
                            <b className="text-xl text-white mr-2">Users</b>
                            can personalise their space by adding or removing applications and AR objects based on their
                            preferences. They can also search for objects, goods, and services within the visibility
                            zone. Beyond this, users have access to AR content libraries, allowing them to pin AR
                            content to specific locations and create AR NFTs.
                        </TextP>
                        <TextP className="text-spanish-gray text-start">
                            <b className="text-xl text-white mr-2">For Businesses</b>
                            we utilize AR to attract nearby consumers. Inform customers about promotions and discounts
                            directly through AR-driven advertising events.
                        </TextP>
                    </div>

                    {/* <div className="flex gap-2 md:gap-5 justify-start">
                        <a href={import.meta.env.VITE_APP_NFTST_APPSTORE_URL}>
                            <DefaultButton className="bg-none text-gray90 !py-3">
                                <img src={appStoreButton} />
                            </DefaultButton>
                        </a>
                        <a href={import.meta.env.VITE_APP_NFTST_PLAYMARKET_URL}>
                            <DefaultButton className="bg-none text-gray90 !py-3">
                                <img src={playMarketButton} />
                            </DefaultButton>
                        </a>
                    </div> */}
                </div>
            </div>

            {/* <div
                className="container mx-auto
                           grid grid-cols-8 gap-6
                           h-full
            "
            >
                <div className="col-span-8 xl:col-span-3 flex flex-col m-auto max-w-xl">
                    <Title className="text-white" title="Our Product" />
                    <h3 className="bold-20 text-white mt-6">For Developers</h3>
                    <TextP className="text-white mt-6">
                        We aim to create a comprehensive toolkit that allows both existing and emerging applications to
                        connect and utilize the open features of other applications in the ecosystem, including
                        blockchain functions.
                    </TextP>

                    <div className="mx-auto mt-6">
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
                        // height="60vh"
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
            </div> */}
            <Footer />
        </DarkLayout>
    );
};

export { ProductPage };
