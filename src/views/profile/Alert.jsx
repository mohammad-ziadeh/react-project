import React from "react";

export function Alert({ variant, title, description, actions }) {
  const styles = {
    container: {
      padding: "16px",
      border: "1px solid",
      borderColor: variant === "error" ? "#ff0000" : "#cccccc",
      backgroundColor: variant === "error" ? "#ffdddd" : "#f9f9f9",
      borderRadius: "4px",
      marginBottom: "16px",
    },
    title: {
      fontWeight: "bold",
      marginBottom: "8px",
    },
    description: {
      marginBottom: "16px",
    },
  };

  return (
    <div style={styles.container}>
      {title && <div style={styles.title}>{title}</div>}
      {description && <div style={styles.description}>{description}</div>}
      {actions && <div>{actions}</div>}
    </div>
  );
}
