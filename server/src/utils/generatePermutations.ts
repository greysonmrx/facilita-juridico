import { ICustomer } from "../models/ICustomer";

function generatePermutations(customers: ICustomer[]) {
  const permutations: ICustomer[][] = [];

  function addPermutation(startIndex: number) {
    if (startIndex === customers.length - 1) {
      permutations.push(customers.slice());
      return;
    }

    for (let i = startIndex; i < customers.length; i++) {
      [customers[startIndex], customers[i]] = [
        customers[i],
        customers[startIndex],
      ];

      addPermutation(startIndex + 1);

      [customers[startIndex], customers[i]] = [
        customers[i],
        customers[startIndex],
      ];
    }
  }

  addPermutation(0);

  return permutations.filter(
    (permutation) => permutation[0].id <= permutation[permutation.length - 1].id
  );
}

export { generatePermutations };
