export interface ApiResponse<T> {
  data: T;
  status: number;
  statusText: string;
}

export async function fetchData<T>(url: string): Promise<T> {
  const response = await fetch(url);
  const responseData: ApiResponse<T> = {
    data: await response.json(),
    status: response.status,
    statusText: response.statusText,
  };
  if (response.ok) {
    return responseData.data;
  } else {
    throw new Error(response.statusText);
  }
}