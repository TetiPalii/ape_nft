'use client';
export const Button = ({ children, className, setMenuOpen }) => {
  return (
    <button
      onClick={() => {
        setMenuOpen();
      }}
      type="button"
      className={className}
    >
      {children}
    </button>
  );
};
