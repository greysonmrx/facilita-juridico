import prismaClient from "../prisma";

import { ICustomer } from "../models/ICustomer";

type CreateCustomerServiceRequest = Pick<
  ICustomer,
  "name" | "email" | "phone" | "x" | "y"
>;

type CreateCustomerServiceResponse = ICustomer;

class CreateCustomerService {
  public async perform({
    name,
    email,
    phone,
    x,
    y,
  }: CreateCustomerServiceRequest): Promise<CreateCustomerServiceResponse> {
    const checkUserExists = await prismaClient.$queryRaw<ICustomer[]>`
        SELECT * FROM customers WHERE email = ${email}
    `;

    if (checkUserExists.length) {
      throw new Error("Usuário já cadastrado");
    }

    const customer = await prismaClient.customer.create({
      data: {
        name,
        email,
        phone,
        x,
        y,
      },
    });

    return customer;
  }
}

export { CreateCustomerService };
