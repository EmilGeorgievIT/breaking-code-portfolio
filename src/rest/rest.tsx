/**
 * Generic Fetch Wrapper
 */

type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';

interface RequestOptions extends RequestInit {
    headers?: Record<string, string>;
}

function request(method: HttpMethod) {
    return async <TResponse = any, TBody = Record<string, unknown>>(
        url: string,
        data: TBody = {} as TBody,
        options: RequestOptions = {}
    ): Promise<TResponse> => {

        const isGet = method === 'GET';
        const hasData = Object.keys(data as object).length > 0;

        const response = await fetch(url, {
            method,
            headers: {
                'Content-Type': 'application/json',
                ...options.headers,
            },
            // GET requests should not have a body
            body: !isGet && hasData ? JSON.stringify(data) : undefined,
            ...options,
        });

        if (!response.ok) {
            const errorData = await response.json().catch(() => ({}));
            throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
        }

        return response.json();
    };
}

export const get = request('GET');
export const post = request('POST');
export const put = request('PUT');
export const remove = request('DELETE');