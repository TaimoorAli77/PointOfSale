import React, { useEffect, useState } from 'react';
import './Supplier.css'
import { GiShoppingCart } from 'react-icons/gi'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import URL from '../../../Url';
import { MagnifyingGlass } from 'react-loader-spinner';
// import { LiaCommentsDollarSolid } from 'react-icons/lia'
// import { FaSackDollar } from 'react-icons/fa'
// import { PiHandCoinsBold } from 'react-icons/pi'

const ViewSuplier = () => {
  const { id } = useParams()
  const [loader, setLoader] = useState(true)
  const [supplierDetail, setSupplierDetail] = useState()
  useEffect(() => {
    axios.get(`${URL}/supplier/${id}`).then((res) => {
      if (res?.data?.status === 200) {
        setSupplierDetail(res?.data?.data)
        setLoader(false)
      }
    })
  }, [id])
  return (
    <div className='complete-detail'>
      <p className='dashboadHeading'>Provider Details</p >
      <div className="container-fluid">
        <hr className='dashboardLine' />
      </div>
      <div className="productMainBox">
        {loader === true ? (
          <div className='text-center'>
            <MagnifyingGlass
              visible={true}
              height="80"
              width="80"
              ariaLabel="MagnifyingGlass-loading"
              wrapperStyle={{}}
              wrapperClass="MagnifyingGlass-wrapper"
              glassColor='#fff'
              color='#B2C4FF'
            />
          </div>
        ) : (
          <div className="col-md-12">
            <div className='col-md-6'>
              <table className="table display table  ">
                <tbody>
                  <tr>
                    <th>Full name</th>
                    <td>{supplierDetail?.name}</td>
                  </tr>
                  <tr>
                    <th>Code</th>
                    <td>{supplierDetail?._id}</td>
                  </tr>
                  <tr>
                    <th>Phone</th>
                    <td>{supplierDetail?.phone}</td>
                  </tr>
                  <tr>
                    <th>Address</th>
                    <td>{supplierDetail?.address}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-3">
                  <div className="containe  ">
                    <div className="text-center">
                      <GiShoppingCart className='color' />
                      <p className='text-color'>Total Purchase</p>
                      <span className=' color-price'>2</span>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="containe  ">
                    <div className="text-center">
                      {/* <LiaCommentsDollarSolid className='color' /> */}
                      <p className='text-color'>Total Amount</p>
                      <span className=' color-price'>PKR 2,332.00</span>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="containe  ">
                    <div className="text-center">
                      {/* <FaSackDollar className='color' /> */}
                      <p className='text-color'>Total Paid</p>
                      <span className=' color-price'>PKR 400.00</span>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="containe  ">
                    <div className="text-center">
                      {/* <PiHandCoinsBold className='color' /> */}
                      <p className='text-color'>Total Debt</p>
                      <p className=' color-price'>PKR 1,3543.00</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>


      <div class="app-footer">
        <div class="row">
          <div class="col-md-9">
            <p><strong>Posly - POS With Ultimate Inventory</strong></p>
            <div class="footer-bottom border-top pt-3 d-flex flex-column flex-sm-row align-items-center">
              <img class="logo" src="https://posly.getstocky.com/images/logo-default.svg" alt="" />
              <div>
                <p class="m-0">© 2023  Posly v1.1</p>
                <p class="m-0">All rights reserved</p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>


  );
}

export default ViewSuplier;
