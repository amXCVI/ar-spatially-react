import { routes } from "@/shared/config";
import { DefaultButton } from "@/shared/ui/buttons";
import { Subtitle, TextP, Title } from "@/shared/ui/text-components";

import appStoreButton from "/images/landing/get-started-section/app-store-button.svg";
import playMarketButton from "/images/landing/get-started-section/play-market-button.svg";

import phone1 from "/images/blockchain/phone_22.webp";
import phone2 from "/images/landing/get-started-section/phone_1.webp";
import phoneForMapOne from "/images/landing/get-started-section/phone_2.webp";
import phoneForMapTwo from "/images/landing/get-started-section/phone_3.webp";

const GetStartedSection = () => {
    return (
        <div className="flex flex-col justify-between">
            <div
                className="container mx-auto rounded-[40px]
                           overflow-hidden
                           grid grid-cols-12 gap-1
                          "
            >
                {/* <div className="col-span-12 lg:col-span-7 xl:col-span-5 bg-light-bg p-4 py-10 md:p-10">
                    <div className="flex flex-col h-full">
                        <Title title="Developers" />
                        <Subtitle subtitle="Coming Soon" className="mt-4 uppercase !text-blue-accent" />
                        <TextP className="mt-4">
                            We aim to create a comprehensive toolkit that allows both existing and emerging applications
                            to connect and utilize the open features of other applications in the ecosystem, including
                            blockchain functions.
                        </TextP>
                        <div className="m-auto">
                            <DefaultButton className="bg-white text-gray90 mt-4">Playground</DefaultButton>
                        </div>

                        <ForUsersText className="hidden lg:flex xl:hidden" />
                    </div>
                </div> */}

                {/* <div className="col-span-12 lg:col-span-5 xl:col-span-7 bg-light-bg p-4 py-10 md:p-10">
                    <div className="flex flex-col xl:flex-row gap-10 md:gap-4">
                        <img
                            src={phoneForUsers}
                            className="object-contain max-h-[50vh] lg:max-h-[40vh] max-w-[40vw] mx-auto"
                        />

                        <ForUsersText className="flex lg:hidden xl:flex" />
                    </div>
                </div> */}

                <div className="col-span-12 bg-light-bg px-4 py-10 md:p-10">
                    <div className="flex flex-col-reverse xl:flex-row gap-10 xl:gap-4">
                        <div className="flex gap-4 mx-auto xl:hidden">
                            <img
                                src={phone1}
                                className="object-contain h-full max-h-[50vh] lg:max-h-[40vh] max-w-[40vw]"
                            />
                            <img
                                src={phone2}
                                className="object-contain h-full max-h-[50vh] lg:max-h-[40vh] max-w-[40vw]"
                            />
                        </div>

                        <img src={phone1} className="object-contain max-h-[50vh] lg:max-h-[40vh] hidden xl:block" />
                        <img src={phone2} className="object-contain max-h-[50vh] lg:max-h-[40vh] hidden xl:block" />

                        <div className="flex flex-col justify-between xl:max-w-[50rem] ml-auto">
                            <div>
                                <Title title="For Developers" />
                                <TextP className="mt-4">
                                    We create a playground that allows existing and new applications to jointly use IT
                                    and blockchain solutions.
                                </TextP>
                            </div>

                            <div>
                                <Title title="For Business" />
                                <TextP className="mt-4">
                                    We create a new way of communication with customers in the visibility zone. The
                                    ability to create AR advertising and digital rights for it.
                                </TextP>
                            </div>

                            <div>
                                <Title title="AR Nft" />
                                <TextP className="mt-4">
                                    A special format of NFT for AR objects, allowing the creation and exchange of
                                    digital rights for advertising, objects, facts, and achievements in the AR space,
                                    with spatial position and volume of the object recorded on the blockchain.
                                </TextP>
                            </div>

                            <div className="flex gap-2 md:gap-4">
                                <a href={routes.product}>
                                    <DefaultButton className="bg-white text-gray90">Product</DefaultButton>
                                </a>
                                <a href={routes.product}>
                                    <DefaultButton className="bg-white text-gray90">Ar</DefaultButton>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-span-12 bg-light-bg px-4 py-10 md:p-10">
                    <div className="flex flex-col-reverse xl:flex-row gap-10 xl:gap-4">
                        <div className="flex flex-col justify-between xl:max-w-[50rem] mr-auto">
                            <div>
                                <Title title="OUr Map" />
                                <Subtitle subtitle="A coordinate system that integrates AR with the real world." />
                                <TextP className="mt-4">
                                    Geolocation allows you to link and discover AR objects in their actual location, map
                                    a route, and find them in augmented reality, view the history of movements, and the
                                    description of the object.
                                </TextP>
                            </div>

                            <div>
                                <Title title="For Artists" />
                                <TextP className="mt-4">
                                    We create a space for creating, publishing, and selling AR objects, collaborating
                                    with brands and businesses.
                                </TextP>
                            </div>

                            <div>
                                <Title title="For Users" />
                                <TextP className="mt-4">
                                    We create a personalized space for any AR tools, searching for objects, goods, and
                                    services nearby.
                                </TextP>
                            </div>

                            <div className="flex gap-2 md:gap-4 justify-end">
                                <a href={routes.map}>
                                    <DefaultButton className="bg-white text-gray90">Map</DefaultButton>
                                </a>
                                <a href={import.meta.env.VITE_APP_NFTST_APPSTORE_URL}>
                                    <DefaultButton className="bg-white">
                                        <img src={appStoreButton} />
                                    </DefaultButton>
                                </a>
                                <a href={import.meta.env.VITE_APP_NFTST_PLAYMARKET_URL}>
                                    <DefaultButton className="bg-white">
                                        <img src={playMarketButton} />
                                    </DefaultButton>
                                </a>
                            </div>
                        </div>

                        <div className="flex gap-4 mx-auto xl:hidden">
                            <img
                                src={phoneForMapTwo}
                                className="object-contain h-full max-h-[50vh] lg:max-h-[40vh] max-w-[40vw]"
                            />
                            <img
                                src={phoneForMapOne}
                                className="object-contain h-full max-h-[50vh] lg:max-h-[40vh] max-w-[40vw]"
                            />
                        </div>

                        <img
                            src={phoneForMapTwo}
                            className="object-contain max-h-[50vh] lg:max-h-[40vh] hidden xl:block"
                        />
                        <img
                            src={phoneForMapOne}
                            className="object-contain max-h-[50vh] lg:max-h-[40vh] hidden xl:block"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

// const ForUsersText = ({ className }: { className?: string }) => {
//     return (
//         <div className={`flex flex-col justify-between ${className ?? ""}`}>
//             <div>
//                 <Title title="for Users" />
//                 <TextP className="mt-4">
//                     Users can personalise the AR space according to their preferences, use various AR services within a
//                     single space, and searching for objects, goods, and services within the field of view.
//                 </TextP>
//             </div>

//             <div className="mt-8">
//                 <Subtitle subtitle="How can you choose Apps?" className="uppercase" />
//                 <TextP className="mt-4">
//                     Each Layer is a stream of content that you can choose to include or exclude from your augmented
//                     reality experience. For example, if you want to focus solely on the navigation, you can remove it
//                     from the main screen it your App. We integrate a variety of augmented reality apps, offering them to
//                     you at no cost. Create your personalised augmented reality experience by connecting the layers that
//                     are interesting for you with AR Spatially.
//                 </TextP>
//             </div>

//             <div className="flex gap-1 mt-10 justify-center md:justify-start">
//                 <a href={import.meta.env.VITE_APP_NFTST_APPSTORE_URL}>
//                     <DefaultButton className="bg-white">
//                         <img src={appStoreButton} />
//                     </DefaultButton>
//                 </a>
//                 <a href={import.meta.env.VITE_APP_NFTST_PLAYMARKET_URL}>
//                     <DefaultButton className="bg-white">
//                         <img src={playMarketButton} />
//                     </DefaultButton>
//                 </a>
//             </div>
//         </div>
//     );
// };

export { GetStartedSection };
