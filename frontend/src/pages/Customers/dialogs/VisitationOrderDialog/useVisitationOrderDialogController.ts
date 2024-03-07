import React from "react";

import { APIError } from "@/errors/APIError";

import { ICustomer } from "@/models/ICustomer";

import { VisitationOrdersService } from "@/services/VisitationOrdersService";

interface UseVisitationOrderDialogControllerData {
  isLoading: boolean;
  customers: ICustomer[];
}

const useVisitationOrderDialogController =
  (): UseVisitationOrderDialogControllerData => {
    const [customers, setCustomers] = React.useState<ICustomer[]>([]);
    const [isLoading, setIsLoading] = React.useState(true);

    const handleFetchVisitationOrder = React.useCallback(async () => {
      try {
        setIsLoading(true);

        const visitationOrder = await VisitationOrdersService.show();

        setCustomers(visitationOrder);
      } catch (error) {
        let errorMessage = "Tente novamente";

        if (error instanceof APIError) {
          errorMessage = error.message;
        }

        alert(errorMessage);
      } finally {
        setIsLoading(false);
      }
    }, []);

    React.useEffect(() => {
      handleFetchVisitationOrder();
    }, [handleFetchVisitationOrder]);

    return {
      isLoading,
      customers,
    };
  };

export { useVisitationOrderDialogController };
