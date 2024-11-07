const SearchParamsConstants = {
    objectIdSearchParamsKey: "objectId",
    feedIdSearchParamsKey: "feedId",
    feedsByUserSearchParamsKey: "userId",
    userIdSearchParamsKey: "userId",
    objectsOrFeedsSearchParamsKey: "pageMode", // UserPageModes
};

export enum UserPageModes {
    OBJECTS = "objects",
    FEEDS = "feeds",
}

export { SearchParamsConstants };
