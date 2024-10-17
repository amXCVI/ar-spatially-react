export interface UserInterface {
    avatarId?: string;
    email: string;
    language: string;
    name?: string;
    nickname: string;
    phone?: string;
    publicAddress?: string;
    role: UserRole;
    rulesAccepted: true;
    status: UserStatus;
    system: SystemName;
    userId: string;
    condition: UserCondition;
    provider: string;
}

export interface UserProfileInterface {
    userId: string;
    name: string;
    nickname: string;
    avatarId: string;
    postsCount: number;
    subscribersCount: number;
    subscriptionsCount: number;
}

export enum UserRole {
    USER = "USER",
    DEVELOPER = "DEVELOPER",
    ARTIST = "ARTIST",
    ADMI = "ADMIN",
}

export enum UserStatus {
    USER = "USER",
    DEVELOPER = "DEVELOPER",
    ARTIST = "ARTIST",
}

export enum SystemName {
    DESKTOP = "DESKTOP",
    ANDROID = "ANDROID",
    IOS = "IOS",
    HUAWEI = "HUAWEI",
    AMAZON = "AMAZON",
    UNKNOW = "UNKNOWN",
}

export enum UserCondition {
    ACTIVE = "ACTIVE",
    NOT_VERIFIED = "NOT_VERIFIED",
    NOT_ACTIVE = "NOT_ACTIVE",
}

export enum UserProviders {
    EMAIL = "EMAIL",
    GOOGLE = "GOOGLE",
    FACEBOOK = "FACEBOOK",
    TWITTER = "TWITTER",
    APPLE = "APPLE",
}
