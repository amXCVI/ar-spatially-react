export interface ApiResponseInterface<T> {
    data: T;
    status: number;
    timestamp: string;
}

export interface ApiResponseErrorInterface {
    error: string;
    status: number;
    timestamp: string;
}
