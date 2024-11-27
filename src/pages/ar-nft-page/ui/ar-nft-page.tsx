import { Footer } from "@/features/footer";
import Header from "@/features/header";

import { useDescription, useTitle } from "@/shared/lib/use-page-meta-hooks";
import { DefaultButton } from "@/shared/ui/buttons";
import { DarkLayout } from "@/shared/ui/layouts";
import { VideoInPhone } from "@/shared/ui/phones-video-slider";
import { SectionTitle, TextP } from "@/shared/ui/text-components";

import dgesLogo from "/images/ar-nft/dges-icon.svg";

// import appStoreButton from "/images/landing/get-started-section/app-store-button.svg";
// import playMarketButton from "/images/landing/get-started-section/play-market-button.svg";
// import phone1 from "/images/ar-nft/phone_33.webp";
// import phone2 from "/images/ar-nft/phone_34.webp";
import nftStPhone from "/images/ar-nft/phone_35.webp";

const ArNftPage = () => {
    useTitle("AR Spatially - AR NFT");

    useDescription(
        "Mint, collect, and interact with AR NFTs. Transform digital art into geo-based, tradeable assets and experience them in augmented reality.",
    );

    return (
        <DarkLayout className="justify-between">
            <Header white />
            <div
                className="container mx-auto px-6
                           rounded-[40px] overflow-hidden
                           grid grid-cols-3 gap-11"
            >
                <div className="col-span-3 bg-smoky-black-bg20">
                    <div className="flex flex-col lg:flex-row gap-12">
                        <div className={`flex gap-6 mx-auto`}>
                            <VideoInPhone
                                videoSrc="/video/ar-nft.webm"
                                phoneSrc="/images/landing/start-section/phone.svg"
                                className="max-h-[50vh] lg:max-h-96 max-w-[30vw]"
                                phoneImgClassName="object-contain h-full max-h-[50vh] lg:h-96 max-w-[30vw]"
                            />

                            <VideoInPhone
                                videoSrc="/video/ar-nft-2.webm"
                                phoneSrc="/images/landing/start-section/phone.svg"
                                className="max-h-[50vh] lg:max-h-96 max-w-[30vw]"
                                phoneImgClassName="object-contain h-full max-h-[50vh] lg:h-96 max-w-[30vw]"
                            />
                        </div>

                        <div className="flex flex-col lg:pt-12 gap-6">
                            <SectionTitle title="AR OBJECT" className="text-white" />
                            <h2 className="manrope-medium-22 text-white">Build, Discover, and Share</h2>
                            <TextP className="text-spanish-gray mb-6 text-start">
                                Build your own AR space by uploading your AR Objects and inviting friends to explore,
                                collaborate, and interact. Discover and customize your AR environment by choosing from
                                AR Spatially’s extensive library of AR Objects to enhance your space instantly. Share
                                your creations by uploading your AR Objects to the global library, allowing others to
                                add them to their own spaces and select unique geopositions.
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
                    <SectionTitle title="AR NFT" className="text-white" />
                    <h2 className="manrope-medium-22 text-white">
                        Protect Your Creations and Unlock New Opportunities
                    </h2>
                    <TextP className="text-spanish-gray text-start">
                        Receive an AR NFT when you upload an AR Object to your space—a digital token stored in your
                        wallet that secures your ownership and digital rights. These NFTs reserve the intellectual
                        property of your AR Objects and open up new monetization channels. Connect your AR NFT to the
                        Decentralized Geo Ecosystem (DGES), so you can list and sell your AR Objects on the DGES
                        Marketplace
                    </TextP>

                    {/* <a className="mx-auto mt-5 xl:mt-auto" href={`${routes.root}#contact`}>
                        <DefaultButton className="">
                            <span className="text-white">Try AR Now</span>
                        </DefaultButton>
                    </a> */}
                </div>

                <div
                    className="col-span-3 xl:col-span-2 
                              bg-smoky-black-bg20 flex flex-col-reverse md:flex-row gap-11"
                >
                    <img
                        src={nftStPhone}
                        alt="DGES (Decentralized Geolocation Ecosystem)"
                        className="object-contain h-full max-h-[50vh] lg:max-h-[40vh] mx-auto"
                    />

                    <div className={`flex flex-col gap-6`}>
                        <img src={dgesLogo} className="h-10 mr-auto" />
                        <h2 className="manrope-medium-22 text-white">Decentralized Geo Ecosystem </h2>
                        <TextP className="text-spanish-gray text-start">
                            DGES is the first universal geolocation-based NFT-as-a-service platform, empowering projects
                            and service providers to issue customizable NFTs. These NFTs utilize modular smart contract
                            extensions to store diverse types of information, enabling secure and flexible management of
                            geolocation-linked data on the blockchain without intermediaries.
                        </TextP>
                        <TextP className="text-spanish-gray text-start">
                            As an autonomous and decentralized ecosystem, DGES creates monetization opportunities for
                            all participants, including creators, developers, businesses, and users. With fair
                            revenue-sharing models and governance mechanisms, DGES ensures equitable participation while
                            driving innovation in geolocation-based AR solutions.
                        </TextP>
                        <a className="mt-auto mx-auto pt-5 lg:mt-auto" href={import.meta.env.VITE_APP_DGES_URL}>
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
