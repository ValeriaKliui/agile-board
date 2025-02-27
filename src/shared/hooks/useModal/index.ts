import { useCallback, useState } from 'react';

import { UseModalReturns } from './types';

export const useModal = (): UseModalReturns => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = useCallback(() => setIsModalOpen(true), []);
  const closeModal = useCallback(() => setIsModalOpen(false), []);

  return { isModalOpen, openModal, closeModal };
};
