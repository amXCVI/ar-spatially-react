import { useLayoutEffect, useRef } from "react";

import { Footer } from "@/features/footer";
import Header from "@/features/header";

import { routes } from "@/shared/config";
import { useTitle } from "@/shared/lib/use-page-meta-hooks";
import { DefaultButton } from "@/shared/ui/buttons";
import { DarkLayout } from "@/shared/ui/layouts";
import { SectionTitle, TextP } from "@/shared/ui/text-components";

import dgesLogo from "/images/ar-nft/dges-icon.svg";

// import appStoreButton from "/images/landing/get-started-section/app-store-button.svg";
// import playMarketButton from "/images/landing/get-started-section/play-market-button.svg";
// import phone1 from "/images/ar-nft/phone_33.webp";
// import phone2 from "/images/ar-nft/phone_34.webp";
import nftStPhone from "/images/ar-nft/phone_35.webp";

const ArNftPage = () => {
    useTitle("AR Spatially - AR NFT");

    const phoneRef = useRef<null | HTMLImageElement>(null);
    const videoRef = useRef<null | HTMLDivElement>(null);

    const phone1Ref = useRef<null | HTMLImageElement>(null);
    const video1Ref = useRef<null | HTMLDivElement>(null);

    useLayoutEffect(() => {
        setInterval(() => {
            if (phoneRef.current && videoRef.current) {
                videoRef.current.style.width = `${phoneRef.current.offsetWidth * 0.94}px`;
                videoRef.current.style.height = `${phoneRef.current.offsetHeight * 0.98}px`;
                videoRef.current.style.borderRadius = `${phoneRef.current.height / 14}px`;
            }
        }, 500);
    }, []);

    useLayoutEffect(() => {
        setInterval(() => {
            if (phone1Ref.current && video1Ref.current) {
                video1Ref.current.style.width = `${phone1Ref.current.offsetWidth * 0.94}px`;
                video1Ref.current.style.height = `${phone1Ref.current.offsetHeight * 0.98}px`;
                video1Ref.current.style.borderRadius = `${phone1Ref.current.height / 14}px`;
            }
        }, 500);
    }, []);

    return (
        <DarkLayout className="flex flex-col justify-between">
            <Header white />
            <div
                className="container mx-auto px-6
                           rounded-[40px] overflow-hidden
                           grid grid-cols-3 gap-11"
            >
                <div className="col-span-3 bg-smoky-black-bg20">
                    <div className="flex flex-col lg:flex-row gap-12">
                        <div className={`flex gap-6 mx-auto`}>
                            <div
                                className="relative flex justify-center items-center 
                     max-h-[50vh] lg:max-h-96 max-w-[30vw]"
                            >
                                <img
                                    src="/images/landing/start-section/phone.svg"
                                    className={`object-contain h-full max-h-[50vh] lg:h-96 max-w-[30vw]`}
                                    id="phone-border-img"
                                    ref={phoneRef}
                                />

                                <div
                                    id="video-rect-container"
                                    className="absolute overflow-hidden w-0 h-0"
                                    ref={videoRef}
                                >
                                    <video
                                        className="h-full w-full object-cover"
                                        src={"/video/ar-nft.webm"}
                                        playsInline
                                        autoPlay
                                        muted
                                        preload="auto"
                                        loop
                                    />
                                </div>
                            </div>
                            {/* <img src={phone1} className="object-contain h-full max-h-[50vh] lg:max-h-96 max-w-[30vw]" /> */}
                            <div
                                className="relative flex justify-center items-center 
                     max-h-[50vh] lg:max-h-96 max-w-[30vw]"
                            >
                                <img
                                    src="/images/landing/start-section/phone.svg"
                                    className={`object-contain h-full max-h-[50vh] lg:h-96 max-w-[30vw]`}
                                    id="phone-border-img"
                                    ref={phone1Ref}
                                />

                                <div
                                    id="video-rect-container"
                                    className="absolute overflow-hidden w-0 h-0"
                                    ref={video1Ref}
                                >
                                    <video
                                        className="h-full w-full object-cover"
                                        src={"/video/ar-nft-2.webm"}
                                        playsInline
                                        autoPlay
                                        muted
                                        preload="auto"
                                        loop
                                    />
                                </div>
                            </div>

                            {/* <img src={phone2} className="object-contain h-full max-h-[50vh] lg:max-h-96 max-w-[30vw]" /> */}
                        </div>

                        <div className="flex flex-col lg:pt-12 gap-6">
                            <SectionTitle title="AR NFT" className="text-white" />
                            <h2 className="manrope-medium-22 text-white">We are more than just AR technologies</h2>
                            <TextP className="text-spanish-gray mb-6 text-start">
                                AR NFTs are generated by the decentralised geolocation ecosystem DGES, enhancing the
                                reliability of interactions in augmented reality and simplifying NFT integration. This
                                makes advanced technologies more accessible and efficient.
                            </TextP>
                            {/* <div className="flex gap-4 mt-auto justify-center md:justify-start flex-wrap">
                                <a href={import.meta.env.VITE_APP_NFTST_APPSTORE_URL}>
                                    <DefaultButton className="">
                                        <img src={appStoreButton} />
                                    </DefaultButton>
                                </a>
                                <a href={import.meta.env.VITE_APP_NFTST_PLAYMARKET_URL}>
                                    <DefaultButton className="">
                                        <img src={playMarketButton} />
                                    </DefaultButton>
                                </a>
                            </div> */}
                        </div>
                    </div>
                </div>

                <div
                    className="col-span-3 xl:col-span-1
                             bg-smoky-black-bg20 flex flex-col gap-6
                             lg:mt-11 mb-10 lg:mb-0"
                >
                    <SectionTitle title="AR Demo" className="text-white" />
                    <h2 className="manrope-medium-22 text-white">Test your first AR object now </h2>
                    <TextP className="text-spanish-gray text-start">
                        This is our Web AR demo experience. You can try it now and explore our solution in practice.
                    </TextP>
                    <a className="mx-auto mt-5 xl:mt-auto" href={`${routes.root}#contact`}>
                        <DefaultButton className="">
                            <span className="text-white">Try AR Now</span>
                        </DefaultButton>
                    </a>
                </div>

                <div
                    className="col-span-3 xl:col-span-2 
                              bg-smoky-black-bg20 flex flex-col-reverse md:flex-row gap-11"
                >
                    <img src={nftStPhone} className="object-contain h-full max-h-[50vh] lg:max-h-[40vh] m-auto" />

                    <div className={`flex flex-col gap-6 xl:mt-11`}>
                        <img src={dgesLogo} className="h-10 mr-auto" />
                        <h2 className="manrope-medium-22 text-white">Decentralized Geo Ecosystem </h2>
                        <TextP className="text-spanish-gray text-start">
                            DGES (Decentralized Geolocation Ecosystem) is an independent system of open-source smart
                            contracts across multiple blockchain networks. Bypassing intermediaries, it provides a
                            secure environment for the efficient, unrestricted recording, tracking, and management of
                            data. DGES offers a scalable infrastructure for application developers, organizations
                            operating in the physical sector, and consumers of goods and services.
                        </TextP>
                        <a className="mt-auto mx-auto mt-5 lg:mt-auto" href={import.meta.env.VITE_APP_DGES_URL}>
                            <DefaultButton className="">
                                <span className="text-white">DGES</span>
                            </DefaultButton>
                        </a>
                    </div>
                </div>
            </div>

            <Footer />
        </DarkLayout>
    );
};

export { ArNftPage };
