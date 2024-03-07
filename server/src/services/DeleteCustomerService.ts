import prismaClient from "../prisma";

import { ICustomer } from "../models/ICustomer";

type DeleteCustomerServiceRequest = Pick<ICustomer, "id">;

type DeleteCustomerServiceResponse = void;

class DeleteCustomerService {
  public async perform({
    id,
  }: DeleteCustomerServiceRequest): Promise<DeleteCustomerServiceResponse> {
    const checkUserExists = await prismaClient.$queryRaw<ICustomer[]>`
        SELECT * FROM customers WHERE id = ${id}
    `;

    if (!checkUserExists.length) {
      throw new Error("Usuário não existe");
    }

    await prismaClient.customer.delete({
      where: { id },
    });
  }
}

export { DeleteCustomerService };
