import PointerLine from "../assets/pointer.svg?react";

import { useWorldInfoHook } from "../model";

interface WrldInfoProps {
    selectedSector: number;
    delta: number;
    className?: string;
}

const WorldInfo = ({ selectedSector, delta, className }: WrldInfoProps) => {
    const { world } = useWorldInfoHook({ selectedSector, delta });

    return (
        <div className={`absolute ${className}`}>
            <div className="flex flex-col gap-4 ml-auto relative">
                <h1 className="onest-bold-24 text-white uppercase">{world?.worldName}</h1>
                <PointerLine className="hidden lg:block absolute -left-20 top-8" />
                <div className="line-clamp-3 manrope-regular-12 text-quick-silver overflow-hidden text-ellipsis">
                    {world?.description.map((descriptionItem, index) => {
                        return (
                            <p className="" key={index + "world_description"}>
                                {descriptionItem}
                            </p>
                        );
                    })}
                </div>
                <div className="flex gap-3">
                    {world?.butterflyes.map((butterfly) => {
                        return (
                            <div
                                key={butterfly.id + "_butterfly"}
                                className="w-20 aspect-square border-2 border-raisin-black rounded-[15px] overflow-hidden cursor-pointer"
                            >
                                <img src={butterfly.imageSrc} />
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export { WorldInfo };
