import { useFeedUserHeadHook } from "../model";

const FeedUserHead = () => {
    const { user } = useFeedUserHeadHook();

    return (
        <div className="flex w-full justify-between items-center">
            <div className="flex flex-col">
                <b>{user?.name}</b>
                <span>@{user?.nickname}</span>
            </div>

            <div className="flex gap-6">
                <div className="flex flex-col">
                    <b>{user?.postsCount}</b>
                    <span>posts</span>
                </div>
                <div className="flex flex-col">
                    <b>{user?.subscribersCount}</b>
                    <span>followers</span>
                </div>
                <div className="flex flex-col">
                    <b>{user?.subscriptionsCount}</b>
                    <span>following</span>
                </div>
            </div>

            <button className="border px-4 py-0.5 rounded-xl">Follow</button>
        </div>
    );
};

export { FeedUserHead };
