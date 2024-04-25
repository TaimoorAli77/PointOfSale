import React, { useEffect, useState } from "react"


const ViewPayment = ({ Modal, Button, viewPaymentModal, setViewPaymentModal, URL, toast, singlePurchase, allSupplier, allWarehouse }) => {
    const [supplier, setSupplier] = useState()
    const [warehouse, setWarehouse] = useState()
    const [invoice, setInvoice] = useState([])

    useEffect(() => {
        // setSupplier(allSupplier?.filter(i => i?._id === singlePurchase?.supplier)?.[0])
        setWarehouse(allWarehouse?.filter(i => i?._id === singlePurchase?.wh)?.[0])
        const groupObjects = allSupplier.reduce((acc, item) => {
            const findItem = acc.find((i) => i?.invoiceNo === item?.invoiceNo)
            if (!findItem) {
                acc.push({
                    name: item.name,
                    purchaseDue: item.purchaseDue,
                    purchaseTotal: item.purchaseTotal,
                    paid: item.paid,
                    phone: item.phone,
                    invoiceNo: item.invoiceNo,
                    createdAt: item.createdAt
                })
            } else {
                const findProduct = acc.find((i) => i.invoiceNo === item.invoiceNo)
                if (findProduct) {
                    findProduct.purchaseDue += item?.purchaseDue
                    findProduct.paid += item?.paid
                    findProduct.purchaseTotal += item?.purchaseTotal
                } else {
                    findItem.push({
                        name: item.name,
                        purchaseDue: item.purchaseDue,
                        purchaseTotal: item.purchaseTotal,
                        paid: item.paid,
                        phone: item.phone,
                        invoiceNo: item.invoiceNo,
                        createdAt: item.createdAt
                    })
                }
            }
            return acc

        }, [])
        setInvoice(groupObjects)
    }, [singlePurchase])
    console.log(invoice);
    return (
        <Modal
            title="Detail Purchase"
            style={{ top: 20 }}
            open={viewPaymentModal}
            onOk={() => setViewPaymentModal(false)}
            onCancel={() => setViewPaymentModal(false)}
            width={600}
            footer={null}
        >
            <hr />
            <div className="row">
                <div className="col-md-12">
                    <h5 className="mb-3">Purchase Info</h5>
                    {/* <p style={{ margin: "0", padding: "0" }}>{supplier?.name}</p>
                    <p style={{ margin: "0", padding: "0" }}>{supplier?.email}</p>
                    <p style={{ margin: "0", padding: "0" }}>{supplier?.phone}</p>
                    <p style={{ margin: "0", padding: "0" }}>{supplier?.city}</p>
                    <p style={{ margin: "0", padding: "0" }}>{supplier?.country}</p>
                    <p style={{ margin: "0", padding: "0" }}>{supplier?.address}</p> */}
                    <div className="table-responsive mt-3">
                        <table
                            id="warehouse_table"
                            className="display table dataTable no-footer"
                            aria-describedby="warehouse_table_info"
                            style={{ width: "100%" }}
                        >
                            <thead>
                                <tr >
                                    <th>Date</th>
                                    <th>Ref#</th>
                                    <th>Supplier</th>

                                    <th>Due</th>
                                    <th>Paid</th>
                                    <th>Grand Total</th>



                                </tr>
                            </thead>
                            <tbody>
                                {invoice && invoice?.map(item => (
                                    <tr>
                                        <td>{new Date(item.createdAt)?.toLocaleDateString()}</td>
                                        <td>{item?.invoiceNo}</td>
                                        <td>{item?.name}</td>

                                        <td>PKR {item?.purchaseDue}</td>
                                        <td>PKR {item?.paid}</td>
                                        <td>PKR {item?.purchaseTotal}</td>

                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
                {/* <div className="col-md-6">
                    <h5 className="mb-3">Warehouse Info</h5>
                    <p style={{ margin: "0", padding: "0" }}>{warehouse?.name}</p>
                    <p style={{ margin: "0", padding: "0" }}>{warehouse?.email}</p>
                    <p style={{ margin: "0", padding: "0" }}>{warehouse?.phone}</p>
                    <p style={{ margin: "0", padding: "0" }}>{warehouse?.city}</p>
                    <p style={{ margin: "0", padding: "0" }}>{warehouse?.country}</p>
                    <p style={{ margin: "0", padding: "0" }}>{warehouse?.zipCode}</p>
                </div> */}
            </div>
        </Modal>
    )
}

export default ViewPayment