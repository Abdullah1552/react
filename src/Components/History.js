import React from 'react'
import loupe from '../Images/loupe.png'
import axios from 'axios';
import { useState, useEffect } from 'react';
function History() {
    const [data, setData] = useState([]);
    const columns = [
        {
            title: 'Id',
            dataIndex: 'id',
            key: 'id',
            width: 50, // Adjust the width as needed
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            width: 150, // Adjust the width as needed
        },
        {
            title: 'Price',
            dataIndex: 'price',
            key: 'price',
            width: 100, // Adjust the width as needed
        },
        // {
        //     title: 'Category',
        //     dataIndex: 'category',
        //     key: 'category',
        //     width: 150, // Adjust the width as needed
        // },
        {
            title: 'Rate',
            dataIndex: 'rate',
            key: 'rate',
            width: 100, // Adjust the width as needed
        },
        {
            title: 'Min',
            dataIndex: 'min',
            key: 'min',
            width: 100, // Adjust the width as needed
        },
        {
            title: 'Max',
            dataIndex: 'max',
            key: 'max',
            width: 100, // Adjust the width as needed
        },
        // ...other columns...
    ];

    const [orders, setOrders] = useState([]);
    const [orderstatus, setOrderstatus] = useState('');
    useEffect(() => {
        const getorderdata = async () => {
            try {
                const res = await axios.get('http://localhost:8000/api/orderlist');
                const { data } = res;
                setOrders(data.length >= 1 ? data : []);
            } catch (error) {
                console.log(error.message);
            }
        }
        getorderdata();
    }, []);
    useEffect(() => {
        const getorderstatusdata = async () => {
            try {
                const res = await axios.post('http://localhost:8000/api/orderstatus');
                const { data } = res;
                setOrderstatus(data);
            } catch (error) {
                console.log(error.message);
            }
        }
        getorderstatusdata();
    }, []);
    return (
        <>
            <section className='main1'>
                <h1 className='first-heading'>Check your Order History</h1>
                <p style={{ color: 'black' }}>All Serivecs you Ordered about Social Media</p>
                <div className="row2">
                    <div className="card">
                        <div className="data">
                            <a href="#">All</a>
                        </div>
                    </div>
                    <div className="card">
                        <div className="data">
                            <a href="#">Pending</a>
                        </div>

                    </div>
                    <div className="card">
                        <div className="data">
                            <a href="#">InProgress</a>
                        </div>

                    </div>
                    <div className="card">
                        <div className="data">
                            <a href="#">Completed</a>
                        </div>

                    </div>
                    <div className="card">
                        <div className="data">
                            <a href="#">Processing</a>
                        </div>

                    </div>
                    <div className="card">
                        <div className="data">
                            <a href="#">Cancelled</a>
                        </div>

                    </div>
                </div>
                <div className="search">
                    <img src={loupe} alt="" />
                    <input type="text" placeholder='Search Here' />
                    <button>Search</button>
                </div>
                <div className="row2">
                    <table>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Order Id</th>
                                <th>Service</th>
                                <th>Link</th>
                                {/* <th>Charge</th> */}
                                <th>Quantity</th>
                                <th>Status</th>
                                {/* <th>Min Order</th>
                                <th>Max Order</th>
                                <th>Description</th> */}
                            </tr>
                        </thead>
                        <tbody>
                            {
                                orders.map((order, index) => {
                                    console.log(orderstatus);
                                    return (
                                        <tr key={order.id}>
                                            <td>{order.id}</td>
                                            <td>{order.order_id}</td>
                                            <td>{order.api.name}</td>
                                            <td>{order.link}</td>
                                            {/* <td>{order.api.price}</td> */}
                                            <td>{order.quantity}</td>
                                            <td 
                                            // style={{ color: orderstatus?.status === 'Canceled' ? 'red' : orderstatus?.status === 'Completed' ? 'green' : 'black' }}
                                            >
                                                <b>{order.status}</b>
                                            </td>
                                            {/* Add more table cells for other order properties */}
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </section>
        </>
    )
}

export default History