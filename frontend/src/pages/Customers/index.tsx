import React from "react";

import { Icon } from "@/components/Icon";
import { Button } from "@/components/Button";
import { Dialog } from "@/components/Dialog";

import { numberWithCommas } from "@/utils/numberWithCommas";

import { FiltersDialog } from "./dialogs/FiltersDialog";
import { ConfirmDeleteDialog } from "./dialogs/ConfirmDeleteDialog";
import { CreateCustomerDialog } from "./dialogs/CreateCustomerDialog";
import { VisitationOrderDialog } from "./dialogs/VisitationOrderDialog";

import { FilterItem } from "./components/FilterItem";
import { CustomerCard } from "./components/CustomerCard";
import { CustomerCardSkeleton } from "./components/CustomerCardSkeleton";

import { useCustomersController } from "./useCustomersController";

const Customers: React.FC = () => {
  const {
    filters,
    customers,
    isLoading,
    isFiltersDialogOpen,
    isCreateCustomerDialogOpen,
    isVisitationOrderDialogOpen,
    handleRemoveFilter,
    handleCreateCustomer,
    handleDeleteCustomer,
    handleSetIsFiltersDialogOpen,
    handleSetIsCreateCustomerDialogOpen,
    handleSetIsVisitationOrderDialogOpen,
  } = useCustomersController();

  return (
    <div className="w-full h-full max-w-6xl p-6 md:p-12">
      <header className="flex items-center justify-between flex-col md:flex-row gap-4">
        <div className="flex flex-col flex-1 items-center text-center md:items-start md:text-left">
          <h1 className="text-black text-3xl font-bold">Clientes</h1>
          <h2 className="text-lg text-gray-500 font-medium pt-2">
            Aqui você vai gerenciar os seus clientes
          </h2>
        </div>
        <div className="flex w-full flex-1 items-center gap-2 justify-end flex-col sm:w-fit sm:flex-row">
          <Dialog.Root
            open={isVisitationOrderDialogOpen}
            onOpenChange={handleSetIsVisitationOrderDialogOpen}
          >
            <Dialog.Trigger>
              <Button.Root className="sm:w-fit" variant="outline">
                <Icon name="path-bold" size={20} />
                <Button.Text>Visitar clientes</Button.Text>
              </Button.Root>
            </Dialog.Trigger>
            {isVisitationOrderDialogOpen && <VisitationOrderDialog />}
          </Dialog.Root>
          <Dialog.Root
            open={isCreateCustomerDialogOpen}
            onOpenChange={handleSetIsCreateCustomerDialogOpen}
          >
            <Dialog.Trigger>
              <Button.Root className="sm:w-fit">
                <Icon name="plus-bold" size={20} />
                <Button.Text>Adicionar cliente</Button.Text>
              </Button.Root>
            </Dialog.Trigger>
            <CreateCustomerDialog onCreate={handleCreateCustomer} />
          </Dialog.Root>
        </div>
      </header>
      <div className="flex flex-col gap-3 items-start mt-5 py-5 justify-between border-t border-t-gray-200 lg:flex-row lg:items-center flex-1">
        <div className="flex">
          <h4 className="font-semibold">Todos os clientes</h4>
          {!isLoading && (
            <span className="text-sm font-bold text-white bg-blue-500 rounded ml-2 py-0.5 px-1">
              {numberWithCommas(customers.length)}
            </span>
          )}
        </div>
        <div className="flex items-center gap-2 flex-wrap flex-1 w-full lg:w-fit">
          <div className="flex items-center gap-2 flex-wrap flex-1 justify-end">
            {filters?.name && (
              <FilterItem.Root>
                <FilterItem.Label>Nome:</FilterItem.Label>
                <FilterItem.Value>{filters?.name}</FilterItem.Value>
                <FilterItem.DeleteButton
                  disabled={isLoading}
                  onClick={() => handleRemoveFilter("name")}
                />
              </FilterItem.Root>
            )}
            {filters?.email && (
              <FilterItem.Root>
                <FilterItem.Label>Email:</FilterItem.Label>
                <FilterItem.Value>{filters?.email}</FilterItem.Value>
                <FilterItem.DeleteButton
                  disabled={isLoading}
                  onClick={() => handleRemoveFilter("email")}
                />
              </FilterItem.Root>
            )}
            {filters?.phone && (
              <FilterItem.Root>
                <FilterItem.Label>Tel:</FilterItem.Label>
                <FilterItem.Value>{filters?.phone}</FilterItem.Value>
                <FilterItem.DeleteButton
                  disabled={isLoading}
                  onClick={() => handleRemoveFilter("phone")}
                />
              </FilterItem.Root>
            )}
          </div>
          <Dialog.Root
            open={isFiltersDialogOpen}
            onOpenChange={handleSetIsFiltersDialogOpen}
          >
            <Dialog.Trigger>
              <Button.Root size="md" className="lg:w-fit" disabled={isLoading}>
                <Icon name="funnel-bold" size={15} />
                <Button.Text>Filtros</Button.Text>
              </Button.Root>
            </Dialog.Trigger>
            <FiltersDialog
              onSubmit={() => handleSetIsFiltersDialogOpen(false)}
            />
          </Dialog.Root>
        </div>
      </div>
      <div className="grid gap-5 grid-cols-[repeat(auto-fill,_minmax(220px,_1fr))] pb-6 md:pb-12">
        {isLoading ? (
          <>
            <CustomerCardSkeleton />
            <CustomerCardSkeleton />
            <CustomerCardSkeleton />
            <CustomerCardSkeleton />
            <CustomerCardSkeleton />
          </>
        ) : (
          <>
            {customers.map((customer) => (
              <CustomerCard.Root key={customer.id}>
                <CustomerCard.Avatar
                  src={`https://api.multiavatar.com/${customer.id}.svg`}
                />
                <Dialog.Root>
                  <Dialog.Trigger>
                    <CustomerCard.DeleteButton />
                  </Dialog.Trigger>
                  <ConfirmDeleteDialog
                    onConfirm={() => {
                      setTimeout(() => {
                        handleDeleteCustomer(customer.id);
                      }, 100);
                    }}
                  >
                    Ao realizar esta ação, todos os dados do cliente{" "}
                    <strong className="font-bold text-blue-850 ml-0.5 mr-0.5">
                      {customer.name}
                    </strong>{" "}
                    serão excluídos.
                  </ConfirmDeleteDialog>
                </Dialog.Root>
                <CustomerCard.Title>{customer.name}</CustomerCard.Title>
                <CustomerCard.Content>
                  <CustomerCard.ValueContent>
                    <Icon name="at-bold" size={14} className="text-blue-500" />
                    <CustomerCard.ValueText>
                      {customer.email}
                    </CustomerCard.ValueText>
                  </CustomerCard.ValueContent>
                  <CustomerCard.ValueContent>
                    <Icon
                      name="phone-bold"
                      size={14}
                      className="text-blue-500"
                    />
                    <CustomerCard.ValueText>
                      {customer.phone}
                    </CustomerCard.ValueText>
                  </CustomerCard.ValueContent>
                  <div className="flex gap-2">
                    <CustomerCard.ValueContent>
                      <CustomerCard.ValueText>
                        <strong className="text-blue-500">X: </strong>
                        {customer.x}
                      </CustomerCard.ValueText>
                    </CustomerCard.ValueContent>
                    <CustomerCard.ValueContent>
                      <CustomerCard.ValueText>
                        <strong className="text-blue-500">Y: </strong>
                        {customer.y}
                      </CustomerCard.ValueText>
                    </CustomerCard.ValueContent>
                  </div>
                </CustomerCard.Content>
              </CustomerCard.Root>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export { Customers };
