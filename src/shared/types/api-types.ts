export interface ApiResponseInterface<T> {
    data: T;
    status: number;
    timestamp: string;
}
