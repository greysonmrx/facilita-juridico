import { FastifyReply, FastifyRequest } from "fastify";

import { ICustomer } from "../models/ICustomer";

import { ListCustomersService } from "../services/ListCustomersService";

class ListCustomersController {
  public async handle(request: FastifyRequest, reply: FastifyReply) {
    const { name, email, phone } = request.query as Partial<
      Pick<ICustomer, "name" | "email" | "phone">
    >;

    const listCustomers = new ListCustomersService();

    const customers = await listCustomers.perform({ name, email, phone });

    reply.send(customers);
  }
}

export { ListCustomersController };
