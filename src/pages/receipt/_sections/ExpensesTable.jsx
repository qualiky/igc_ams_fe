import DataTable from "react-data-table-component";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { base_img_url } from "../../../utils/base_img_url";
import AvatarByName from "../../Employees/_components/avatar-by-name";
import { getAllEmployeeData } from "../../../selectors/selectors";

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
      backgroundColor: "transparent",
    },
  },
};

const ExpensesTable = () => {
  const { employeeData } = useSelector(getAllEmployeeData);

  const handleChange = ({ selectedRows }) => {
    console.log("Selected Rows: ", selectedRows);
  };

  const navigate = useNavigate();

  const handleView = (id) => {
    navigate(`/employee/details/${id}`);
  };

  const columns = [
    {
      name: "ID",
      selector: (row) => row.id,
      sortable: true,
      width: "100px",
    },
    {
      name: "Image",
      cell: (row) =>
        row?.attributes?.profileImage?.data?.attributes?.url ? (
          <img
            className="h-14 w-14 rounded-full m-1 mr-2 object-cover"
            src={
              base_img_url +
              row?.attributes?.profileImage?.data?.attributes?.url
            }
            alt={row.name}
          />
        ) : (
          <AvatarByName
            firstname={row?.attributes?.firstName}
            lastname={row?.attributes?.lastName}
          />
        ),
      width: "150px",
    },

    {
      name: "Name",
      selector: (row) =>
        row?.attributes?.firstName + " " + row?.attributes?.lastName,
      sortable: true,
      width: "220px",
      cell: (row) => (
        <span
          onClick={() => handleView(row?.id)}
          className="cursor-pointer transition duration-1000 ease-in-out hover:underline hover:font-bold"
        >
          {row?.attributes?.firstName} {row?.attributes?.lastName}
        </span>
      ),
    },
    {
      name: "Email",
      selector: (row) => row?.attributes?.primaryEmail || "-",
      sortable: true,
      width: "220px",
    },
    {
      name: "Gender",
      selector: (row) => row?.attributes?.gender || "-",
      sortable: true,
      width: "200px",
    },

    {
      name: "Actions",
      cell: (row) => (
        <>
          <button
            className="bg-slate-200  hover:bg-slate-300 text-black  font-bold py-1 px-4 rounded"
            onClick={() => handleView(row?.id)}
          >
            View
          </button>
        </>
      ),
      ignoreRowClick: true,
      // allowOverflow: true,
      button: true,
    },
  ];

  return (
    <DataTable
      title="Overall Expenses"
      columns={columns}
      data={employeeData}
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
      // responsive
      noHeader
      dense
    />
  );
};

export default ExpensesTable;
