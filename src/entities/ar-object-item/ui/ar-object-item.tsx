import { MarkerInterface, MarkerStatusEnum } from "@/shared/types";

import ArViewIcon from "../assets/ar-view-icon.svg?react";

interface ArObjectItemProps {
    object: MarkerInterface;
}

const ArObjectItem = ({ object }: ArObjectItemProps) => {
    return (
        <div className="w-full bg-nft-viewer-desc-bg rounded-[30px] overflow-hidden p-5 pb-14 relative">
            <img src={`${import.meta.env.VITE_APP_API_BASE_URL}gateway/file/get?fileId=${object.previewId}`} />
            <Status status={object.status} />
            <div className="flex gap-1 justify-between p-1 bg-object-item-title-bg rounded-t-[13px] absolute bottom-0 left-0 right-0">
                <span className="regular-16 text-white py-3 pl-4 overflow-hidden text-ellipsis">{object.title}</span>
                <div className="flex gap-2 items-center rounded-[8px] rounded-br-[25px] p-3 bg-black-olive cursor-pointer">
                    <ArViewIcon />
                    View
                </div>
            </div>
        </div>
    );
};

const Status = ({ status }: { status: MarkerStatusEnum }) => {
    // ! Разобраться, какой цвет какому статусу соответствует
    const getColorByStatus = ({ e }: { e: MarkerStatusEnum }) => {
        switch (e) {
            case MarkerStatusEnum.NEW:
                return "#00BDFF";

            case MarkerStatusEnum.ON_MODERATION:
                return "#e3ff11";

            case MarkerStatusEnum.MODERATOR_REJECTED:
                return "#FF6011";

            case MarkerStatusEnum.PUBLISHED:
                return "#2EFF9B";

            case MarkerStatusEnum.NOT_PUBLISHED:
                return "#6b6b6b";

            default:
                return "#6b6b6b";
        }
    };

    const color = getColorByStatus({ e: status });

    return <div className={`absolute top-4 right-4 w-2.5 h-2.5 rounded-full`} style={{ background: color }}></div>;
};

export { ArObjectItem };
