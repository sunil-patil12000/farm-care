import React, { useEffect, useState } from 'react'
import {
    MDBCard,
    MDBCardBody,
    MDBCardFooter,
    MDBCardHeader,
    MDBCardImage,
    MDBCol,
    MDBContainer,
    MDBProgress,
    MDBProgressBar,
    MDBRow,
    MDBTypography,
} from "mdb-react-ui-kit";
import './orders.css'
import Cookies from 'js-cookie'
import axios from 'axios'

function Order() {

    const [data, setData] = useState([]);


    useEffect(() => {


        const data = () => {
            let lid = JSON.parse(Cookies.get('user'))

            axios.post('http://localhost:4545/orders/my', {
                lid: lid
            }).then(
                (res) => {
                    console.log(res)
                    setData(res.data);
                }
            ).catch(
                (err) => {
                    console.log(err)
                }
            )

        }
        data()
    }, [])



    console.log(data)





    return (
        <section
            className="h-100 gradient-custom"
            style={{ backgroundColor: "#eee" }}
        >
           {
            data.map((itrem,i)=>{
                return(
                    <MDBContainer className="py-5 h-100">
                    <MDBRow className=" flex justify-content-center align-items-center h-100 " >
                        <MDBCol lg="10" xl="8">
                            <MDBCard style={{ borderRadius: "10px", width:'50vw' }}>
                                <MDBCardHeader className="px-4 py-5">
                                    <MDBTypography tag="h5" className="text-muted mb-0">
                                        Thanks for your Order,{" "}
                                        <span style={{ color: "#a8729a" }}>{itrem.fname+" "+itrem.lname}</span>!
                                    </MDBTypography>
                                </MDBCardHeader>
                                <MDBCardBody className="p-4">
                                    <div className="d-flex justify-content-between align-items-center mb-4">
                                        <p
                                            className="lead fw-normal mb-0"
                                            style={{ color: "#a8729a" }}
                                        >
                                            Receipt
                                        </p>
                                        
                                    </div>
    
                                    
                                            {
                                                itrem.products.map((dt,inx)=>{
                                                    return(
                                                        <MDBCard className="shadow-0 border mb-4 w-100">
                                        <MDBCardBody>
                                                    
                                                        <MDBRow>
                                                <MDBCol md="2">
                                                    <MDBCardImage
                                                        src={dt.image}
                                                        fluid
                                                        alt="Phone"

                                                        style={{width:'20rem'}}
                                                    />
                                                </MDBCol>
                                                <MDBCol
                                                    md="2"
                                                    className="text-center d-flex justify-content-center align-items-center mr-6"
                                                    st
                                                >
                                                    <p className="text-muted mb-0">{dt.name}</p>
                                                </MDBCol>
    
    
                                                <MDBCol
                                                    md="2"
                                                    className="text-center d-flex justify-content-center align-items-center"
                                                >
                                                    <p className="text-muted mb-0 small">Qty: 1</p>
                                                </MDBCol>
                                                <MDBCol
                                                    md="2"
                                                    className="text-center d-flex justify-content-center align-items-center"
                                                >
                                                    <p className="text-muted mb-0 small">{dt.price}</p>
                                                </MDBCol>
                                            </MDBRow>
                                            </MDBCardBody>
                                    </MDBCard>
                                                        )
                                                })
                                            }
    
    
                                        
    
                                   
                                    <div className="d-flex justify-content-between pt-2">
                                        <p className="fw-bold mb-0">Order Details</p>
                                       
                                    </div>
    
                                    <div className="d-flex justify-content-between pt-2">
                                        <p className="text-muted mb-0">Invoice Number : {itrem._id}</p>
                                       
                                    </div>
    
                                    <div className="d-flex justify-content-between">
                                        <p className="text-muted mb-0">
                                            Invoice Date : {itrem.createdAt.substring(0,10)}
                                        </p>
                                        
                                    </div>
    
                                    <div className="d-flex justify-content-between mb-5">
                                      
                                      
                                    </div>
                                </MDBCardBody>
                                <MDBCardFooter
                                    className="border-0 px-4 py-5"
                                    style={{
                                        backgroundColor: "green",
                                        borderBottomLeftRadius: "10px",
                                        borderBottomRightRadius: "10px",
                                    }}
                                >
                                    <MDBTypography
                                        tag="h5"
                                        className="d-flex align-items-center justify-content-end text-white text-uppercase mb-0"
                                    >
                                        Total paid: <span className="h2 mb-0 ms-2"> {itrem.total}</span>
                                    </MDBTypography>
                                </MDBCardFooter>
                            </MDBCard>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
                )
            })
           }
        </section>

    )
}

export default Order