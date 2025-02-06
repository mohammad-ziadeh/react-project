import React from "react";

export function TextField({ label, children, helpText, className }) {
  return (
    <div style={{ marginBottom: "16px", width: "100%" }}>
      {label && <label style={{ marginBottom: "8px", display: "block" }}>{label}</label>}
      {children}
      {helpText && <span style={{ fontSize: "12px", color: "#888888" }}>{helpText}</span>}
    </div>
  );
}

TextField.Input = function ({ type = "text", ...props }) {
  return (
    <input
      type={type}
      style={{
        width: "100%",
        padding: "8px",
        border: "1px solid #cccccc",
        borderRadius: "4px",
      }}
      {...props}
    />
  );
};
