import React from "react";

import { Icon } from "@/components/Icon";
import { Dialog } from "@/components/Dialog";

interface ConfirmDeleteDialogProps extends React.PropsWithChildren {
  onCancel?: () => void;
  onConfirm: () => void;
}

const ConfirmDeleteDialog: React.FC<ConfirmDeleteDialogProps> = ({
  children,
  onCancel,
  onConfirm,
}) => {
  return (
    <Dialog.Content>
      <Dialog.CloseButton>
        <button
          onClick={onCancel}
          className="absolute transition-all duration-300 ease-in flex items-center justify-center border-none w-6 h-6 rounded-full top-2.5 right-2.5 bg-gray-50 text-gray-750 hover:bg-gray-100 focus-visible:shadow-[0_0_0_2px] focus-visible:shadow-gray-950"
        >
          <Icon name="x-bold" size={15} />
        </button>
      </Dialog.CloseButton>
      <div className="flex flex-1 flex-col items-center text-center w-[90vw] max-w-sm bg-white rounded p-8">
        <div className="w-20 h-20 flex items-center justify-center rounded-full text-red-500 bg-red-50 mb-4">
          <Icon name="warning-octagon-bold" size={45} />
        </div>
        <h1 className="text-2xl font-extrabold mb-2.5 text-blue-850">
          Atenção
        </h1>
        <p className="text-md font-medium text-gray-500 mb-6">
          {children}
          <br />{" "}
          <strong className="font-bold text-blue-850 ml-0.5 mr-0.5">
            Deseja prosseguir?
          </strong>
        </p>
        <footer className="flex gap-4 w-full">
          <Dialog.CloseButton>
            <button
              onClick={onCancel}
              className="flex items-center transition-all duration-300 ease-in justify-center bg-transparent font-bold text-gray-750 max-h-11 border border-gray-250 rounded w-full py-3.5 px-5 hover:bg-gray-50 focus-visible:shadow-[0_0_0_5px] focus-visible:shadow-gray-300 focus-visible:outline-2 focus-visible:outline focus-visible:outline-gray-50"
            >
              Cancelar
            </button>
          </Dialog.CloseButton>
          <Dialog.CloseButton>
            <button
              onClick={onConfirm}
              className="flex items-center transition-all duration-300 ease-in justify-center bg-red-500 font-bold text-white border-none rounded w-full py-3.5 px-5 hover:bg-red-300 focus-visible:shadow-[0_0_0_5px] focus-visible:shadow-red-300 focus-visible:outline-2 focus-visible:outline focus-visible:outline-red-50 max-h-11"
            >
              Sim, excluir
            </button>
          </Dialog.CloseButton>
        </footer>
      </div>
    </Dialog.Content>
  );
};

export { ConfirmDeleteDialog };
