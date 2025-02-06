import React from "react";

export function Button({ children, icon, variant, onClick, ...props }) {
  const styles = {
    padding: "8px 16px",
    background: variant === "destructive-secondary" ? "#ffdddd" : "#eeeeee",
    color: variant === "destructive-secondary" ? "#ff0000" : "#333333",
    display: "flex",
    alignItems: "center",
    gap: "8px",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  };

  return (
    <button style={styles} onClick={onClick} {...props}>
      {icon && <i className={`icon-${icon}`}></i>}
      {children}
    </button>
  );
}
