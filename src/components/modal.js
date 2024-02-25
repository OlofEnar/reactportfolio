import React, { useState } from "react";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div style={{ background: white }}>
        {children}
        <button onClick={onClose}>stäng</button>
      </div>
    </div>
  );
};

import React from "react";

export default function modal() {
  const [isModalOpen, setModalOpen] = useState(false);
  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <div>
      <button onClick={openModal}>Visa Modal</button>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <p>Det här är en Modal</p>
      </Modal>
    </div>
  );
}
