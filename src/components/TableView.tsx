import React from "react";

type TableProps = {
  headers: string[];
  rows: string[][];
};

const Table: React.FC<TableProps> = ({ headers, rows }) => {
  return (
    <div className="overflow-x-auto">
      <ul className="w-full border-collapse border border-gray-300">
        {/* Cabecera */}
        <li className="flex border-b border-gray-300">
          {headers.map((header, index) => (
            <span key={index} className="flex-1 p-2 font-bold text-gray-700">
              {header}
            </span>
          ))}
        </li>

        {/* Filas */}
        {rows.map((row, rowIndex) => (
          <li
            key={rowIndex}
            className={`flex border-b ${
              rowIndex % 2 === 0 ? "bg-gray-100" : "bg-white"
            }`}
          >
            {row.map((cell, cellIndex) => (
              <span key={cellIndex} className="flex-1 p-2 text-gray-800">
                {cell}
              </span>
            ))}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Table;
