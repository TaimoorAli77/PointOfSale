/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Button, Input } from 'antd';
import URL from '../../../Url';
import axios from 'axios';
import { toast } from 'react-toastify';

const Update = ({updateIt,Modal,setUpdateIt,modal1Open,setModal1Open , setAllCustomer}) => {

const [name, setName] = useState("");
const [phone, setPhone] = useState("");
const [city, setCity] = useState("");
const [id , setId] = useState("")
useEffect(() => {
     setName(updateIt?.name)
     setPhone(updateIt?.phone)
     setCity(updateIt?.city)
     setId(updateIt?._id)
  }
, [updateIt]);

const grpDetail ={
       name : name,
       phone: phone,
       city : city,
       id : id
  }
const submit = ()=>{

  axios.patch(`${URL}/customer/${id}`, grpDetail).then((res)=>{
    if(res?.data?.status===200){
      console.log(res?.data)
      toast.success("Updated")
      axios.get(`${URL}/customer`).then((res)=>
      setAllCustomer(res?.data?.data?.reverse()))
    }
  })
}



  return (
    <div>
      <Modal
        title="Update Customers"
        style={{
          top: 20,
        }}
        open={modal1Open}
        onOk={() => setModal1Open(false)}
        onCancel={() => setModal1Open(false)}
        footer={[
          <Button key="primary" onClick={()=>{
            setModal1Open(false)
            setUpdateIt({})
        }}>  Cancel </Button>,
          <Button key="ok" type="primary"  onClick={()=>{submit(); setModal1Open(false);}}> Update</Button>
        ]}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <label htmlFor="name" className='fs-6 fw-bold mt-2' >Name</label>
              <Input name='name' id='name' value={name} onChange={(e)=>setName(e?.target?.value)}   />
            </div>
            <div className="col-md-6">
              <label htmlFor="phone" className='fs-6 mt-2 fw-bold '>Phone</label>
              <Input name='phone' id='phone' value={phone} onChange={(e)=>setPhone(e?.target?.value)}   />
            </div>
            <div className="col-md-6">
              <label htmlFor="city" className='fs-6  mt-2 fw-bold'>City</label>
              <Input name='city' id='city' value={city}  onChange={(e)=>setCity(e?.target?.value)}   />
            </div>
         </div>
        </div>
      </Modal>
      
    </div>
  );
}

export default Update;
