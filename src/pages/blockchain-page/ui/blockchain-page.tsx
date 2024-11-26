import { Footer } from "@/features/footer";
import Header from "@/features/header";

import { DefaultButton } from "@/shared/ui/buttons";
import { DarkLayout } from "@/shared/ui/layouts";
import { SectionTitle, TextP } from "@/shared/ui/text-components";

// import appStoreButton from "/images/landing/get-started-section/app-store-button.svg";
// import playMarketButton from "/images/landing/get-started-section/play-market-button.svg";
import nftStPhone from "/images/blockchain/phone_20.webp";
import phone1 from "/images/blockchain/phone_21.webp";
import phone2 from "/images/blockchain/phone_22.webp";

const BlockchainPage = () => {
    return (
        <DarkLayout
            className="justify-between 
                       bg-[url(/images/product/bg.svg)] bg-cover bg-no-repeat bg-center
                      "
        >
            <Header white />
            <div
                className="container mx-auto px-6
                            grid grid-cols-1 lg:grid-cols-6 gap-16
                            rounded-[40px] overflow-hidden
            "
            >
                <div className="lg:col-span-6 bg-smoky-black-bg20">
                    <div className="flex flex-col lg:flex-row gap-10">
                        <div className="flex gap-6 mx-auto">
                            <img src={phone1} className="object-contain h-full max-h-[50vh] lg:max-h-96 max-w-[30vw]" />
                            <img src={phone2} className="object-contain h-full max-h-[50vh] lg:max-h-96 max-w-[30vw]" />
                        </div>

                        <div className="flex flex-col justify-center gap-6">
                            <SectionTitle title="Use cases" className="text-white" />
                            <h2 className="manrope-medium-22 text-white">
                                Use our solutions to create and extend the reality with us{" "}
                            </h2>
                            <TextP className="text-spanish-gray text-start">
                                The AR Spatially ecosystem can support an unlimited number of diverse applications. We
                                welcome developers to join us in leveraging shared experiences for new creations, with a
                                Playground that helps bring ideas to life. We also plan to grow our community by
                                offering grants to talented developers.
                            </TextP>
                            <TextP className="text-spanish-gray text-start">
                                Mood Map is the next application ready to be integrated into the AR Spatially ecosystem.
                                It will display users' moods in specific locations within the AR space, based on their
                                feedback.
                            </TextP>
                        </div>
                    </div>
                </div>

                <div
                    className="lg:col-span-3 xl:col-span-2
                             bg-smoky-black-bg20
                             flex flex-col md:flex-row gap-9"
                >
                    <div className="flex flex-col gap-6">
                        <SectionTitle title="PLAYGROUND" className="text-white" />
                        <h2 className="manrope-medium-22 text-white"> Upload 3D objects to the map now!</h2>
                        <TextP className="text-spanish-gray text-start">
                            We aim to provide a comprehensive toolkit that enables existing and new applications to
                            connect and utilize open features, including blockchain functions, within the ecosystem. Our
                            Playground allows developers to create and seamlessly integrate new applications into the AR
                            Spatially ecosystem, offering IT and blockchain solutions to simplify development.
                        </TextP>
                        <a className="mx-auto" href={""}>
                            <DefaultButton className="">
                                <span className="text-white">Coming soon</span>
                            </DefaultButton>
                        </a>
                    </div>
                </div>

                <div className="lg:col-span-3 xl:col-span-2">
                    <img
                        src={nftStPhone}
                        className="object-contain h-full max-h-[50vh] lg:max-h-[40vh] max-w-[45vw] m-auto"
                    />
                </div>

                <div
                    className="lg:col-span-6 xl:col-span-2
                              bg-smoky-black-bg20 flex flex-col gap-9"
                >
                    <SectionTitle title="nft street" className="text-white" />
                    <div className="flex flex-col gap-6">
                        <h2 className="manrope-medium-22 text-white">What is this project about?</h2>
                        <TextP className="text-spanish-gray text-start">
                            NFT Street is driven by a passion for street art and its vibrant communities. One key
                            feature is establishing digital rights to street art through geolocation NFTs. As the first
                            standalone application to join the AR Spatially ecosystem, NFT Street enables collaboration
                            between AR and street artists, showcasing joint projects and destroyed works in AR space.
                            This collaboration allows artists to explore new forms of self-expression and provides
                            collectors access to a diverse range of artworks and interactive opportunities.
                        </TextP>
                        {/* <div className="flex gap-4 justify-center 2sm:justify-start flex-wrap">
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

            <Footer />
        </DarkLayout>
    );
};

export { BlockchainPage };
