import { ReactNode } from "react";

import { DefaultButton } from "@/shared/ui/buttons";

import appStoreButton from "/images/landing/get-started-section/app-store-button.svg";
import playMarketButton from "/images/landing/get-started-section/play-market-button.svg";

import phoneForUsers from "/images/landing/get-started-section/phone_1.png";
import phoneForMapOne from "/images/landing/get-started-section/phone_2.png";
import phoneForMapTwo from "/images/landing/get-started-section/phone_3.png";

const GetStartedSection = () => {
    return (
        <div className="flex flex-col justify-between">
            <div
                className="container mx-auto rounded-[40px]
                           overflow-hidden
                           grid grid-cols-12 gap-1
                          "
            >
                <div className="col-span-12 lg:col-span-5 bg-light-bg p-4 py-10 md:p-10">
                    <div className="flex flex-col h-full">
                        <Title title="Developers" />
                        <Subtitle subtitle="Coming Soon" className="mt-2.5" />
                        <TextP className="mt-2.5">
                            We aim to create a comprehensive toolkit that allows both existing and emerging applications
                            to connect and utilize the open features of other applications in the ecosystem, including
                            blockchain functions.
                        </TextP>
                        <div className="m-auto">
                            <DefaultButton className="bg-white text-gray90 mt-4">Playground</DefaultButton>
                        </div>
                    </div>
                </div>
                <div className="col-span-12 lg:col-span-7 bg-light-bg p-4 py-10 md:p-10">
                    <div className="flex flex-col md:flex-row gap-4">
                        <img src={phoneForUsers} className="object-contain max-h-[50dvh]" />

                        <div className="flex flex-col justify-between">
                            <div>
                                <Title title="for Users" />
                                <TextP className="mt-4">
                                    Users can personalise the AR space according to their preferences, use various AR
                                    services within a single space, and searching for objects, goods, and services
                                    within the field of view.
                                </TextP>
                            </div>

                            <div className="mt-8">
                                <Subtitle subtitle="How can you choose Apps? " />
                                <TextP className="mt-4">
                                    Each Layer is a stream of content that you can choose to include or exclude from
                                    your augmented reality experience. For example, if you want to focus solely on the
                                    navigation, you can remove it from the main screen it your App. We integrate a
                                    variety of augmented reality apps, offering them to you at no cost. Create your
                                    personalised augmented reality experience by connecting the layers that are
                                    interesting for you with AR Spatially.
                                </TextP>
                            </div>

                            <div className="flex gap-1 mt-10 justify-center md:justify-start">
                                <DefaultButton className="bg-white">
                                    <img src={appStoreButton} />
                                </DefaultButton>
                                <DefaultButton className="bg-white">
                                    <img src={playMarketButton} />
                                </DefaultButton>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-span-12 bg-light-bg px-4 py-10 md:p-10">
                    <div className="flex gap-4">
                        <div className="flex flex-col justify-between">
                            <Title title="OUr Map" />
                            <Subtitle subtitle="We use geopositioning to navigate through objects." className="mt-5" />
                            <TextP className="mt-4">
                                A coordinate system that enables the integration of AR with the real world. Find
                                products and services right in your line of sight. Geopositioning allows you to turn
                                your object into a geolocated NFT using blockchain, showcasing it in its actual location
                                for others to discover.
                            </TextP>

                            <Subtitle subtitle="Why do we need a map?" className="mt-5" />
                            <TextP className="mt-4">
                                On the map, users have the ability to build a route to any object and view it in
                                augmented reality. Additionally, users can view the history of movements and a
                                description of the object.
                            </TextP>

                            <div className="flex justify-center md:justify-start mt-4 ">
                                <DefaultButton className="bg-white text-gray90">Map</DefaultButton>
                            </div>
                        </div>

                        <img src={phoneForMapTwo} className="object-contain max-h-[50dvh]" />
                        <img src={phoneForMapOne} className="object-contain max-h-[50dvh]" />
                    </div>
                </div>
            </div>
        </div>
    );
};

const Title = ({ title }: { title: string }) => {
    return <h2 className="h2-34-700 text-gray90 uppercase">{title}</h2>;
};

const Subtitle = ({ subtitle, className }: { subtitle: string; className?: string }) => {
    return <h3 className={`medium-20 text-gray90 ${className ?? ""}`}>{subtitle}</h3>;
};

const TextP = ({ children, className }: { children: ReactNode; className?: string }) => {
    return <p className={`regular-16 text-gray90 text-justify ${className ?? ""}`}>{children}</p>;
};

export { GetStartedSection };
