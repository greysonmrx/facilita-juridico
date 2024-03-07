import React from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  useForm,
  type FieldErrors,
  type UseFormRegister,
} from "react-hook-form";

import { useFilters } from "@/hooks/useFilters";

const FiltersFormSchema = z.object({
  name: z.string().optional(),
  email: z.string().optional(),
  phone: z.string().optional(),
});

type FiltersFormData = z.infer<typeof FiltersFormSchema>;

interface UseFiltersDialogControllerData {
  fieldErrors: FieldErrors<FiltersFormData>;
  registerField: UseFormRegister<FiltersFormData>;
  handleClearFilters: () => void;
  handleApplyChanges: () => void;
}

const useFiltersDialogController = (): UseFiltersDialogControllerData => {
  const { filters, handleChangeFilters } = useFilters();
  const {
    register: registerField,
    handleSubmit: onSubmit,
    reset,
    formState: { errors: fieldErrors },
  } = useForm<FiltersFormData>({
    mode: "onBlur",
    resolver: zodResolver(FiltersFormSchema),
    defaultValues: filters,
  });

  React.useEffect(() => {
    reset(filters);
  }, [filters, reset]);

  const handleClearFilters = React.useCallback(() => {
    handleChangeFilters({
      name: undefined,
      email: undefined,
      phone: undefined,
    });
  }, [handleChangeFilters]);

  const handleApplyChanges = React.useCallback(
    (formData: FiltersFormData) => {
      handleChangeFilters(formData);
    },
    [handleChangeFilters]
  );

  return {
    fieldErrors,
    registerField,
    handleClearFilters,
    handleApplyChanges: onSubmit(handleApplyChanges),
  };
};

export { useFiltersDialogController };
