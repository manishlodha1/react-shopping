import React, { useEffect, useState } from 'react'
import "./userList.css"
import {DataGrid} from "@material-ui/data-grid";
import { DeleteOutline } from '@material-ui/icons';
// import { userRows } from '../../dummyData';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser, login } from '../../redux/apiCalls';

const UserList = () => {

    // const [data,setData] = useState(userRows);
    const dispatch = useDispatch();
    const users = useSelector((state) => state.user.currentUser);
    
    useEffect(()=>{
        login(dispatch);
    },[dispatch]);


    const handleDelete = (id) => {
        // setData(data.filter(item=>item.id !== id));
        console.log("user deleted..");
        deleteUser(dispatch);
    }

    const columns = [
        { field: '_id', headerName: 'ID', width: 90 },
        { field: 'user', headerName: 'User', width: 200, renderCell: (params) =>{
            return (
                <div className='userListUser'>
                    <img className='userListImg' src={params.row.avatar} alt="" />
                    {params.row.username}
                </div>
            );
        },
        },
        { field: 'email', headerName: 'Email', width: 200 },
        {
          field: 'status', 
          headerName: 'Status',
          type: 'number',
          width: 120,
        },
        {
          field: 'transaction',
          headerName: 'TransactionValume',
          width: 160,
        },
        {
            field: "action",
            headName: "Action",
            width: 150,
            renderCell:(params) =>{
                return(
                    <>
                        <Link to={"/user/"+params.row._id}>
                            <button className='userListEdit'>Edit</button>
                        </Link>
                        <DeleteOutline className='userListDelete' onClick={()=>handleDelete(params.row.id)} />
                    </>
                );
            },
        },
      ];
      
     
  return (
    <div className='userList '>
        <DataGrid
        rows={users}
        columns={columns}
        // initialState={{
        //   pagination: {
        //     paginationModel: { page: 0, pageSize: 5 },
        //   },
        // }}
        pageSize={8}
        checkboxSelection
      />
    </div>
  ) 
} 

export default UserList 