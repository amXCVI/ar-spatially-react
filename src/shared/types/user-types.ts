export interface UserInterface {
    avatarId?: string;
    email: string;
    language: string;
    name?: string;
    nickname?: string;
    phone?: string;
    publicAddress?: string;
    role: UserRole;
    rulesAccepted: true;
    status: UserStatus;
    system: SystemName;
    userId: string;
}

export enum UserRole {
    USER = "USER",
    DEVELOPER = "DEVELOPER",
    ARTIST = "ARTIST",
    ADMI = "ADMIN",
}

export enum UserStatus {
    ACTIVE = "ACTIVE",
    NOT_VERIFIED = "NOT_VERIFIED",
    NOT_ACTIV = "NOT_ACTIVE",
}

export enum SystemName {
    DESKTOP = "DESKTOP",
    ANDROID = "ANDROID",
    IOS = "IOS",
    HUAWEI = "HUAWEI",
    AMAZON = "AMAZON",
    UNKNOW = "UNKNOWN",
}
