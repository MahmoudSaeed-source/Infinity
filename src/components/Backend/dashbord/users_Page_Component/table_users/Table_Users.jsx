import Box from "@mui/material/Box";
import { DataGrid,GridToolbar } from "@mui/x-data-grid";
import { FaRegEdit } from "react-icons/fa";
import { MdOutlineDeleteSweep } from "react-icons/md";
import { useEffect,useState } from 'react';
import axios from 'axios';
import './table_Users.scss'
import { Link } from "react-router-dom";



export const Table_Users = () => {
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "firstName",
      headerName: "First name",
      width: 150,
      editable: true,
    },
    {
      field: "lastName",
      headerName: "Last name",
      width: 150,
      editable: true,
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      width: 110,
      editable: true,
    },
    {
      field: "fullName",
      headerName: "Full name",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 160,
      valueGetter: (params) =>
        `${params.row.firstName || ""} ${params.row.lastName || ""}`,
    },
    {
      field: "email",
      headerName: "Email",
      width: 150,
      editable: true,
    },
    {
      field: "Actions",
      headerName: "Actions",
      description: "Action delete or Edit",
      sortable: false,
      width: 160,
      renderCell: (params) => {
        return (
          <div className="Actions">
            <div className="Edit">
              <Link to={`/dashboard/users/details/${params.row.id}`}>
                <FaRegEdit />
              </Link>
            </div>
            <div className="delete" onClick={() => handleDelete(params.row.id)}>
              <MdOutlineDeleteSweep />
            </div>
          </div>
        );
      },
    },
  ];

  function handleDelete(id) {
   axios.delete(`http://localhost:3000/users/${id}`);
 } 
  
  const [fields, setFields] = useState([]);
   useEffect(() => {
     async function fetchData() {
       try {
         const response = await axios.get("http://localhost:3000/users");
         const users = response.data;
         setFields(
           users.map((user) => ({
             id: user.id,
             firstName: user.firstName,
             lastName: user.lastName,
             age: user.age,
             email: user.email,
             createdAt: user.createdAt,
           }))
         );
       } catch (error) {
         console.error("Error fetching data:", error);
       }
     }

     fetchData();
   }, [fields]);

  return (
    <div className="Table_users">
      <Box
      
      >
        <DataGrid
          className="Data_Grid"
          style={{
            backgroundColor: "white",
            textAlign: "center",
          }}
          rows={fields}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 10,
              },
            },
          }}
          slots={{ toolbar: GridToolbar }}
          slotProps={{
            toolbar: {
              showQuickFilter: true,
              quickFilterProps: { debounceMs: 500 },
            },
          }}
          pageSizeOptions={[5]}
          checkboxSelection
          disableRowSelectionOnClick
          disableColumnFilter
          disableColumnSelector
          disableDensitySelector
          disableVirtualization
        />
      </Box>
    </div>
  );
}
export default Table_Users;