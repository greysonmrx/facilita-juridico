import { FastifyReply, FastifyRequest } from "fastify";

import { ShowOrderVisitationService } from "../services/ShowOrderVisitationService";

class ShowOrderVisitationController {
  public async handle(_request: FastifyRequest, reply: FastifyReply) {
    const showOrderVisitation = new ShowOrderVisitationService();

    const orderVisitation = await showOrderVisitation.perform();

    reply.send(orderVisitation);
  }
}

export { ShowOrderVisitationController };
