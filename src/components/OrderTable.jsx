import MaterialReactTable from 'material-react-table';
import React from 'react';

const OrderTable = ({ orders }) => {
  const columns = [
    { accessorKey: 'id', header: 'Order ID' },
    { accessorKey: 'pizza.name', header: 'Pizza' },
    { accessorKey: 'toppings', header: 'Toppings' },
    { accessorKey: 'status', header: 'Status' },
  ];

  return <MaterialReactTable columns={columns} data={orders} />;
};

export default OrderTable;
