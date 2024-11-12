import defaultUserAvatar from "./default-user-avatar.svg";

interface UserAvatarProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    avatarId?: string;
}

const UserAvatar = (props: UserAvatarProps) => {
    return (
        <img
            src={
                props.avatarId
                    ? `${import.meta.env.VITE_APP_API_BASE_URL}gateway/file/get?fileId=${props.avatarId}`
                    : defaultUserAvatar
            }
            className={`rounded-full aspect-square ${props.className}`}
            alt={props.alt}
        />
    );
};

export { UserAvatar };
