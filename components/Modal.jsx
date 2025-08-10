import { useEffect, useRef } from "react";

const Modal = ({ onClose, title, children }) => {
  const contentRef = useRef();

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  const handleClickOutside = (e) => {
    if (contentRef.current && !contentRef.current.contains(e.target)) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center"
      onClick={handleClickOutside}
    >
      <div
        ref={contentRef}
        className="bg-white rounded-lg shadow-lg max-w-xl w-full p-6 relative"
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-black text-2xl"
        >
          &times;
        </button>
        <h3 className="text-2xl font-bold mb-4">{title}</h3>
        <div className="text-base">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
