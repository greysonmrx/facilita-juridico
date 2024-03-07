import React from "react";

import { ICustomer } from "@/models/ICustomer";

import { APIError } from "@/errors/APIError";

import { useFilters } from "@/hooks/useFilters";

import { CustomersService } from "@/services/CustomersService";

type Filters = {
  name?: string;
  email?: string;
  phone?: string;
};

interface UseCustomersControllerData {
  filters: Filters;
  isLoading: boolean;
  customers: ICustomer[];
  isFiltersDialogOpen: boolean;
  isCreateCustomerDialogOpen: boolean;
  isVisitationOrderDialogOpen: boolean;
  handleCreateCustomer: (customer: ICustomer) => void;
  handleRemoveFilter: (filterKey: keyof Filters) => void;
  handleSetIsFiltersDialogOpen: (value: boolean) => void;
  handleDeleteCustomer: (customerId: ICustomer["id"]) => void;
  handleSetIsCreateCustomerDialogOpen: (value: boolean) => void;
  handleSetIsVisitationOrderDialogOpen: (value: boolean) => void;
}

const useCustomersController = (): UseCustomersControllerData => {
  const { filters, handleRemoveFilter } = useFilters();

  const [isLoading, setIsLoading] = React.useState(true);
  const [isFiltersDialogOpen, setIsFiltersDialogOpen] = React.useState(false);
  const [isCreateCustomerDialogOpen, setIsCreateCustomerDialogOpen] =
    React.useState(false);
  const [isVisitationOrderDialogOpen, setIsVisitationOrderDialogOpen] =
    React.useState(false);
  const [customers, setCustomers] = React.useState<ICustomer[]>([]);

  const handleFetchCustomers = React.useCallback(async () => {
    try {
      setIsLoading(true);

      const { name, email, phone } = filters;

      const fetchedCustomers = await CustomersService.list({
        name,
        email,
        phone,
      });

      setCustomers(fetchedCustomers);
    } catch (error) {
      if (error instanceof APIError) {
        alert(error.message);
      }
    } finally {
      setIsLoading(false);
    }
  }, [filters]);

  const handleSetIsFiltersDialogOpen = React.useCallback((value: boolean) => {
    setIsFiltersDialogOpen(value);
  }, []);

  const handleSetIsCreateCustomerDialogOpen = React.useCallback(
    (value: boolean) => {
      setIsCreateCustomerDialogOpen(value);
    },
    []
  );

  const handleSetIsVisitationOrderDialogOpen = React.useCallback(
    (value: boolean) => {
      setIsVisitationOrderDialogOpen(value);
    },
    []
  );

  const handleCreateCustomer = React.useCallback((customer: ICustomer) => {
    setCustomers((prevState) => [...prevState, customer]);
    setIsCreateCustomerDialogOpen(false);
  }, []);

  const handleDeleteCustomer = React.useCallback(
    async (customerToBeDeletedId: ICustomer["id"]) => {
      const customerListBeforeDelete = customers;

      try {
        setCustomers((prevState) =>
          prevState.filter((customer) => customer.id !== customerToBeDeletedId)
        );

        await CustomersService.delete({
          id: customerToBeDeletedId,
        });
      } catch (error) {
        setCustomers(customerListBeforeDelete);

        if (error instanceof APIError) {
          alert(error.message);
        }
      }
    },
    [customers]
  );

  React.useEffect(() => {
    handleFetchCustomers();
  }, [handleFetchCustomers]);

  return {
    filters,
    isLoading,
    customers,
    isFiltersDialogOpen,
    isCreateCustomerDialogOpen,
    isVisitationOrderDialogOpen,
    handleRemoveFilter,
    handleCreateCustomer,
    handleDeleteCustomer,
    handleSetIsFiltersDialogOpen,
    handleSetIsCreateCustomerDialogOpen,
    handleSetIsVisitationOrderDialogOpen,
  };
};

export { useCustomersController };
