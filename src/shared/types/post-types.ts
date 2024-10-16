export interface PostInterface {
    id: string;
    type: PostTypes;
    owner: PostUserInterface;
    quote?: string;
    quoteTags?: QuoteTagInterface[];
    arPostInfo: {
        id: string;
        author: PostUserInterface;
        content: string;
        postTags?: PostTagInterface[];
        previewId?: string;
        lat: number;
        lng: number;
        location?: string;
        createdAt: number;
        updatedAt: number;
    };
    likes: number;
    userLike: boolean;
    countComments: number;
    createdAt: number;
    updatedAt: number;
}

export interface PostUserInterface {
    userId: string;
    name: string;
    nickname: string;
    avatarId?: string;
}

export interface QuoteTagInterface {
    id: number;
    postId: string;
    userId: string;
    nickname: string;
}

export interface PostTagInterface {
    id: number;
    postInfoId: string;
    userId: string;
    nickname: string;
}

export interface PostImageInterface {
    id: string;
    postInfoId: string;
    imageType: PostImageTypes;
    fileId: string;
}

export interface PostVideoInterface {
    id: string;
    postInfoId: string;
    videoType: PostVideoTypes;
    fileId: string;
}

export enum PostImageTypes {
    JPG = "JPG",
}

export enum PostVideoTypes {
    MP4 = "MP4",
}

export enum PostTypes {
    POST = "POST",
    QUOTE = "QUOTE",
    REPOST = "REPOST",
}

export enum FeedsPageModes {
    ALL_FEED = "All Feed",
    MY_FEED = "My Feed",
    // MY_DRAFTS = "My Drafts",
    // SAVED = "Saved",
}
