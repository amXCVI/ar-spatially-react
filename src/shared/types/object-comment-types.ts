export interface ObjectCommentInterface {
    id: number;
    objectId: string;
    author: {
        userId: string;
        name?: string;
        nickname: string;
        avatarId?: string;
    };
    commentText: string;
    answerToId: number;
    createdAt: number;
    updatedAt: number;
    commentTags?: ObjectCommentTagInterface[];
}

export interface ObjectCommentTagInterface {
    id: number;
    commentId: number;
    userId: string;
    nickname: string;
}
