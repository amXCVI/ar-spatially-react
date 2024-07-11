import { Footer } from "@/features/footer";
import Header from "@/features/header";

import { DefaultButton } from "@/shared/ui/buttons";
import { DarkLayout } from "@/shared/ui/layouts";
import { Subtitle, TextP, Title } from "@/shared/ui/text-components";

import dgesIcon from "/images/blockchain/dges-icon.svg";
import appStoreButton from "/images/landing/get-started-section/app-store-button.svg";
import playMarketButton from "/images/landing/get-started-section/play-market-button.svg";

import nftStPhone from "/images/blockchain/nftst-phone.png";
import phone1 from "/images/blockchain/phone_7.png";
import phone2 from "/images/blockchain/phone_8.png";

const BlockchainPage = () => {
    return (
        <DarkLayout
            className="flex flex-col justify-between 
               bg-[url(/images/product/bg.svg)] bg-cover bg-no-repeat bg-center
               pt-40"
        >
            <Header white />
            <div
                className="container mx-auto
                            grid grid-cols-12 gap-1
            "
            >
                <div
                    className="col-span-12 lg:col-span-7 xl:col-span-5
                             bg-smoky-black-bg flex flex-col px-4 py-10 md:p-10"
                >
                    <div>
                        <img src={dgesIcon} />
                    </div>
                    <h2 className="medium-20 text-white mt-3">Decentralized Geo Ecosystem</h2>
                    <TextP className="text-spanish-gray mt-10">
                        We create technology that works seamlessly across different types of businesses, bringing
                        various solutions to life. We also gather augmented reality tools and are open to partnering
                        with others through our platform. Feel free to get in touch with us!
                    </TextP>
                    <a className="m-auto" href={import.meta.env.VITE_APP_DGES_URL}>
                        <DefaultButton className="mt-10">
                            <span className="regular-14 text-white">DGES</span>
                        </DefaultButton>
                    </a>

                    <NftstText className="hidden lg:flex xl:hidden" />
                </div>

                <div
                    className="col-span-12 lg:col-span-5 xl:col-span-7 
                              bg-smoky-black-bg flex flex-col md:flex-row gap-10 px-4 py-10 md:p-10"
                >
                    <img src={nftStPhone} className="object-contain h-full max-h-[50dvh] mx-auto" />

                    <NftstText className="flex lg:hidden xl:flex" />
                </div>

                <div className="col-span-12 bg-smoky-black-bg px-4 py-10 md:p-10">
                    <div className="flex flex-col md:flex-row gap-10">
                        <div className="flex gap-10 mx-auto md:hidden">
                            <img src={phone1} className="object-contain h-full max-h-[50dvh]" />
                            <img src={phone2} className="object-contain h-full max-h-[50dvh]" />
                        </div>

                        <img src={phone1} className="object-contain max-h-[50dvh] hidden md:block" />
                        <img src={phone2} className="object-contain max-h-[50dvh] hidden md:block" />

                        <div className="flex flex-col justify-between">
                            <Title title="Blockchain" className="text-white" />
                            <Subtitle subtitle="We are more than just AR technologies" className="text-white mt-7" />
                            <TextP className="text-spanish-gray mt-6">
                                We utilize geospatial NFT (Non-Fungible Token) technology. Geospatial NFTs enable the
                                establishment of location-based copyrights on AR objects and their monetization.
                                Geospatial NFTs are a part of the Decentralized Geo Ecosystem (DGES). DGES is a
                                collection of smart contracts that provide the opportunity to own, gift, buy, and sell
                                tokens on any blockchain system.
                            </TextP>

                            <div className="flex justify-center md:justify-start mt-4 ">
                                <DefaultButton className="text-white">Blockchain Solution</DefaultButton>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </DarkLayout>
    );
};

const NftstText = ({ className }: { className?: string }) => {
    return (
        <div className={`flex flex-col ${className ?? ""}`}>
            <Title title="nft street" className="text-white" />
            <Subtitle subtitle="What is this project about?" className="text-white mt-7" />
            <TextP className="text-spanish-gray mt-10">
                NFT Street is a platform driven by a deep passion for street art and the vibrant communities it
                embodies. One of the groundbreaking features is the establishment of digital ownership for street art by
                assigning each piece a unique NFT linked to its physical location - GeoNFT. Through NFT Street, artists
                are encouraged to explore new avenues of expression, while collectors gain access to a wide range of
                artwork and engagement opportunities.
            </TextP>
            <div className="flex gap-10 mt-10 justify-center md:justify-start">
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
            </div>
        </div>
    );
};

export { BlockchainPage };
