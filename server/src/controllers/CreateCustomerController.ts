import { FastifyReply, FastifyRequest } from "fastify";

import { ICustomer } from "../models/ICustomer";

import { CreateCustomerService } from "../services/CreateCustomerService";

class CreateCustomerController {
  public async handle(request: FastifyRequest, reply: FastifyReply) {
    const { name, email, phone, x, y } = request.body as Pick<
      ICustomer,
      "name" | "email" | "phone" | "x" | "y"
    >;

    const createCustomer = new CreateCustomerService();

    const customer = await createCustomer.perform({ name, email, phone, x, y });

    reply.status(201).send(customer);
  }
}

export { CreateCustomerController };
