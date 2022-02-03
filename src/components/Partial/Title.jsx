import React, {useState, useEffect} from "react";
import { DataGrid } from '@mui/x-data-grid';
import account from '../../api/account';
import './Title.css';

const Title = (params) => {
    return (
      <h1>{params.title}</h1>
      );
}

export default Title;