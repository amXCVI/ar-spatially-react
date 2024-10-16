import { routes } from "@/shared/config";
import { DefaultButton } from "@/shared/ui/buttons";
import { TextP, Title } from "@/shared/ui/text-components";

// import appStoreButton from "/images/landing/get-started-section/app-store-button.svg";
// import playMarketButton from "/images/landing/get-started-section/play-market-button.svg";
import phone2 from "/images/landing/get-started-section/phone_1.webp";
import phoneForMapOne from "/images/landing/get-started-section/phone_2.webp";
import phoneForMapTwo from "/images/landing/get-started-section/phone_3.webp";
import phone1 from "/images/landing/get-started-section/phone_4.webp";

const GetStartedSection = () => {
    return (
        <section className="px-6">
            <div
                className="container mx-auto 
                           rounded-[40px] overflow-hidden
                           flex flex-col gap-1
                          "
            >
                <div className="bg-light-bg px-9 py-6">
                    <div className="flex flex-col lg:flex-row gap-6 lg:gap-12">
                        <div className="flex gap-6 mx-auto">
                            <img
                                src={phone1}
                                className="object-contain h-full max-h-[50vh] lg:max-h-[40vh] max-w-[30vw]"
                            />
                            <img
                                src={phone2}
                                className="object-contain h-full max-h-[50vh] lg:max-h-[40vh] max-w-[30vw]"
                            />
                        </div>

                        <div className="flex flex-col justify-between gap-6 ml-auto">
                            <div>
                                <Title title="Our Product" />
                                <TextP className="mt-2.5 !text-justify">
                                    Our platform serves four key audiences: developers, businesses, artists, and users.
                                    Each group finds personalized tools for development and creation. Developers can use
                                    our Playground to create AR apps and promote them within the AR Spatially ecosystem.
                                    Businesses leverage AR to attract nearby consumers and inform them about promotions
                                    and discounts through AR-driven advertising events. AR artists access tools to
                                    create 3D objects, showcase their work, create and sell AR-NFTs, receive
                                    commissions, and connect with peers, brands, and collectors. Users enjoy a
                                    personalized AR space, enabling the search for nearby objects, goods, and services.
                                </TextP>
                            </div>

                            <div>
                                <Title title="AR NFT" />
                                <TextP className="mt-2.5 !text-justify">
                                    A unique NFT format for AR objects enables the creation and exchange of digital
                                    rights for advertising, objects, facts, and achievements in the AR space, with their
                                    spatial position and volume recorded on the blockchain.
                                </TextP>
                            </div>

                            <div className="gap-2 md:gap-5 flex">
                                <a href={routes.product} className="">
                                    <DefaultButton className="text-gray90 bg-none">Product</DefaultButton>
                                </a>
                                <a href={routes.arNFT} className="">
                                    <DefaultButton className="text-gray90 bg-none">AR NFT</DefaultButton>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-light-bg px-9 py-6">
                    <div className="flex flex-col lg:flex-row gap-6 lg:gap-12">
                        <div className="flex flex-col justify-between gap-6 mr-auto">
                            <div>
                                <Title title="Our Map" />
                                <TextP className="mt-2.5 !text-justify">
                                    A coordinate system that integrates AR with the real world, allowing geolocation to
                                    link and discover AR objects in their actual locations. It enables users to map
                                    routes, find objects in augmented reality, view movement history, and access
                                    detailed descriptions of each object.
                                </TextP>
                                <a href={routes.map}>
                                    <DefaultButton className="bg-none text-gray90 mt-2.5">Map</DefaultButton>
                                </a>
                            </div>

                            <div>
                                <Title title="Our Playground" />
                                <TextP className="mt-2.5 !text-justify">
                                    You can now upload 3D objects to the map in your personal Playground. Later, you'll
                                    be able to customize your AR Space and create your own solutions. Playground enables
                                    developers to create new applications and seamlessly integrate them into the AR
                                    Spatially ecosystem.
                                </TextP>
                                <div className="flex flex-col md:flex-row w-full justify-between items-center sm:items-start gap-4">
                                    <div className="flex gap-4 mt-2.5">
                                        <a href={routes.playground}>
                                            <DefaultButton className="bg-none text-gray90">Playground</DefaultButton>
                                        </a>
                                    </div>

                                    {/* <div className="flex justify-around md:justify-end w-full gap-4 flex-wrap md:mt-2.5">
                                        <a
                                            href={import.meta.env.VITE_APP_NFTST_APPSTORE_URL}
                                            className="w-full sm:w-auto"
                                        >
                                            <DefaultButton className="bg-none text-gray90 !py-3 w-full min-w-[170px]">
                                                <img src={appStoreButton} />
                                            </DefaultButton>
                                        </a>
                                        <a
                                            href={import.meta.env.VITE_APP_NFTST_PLAYMARKET_URL}
                                            className="w-full sm:w-auto"
                                        >
                                            <DefaultButton className="bg-none text-gray90 !py-3 w-full min-w-[170px]">
                                                <img src={playMarketButton} />
                                            </DefaultButton>
                                        </a>
                                    </div> */}
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-6 mx-auto">
                            <img
                                src={phoneForMapTwo}
                                className="object-contain h-full max-h-[50vh] lg:max-h-[40vh] max-w-[30vw]"
                            />
                            <img
                                src={phoneForMapOne}
                                className="object-contain h-full max-h-[50vh] lg:max-h-[40vh] max-w-[30vw]"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export { GetStartedSection };
