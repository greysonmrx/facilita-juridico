import React from "react";

import { FiltersProvider } from "@/contexts/FiltersContext";

import { Customers } from "@/pages/Customers";

const App: React.FC = () => {
  return (
    <div className="bg-white w-screen h-screen flex items-center justify-center">
      <FiltersProvider>
        <Customers />
      </FiltersProvider>
    </div>
  );
};

export { App };
