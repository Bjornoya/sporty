const BASE_API_URL = (import.meta.env.VITE_API_URL ?? '').replace(/\/$/, '')

const headers = {
  Accept: 'application/json',
}

type QueryParamPrimitive = string | number | boolean

export type QueryParams = Record<
  string,
  QueryParamPrimitive | QueryParamPrimitive[] | null | undefined
>

function isValidQueryParamValue(value: unknown): value is QueryParamPrimitive {
  if (value === null || value === undefined || value === '') {
    return false
  }

  return typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean'
}

const handleSuccessResponse = async (response: Response) => {
  if (response.status === 204) {
    return {}
  }

  return response.json()
}

const handleErrorResponse = async (response: Response) => {
  if (response.status === 429) {
    throw new Error('TheSportsDB is rate-limiting requests. Wait a few seconds, then retry.')
  }

  throw new Error(`TheSportsDB request failed (${response.status})`)
}

const handleResponse = async (response: Response) => {
  if (response.ok) {
    return handleSuccessResponse(response)
  }

  return handleErrorResponse(response)
}

const createEndpointUrl = (url: string, queryParams?: QueryParams) => {
  const endpoint = `${BASE_API_URL}${url}`

  if (!queryParams) {
    return endpoint
  }

  const searchParams = new URLSearchParams()

  Object.entries(queryParams).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach((item) => {
        if (!isValidQueryParamValue(item)) {
          return
        }

        searchParams.append(`${key}[]`, item.toString())
      })
      return
    }

    if (!isValidQueryParamValue(value)) {
      return
    }

    searchParams.append(key, value.toString())
  })

  const query = searchParams.toString()
  return query ? `${endpoint}?${query}` : endpoint
}

const request = async <TResponse>({
  url,
  method = 'GET',
  queryParams,
  data,
  options = {},
}: {
  url: string
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE'
  queryParams?: QueryParams
  data?: unknown
  options?: RequestInit
}): Promise<TResponse> => {
  const endpoint = createEndpointUrl(url, queryParams)
  const body = data === undefined ? undefined : JSON.stringify(data)

  const response = await fetch(endpoint, {
    method,
    headers,
    body,
    ...options,
  })

  return handleResponse(response) as Promise<TResponse>
}

export const api = {
  get: <TResponse>(url: string, queryParams?: QueryParams, options?: RequestInit) =>
    request<TResponse>({ url, queryParams, options, method: 'GET' }),

  post: <TResponse>(url: string, data?: unknown, options?: RequestInit) =>
    request<TResponse>({ url, data, options, method: 'POST' }),

  put: <TResponse>(url: string, data?: unknown, options?: RequestInit) =>
    request<TResponse>({ url, data, options, method: 'PUT' }),

  delete: <TResponse>(url: string, options?: RequestInit) =>
    request<TResponse>({ url, options, method: 'DELETE' }),
}
