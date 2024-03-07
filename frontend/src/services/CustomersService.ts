import { ICustomer } from "@/models/ICustomer";

import { APIError } from "@/errors/APIError";

import { HttpClient } from "./utils/HttpClient";

export type CreateCustomerRequest = Pick<
  ICustomer,
  "name" | "email" | "phone" | "x" | "y"
>;

export type CreateCustomerResponse = ICustomer;

export type ListCustomersRequest = Partial<
  Pick<ICustomer, "name" | "email" | "phone">
>;

export type ListCustomersResponse = ICustomer[];

export type DeleteCustomerRequest = Pick<ICustomer, "id">;

export type DeleteCustomerResponse = void;

class CustomersService {
  private httpClient = HttpClient;

  public async list({
    name,
    email,
    phone,
  }: ListCustomersRequest): Promise<ListCustomersResponse> {
    try {
      const queryParams: string[] = [];

      if (name) {
        queryParams.push(`name=${name}`);
      }

      if (email) {
        queryParams.push(`email=${email}`);
      }

      if (phone) {
        queryParams.push(`phone=${phone}`);
      }

      const response = await this.httpClient.get<ICustomer[]>(
        `/customers${queryParams ? `?${queryParams.join("&")}` : null}`
      );

      return response.data;
    } catch (error) {
      const parsedError = error as any;

      let errorMessage = parsedError?.response?.data?.message;

      if (!errorMessage) {
        errorMessage = "Estamos tendo problemas ao tentar listar os clientes";
      }

      throw new APIError(errorMessage);
    }
  }

  public async create({
    name,
    email,
    phone,
    x,
    y,
  }: CreateCustomerRequest): Promise<CreateCustomerResponse> {
    try {
      const response = await this.httpClient.post<
        ICustomer,
        CreateCustomerRequest
      >("/customers", {
        name,
        email,
        phone,
        x,
        y,
      });

      return response.data;
    } catch (error) {
      const parsedError = error as any;

      let errorMessage = parsedError?.response?.data?.message;

      if (!errorMessage) {
        errorMessage = "Estamos tendo problemas ao tentar criar o cliente";
      }

      throw new APIError(errorMessage);
    }
  }

  public async delete({
    id,
  }: DeleteCustomerRequest): Promise<DeleteCustomerResponse> {
    try {
      await this.httpClient.delete(`/customers/${id}`);
    } catch (error) {
      const parsedError = error as any;

      let errorMessage = parsedError?.response?.data?.message;

      if (!errorMessage) {
        errorMessage = "Estamos tendo problemas ao tentar excluir o cliente";
      }

      throw new APIError(errorMessage);
    }
  }
}

const CustomersServiceInstance = new CustomersService();

export { CustomersServiceInstance as CustomersService };
