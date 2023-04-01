export async function fetchData(url) {
    const response = await fetch(url);
    const responseData = {
        data: await response.json(),
        status: response.status,
        statusText: response.statusText,
    };
    if (response.ok) {
        return responseData.data;
    }
    else {
        throw new Error(response.statusText);
    }
}
//# sourceMappingURL=FetchApi.js.map