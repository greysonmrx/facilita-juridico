import React from "react";

import { Icon } from "@/components/Icon";
import { Dialog } from "@/components/Dialog";
import { Button } from "@/components/Button";
import { TextField } from "@/components/TextField";

import { useFiltersDialogController } from "./useFiltersDialogController";

interface FiltersDialogProps {
  onSubmit: () => void;
}

const FiltersDialog: React.FC<FiltersDialogProps> = ({ onSubmit }) => {
  const { fieldErrors, handleApplyChanges, handleClearFilters, registerField } =
    useFiltersDialogController();

  return (
    <Dialog.Content>
      <Dialog.CloseButton>
        <button className="absolute transition-all duration-300 ease-in flex items-center justify-center border-none w-6 h-6 rounded-full top-2.5 right-2.5 bg-gray-50 text-gray-750 hover:bg-gray-100 focus-visible:shadow-[0_0_0_2px] focus-visible:shadow-gray-950">
          <Icon name="x-bold" size={15} />
        </button>
      </Dialog.CloseButton>
      <div className="flex flex-1 flex-col items-center text-center w-[90vw] bg-white p-7 max-w-lg rounded">
        <h1 className="text-2xl font-extrabold mb-2.5 text-blue-850">
          Filtros
        </h1>
        <p className="text-md font-medium text-gray-500 mb-6">
          Adicione filtros à sua pesquisa
        </p>
        <form
          onSubmit={(event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            handleApplyChanges();
            onSubmit();
          }}
          className="w-full mt-2.5 space-y-4"
        >
          <TextField.Root>
            <TextField.Label htmlFor="name">Nome</TextField.Label>
            <TextField.Content
              {...registerField("name")}
              id="name"
              name="name"
              type="text"
              placeholder="Emily Sousa Cardoso"
              data-error={Boolean(fieldErrors.name?.message)}
            />
            {fieldErrors.name?.message && (
              <TextField.ErrorMessage>
                {fieldErrors.name?.message}
              </TextField.ErrorMessage>
            )}
          </TextField.Root>
          <TextField.Root>
            <TextField.Label htmlFor="email">Email</TextField.Label>
            <TextField.Content
              {...registerField("email")}
              id="email"
              name="email"
              type="text"
              placeholder="email@email.com"
              data-error={Boolean(fieldErrors.email?.message)}
            />
            {fieldErrors.email?.message && (
              <TextField.ErrorMessage>
                {fieldErrors.email?.message}
              </TextField.ErrorMessage>
            )}
          </TextField.Root>
          <TextField.Root>
            <TextField.Label htmlFor="phone">Telefone</TextField.Label>
            <TextField.Content
              {...registerField("phone")}
              id="phone"
              name="phone"
              type="text"
              placeholder="(__) _ ____-____"
              data-error={Boolean(fieldErrors.phone?.message)}
            />
            {fieldErrors.phone?.message && (
              <TextField.ErrorMessage>
                {fieldErrors.phone?.message}
              </TextField.ErrorMessage>
            )}
          </TextField.Root>
          <div className="flex gap-4 w-full !mt-8">
            <button
              type="button"
              onClick={() => {
                handleClearFilters();
                onSubmit();
              }}
              className="flex transition-all duration-300 ease-in items-center justify-center bg-transparent font-bold text-gray-750 max-h-11 border border-gray-250 rounded w-full py-3.5 px-5 hover:bg-gray-50 focus-visible:shadow-[0_0_0_5px] focus-visible:shadow-gray-300 focus-visible:outline-2 focus-visible:outline focus-visible:outline-gray-50"
            >
              Limpar filtros
            </button>
            <Button.Root type="submit">
              <Button.Text>Filtrar</Button.Text>
            </Button.Root>
          </div>
        </form>
      </div>
    </Dialog.Content>
  );
};

export { FiltersDialog };
