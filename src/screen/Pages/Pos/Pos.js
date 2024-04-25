import React, { useEffect, useState } from "react";
import { Input, Space } from 'antd'
import { SearchOutlined } from '@ant-design/icons';
import "./POS.css"
import axios from "axios";
import URL, { imgURL } from "../../Url";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Pos = () => {
    const navigate = useNavigate()
    const [selectedCustomer, setSelectedCustomer] = useState("")
    const [selectedWarehouse, setSelectedWarehouse] = useState("")
    const [allProduct, setAllProduct] = useState([])
    const [allCustomer, setAllCustomer] = useState([])
    const [allWarehouse, setAllWarehouse] = useState([])
    const [cartProduct, setCartProduct] = useState([])
    const [itemAdded, setItemAdded] = useState(false);

    useEffect(() => {
        axios.get(`${URL}/customer`).then((res) => {
            setAllCustomer(res.data?.data)
        })
        axios.get(`${URL}/warehouse`).then((res) => {
            setAllWarehouse(res.data?.data)
        })
    }, [])
    useEffect(() => {
        axios.get(`${URL}/product/getwhproduct/${selectedWarehouse}`).then((res) => {
            setAllProduct(res?.data?.data)
        })
    }, [selectedWarehouse])
    const fn_addToCart = (item) => {
        setCartProduct((prevCart) => [...prevCart, { ...item, cartQty: 1 }]);
        setItemAdded(true);
    }
    const handleDecrement = (item) => {
        if (item?.cartQty === 1) {
            return
        }
        const allProduct = [...cartProduct]
        const findItem = (allProduct?.find(i => i?._id === item?._id))
        findItem.cartQty -= 1
        const index = allProduct?.findIndex(i => i?._id === item?._id)
        allProduct[index] = findItem
        setCartProduct(allProduct)
    };
    const handleIncrement = (item) => {
        if (item?.cartQty === item?.whQty) {
            return
        }
        const allProduct = [...cartProduct]
        const findItem = (allProduct?.find(i => i?._id === item?._id))
        findItem.cartQty += 1
        const index = allProduct?.findIndex(i => i?._id === item?._id)
        allProduct[index] = findItem
        setCartProduct(allProduct)
    };
    const fn_deleteToCart = (id) => {
        console.log(id)
        const a = cartProduct?.filter((item) => item?._id !== id)
        setCartProduct(a)
    }
    const printInvoice = (tokenNumber, orderNumber, startTime) => {
        const invoiceContent = `
    <html>
      <head>
        <title>Document</title>
        <style>
          body {
            font-family: Arial, sans-serif;
          }
          h3{
            text-align: center;
          }
          table {
            margin: 0 auto; /* Center the table horizontally */
            border-collapse: collapse;
            width: 50%; /* Adjust the width as needed */
          }
          th, td {
            border-bottom: 1px solid #000;
            padding: 8px;
          }
        </style>
      </head>
      <body>
        <h3 className="printHeading">Token No: ${tokenNumber}</h3>
        <h4 className="printHeading">Order No: ${orderNumber}</h4>
        <p>Date: ${new Date(startTime).toLocaleDateString()}</p>
        <hr>
        <table>
        ${[12, 3]?.map((item) => `
        <tr>
              <td>Item</td>
              <td>${item?.productName}</td>
              </tr>
              <tr>


              <td>Quantity</td>
              <td>${item?.orderQty}</td>
              <tr>
              </tr>
              <td>Total</td>
                 <td>Rs ${item?.totalPrice}</td>
            </tr>
       
            <tr>
             
          
           
            </tr>
          `).join('')}
        </table>
      </body>
    </html>
  `;
        const printWindow = window.open('', '', 'width=1000,height=1000,top:300,left:200');
        printWindow.document.open();
        printWindow.document.write(invoiceContent);
        printWindow.document.close();
        printWindow.print();
        printWindow.close();
        window.location.reload(true);

    }
    const fn_submit = () => {
        if (selectedCustomer === "") {
            return toast.error("Select Customer")
        } else if (selectedWarehouse === "") {
            return toast.error("Select Warehouse")
        } else if (cartProduct?.length === 0) {
            return toast.error("Select Product")
        } else if (document.getElementById("cartShippingAmount").value === "") {
            return toast.error("Enter Shipping Price")
        } else if (!localStorage.getItem("dateSet")) {
            return toast.error("First Set Date")
        }
        else {
            const params = {
                setDate: localStorage.getItem("dateSet"),
                customerId: selectedCustomer,
                warehouseId: selectedWarehouse,
                productDetail: cartProduct,
                shipping: parseInt(document.getElementById("cartShippingAmount").value),
                grandTotal: cartProduct?.reduce((acc, i) => {
                    return (i?.cartQty * i?.productPrice) + acc
                }, 0)
            }
            axios.post(`${URL}/customerorder`, params).then((res) => {
                if (res?.data?.status === 200) {
                    toast.success("Order Placed")
                    printInvoice()
                    navigate("/allsales")
                } else {
                    toast.error(res?.data?.message)
                }
            })
        }
    }
    return (
        <div>
            {/* Search Bar */}
            <div className="d-flex flex-column px-3 my-5">
                <Space.Compact size="large" style={{ backgroundColor: "rgba(40, 129, 201, 0.055)" }}>
                    <Input addonBefore={<SearchOutlined />} placeholder="Search Product by Code or Name" />
                </Space.Compact>
            </div>
            <div className="row mx-3">
                {/* POS Left SideBar */}
                <div className="col-md-4 sideBarPOS">
                    <div className="d-flex flex-column px-3 my-3">
                        <label className="productCreateTxt">Customer*</label>
                        <select className="productCreateInput" onChange={(e) => setSelectedCustomer(e?.target?.value)}>
                            <option selected value={""}>---Choose Customer---</option>
                            {allCustomer && allCustomer?.map((item) => (
                                <>
                                    <option value={item?._id}>{item?.name}</option>
                                </>
                            ))}
                        </select>
                    </div>
                    <div className="d-flex flex-column px-3 mb-3">
                        <label className="productCreateTxt">Warehouse*</label>
                        <select className="productCreateInput" value={selectedWarehouse} onChange={(e) => setSelectedWarehouse(e?.target?.value)}>
                            <option selected value={""}>---Choose Warehouse---</option>
                            {allWarehouse && allWarehouse?.map((item) => (
                                <>
                                    <option value={item?._id}>{item?.name}</option>
                                </>
                            ))}
                        </select>
                    </div>
                    <div className="d-flex flex-column px-3 mb-3 cartPOSBox">
                        <label className="productCreateTxt">Cart</label>
                        <div className="addToCartMain m-3">
                            {itemAdded === true && cartProduct?.map((item) => (
                                <div className="d-flex gap-3">
                                    <div>
                                        <img src={`${imgURL}/${item?.imageUrl}`} height={"70px"} />
                                    </div>
                                    <div className="d-flex justify-content-between w-100">
                                        <div>
                                            <span className="productCreateTxt">{item?.productName}</span><br />
                                            <span className="productCreateTxt">PKR{item?.productPrice}</span>
                                        </div>
                                        <div className="text-end">
                                            <button className="cartCross btn btn-sm btn-info me-1 mb-1" style={{ lineHeight: "0.8rem" }} onClick={() => fn_deleteToCart(item?._id)}>x</button>
                                            <br />
                                            <button className="btn btn-sm btn-info me-1" style={{ lineHeight: "1rem" }} onClick={() => handleDecrement(item)}>-</button>
                                            <span>{item?.cartQty}</span>
                                            <button className="btn btn-sm btn-info ms-1" style={{ lineHeight: "1rem" }} onClick={() => handleIncrement(item)}>+</button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="m-3">
                            <label className="productCreateTxt">Shipping</label>
                            <Space.Compact style={{ backgroundColor: "rgba(40, 129, 201, 0.055)", margin: "0.3rem 0", width: "100%" }}>
                                <Input type="number" addonBefore={"PKR"} placeholder="0" id="cartShippingAmount" />
                            </Space.Compact>
                        </div>
                        <div className="m-1 d-flex justify-content-between">
                            <label className="productCreateTxt fw-semibold fs-5 text-dark">Grand Total</label>
                            <label className="productCreateTxt fw-semibold fs-5 text-dark">
                                PKR {cartProduct?.reduce((acc, i) => {
                                    return (i?.cartQty * i?.productPrice) + acc
                                }, 0)}
                            </label>
                        </div>
                        <div className="mt-2">
                            <button className="btn btn-info w-100" onClick={fn_submit}>Order Now</button>
                        </div>
                    </div>
                </div>
                {/* POS Mid Content */}
                <div className="col-md-5 row">
                    {allProduct && allProduct?.map((item) => (
                        <div className="col-sm-6" onClick={() => fn_addToCart(item)} style={{ cursor: "pointer" }}>
                            <div className="productBoxPOS">
                                <div className="productTotalPOS">{item?.warehouse[0]?.productIds?.filter(i => i?.proId === item?._id)[0]?.qty} {item?.unitProduct}</div>
                                <div>
                                    <img src={`${imgURL}/${item?.imageUrl}`} width={"100%"} className="productImgPos" />
                                    <hr />
                                    <p className="productCreateTxt ps-2">{item?.productName}</p>
                                    <p className="productCreateTxt ps-2">PKR{item?.productPrice}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                {/* POS Right SideBar */}
                <div className="col-md-3 sideBarPOS">
                    <div className="posAllCategory">
                        <div className="posHeadingSideBar">All Category</div>
                        <div className="posContentSideBar">All Category</div>
                        <div className="posContentSideBar">Accessories</div>
                        <div className="posContentSideBar">Computers</div>
                        <div className="posContentSideBar">Jackets</div>
                        <div className="posContentSideBar">T-Shirts</div>
                    </div>
                    <div className="posAllCategory">
                        <div className="posHeadingSideBar">All Brands</div>
                        <div className="posContentSideBar">All Brands</div>
                        <div className="posContentSideBar">Abcids</div>
                        <div className="posContentSideBar">Source</div>
                        <div className="posContentSideBar">Brand Electronics</div>
                        <div className="posContentSideBar">Brand shoes</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pos