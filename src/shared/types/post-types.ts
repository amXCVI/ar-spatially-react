export interface PostInterface {
    id: string;
    type: PostTypes;
    owner: {
        userId: string;
        name: string;
        nickname: string;
        avatarId: string;
    };
    quote: string;
    quoteTags: QuoteTagInterface[];
    arPostInfo: {
        id: string;
        author: {
            userId: string;
            name: string;
            nickname: string;
            avatarId: string;
        };
        content: string;
        postTags: PostTagInterface[];
        previewId: string;
        lat: number;
        lng: number;
        location: string;
        createdAt: number;
        updatedAt: number;
    };
    likes: number;
    userLike: boolean;
    countComments: number;
    createdAt: number;
    updatedAt: number;
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

export enum PostTypes {
    POST = "POST",
}
