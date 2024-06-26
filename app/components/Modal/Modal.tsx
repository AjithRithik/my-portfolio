import { ReactNode } from "react";

type ModalProps = {
  isOpen?: boolean;
  children: ReactNode;
};

export const Modal = ({ isOpen, children }: ModalProps) => {
  if (!isOpen) return null;
  return (
    <div
      className="relative z-20"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity z-10"></div>
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
            <div className="bg-white px-4 py-8 pt-5 sm:p-6 sm:pb-4 relative">

              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
