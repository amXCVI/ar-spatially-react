import { Footer } from "@/features/footer";
import Header from "@/features/header";

import { DefaultButton } from "@/shared/ui/buttons";
import { DarkLayout } from "@/shared/ui/layouts";
import { SectionTitle, TextP } from "@/shared/ui/text-components";

import appStoreButton from "/images/landing/get-started-section/app-store-button.svg";
import playMarketButton from "/images/landing/get-started-section/play-market-button.svg";

import nftStPhone from "/images/blockchain/phone_20.webp";
import phone1 from "/images/blockchain/phone_21.webp";
import phone2 from "/images/blockchain/phone_22.webp";

const BlockchainPage = () => {
    return (
        <DarkLayout
            className="flex flex-col justify-between 
               bg-[url(/images/product/bg.svg)] bg-cover bg-no-repeat bg-center
               pt-36 lg:pt-40"
        >
            <Header white />
            <div
                className="container mx-auto
                            grid grid-cols-12 gap-1
                            rounded-[40px] overflow-hidden
            "
            >
                <div className="col-span-12 bg-smoky-black-bg20 px-4 py-6 md:p-10">
                    <div className="flex flex-col lg:flex-row gap-10">
                        <div className="flex gap-4 mx-auto lg:hidden">
                            <img
                                src={phone1}
                                className="object-contain h-full max-h-[50vh] lg:max-h-[40vh] max-w-[40vw]"
                            />
                            <img
                                src={phone2}
                                className="object-contain h-full max-h-[50vh] lg:max-h-[40vh] max-w-[40vw]"
                            />
                        </div>

                        <img src={phone1} className="object-contain max-h-[50vh] lg:max-w-[20vw] hidden lg:block" />
                        <img src={phone2} className="object-contain max-h-[50vh] lg:max-w-[20vw] hidden lg:block" />

                        <div className="flex flex-col justify-center">
                            <SectionTitle title="Use cases" className="text-white" />
                            <h2 className="manrope-medium-22 text-white mt-6">
                                Use our solutions to create and extend the reality with us{" "}
                            </h2>
                            <TextP className="text-spanish-gray mt-4">
                                The AR Spatially ecosystem can support an unlimited number of diverse applications. We
                                welcome developers to join us in leveraging shared experiences for new creations, with a
                                Playground that helps bring ideas to life. We also plan to grow our community by
                                offering grants to talented developers.
                            </TextP>
                            <TextP className="text-spanish-gray mt-4">
                                Mood Map is the next application ready to be integrated into the AR Spatially ecosystem.
                                It will display users' moods in specific locations within the AR space, based on their
                                feedback.
                            </TextP>
                        </div>
                    </div>
                </div>

                <div
                    className="col-span-12 xl:col-span-7
                             bg-smoky-black-bg20 px-4 py-6 md:p-10
                             flex flex-col md:flex-row gap-10"
                >
                    <div className="flex flex-col">
                        <SectionTitle title="PLAYGROUND" className="text-white" />
                        <h2 className="manrope-medium-22 text-white mt-6"> Upload 3D objects to the map now!</h2>
                        <TextP className="text-spanish-gray mt-4">
                            We aim to provide a comprehensive toolkit that enables existing and new applications to
                            connect and utilize open features, including blockchain functions, within the ecosystem. Our
                            Playground allows developers to create and seamlessly integrate new applications into the AR
                            Spatially ecosystem, offering IT and blockchain solutions to simplify development.
                        </TextP>
                        <a className="m-auto" href={""}>
                            <DefaultButton className="mt-6">
                                <span className="text-white">Coming soon</span>
                            </DefaultButton>
                        </a>
                    </div>
                    <img src={nftStPhone} className="object-contain h-full max-h-[50vh] lg:max-h-[40vh] m-auto" />
                </div>

                <div
                    className="col-span-12 xl:col-span-5
                              bg-smoky-black-bg20 flex flex-col md:flex-row gap-6 px-4 py-6 md:p-10"
                >
                    <NftstText className="flex" />
                </div>
            </div>

            <Footer />
        </DarkLayout>
    );
};

const NftstText = ({ className }: { className?: string }) => {
    return (
        <div className={`flex flex-col ${className ?? ""}`}>
            <SectionTitle title="nft street" className="text-white" />
            <h2 className="manrope-medium-22 text-white mt-6">What is this project about?</h2>
            <TextP className="text-spanish-gray mt-4">
                NFT Street is driven by a passion for street art and its vibrant communities. One key feature is
                establishing digital rights to street art through geolocation NFTs. As the first standalone application
                to join the AR Spatially ecosystem, NFT Street enables collaboration between AR and street artists,
                showcasing joint projects and destroyed works in AR space. This collaboration allows artists to explore
                new forms of self-expression and provides collectors access to a diverse range of artworks and
                interactive opportunities.
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
