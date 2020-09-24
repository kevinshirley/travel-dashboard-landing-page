import React, { useState, createContext } from 'react';

export const ModalContext = createContext();

export const ModalContextProvider = props => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <ModalContext.Provider value={[isModalOpen, setIsModalOpen]}>
      {props.children}
    </ModalContext.Provider>
  );
};