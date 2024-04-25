import axios from "axios"
import React, { useEffect, useState } from "react"

const UpdateUser = ({ Modal, Button, modalOpen, setModalOpen, URL, toast, setAllUsers, userDetail }) => {
    const [allWarehouse, setAllWarehouse] = useState([])
    useEffect(() => {
        axios.get(`${URL}/warehouse`).then((res) => {
            setAllWarehouse(res?.data?.data)
        })
    }, [])
    const fn_handleUpdate = () => {
        if (document.getElementById("fullName").value === "") {
            return toast.error("Enter User Name")
        } else if (document.getElementById("emailAddress").value === "") {
            return toast.error("Enter User Email")
        } else if (document.getElementById("password").value === "") {
            return toast.error("Enter User Password")
        } else if (document.getElementById("repeatPassword").value === "") {
            return toast.error("ReEnter User Password")
        } else if (document.getElementById("repeatPassword").value !== document.getElementById("password").value) {
            return toast.error("Password Not Matched")
        } else if (document.getElementById("status").value === "") {
            return toast.error("Select Status")
        } else if (document.getElementById("role").value === "") {
            return toast.error("Select Role")
        } else if (document.getElementById("image").files.length === 0) {
            return toast.error("Select Image")
        } else if (document.getElementById("warehouse").value === "") {
            return toast.error("Select Warehouse")
        } else {
            const params = new FormData()
            params.append('fullName', document.getElementById("fullName").value)
            params.append('email', document.getElementById("emailAddress").value)
            params.append('status', document.getElementById("status").value)
            params.append('role', document.getElementById("role").value)
            params.append('imageUrl', document.getElementById("image").files[0])
            params.append('warehouseId', document.getElementById("warehouse").value)
        }
    }
    return (
        <Modal
            title="Update User"
            style={{ top: 20 }}
            open={modalOpen}
            onOk={() => setModalOpen(false)}
            onCancel={() => setModalOpen(false)}
            width={600}
            footer={[
                <Button key="cancel" onClick={() => setModalOpen(false)}>Cancel</Button>,
                <Button key="ok" type="primary" onClick={() => {
                    fn_handleUpdate()
                }}>Create</Button>
            ]}
        >
            <hr />
            <div className="row">
                <div className="col-md-6 d-flex flex-column px-3 mb-3">
                    <label className="productCreateTxt">Full Name*</label>
                    <input type="text" className="productCreateInput" placeholder="Enter Full Name" id="fullName" required value={userDetail?.fullName} />
                </div>
                <div className="col-md-6 d-flex flex-column px-3 mb-3">
                    <label className="productCreateTxt">Email Address*</label>
                    <input type="text" className="productCreateInput" placeholder="Enter Email Address" id="emailAddress" required value={userDetail?.email} />
                </div>
                <div className="col-md-6 d-flex flex-column px-3 mb-3">
                    <label className="productCreateTxt">Status*</label>
                    <select className="productCreateInput" id="status" required>
                        <option value={"Active"} selected={userDetail?.status === "Active" ? true : false}>Active</option>
                        <option value={"Inactive"} selected={userDetail?.status === "Inactive" ? true : false}>Inactive</option>
                    </select>
                </div>
                <div className="col-md-6 d-flex flex-column px-3 mb-3">
                    <label className="productCreateTxt">Role*</label>
                    <select className="productCreateInput" id="role" required>
                        <option value={""}>---Choose Role---</option>
                        <option value={"Super Admin"} selected={userDetail?.role === "Super Admin" ? true : false}>Super Admin</option>
                    </select>
                </div>
                <div className="col-md-6 d-flex flex-column px-3 mb-3">
                    <label className="productCreateTxt">Choose Avatar*</label>
                    <input type="file" className="productCreateInput" placeholder="Order Tax" id="image" required style={{ paddingTop: "2.5px" }} />
                </div>
                <hr />
                <div className="d-flex flex-column px-3 mb-3">
                    <label className="productCreateTxt">Choose Warehouse*</label>
                    <select className="productCreateInput" id="warehouse" required>
                        <option value={""}>---Choose Warehouse---</option>
                        {allWarehouse && allWarehouse?.map((item) => (
                            <option value={item?._id} selected={userDetail?.warehouseId === item?._id ? true : false}>{item?.name}</option>
                        ))}
                    </select>
                </div>
            </div>
        </Modal>
    )
}

export default UpdateUser