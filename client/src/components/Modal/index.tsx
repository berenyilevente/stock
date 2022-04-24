import Icon from "components/Icon";
import React from "react";

interface ModalProps {
  title?: string;
  showModal: boolean;
  closeModal: () => void;
}

const Modal: React.FC<ModalProps> = ({
  title,
  showModal,
  closeModal,
  children,
}) => (
  <>
    {showModal && (
      <div className="fixed flex top-24 left-0 justify-center align-middle w-full h-full before:fixed before:top-0 before:left-0 before:h-full before:w-full before:bg-slate-300 before:opacity-60">
        <div className="h-min relative z-10 xl:w-1/4 sm:w-1/2 w-full px-12">
          <div className="bg-white rounded-lg">
            <div className="flex justify-between align-middle px-5 py-5">
              <p className="font-medium">{title}</p>
              <Icon
                iconType="xIcon"
                onClick={closeModal}
                className="cursor-pointer"
              />
            </div>
            <div className="flex justify-around py-4">{children}</div>
          </div>
        </div>
      </div>
    )}
  </>
);
export default Modal;
