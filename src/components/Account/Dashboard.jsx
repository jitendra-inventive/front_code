import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { DataGrid } from '@mui/x-data-grid';
import account from '../../api/account';
import Title from '../Partial/Title';
import Logout from "../Auth/Logout";
import './Dashboard.css';
const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'firstName', headerName: 'First name', width: 130 },
    { field: 'lastName', headerName: 'Last name', width: 130 },
    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      width: 90,
    },
    {
      field: 'fullName',
      headerName: 'Full name',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
      valueGetter: (params) =>
        `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    },
  ];
const rows = [
    { id: 1, firstName: 'Jiten', lastName: 'G', age: 35 },
    { id: 2, firstName: 'Ramesh', lastName: 'Kumar', age: 42 },
    { id: 3, firstName: 'Veeru', lastName: 'Dev', age: 45 },
  ];
const Dashboard = () => { 
  const history = useNavigate();
    useEffect( async () => {
      if (!localStorage.getItem("user")) {
        history("/");
      }
        const userData = await account();
        console.log(userData);
    }, [window.location.pathname])
    return (
      <section className="dataLayout">
        <div style={{ height: 300, width: '100%' }}>
          <Title title="Dashboard"/>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={2}
            rowsPerPageOptions={[2]}
          />
          <Logout name="Logout" />
        </div>
      </section>
      );
}

export default Dashboard;