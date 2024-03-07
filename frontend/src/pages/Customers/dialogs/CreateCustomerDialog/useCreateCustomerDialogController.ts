import React from "react";
import { z } from "zod";
import {
  FieldErrors,
  UseFormRegister,
  UseFormReset,
  useForm,
} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { APIError } from "@/errors/APIError";

import { CustomersService } from "@/services/CustomersService";

import { ICustomer } from "@/models/ICustomer";

const CreateCustomerFormSchema = z.object({
  name: z.string().trim().min(3, { message: "O nome é obrigatório" }),
  email: z
    .string()
    .email({ message: "Insira um e-mail válido" })
    .min(3, { message: "O e-mail é obrigatório" }),
  phone: z
    .string({ required_error: "O telefone é obrigatório" })
    .min(3, { message: "O telefone é obrigatório" }),
  x: z.coerce
    .number({ required_error: "A coordenada X é obrigatória" })
    .int({ message: "Apenas números inteiros" }),
  y: z.coerce
    .number({ required_error: "A coordenada Y é obrigatória" })
    .int({ message: "Apenas números inteiros" }),
});

type CreateCustomerFormData = z.infer<typeof CreateCustomerFormSchema>;

interface UseCreateCustomerDialogControllerData {
  isLoading: boolean;
  isValidForm: boolean;
  fieldErrors: FieldErrors<CreateCustomerFormData>;
  reset: UseFormReset<CreateCustomerFormData>;
  registerField: UseFormRegister<CreateCustomerFormData>;
  handleSubmit: (onCreate: (customer: ICustomer) => void) => void;
}

const useCreateCustomerDialogController =
  (): UseCreateCustomerDialogControllerData => {
    const [isLoading, setIsLoading] = React.useState(false);

    const {
      register: registerField,
      handleSubmit,
      formState: { errors: fieldErrors, isValid: isValidForm },
      reset,
    } = useForm<CreateCustomerFormData>({
      mode: "onBlur",
      resolver: zodResolver(CreateCustomerFormSchema),
      defaultValues: {
        name: undefined,
        email: undefined,
        phone: undefined,
        x: 0,
        y: 0,
      },
    });

    const onSubmit = React.useCallback(
      async (
        formData: CreateCustomerFormData,
        onCreate: (customer: ICustomer) => void
      ) => {
        try {
          setIsLoading(true);

          const createdCustomer = await CustomersService.create({
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            x: formData.x,
            y: formData.y,
          });

          onCreate(createdCustomer);

          reset();
        } catch (error) {
          let errorMessage = "Tente novamente";

          if (error instanceof APIError) {
            errorMessage = error.message;
          }

          alert(errorMessage);
        } finally {
          setIsLoading(false);
        }
      },
      [reset]
    );

    const withOnCreate = React.useCallback(
      (onCreate: (customer: ICustomer) => void) => {
        handleSubmit((formData) => onSubmit(formData, onCreate))();
      },
      [handleSubmit, onSubmit]
    );

    return {
      isLoading,
      isValidForm,
      fieldErrors,
      reset,
      registerField,
      handleSubmit: withOnCreate,
    };
  };

export { useCreateCustomerDialogController };
