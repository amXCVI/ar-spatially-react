import { Link } from "react-router-dom";

import { routes } from "@/shared/config";
import { SearchParamsConstants } from "@/shared/config/constants";
import {
    ObjectCommentTagInterface,
    PostCommentTagInterface,
    PostTagInterface,
    QuoteTagInterface,
} from "@/shared/types";

const AutoTags = ({
    text,
    tags,
    className,
}: {
    text: string;
    tags?: (PostCommentTagInterface | PostTagInterface | QuoteTagInterface | ObjectCommentTagInterface)[] | null;
    className?: string;
}) => {
    if (!tags) {
        return <div className={className}>{text}</div>;
    }

    const parts = text.split(new RegExp(`(${tags.map((tag) => `@${tag.nickname}`).join("|")})`, "gi"));

    return (
        <div className={className}>
            <span>
                {parts.map((part, i) => {
                    const tag = tags.find((t) => `@${t.nickname}` === part);

                    if (tag) {
                        return (
                            <Link
                                key={i}
                                to={`/${routes.user}?${SearchParamsConstants.userIdSearchParamsKey}=${tag.userId}`}
                                className="text-blue-accent"
                            >
                                {part}
                            </Link>
                        );
                    } else {
                        return <span key={i}>{part}</span>;
                    }
                })}
            </span>
        </div>
    );
};

export { AutoTags };
