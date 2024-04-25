import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BsArrowsMove } from "react-icons/bs";
import { TfiWorld } from "react-icons/tfi";
import { ExclamationCircleFilled } from '@ant-design/icons';
import { Button, Modal } from 'antd';
import { toast } from "react-toastify";
import ViewReport from "./ViewReport";
const { confirm } = Modal;

function Nav({ press }) {
  const navigate = useNavigate()
  const [modalOpen, setModalOpen] = useState(false);
  const [show, setShow] = useState(false)
  const fn_closeDay = () => {
    showDeleteConfirm()
  }
  const showDeleteConfirm = () => {
    confirm({
      title: 'Do you Want to Close the Day?',
      icon: <ExclamationCircleFilled />,
      okText: 'Yes',
      okType: 'danger',
      cancelText: 'No',
      onOk() {
        if (!localStorage.getItem("dateSet")) {
          toast.error("Day Already Closed")
        } else {
          setModalOpen(true)
        }
      },
      onCancel() {
        console.log('Cancel');
      },
    });
  };
  return (
    <>
      <ViewReport modalOpen={modalOpen} setModalOpen={setModalOpen} Modal={Modal} Button={Button} />
      <div
        className={`px-3 shadow-sm bg-white d-flex justify-content-between align-items-center`}
        style={{ height: "80px" }}
      >
        <div className="navBarBtnTxt">
          <i className="fa-solid fa-bars-staggered menuIconNavbar" onClick={press} id="toggle_desktop"></i>
          {/* <p className="navbarTextAddNew">+&nbsp;Add New</p> */}
          <a
            class="btn btn-primary"
            data-bs-toggle="offcanvas"
            href="#offcanvasExample"
            role="button"
            aria-controls="offcanvasExample"
            id="toggle_mobile"
          >
            <i class="fa-solid fa-bars"></i>
          </a>
        </div>
        <div className="nav">
          <button className="posBtnNavbar" onClick={fn_closeDay}>Close Day</button>
          <button className="posBtnNavbar" onClick={() => navigate("/pos")}>POS</button>
          <BsArrowsMove />
          <TfiWorld />
          <div className="p-2">
            <i className="fa-solid fa-user userIconNavbar" type="button" onClick={() => setShow(!show)}></i>
          </div>
          {show && (
            <div class="userDropdown">
              <p>Profile</p>
              <p>Setting</p>
              <p>Logout</p>
            </div>
          )}
        </div>
      </div>
      <div className="offcanvas offcanvas-start" tabIndex={-1} id="offcanvasExample" aria-labelledby="offcanvasExampleLabel" style={{ backgroundColor: "#2B3445" }}>
        <div className="offcanvas-header bg-transparent">
          <div>
            <img
              src={require("../assets/images/logo-default.png")}
              width="100px"
              height=""
              alt=""
              style={{ marginLeft: "5px" }}
            />
          </div>
          <button type="button" className="btn-close text-reset bg-light" data-bs-dismiss="offcanvas" aria-label="Close" />
        </div>
        <div className="offcanvas-body">
          <ul className="text-light d-flex flex-column gap-3" style={{ listStyle: "none" }}>
            <li className="nav-item" data-bs-dismiss="offcanvas">
              <Link to="/dashboard" className="fw-semi-bold nav-link active pt-0">
                <i class="fa-solid fa-table-cells-large me-2"></i>Dashboard
              </Link>
            </li>
            <div class="accordion accordion-flush" id="accordionFlushExample5">
              <div class="accordion-item" style={{ backgroundColor: "#2B3445" }}>
                <h2 class="accordion-header" id="flush-headingTwo">
                  <button
                    class="accordion-button collapsed p-0 pe-3 onfocus-none"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseFive1"
                    aria-expanded="false"
                    aria-controls="flush-collapseFive1"
                  >
                    <li className="nav-item">
                      <Link to="#" className="fw-semi-bold nav-link text-light">
                        <i class="fa-solid fa-people-carry-box me-2"></i>User Management
                      </Link>
                    </li>
                  </button>
                </h2>
                <div
                  id="flush-collapseFive1"
                  class="accordion-collapse collapse"
                  aria-labelledby="flush-headingTwo1"
                  data-bs-parent="#accordionFlushExample51"
                >
                  <div class="accordion-body">
                    <li className="nav-item text-light" data-bs-dismiss="offcanvas">
                      <Link to="/user" className="fw-semi-bold nav-link pt-0">
                        Users
                      </Link>
                      <Link to="/roles" className="fw-semi-bold nav-link pt-0">
                        Roles
                      </Link>
                    </li>
                  </div>
                </div>
              </div>
            </div>
            <div class="accordion accordion-flush" id="accordionFlushExample52">
              <div class="accordion-item" style={{ backgroundColor: "#2B3445" }}>
                <h2 class="accordion-header" id="flush-headingTwo">
                  <button
                    class="accordion-button collapsed p-0 pe-3 onfocus-none"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseFive2"
                    aria-expanded="false"
                    aria-controls="flush-collapseFive2"
                  >
                    <li className="nav-item">
                      <Link to="#" className="fw-semi-bold nav-link text-light" aria-current="page">
                        <i class="fa-solid fa-people-carry-box me-2"></i>People
                      </Link>
                    </li>
                  </button>
                </h2>
                <div
                  id="flush-collapseFive2"
                  class="accordion-collapse collapse"
                  aria-labelledby="flush-headingTwo2"
                  data-bs-parent="#accordionFlushExample52"
                >
                  <div class="accordion-body">
                    <li className="nav-item text-light" data-bs-dismiss="offcanvas">
                      <Link to="/customer" className="fw-semi-bold nav-link pt-0" aria-current="page">
                        Customers
                      </Link>
                      <Link to="/supplier" className="fw-semi-bold nav-link pt-0" aria-current="page">
                        Suppliers
                      </Link>
                    </li>
                  </div>
                </div>
              </div>
            </div>
            <div class="accordion accordion-flush" id="accordionFlushExample53">
              <div class="accordion-item" style={{ backgroundColor: "#2B3445" }}>
                <h2 class="accordion-header" id="flush-headingTwo">
                  <button
                    class="accordion-button collapsed p-0 pe-3 onfocus-none"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseFive3"
                    aria-expanded="false"
                    aria-controls="flush-collapseFive3"
                  >
                    <li className="nav-item text-light">
                      <Link to="#" className="fw-semi-bold nav-link" aria-current="page">
                        <i class="fa-solid fa-people-carry-box me-2"></i>Products
                      </Link>
                    </li>
                  </button>
                </h2>
                <div
                  id="flush-collapseFive3"
                  class="accordion-collapse collapse"
                  aria-labelledby="flush-headingTwo3"
                  data-bs-parent="#accordionFlushExample53"
                >
                  <div class="accordion-body">
                    <li className="nav-item text-light" data-bs-dismiss="offcanvas">
                      <Link to="/allproduct" className="fw-semi-bold nav-link pt-0" aria-current="page">
                        All Products
                      </Link>
                      <Link to="/createproduct" className="fw-semi-bold nav-link pt-0" aria-current="page">
                        Create Products
                      </Link>
                      <Link to="/printlabel" className="fw-semi-bold nav-link pt-0" aria-current="page">
                        PrintLabels
                      </Link>
                      <Link to="/group" className="fw-semi-bold nav-link pt-0" aria-current="page">
                        Group
                      </Link>
                      <Link to="/unit" className="fw-semi-bold nav-link active pt-0" aria-current="page">
                        Unit
                      </Link>
                      <Link to="/brand" className="fw-semi-bold nav-link active pt-0" aria-current="page">
                        Brand
                      </Link>
                      <Link to="/warehouse" className="fw-semi-bold nav-link active pt-0" aria-current="page">
                        Warehouse
                      </Link>
                    </li>
                  </div>
                </div>
              </div>
            </div>
            <div class="accordion accordion-flush" id="accordionFlushExample55">
              <div class="accordion-item" style={{ backgroundColor: "#2B3445" }}>
                <h2 class="accordion-header" id="flush-headingTwo">
                  <button
                    class="accordion-button collapsed p-0 pe-3 onfocus-none"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseFive5"
                    aria-expanded="false"
                    aria-controls="flush-collapseFive5"
                  >
                    <li className="nav-item text-light">
                      <Link to="#" className="fw-semi-bold nav-link active" aria-current="page">
                        <i class="fa-solid fa-people-carry-box me-2"></i>Transfer
                      </Link>
                    </li>
                  </button>
                </h2>
                <div
                  id="flush-collapseFive5"
                  class="accordion-collapse collapse"
                  aria-labelledby="flush-headingTwo5"
                  data-bs-parent="#accordionFlushExample55"
                >
                  <div class="accordion-body">
                    <li className="nav-item text-light" data-bs-dismiss="offcanvas">
                      <Link to="/alltransfer" className="fw-semi-bold nav-link active pt-0" aria-current="page">
                        All Transfer
                      </Link>
                      <Link to="/createtransfer" className="fw-semi-bold nav-link active pt-0" aria-current="page">
                        Create Transfer
                      </Link>
                    </li>
                  </div>
                </div>
              </div>
            </div>
            <div class="accordion accordion-flush" id="accordionFlushExample57">
              <div class="accordion-item" style={{ backgroundColor: "#2B3445" }}>
                <h2 class="accordion-header" id="flush-headingTwo">
                  <button
                    class="accordion-button collapsed p-0 pe-3 onfocus-none"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseFive7"
                    aria-expanded="false"
                    aria-controls="flush-collapseFive7"
                  >
                    <li className="nav-item text-light">
                      <Link to="#" className="fw-semi-bold nav-link active" aria-current="page">
                        <i class="fa-solid fa-people-carry-box me-2"></i>Purchases
                      </Link>
                    </li>
                  </button>
                </h2>
                <div
                  id="flush-collapseFive7"
                  class="accordion-collapse collapse"
                  aria-labelledby="flush-headingTwo7"
                  data-bs-parent="#accordionFlushExample57"
                >
                  <div class="accordion-body">
                    <li className="nav-item text-light" data-bs-dismiss="offcanvas">
                      <Link to="/allpurchase" className="fw-semi-bold nav-link active pt-0" aria-current="page">
                        All Purchases
                      </Link>
                      <Link to="/createpurchase" className="fw-semi-bold nav-link active pt-0" aria-current="page">
                        Create Purchases
                      </Link>
                    </li>
                  </div>
                </div>
              </div>
            </div>
            <div class="accordion accordion-flush" id="accordionFlushExample58">
              <div class="accordion-item" style={{ backgroundColor: "#2B3445" }}>
                <h2 class="accordion-header" id="flush-headingTwo">
                  <button
                    class="accordion-button collapsed p-0 pe-3 onfocus-none"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseFive8"
                    aria-expanded="false"
                    aria-controls="flush-collapseFive8"
                  >
                    <li className="nav-item text-light">
                      <Link to="#" className="fw-semi-bold nav-link active" aria-current="page">
                        <i class="fa-solid fa-people-carry-box me-2"></i>Sales
                      </Link>
                    </li>
                  </button>
                </h2>
                <div
                  id="flush-collapseFive8"
                  class="accordion-collapse collapse"
                  aria-labelledby="flush-headingTwo8"
                  data-bs-parent="#accordionFlushExample58"
                >
                  <div class="accordion-body">
                    <li className="nav-item text-light" data-bs-dismiss="offcanvas">
                      <Link to="/allsales" className="fw-semi-bold nav-link active pt-0" aria-current="page">
                        All Sales
                      </Link>
                      <Link to="/createsale" className="fw-semi-bold nav-link active pt-0" aria-current="page">
                        Create Sales
                      </Link>
                    </li>
                  </div>
                </div>
              </div>
            </div>
            <li className="nav-item text-light" data-bs-dismiss="offcanvas">
              <Link
                to="/salesreturn"
                className="fw-semi-bold nav-link active "
                aria-current="page"
              >
                <i class="fa-solid fa-table-cells-large me-2"></i>Sales Return
              </Link>
            </li>
            <li className="nav-item text-light" data-bs-dismiss="offcanvas">
              <Link
                to="/purchasereturn"
                className="fw-semi-bold nav-link active "
                aria-current="page"
              >
                <i class="fa-solid fa-table-cells-large me-2"></i>Purchases Return
              </Link>
            </li>
            <div class="accordion accordion-flush" id="accordionFlushExample59">
              <div class="accordion-item" style={{ backgroundColor: "#2B3445" }}>
                <h2 class="accordion-header" id="flush-headingTwo">
                  <button
                    class="accordion-button collapsed p-0 pe-3 onfocus-none"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseFive9"
                    aria-expanded="false"
                    aria-controls="flush-collapseFive9"
                  >
                    <li className="nav-item text-light">
                      <Link to="#" className="fw-semi-bold nav-link active" aria-current="page">
                        <i class="fa-solid fa-people-carry-box me-2"></i>Accounting
                      </Link>
                    </li>
                  </button>
                </h2>
                <div
                  id="flush-collapseFive9"
                  class="accordion-collapse collapse"
                  aria-labelledby="flush-headingTwo9"
                  data-bs-parent="#accordionFlushExample59"
                >
                  <div class="accordion-body">
                    <li className="nav-item text-light" data-bs-dismiss="offcanvas">
                      <Link to="/account" className="fw-semi-bold nav-link active pt-0" aria-current="page">
                        Account
                      </Link>
                      <Link to="/deposit" className="fw-semi-bold nav-link active pt-0" aria-current="page">
                        Deposit
                      </Link>
                      <Link to="/expense" className="fw-semi-bold nav-link active pt-0" aria-current="page">
                        Expense
                      </Link>
                      <Link to="/expensecategory" className="fw-semi-bold nav-link active pt-0" aria-current="page">
                        Expense Category
                      </Link>
                      <Link to="/depositcategory" className="fw-semi-bold nav-link active pt-0" aria-current="page">
                        Deposit Category
                      </Link>
                      <Link to="/paymentmethod" className="fw-semi-bold nav-link active pt-0" aria-current="page">
                        Payment methods
                      </Link>
                    </li>
                  </div>
                </div>
              </div>
            </div>
            <div class="accordion accordion-flush" id="accordionFlushExample510">
              <div class="accordion-item" style={{ backgroundColor: "#2B3445" }}>
                <h2 class="accordion-header" id="flush-headingTwo">
                  <button
                    class="accordion-button collapsed p-0 pe-3 onfocus-none"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseFive10"
                    aria-expanded="false"
                    aria-controls="flush-collapseFive10"
                  >
                    <li className="nav-item text-light" >
                      <Link to="#" className="fw-semi-bold nav-link active" aria-current="page">
                        <i class="fa-solid fa-people-carry-box me-2"></i>Settings
                      </Link>
                    </li>
                  </button>
                </h2>
                <div
                  id="flush-collapseFive10"
                  class="accordion-collapse collapse"
                  aria-labelledby="flush-headingTwo10"
                  data-bs-parent="#accordionFlushExample510"
                >
                  <div class="accordion-body">
                    <li className="nav-item text-light" data-bs-dismiss="offcanvas">
                      <Link to="/systemsetting" className="fw-semi-bold nav-link active pt-0" aria-current="page">
                        System Settings
                      </Link>
                      <Link to="/posreceiptsetting" className="fw-semi-bold nav-link active pt-0" aria-current="page">
                        Pos Receipt Settings
                      </Link>
                      <Link to="/smssetting" className="fw-semi-bold nav-link active pt-0" aria-current="page">
                        SMS Settings
                      </Link>
                      <Link to="/smstemplate" className="fw-semi-bold nav-link active pt-0" aria-current="page">
                        SMS templates
                      </Link>
                      <Link to="/emailtemplate" className="fw-semi-bold nav-link active pt-0" aria-current="page">
                        Email templates
                      </Link>
                      <Link to="/currency" className="fw-semi-bold nav-link active pt-0" aria-current="page">
                        Currency
                      </Link>
                      <Link to="/backup" className="fw-semi-bold nav-link active pt-0" aria-current="page">
                        Backup
                      </Link>
                    </li>
                  </div>
                </div>
              </div>
            </div>
            <div class="accordion accordion-flush" id="accordionFlushExample511">
              <div class="accordion-item" style={{ backgroundColor: "#2B3445" }}>
                <h2 class="accordion-header" id="flush-headingTwo">
                  <button
                    class="accordion-button collapsed p-0 pe-3 onfocus-none"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseFive11"
                    aria-expanded="false"
                    aria-controls="flush-collapseFive11"
                  >
                    <li className="nav-item text-light">
                      <Link to="#" className="fw-semi-bold nav-link active" aria-current="page">
                        <i class="fa-solid fa-people-carry-box me-2"></i>Reports
                      </Link>
                    </li>
                  </button>
                </h2>
                <div
                  id="flush-collapseFive11"
                  class="accordion-collapse collapse"
                  aria-labelledby="flush-headingTwo11"
                  data-bs-parent="#accordionFlushExample511"
                >
                  <div class="accordion-body">
                    <li className="nav-item text-light" data-bs-dismiss="offcanvas">
                      <Link to="/allsales" className="fw-semi-bold nav-link active pt-0" aria-current="page">
                        Sale Report
                      </Link>
                      <Link to="/allpurchase" className="fw-semi-bold nav-link active pt-0" aria-current="page">
                        Purchase Report
                      </Link>
                      <Link to="/salesreturn" className="fw-semi-bold nav-link active pt-0" aria-current="page">
                        Sale Return Report
                      </Link>
                      <Link to="/purchasereturn" className="fw-semi-bold nav-link active pt-0" aria-current="page">
                        Purchase Return Report
                      </Link>
                    </li>
                  </div>
                </div>
              </div>
            </div>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Nav;
