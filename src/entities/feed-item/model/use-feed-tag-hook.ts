import { useNavigate } from "react-router-dom";

import { routes } from "@/shared/config";
import { SearchParamsConstants } from "@/shared/config/constants";
import { PostCommentTagInterface, PostTagInterface, QuoteTagInterface } from "@/shared/types";

const useFeedTagHook = ({ tag }: { tag: PostCommentTagInterface | PostTagInterface | QuoteTagInterface }) => {
    const navigate = useNavigate();

    const handleClickTag = () => {
        navigate(
            `/${routes.feeds}/${routes.feedsByUser}?${SearchParamsConstants.feedsByUserSearchParamsKey}=${tag.userId}`,
        );
    };

    return { handleClickTag };
};

export { useFeedTagHook };
