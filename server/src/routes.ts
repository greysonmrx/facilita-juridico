import {
  FastifyInstance,
  FastifyPluginOptions,
  FastifyRequest,
  FastifyReply,
} from "fastify";

import { CreateCustomerController } from "./controllers/CreateCustomerController";
import { DeleteCustomerController } from "./controllers/DeleteCustomerController";
import { ListCustomersController } from "./controllers/ListCustomersController";
import { ShowOrderVisitationController } from "./controllers/ShowOrderVisitationController";

async function routes(fastify: FastifyInstance, options: FastifyPluginOptions) {
  fastify.get(
    "/order-visitation",
    async (request: FastifyRequest, reply: FastifyReply) => {
      return new ShowOrderVisitationController().handle(request, reply);
    }
  );

  fastify.get(
    "/customers",
    async (request: FastifyRequest, reply: FastifyReply) => {
      return new ListCustomersController().handle(request, reply);
    }
  );

  fastify.post(
    "/customers",
    async (request: FastifyRequest, reply: FastifyReply) => {
      return new CreateCustomerController().handle(request, reply);
    }
  );

  fastify.delete(
    "/customers/:id",
    async (request: FastifyRequest, reply: FastifyReply) => {
      return new DeleteCustomerController().handle(request, reply);
    }
  );
}

export { routes };
