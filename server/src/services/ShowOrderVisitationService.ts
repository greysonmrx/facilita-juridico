import prismaClient from "../prisma";

import { ICustomer } from "../models/ICustomer";

import { findTheShortestPath } from "../utils/findTheShortestPath";
import { generatePermutations } from "../utils/generatePermutations";

type ShowOrderVisitationServiceResponse = ICustomer[];

class ShowOrderVisitationService {
  public async perform(): Promise<ShowOrderVisitationServiceResponse> {
    const customers = await prismaClient.$queryRaw<
      ICustomer[]
    >`SELECT * FROM customers`;

    const sortedCustomers = customers.sort(
      (customerA, customerB) => customerA.id - customerB.id
    );

    const permutations = generatePermutations(sortedCustomers);

    const shortestPath = findTheShortestPath(permutations);

    return shortestPath?.customers || [];
  }
}

export { ShowOrderVisitationService };
