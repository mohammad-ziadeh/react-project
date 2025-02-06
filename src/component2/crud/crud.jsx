import React, { useState } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import cellEditFactory from 'react-bootstrap-table-next/lib/features/cellEditFactory';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

// Define columns with cell editing and actions
const columns = [
  { dataField: 'id', text: 'ID' },
  { dataField: 'name', text: 'Name' },
  { dataField: 'email', text: 'Email' },
  {
    dataField: 'action',
    text: 'Actions',
    formatter: (cell, row, rowIndex, columnIndex, formatExtraData) => (
      <button onClick={() => formatExtraData.handleDelete(row.id)}>Delete</button>
    ),
  },
];

// Define some initial data
const initialData = [
  { id: 1, name: 'John', email: 'john@example.com' },
  { id: 2, name: 'Jane', email: 'jane@example.com' },
];

const MyTable = () => {
  const [data, setData] = useState(initialData);
  const [newRow, setNewRow] = useState({ id: '', name: '', email: '' });

  // Handle row deletion
  const handleDelete = (id) => {
    setData((prevData) => prevData.filter((item) => item.id !== id));
  };

  // Handle adding a new row
  const handleAddRow = () => {
    setData((prevData) => [
      ...prevData,
      { ...newRow, id: prevData.length + 1 }, // Auto increment ID
    ]);
    setNewRow({ id: '', name: '', email: '' }); // Reset form fields
  };

  // Handle cell editing (if needed)
  const handleEdit = (newData) => {
    setData((prevData) =>
      prevData.map((item) =>
        item.id === newData.id ? { ...item, ...newData } : item
      )
    );
  };

  // Enable cell editing
  const cellEditProp = {
    mode: 'click',
    blurToSave: true,
    afterSaveCell: (oldValue, newValue, rowIndex, columnIndex, row, column) => {
      const updatedRow = { ...row, [column.name]: newValue };
      handleEdit(updatedRow);
    },
  };

  return (
    <div>
      <h3>React Bootstrap Table with CRUD Operations</h3>

      {/* Add New Row Form */}
      <div className="mb-3">
        <h4>Add New Row</h4>
        <input
          type="text"
          className="form-control"
          placeholder="Name"
          value={newRow.name}
          onChange={(e) => setNewRow({ ...newRow, name: e.target.value })}
        />
        <input
          type="email"
          className="form-control mt-2"
          placeholder="Email"
          value={newRow.email}
          onChange={(e) => setNewRow({ ...newRow, email: e.target.value })}
        />
        <button className="btn btn-primary mt-2" onClick={handleAddRow}>
          Add Row
        </button>
      </div>

      {/* Table */}
      <BootstrapTable
        keyField="id"
        data={data}
        columns={columns}
        cellEdit={cellEditFactory(cellEditProp)}
        noDataIndication="No records available"
        expandColumnRenderer={(rowIndex, columnIndex, column, columnIndexForRow) => {
          return (
            <button
              className="btn btn-danger"
              onClick={() => handleDelete(data[rowIndex].id)}
            >
              Delete
            </button>
          );
        }}
        expandColumnVisible={true}
        formatExtraData={{ handleDelete }}
      />
    </div>
  );
};

export default MyTable;
