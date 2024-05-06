import DataTable from "react-data-table-component";

const data = [
  {
    id: 1,
    name: "John Doe",
    age: 30,
    status: "Active",
    image: "/assets/images/avatar/2.jpg",
  },
  {
    id: 2,
    name: "Jane Smith",
    age: 25,
    status: "Inactive",
    image: "/assets/images/avatar/1.jpg",
  },
  {
    id: 3,
    name: "Bob Johnson",
    age: 40,
    status: "Active",
    image: "/assets/images/avatar/1.png",
  },
  {
    id: 4,
    name: "John Doe",
    age: 30,
    status: "Active",
    image: "/assets/images/avatar/2.jpg",
  },
  {
    id: 5,
    name: "Jane Smith",
    age: 25,
    status: "Inactive",
    image: "/assets/images/avatar/1.jpg",
  },
  {
    id: 6,
    name: "Bob Johnson",
    age: 40,
    status: "Active",
    image: "/assets/images/avatar/1.png",
  },
];

const columns = [
  {
    name: "ID",
    selector: (row) => row.id,
    sortable: true,
  },
  {
    name: "Image",
    cell: (row) => (
      <img
        src={row.image}
        alt={row.name}
        style={{ width: "50px", height: "50px", borderRadius: "50%" }}
      />
    ),
  },
  {
    name: "Name",
    selector: (row) => row.name,
    sortable: true,
  },
  {
    name: "Age",
    selector: (row) => row.age,
    sortable: true,
  },
  {
    name: "Status",
    selector: (row) => row.status,
    sortable: true,
  },
  {
    name: "Actions",
    cell: (row) => (
      <>
        <button onClick={() => handleEdit(row)}>Edit</button>
        <button onClick={() => handleDelete(row)}>Delete</button>
      </>
    ),
    ignoreRowClick: true,
    allowOverflow: true,
    button: true,
  },
];

const customStyles = {
  headCells: {
    style: {
      fontSize: "16px",
      fontWeight: "semibold",
      padding: "20px",
    },
  },
  rows: {
    style: {
      fontSize: "14px",
      padding: "10px",
    },
  },
};

const EmployeeDataTable = () => {
  const handleChange = ({ selectedRows }) => {
    // You can set state or dispatch with something like Redux so we can use the retrieved data
    console.log("Selected Rows: ", selectedRows);
  };

  return (
    <DataTable
      title="Employee Data"
      columns={columns}
      data={data}
      pagination
      paginationPerPage={5}
      //   paginationRowsPerPageOptions={[5, 10, 15]}
      striped
      highlightOnHover
      selectableRows
      selectableRowsHighlight
      selectableRowsOnClick
      onSelectedRowsChange={handleChange}
      customStyles={customStyles}
      responsive
      noHeader
      dense
    />
  );
};

export default EmployeeDataTable;
