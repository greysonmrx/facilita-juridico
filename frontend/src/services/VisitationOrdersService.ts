import { ICustomer } from "@/models/ICustomer";

import { APIError } from "@/errors/APIError";

import { HttpClient } from "./utils/HttpClient";

export type ShowVisitationOrderResponse = ICustomer[];

class VisitationOrdersService {
  private httpClient = HttpClient;

  public async show(): Promise<ShowVisitationOrderResponse> {
    try {
      const response = await this.httpClient.get<ICustomer[]>(
        "/order-visitation"
      );

      return response.data;
    } catch (error) {
      const parsedError = error as any;

      let errorMessage = parsedError?.response?.data?.message;

      if (!errorMessage) {
        errorMessage =
          "Estamos tendo problemas ao tentar buscar a ordem de visitação";
      }

      throw new APIError(errorMessage);
    }
  }
}

const VisitationOrdersServiceInstance = new VisitationOrdersService();

export { VisitationOrdersServiceInstance as VisitationOrdersService };
