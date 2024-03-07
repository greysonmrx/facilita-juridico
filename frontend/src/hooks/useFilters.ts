import React from "react";

import { FiltersContext, FiltersContextData } from "@/contexts/FiltersContext";

const useFilters = (): FiltersContextData => {
  const context = React.useContext(FiltersContext);

  if (!context) {
    throw new Error("useFilters should be used within RegisterUserProvider");
  }

  return context;
};

export { useFilters };
