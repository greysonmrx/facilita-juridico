import Axios, { AxiosInstance, AxiosResponse } from "axios";

class HttpClient {
  private client: AxiosInstance;

  constructor() {
    this.client = Axios.create({
      baseURL: import.meta.env.VITE_APP_API_URL,
    });
  }

  public get<ResponseType>(url: string): Promise<AxiosResponse<ResponseType>> {
    return this.client.get<ResponseType>(url);
  }

  public post<ResponseType, PayloadType>(
    url: string,
    payload: PayloadType
  ): Promise<AxiosResponse<ResponseType>> {
    return this.client.post<ResponseType>(url, payload);
  }

  public delete(url: string): Promise<AxiosResponse<void>> {
    return this.client.delete(url);
  }
}

const HttpClientInstance = new HttpClient();

export { HttpClientInstance as HttpClient };
