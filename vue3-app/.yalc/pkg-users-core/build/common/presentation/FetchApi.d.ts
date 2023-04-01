export interface ApiResponse<T> {
    data: T;
    status: number;
    statusText: string;
}
export declare function fetchData<T>(url: string): Promise<T>;
