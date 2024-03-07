import React from "react";

import { Icon } from "@/components/Icon";
import { Dialog } from "@/components/Dialog";
import { Spinner } from "@/components/Spinner";

import { numberWithCommas } from "@/utils/numberWithCommas";

import { useVisitationOrderDialogController } from "./useVisitationOrderDialogController";

const VisitationOrderDialog: React.FC = () => {
  const { customers, isLoading } = useVisitationOrderDialogController();

  return (
    <Dialog.Content className="overflow-x-auto max-h-[calc(100vh_-_32px)]">
      <Dialog.CloseButton>
        <button className="absolute transition-all duration-300 ease-in flex items-center justify-center border-none w-6 h-6 rounded-full top-2.5 right-2.5 bg-gray-50 text-gray-750 hover:bg-gray-100 focus-visible:shadow-[0_0_0_2px] focus-visible:shadow-gray-950">
          <Icon name="x-bold" size={15} />
        </button>
      </Dialog.CloseButton>
      <div className="flex flex-1 flex-col items-center text-center w-[90vw] bg-white p-7 max-w-lg rounded">
        <h1 className="text-2xl font-extrabold mb-2.5 text-blue-850">
          Ordem de visitação
        </h1>
        <p className="text-md font-medium text-gray-500 mb-6">
          Aqui você vai ver a rota mais eficiente para visitar seus clientes
        </p>
        <div className="flex flex-col items-start justify-center">
          {isLoading ? (
            <Spinner />
          ) : (
            customers.map((customer, customerIndex) => {
              const previousX = customers[customerIndex - 1]?.x || 0;
              const previousY = customers[customerIndex - 1]?.y || 0;

              return (
                <div className="flex gap-2" key={customer.id}>
                  <div className="flex flex-col items-center">
                    <Icon
                      name="map-pin-fill"
                      size={20}
                      className="text-blue-500"
                    />
                    <div className="flex-1 border-l border-dashed border-l-gray-150" />
                  </div>
                  <div className="text-left space-y-1 pb-5">
                    <h3 className="leading-normal font-semibold text-base text-blue-950">
                      Parada Nº{numberWithCommas(customerIndex + 1)} -{" "}
                      {customer.name}
                    </h3>
                    <p className="font-normal text-sm text-gray-500">
                      Você deve sair da posição{" "}
                      <strong>
                        ({previousX}, {previousY})
                      </strong>{" "}
                      e ir para a posição{" "}
                      <strong>
                        ({customer.x}, {customer.y})
                      </strong>
                    </p>
                  </div>
                </div>
              );
            })
          )}
          {customers.length > 0 && (
            <div className="flex gap-2">
              <div className="flex flex-col items-center">
                <Icon name="map-pin-fill" size={20} className="text-blue-500" />
              </div>
              <div className="text-left space-y-1 pb-0">
                <h3 className="leading-normal font-semibold text-base text-blue-950">
                  Parada Nº{numberWithCommas(customers.length + 1)} - De volta
                  para a empresa
                </h3>
                <p className="font-normal text-sm text-gray-500">
                  Você deve sair da posição{" "}
                  <strong>
                    ({customers[customers.length - 1].x},{" "}
                    {customers[customers.length - 1].y})
                  </strong>{" "}
                  e ir para a posição <strong>(0, 0)</strong>
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </Dialog.Content>
  );
};

export { VisitationOrderDialog };
