import DataTable from "react-data-table-component";
import { useSelector } from "react-redux";
import { getAllEmployeeData } from "../../../selectors/selectors";
import AvatarByName from "./avatar-by-name";
import { useNavigate } from "react-router-dom";
import { base_img_url } from "../../../utils/base_img_url";

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

const EmployeeDataTable = () => {
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
      cell: (row) => (
        <p className="text-black dark:text-white">00{row?.id || "-"}</p>
      ),
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
          className="cursor-pointer transition duration-1000 dark:text-white ease-in-out hover:underline hover:font-bold"
        >
          {row?.attributes?.firstName} {row?.attributes?.lastName}
        </span>
      ),
    },
    {
      name: "Email",
      cell: (row) => (
        <p className="text-black dark:text-white">
          {row?.attributes?.primaryEmail || "-"}
        </p>
      ),
      sortable: true,
      width: "220px",
    },
    {
      name: "Gender",
      selector: (row) => row?.attributes?.gender || "-",
      cell: (row) => (
        <p className="text-black dark:text-white">
          {row?.attributes?.gender || "-"}
        </p>
      ),
      sortable: true,
      width: "200px",
    },

    {
      name: "Actions",
      cell: (row) => (
        <>
          <button
            onClick={() => handleView(row?.id)}
            type="button"
            className="mr-1 mb-2 inline-block rounded font-medium xl:text-[14px] text-xs leading-5  py-1.5 px-3 border border-d-light-2 text-black dark:text-white bg-d-light-2 hover:bg-d-light dark:bg-[#242424] duration-300"
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
      title="Employee Data"
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

export default EmployeeDataTable;
