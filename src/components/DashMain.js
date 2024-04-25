import React, { useState } from "react";
import { Link } from "react-router-dom";
function ScrollableSection({ left }) {
  const [activeTab, setActiveTab] = useState('dashboard');
  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };
  return (
    <>
      <div id="sidebar_mobile" className="sidebar p-3 pt-3 " style={{ left: left, backgroundColor: "#2B3445" }}>
        <div>
          <img
            src={require("../assets/images/logo-default.png")}
            width="100px"
            height=""
            alt=""
            style={{ marginLeft: "5px" }}
          />
        </div>
        <ul className="pb-5 mt-5 ps-0">
          <li className={`nav-item ${activeTab === 'dashboard' ? 'active' : ''}`}>
            <Link to="/dashboard" className="fw-semi-bold nav-link active pt-0" onClick={() => handleTabClick('dashboard')}>
              <i class="fa-solid fa-table-cells-large"></i>Dashboard
            </Link>
          </li>
          <div className="accordion accordion-flush mt-3" id="accordionFlushExample5">
            <div className="accordion-item" style={{ backgroundColor: "#2B3445" }}>
              <h2 class={`accordion-header nav-item py-1 ps-0 ${activeTab === 'user' ? 'active' : ''}`} id="flush-headingTwo">
                <button
                  className="accordion-button collapsed p-0 pe-3 onfocus-none"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseFive1"
                  aria-expanded="false"
                  aria-controls="flush-collapseFive1"
                  onClick={() => handleTabClick('user')}
                >
                  <li className={`nav-item`} >
                    <Link to="#" className="fw-semi-bold pt-0 nav-link">
                      <i className="fa-solid fa-people-carry-box"></i>User Management
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
                  <li className={`nav-item`}>
                    <Link to="/user" className={`fw-semi-bold nav-link pt-0`} aria-current="page">
                      Users
                    </Link>
                    <Link to="/roles" className="fw-semi-bold nav-link pt-0" aria-current="page">
                      Roles
                    </Link>
                  </li>
                </div>
              </div>
            </div>
          </div>
          <div class="accordion accordion-flush mt-3" id="accordionFlushExample52">
            <div class="accordion-item" style={{ backgroundColor: "#2B3445" }}>
              <h2 class={`accordion-header nav-item py-1 ps-0 ${activeTab === 'people' ? 'active' : ''}`} id="flush-headingTwo">
                <button
                  class="accordion-button collapsed p-0 pe-3 onfocus-none"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseFive2"
                  aria-expanded="false"
                  aria-controls="flush-collapseFive2"
                  onClick={() => handleTabClick('people')}
                >
                  <li className={`nav-item`}>
                    <Link to="#" className="fw-semi-bold pt-0 nav-link" aria-current="page">
                      <i class="fa-solid fa-people-carry-box"></i>People
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
                  <li className="nav-item">
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
          <div className="accordion accordion-flush mt-3" id="accordionFlushExample53">
            <div className="accordion-item" style={{ backgroundColor: "#2B3445" }}>
              <h2 className={`accordion-header nav-item py-1 ps-0 ${activeTab === 'products' ? 'active' : ''}`} id="flush-headingTwo">
                <button
                  className="accordion-button collapsed p-0 pe-3 onfocus-none"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseFive3"
                  aria-expanded="false"
                  aria-controls="flush-collapseFive3"
                  onClick={() => handleTabClick('products')}
                >
                  <li className="nav-item" >
                    <Link to="#" className="fw-semi-bold pt-0 nav-link" aria-current="page">
                      <i className="fa-solid fa-people-carry-box"></i>Products
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
                  <li className="nav-item">
                    <Link to="/allproduct" className="fw-semi-bold nav-link pt-0" aria-current="page">
                      All Products
                    </Link>
                    <Link to="/createproduct" className="fw-semi-bold nav-link pt-0" aria-current="page">
                      Create Products
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
          <div class="accordion accordion-flush mt-3" id="accordionFlushExample55">
            <div class="accordion-item" style={{ backgroundColor: "#2B3445" }}>
              <h2 className={`accordion-header nav-item py-1 ps-0 ${activeTab === 'transfer' ? 'active' : ''}`} id="flush-headingTwo">
                <button
                  class="accordion-button collapsed p-0 pe-3 onfocus-none"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseFive5"
                  aria-expanded="false"
                  aria-controls="flush-collapseFive5"
                  onClick={() => handleTabClick('transfer')}
                >
                  <li className="nav-item" >
                    <Link to="#" className="fw-semi-bold pt-0 nav-link active" aria-current="page">
                      <i class="fa-solid fa-people-carry-box"></i>Transfer
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
                  <li className="nav-item">
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
          <div class="accordion accordion-flush mt-3" id="accordionFlushExample57">
            <div class="accordion-item" style={{ backgroundColor: "#2B3445" }}>
              <h2 className={`accordion-header nav-item py-1 ps-0 ${activeTab === 'purchases' ? 'active' : ''}`} id="flush-headingTwo">
                <button
                  class="accordion-button collapsed p-0 pe-3 onfocus-none"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseFive7"
                  aria-expanded="false"
                  aria-controls="flush-collapseFive7"
                  onClick={() => handleTabClick('purchases')}
                >
                  <li className="nav-item" >
                    <Link to="#" className="fw-semi-bold pt-0 nav-link active" aria-current="page">
                      <i class="fa-solid fa-people-carry-box"></i>Purchases
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
                  <li className="nav-item">
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
          <div class="accordion accordion-flush mt-3" id="accordionFlushExample58">
            <div class="accordion-item" style={{ backgroundColor: "#2B3445" }}>
              <h2 className={`accordion-header nav-item py-1 ps-0 ${activeTab === 'sales' ? 'active' : ''}`} id="flush-headingTwo">
                <button
                  class="accordion-button collapsed p-0 pe-3 onfocus-none"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseFive8"
                  aria-expanded="false"
                  aria-controls="flush-collapseFive8"
                  onClick={() => handleTabClick('sales')}
                >
                  <li className="nav-item" >
                    <Link to="#" className="fw-semi-bold pt-0 nav-link active" aria-current="page">
                      <i class="fa-solid fa-people-carry-box"></i>Sales
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
                  <li className="nav-item">
                    <Link to="/allsales" className="fw-semi-bold nav-link active pt-0" aria-current="page">
                      All Sales
                    </Link>
                    {/* <Link to="/createsale" className="fw-semi-bold nav-link active pt-0" aria-current="page">
                      Create Sales
                    </Link> */}
                  </li>
                </div>
              </div>
            </div>
          </div>
          <li className={`nav-item ${activeTab === 'salesReturn' ? 'active' : ''}`}>
            <Link
              to="/salesreturn"
              className="fw-semi-bold nav-link active pt-0"
              aria-current="page"
              onClick={() => handleTabClick('salesReturn')}
            >
              <i class="fa-solid fa-table-cells-large"></i>Sales Return
            </Link>
          </li>
          <li className={`nav-item ${activeTab === 'purchasesReturn' ? 'active' : ''}`}>
            <Link
              to="/purchasereturn"
              className="fw-semi-bold nav-link active pt-0"
              aria-current="page"
              onClick={() => handleTabClick('purchasesReturn')}
            >
              <i class="fa-solid fa-table-cells-large"></i>Purchases Return
            </Link>
          </li>
          <div class="accordion accordion-flush mt-3" id="accordionFlushExample59">
            <div class="accordion-item" style={{ backgroundColor: "#2B3445" }}>
              <h2 className={`accordion-header nav-item py-1 ps-0 ${activeTab === 'accounting' ? 'active' : ''}`} id="flush-headingTwo">
                <button
                  class="accordion-button collapsed p-0 pe-3 onfocus-none"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseFive9"
                  aria-expanded="false"
                  aria-controls="flush-collapseFive9"
                  onClick={() => handleTabClick('accounting')}
                >
                  <li className="nav-item" >
                    <Link to="#" className="fw-semi-bold pt-0 nav-link active" aria-current="page">
                      <i class="fa-solid fa-people-carry-box"></i>Accounting
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
                  <li className="nav-item">
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
          <div class="accordion accordion-flush mt-3" id="accordionFlushExample510">
            <div class="accordion-item" style={{ backgroundColor: "#2B3445" }}>
              <h2 className={`accordion-header nav-item py-1 ps-0 ${activeTab === 'settings' ? 'active' : ''}`} id="flush-headingTwo">
                <button
                  class="accordion-button collapsed p-0 pe-3 onfocus-none"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseFive10"
                  aria-expanded="false"
                  aria-controls="flush-collapseFive10"
                  onClick={() => handleTabClick('settings')}
                >
                  <li className="nav-item" >
                    <Link to="#" className="fw-semi-bold pt-0 nav-link active" aria-current="page">
                      <i class="fa-solid fa-people-carry-box"></i>Settings
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
                  <li className="nav-item">
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
          <div class="accordion accordion-flush mt-3" id="accordionFlushExample511">
            <div class="accordion-item" style={{ backgroundColor: "#2B3445" }}>
              <h2 className={`accordion-header nav-item py-1 ps-0 ${activeTab === 'reports' ? 'active' : ''}`} id="flush-headingTwo">
                <button
                  class="accordion-button collapsed p-0 pe-3 onfocus-none"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseFive11"
                  aria-expanded="false"
                  aria-controls="flush-collapseFive11"
                  onClick={() => handleTabClick('reports')}
                >
                  <li className="nav-item" >
                    <Link to="#" className="fw-semi-bold pt-0 nav-link active" aria-current="page">
                      <i class="fa-solid fa-people-carry-box"></i>Reports
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
                  <li className="nav-item">
                    <Link to="/salereport" className="fw-semi-bold nav-link active pt-0" aria-current="page">
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
    </>
  );
}

export default ScrollableSection;
