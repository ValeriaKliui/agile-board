import { useState } from 'react';

import { UseModalReturns } from './types';

export const useModal = (): UseModalReturns => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return {
    isModalOpen,
    openModal,
    closeModal,
  };
};
