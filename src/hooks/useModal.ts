import { useState } from 'react';

export interface UseModalReturns {
  isModalOpen: boolean;
  showModal: () => void;
  closeModal: () => void;
}

export const useModal = (): UseModalReturns => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return {
    isModalOpen,
    showModal,
    closeModal,
  };
};
