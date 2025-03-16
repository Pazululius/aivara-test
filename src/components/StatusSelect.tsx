import React, { useState } from "react";

const statusOptions = [
  { value: "shipped", label: "Enviado" },
  { value: "pending", label: "Pendiente" },
  { value: "canceled", label: "Cancelado" },
  { value: "unknown", label: "Desconocido" },
];

interface StatusSelectProps {
  onSelectStatus: (status: string) => void;
}

const StatusSelect: React.FC<StatusSelectProps> = ({ onSelectStatus }) => {
  const [selectedStatus, setSelectedStatus] = useState<string>("shipped");

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newStatus = event.target.value;
    setSelectedStatus(newStatus);
    onSelectStatus(newStatus); // Pasa el valor seleccionado al componente padre
  };

  return (
    <div className="w-64">
      <select
        id="status"
        name="status"
        value={selectedStatus}
        onChange={handleChange}
        className="block w-full px-4 py-2 text-base text-gray-900 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      >
        {statusOptions.map((status) => (
          <option key={status.value} value={status.value}>
            {status.label.charAt(0).toUpperCase() + status.label.slice(1)}
          </option>
        ))}
      </select>
    </div>
  );
};

export default StatusSelect;
