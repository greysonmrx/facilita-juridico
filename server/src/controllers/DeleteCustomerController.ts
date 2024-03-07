import { FastifyReply, FastifyRequest } from "fastify";

import { ICustomer } from "../models/ICustomer";

import { DeleteCustomerService } from "../services/DeleteCustomerService";

class DeleteCustomerController {
  public async handle(request: FastifyRequest, reply: FastifyReply) {
    const { id } = request.params as Pick<ICustomer, "id">;

    const deleteCustomer = new DeleteCustomerService();

    await deleteCustomer.perform({ id: Number(id) });

    reply.status(204).send();
  }
}

export { DeleteCustomerController };
