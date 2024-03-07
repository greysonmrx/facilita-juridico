import { ICustomer } from "../models/ICustomer";

type ShortestPath = {
  blocks: number;
  customers: ICustomer[];
};

function findTheShortestPath(paths: ICustomer[][]): ShortestPath | null {
  const shortestPath: ShortestPath | null = paths.reduce(
    (previousValue: ShortestPath | null, currentValue: ICustomer[]) => {
      let blocks = 0;
      let lastX = 0;
      let lastY = 0;

      currentValue.forEach((customer) => {
        blocks += Math.abs(customer.x - lastX) + Math.abs(customer.y - lastY);

        lastX = customer.x;
        lastY = customer.y;
      });

      // Go back to the company
      blocks += Math.abs(lastX) + Math.abs(lastY);

      if (!previousValue || blocks < previousValue.blocks) {
        return {
          blocks,
          customers: currentValue,
        };
      } else {
        return previousValue;
      }
    },
    null
  );

  return shortestPath;
}

export { findTheShortestPath };
