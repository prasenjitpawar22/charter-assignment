import React from "react";
import '@/styles/form.css';

export default function Select({
  label,
  options = [],
  value,
  onChange,
  name,
  placeholder = "Select an option",
}) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
      {label && <label htmlFor={name}>{label}</label>}

      <select
        id={name}
        name={name}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="" disabled>
          {placeholder}
        </option>

        {options.map((op) => (
          <option key={op.value} value={op.value}>
            {op.label}
          </option>
        ))}
      </select>
    </div>
  );
}