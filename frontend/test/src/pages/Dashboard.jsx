import React, { useState,useEffect } from 'react'
import { jwtDecode } from "jwt-decode";
import axios from 'axios';
const Dashboard = () => {
    const [data,setData]=useState({})
    const token=localStorage.getItem("token")
    const decodedToken=jwtDecode(token)
    console.log(decodedToken)

const fetchUser=async()=>{
    try{
const response=await axios.get(`http://localhost:8082/api/admin/user/${decodedToken.id}`)
setData(response.data.user);

    }
    catch(err){
        console.log(err)
    }
}
    useEffect(()=>{
fetchUser();
    },[])
  return (
    <div>
      <h1>Hello From Dashboard {data.name} </h1>
    </div>
  )
}

export default Dashboard
