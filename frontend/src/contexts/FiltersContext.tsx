import React from "react";

export type Filters = {
  name?: string;
  email?: string;
  phone?: string;
};

export interface FiltersContextData {
  filters: Filters;
  handleChangeFilters: (filtersToBeUpdated: Partial<Filters>) => void;
  handleRemoveFilter: (filterKey: keyof Filters) => void;
}

const FiltersContext = React.createContext<FiltersContextData>(
  {} as FiltersContextData
);

const FiltersProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [filters, setFilters] = React.useState<Filters>({
    name: undefined,
    email: undefined,
    phone: undefined,
  });

  const handleChangeFilters = React.useCallback(
    (filtersToBeUpdated: Partial<Filters>) => {
      setFilters((prevState) => ({
        ...prevState,
        ...filtersToBeUpdated,
      }));
    },
    []
  );

  const handleRemoveFilter = React.useCallback((filterName: keyof Filters) => {
    setFilters((prevState) => ({
      ...prevState,
      [filterName]: undefined,
    }));
  }, []);

  return (
    <FiltersContext.Provider
      value={{ filters, handleRemoveFilter, handleChangeFilters }}
    >
      {children}
    </FiltersContext.Provider>
  );
};

export { FiltersContext, FiltersProvider };
