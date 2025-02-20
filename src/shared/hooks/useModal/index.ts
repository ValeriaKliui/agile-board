import { useState } from 'react';

import { UseModalReturns } from './types';

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
