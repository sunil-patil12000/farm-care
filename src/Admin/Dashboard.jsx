import React, { useEffect, useState } from "react";
import { Card, CardBody, CardHeader, CardTitle, Col, Row } from "reactstrap";
import "./AdminPanel.css";
import axios from "axios";
import AgriculturalDiseasesForm from "./DiseBlog";
import ProductUploadPage from "./ProductsUploading";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";


const AdminPanel = () => {
    const [activeTab, setActiveTab] = useState("dashboard");
    const [totalAdmissions, setTotalAdmissions] = useState(); // replace with dynamic data
    const unpaidAdmissions = 10; // replace with dynamic data

    const navigate = useNavigate()

    const toggleTab = (tab) => {
        setActiveTab(tab);
    };


    const [data, setData] = useState();
    const [data1, setData1] = useState();

    useEffect(() => {


        let fg = async () => {

            let df = await axios.get('http://localhost:4545/api/orders');
            setData(df.data.length);
            setData1(df.data)
        }



        fg()











    }, [])


    if (!Cookies.get('admin')) {
        navigate('/admin')
    }




    console.log(data1)












    const renderTable = () => {
        switch (activeTab) {
            case "dashboard":
                return (
                    <Row>
                        <Col md={4}>
                            <Card>
                                <CardHeader>Total Orders</CardHeader>
                                <CardBody>
                                    <CardTitle tag="h5">{data === null ? '0' : data}</CardTitle>
                                </CardBody>
                            </Card>
                        </Col>

                    </Row>
                );

            case "all orders":
                return (
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">First</th>
                                <th scope="col">Last</th>
                                <th scope="col">Products</th>
                                <th scope="col">Address</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data1.map((item, index) => {
                                    return (
                                        <tr>
                                            <th scope="row">{index + 1}</th>
                                            <td>{item.fname}</td>
                                            <td>{item.lname}</td>
                                            {
                                                item.products.map((i, ind) => {
                                                    return (
                                                        <td style={{ display: 'flex' }}>{i.name}</td>
                                                    )
                                                })
                                            }
                                            <td style={{ textAlign: 'center' }}>{item.address}</td>
                                        </tr>

                                    )
                                })
                            }


                        </tbody>
                    </table>

                )
            case "ud":
                return (
                    <AgriculturalDiseasesForm />
                ); // replace with actual table component
            case "up":
                return (
                    <ProductUploadPage />
                ); // replace with actual table component
            default:
                return null;
        }
    };

    return (
        <div className="admin-panel">
            <Row>
                <Col md={3}>
                    <div className="sidebar">

                        <div className="adname">
                          
                        </div>



                        <ul>



                            <li>
                                <a href="#" onClick={() => toggleTab("dashboard")}>
                                    Dashboard
                                </a>
                            </li>
                            <li>
                                <a href="#" onClick={() => toggleTab("all orders")}>
                                    All orders
                                </a>
                            </li>
                            <li>
                                <a href="#" onClick={() => toggleTab("ud")}>
                                    upload disease
                                </a>
                            </li>
                            <li>
                                <a href="#" onClick={() => toggleTab("up")}>
                                    upload products
                                </a>
                            </li>
                            {/* <li>
                <a href="#" onClick={() => toggleTab("unpaid")}>
                  Unpaid Admissions
                </a>
              </li> */}
                        </ul>
                    </div>
                </Col>
                <Col md={9}>
                    <div className="main-content">

                        <Row>
                            <Col md={12}>{renderTable()}</Col>
                        </Row>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default AdminPanel;
