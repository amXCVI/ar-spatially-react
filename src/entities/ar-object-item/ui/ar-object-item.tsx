import { Link } from "react-router-dom";

import { SearchParamsConstants } from "@/shared/config/constants";
import { ObjectInterface } from "@/shared/types";

import FavoriteIcon from "../assets/favorite-icon.svg?react";
import LikeIcon from "../assets/like-icon.svg?react";

import { useArObjectItemHook } from "../model";

interface ArObjectItemProps {
    object: ObjectInterface;
}

const ArObjectItem = ({ object }: ArObjectItemProps) => {
    const { handleLikeObject, handleFavoriteObject } = useArObjectItemHook({ object });

    return (
        <div
            className="w-full rounded-[30px] overflow-hidden p-5 pb-14 relative flex justify-center items-center 
                       border border-silver-sand"
        >
            <img
                src={`${import.meta.env.VITE_APP_API_BASE_URL}gateway/file/get?fileId=${object.previewId}`}
                className="rounded-[20px]"
            />
            {/* <Status status={object.status} /> */}

            <div className="absolute top-3 right-3 cursor-pointer p-1" onClick={handleFavoriteObject}>
                <FavoriteIcon style={{ fill: object.userFavorite ? "red" : "white" }} />
            </div>
            <div className="flex gap-1 justify-between p-1 bg-object-item-title-bg rounded-t-[13px] absolute bottom-0 left-0 right-0">
                <Link
                    to={`?${SearchParamsConstants.objectIdSearchParamsKey}=${object.id}`}
                    state={{ object: object }}
                    className="w-full"
                    style={{ maxWidth: "calc(100% - 44px)" }}
                >
                    <span className="regular-16 text-white py-3 pl-4 text-nowrap overflow-hidden text-ellipsis w-full block">
                        {object.title}
                    </span>
                </Link>

                <div
                    className="flex gap-2 items-center rounded-[8px] rounded-br-[25px] p-3 cursor-pointer"
                    onClick={handleLikeObject}
                >
                    <LikeIcon style={{ fill: object.userLike ? "red" : "white" }} />
                </div>
            </div>
        </div>
    );
}; /* nft-card */

// const Status = ({ status }: { status: MarkerStatusEnum }) => {
//     const getColorByStatus = ({ e }: { e: MarkerStatusEnum }) => {
//         switch (e) {
//             case MarkerStatusEnum.NEW:
//                 return "#00BDFF";

//             case MarkerStatusEnum.ON_MODERATION:
//                 return "#e3ff11";

//             case MarkerStatusEnum.MODERATOR_REJECTED:
//                 return "#FF6011";

//             case MarkerStatusEnum.PUBLISHED:
//                 return "#2EFF9B";

//             case MarkerStatusEnum.NOT_PUBLISHED:
//                 return "#6b6b6b";

//             default:
//                 return "#6b6b6b";
//         }
//     };

//     const color = getColorByStatus({ e: status });

//     return <div className={`absolute top-4 right-4 w-2.5 h-2.5 rounded-full`} style={{ background: color }}></div>;
// };

export { ArObjectItem };
