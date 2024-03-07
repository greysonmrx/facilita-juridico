import prismaClient from "../prisma";

import { ICustomer } from "../models/ICustomer";
import { Prisma } from "@prisma/client";

type ListCustomersServiceRequest = Partial<
  Pick<ICustomer, "name" | "email" | "phone">
>;

type ListCustomersServiceResponse = ICustomer[];

class ListCustomersService {
  public async perform({
    name,
    email,
    phone,
  }: ListCustomersServiceRequest): Promise<ListCustomersServiceResponse> {
    const searchConditions: Prisma.Sql[] = [];

    if (name) {
      searchConditions.push(
        Prisma.raw(`LOWER(name) LIKE '%${name.toLocaleLowerCase()}%'`)
      );
    }

    if (email) {
      searchConditions.push(
        Prisma.raw(`LOWER(email) LIKE '%${email.toLocaleLowerCase()}%'`)
      );
    }

    if (phone) {
      searchConditions.push(
        Prisma.raw(`LOWER(phone) LIKE '%${phone.toLocaleLowerCase()}%'`)
      );
    }

    const where = searchConditions.length
      ? Prisma.sql`WHERE ${Prisma.join(searchConditions, " AND ")}`
      : Prisma.empty;

    const customers = await prismaClient.$queryRaw<ICustomer[]>(
      Prisma.sql`SELECT * FROM customers ${where}`
    );

    return customers;
  }
}

export { ListCustomersService };
