// / <reference path="path/types.d.ts" />
import React from 'react'

import youtube from '../Images/youtube.png'
import cart1 from '../Images/add-to-cart.png'
import facebook from '../Images/facebook.png'
import list from '../Images/list.png'
import instagram from '../Images/instagram.png'
import twitter from '../Images/twitter.png'
import tiktok from '../Images/tiktok.png'
import clock from '../Images/clock.png'
import telegram from '../Images/telegram.png'
import snapchat from '../Images/snapchat.png'
import linkedin from '../Images/linkedin.png'
import social from '../Images/social.png'
import other from '../Images/plus(1).png'
import loupe from '../Images/loupe.png'
import axios from 'axios';
import { useEffect, useState } from 'react'
// import { createRoot } from 'ReactDOM';
import { ColumnsType } from 'antd/es/table';
import { Table } from 'antd';
function Services() {
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
        // {
        //     title: 'Rate',
        //     dataIndex: 'rate',
        //     key: 'rate',
        //     width: 100, // Adjust the width as needed
        // },
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
    
    useEffect(() => {
        // Fetch data from your API when the component mounts
        axios.get('http://localhost:8000/api/serviceslist') // Replace with your API endpoint
            .then((response) => {
                setData(response.data); // Set the API response data in the 'data' state
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);
    const [services, setCategories] = useState([]);
    useEffect(() => {
        const getcategoryData = async () => {
            try {
                const res = await axios.get('http://localhost:8000/api/categorieslist');
                const { data } = res;
                setCategories(data.length >= 1 ? data : []);
            } catch (error) {
                console.log(error.message);
            }
        }
        getcategoryData();
    }, []);
    return (
        <>
            <section className='main1'>
                <h1 className='first-heading'>Services | Bulkfollows SMM Panel</h1>
                <p style={{ color: 'black' }}>All Serivecs you want about Social Media</p>
                <div className="row1">
                {services.map((category, index) => (
                        <div
                            key={index}
                            className={`card`}
                            // onClick={() => {
                            //     handleCategoryClick(category.id);
                            //     handleServiceChange();
                            //     setSelectedCategoryIndex(index);
                            // }}
                        >
                            <div className="data">
                                <img src={index === 0
                                    ? youtube
                                    : index === 1
                                        ? facebook
                                        : index === 2
                                            ? instagram
                                            : index === 3
                                                ? twitter
                                                : index === 4
                                                    ? tiktok
                                                    : index === 5
                                                        ? telegram
                                                        : index === 6
                                                            ? snapchat
                                                            : index === 7
                                                                ? linkedin
                                                                : index === 8
                                                                    ? social
                                                                    : index === 9
                                                                        ? other

                                                                        : null} alt="" />
                                <a>{category.name}</a>
                            </div>
                        </div>
                    ))}
                    {/* <div className="card">
                        <div className="data">

                            <img src={youtube} alt="" />
                            <a href="#">Youtube</a>
                        </div>
                    </div>
                    <div className="card">
                        <div className="data">

                            <img src={facebook} alt="" />
                            <a href="#">Facebook</a>
                        </div>

                    </div>
                    <div className="card">
                        <div className="data">

                            <img src={instagram} alt="" />
                            <a href="#">Instagram</a>
                        </div>

                    </div>
                    <div className="card">
                        <div className="data">

                            <img src={twitter} alt="" />
                            <a href="#">Twitter</a>
                        </div>

                    </div>
                    <div className="card">
                        <div className="data">

                            <img src={tiktok} alt="" />
                            <a href="#">Tiktok</a>
                        </div>

                    </div>
                    <div className="card">
                        <div className="data">

                            <img src={telegram} alt="" />
                            <a href="#">Telegram</a>
                        </div>

                    </div>
                    <div className="card">
                        <div className="data">

                            <img src={snapchat} alt="" />
                            <a href="#">Snapchat</a>
                        </div>

                    </div>
                    <div className="card">
                        <div className="data">

                            <img src={linkedin} alt="" />
                            <a href="#">Linkedin</a>
                        </div>
                    </div>
                    <div className="card">
                        <div className="data">

                            <img src={social} alt="" />
                            <a href="#">Spotify</a>
                        </div>

                    </div>
                    <div className="card">
                        <div className="data">

                            <img src={other} alt="" />
                            <a href="#">Other</a>
                        </div>

                    </div> */}
                </div>
                <div className="search">
                    <img src={loupe} alt="" />
                    <input type="text" placeholder='Search Here' />
                    <button>Search</button>
                </div>
                {/* <table>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Services</th>
                                <th>Rate / Hour</th>
                                <th>Min Order</th>
                                <th>Max Order</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>text1.1</td>
                                <td>text1.2</td>
                                <td>text1.3</td>
                                <td>text1.3</td>
                                <td>text1.3</td>
                                <td><button>View</button></td>
                            </tr>
                            <tr>
                                <td>text2.1</td>
                                <td>text2.2</td>
                                <td>text2.3</td>
                                <td>text1.3</td>
                                <td>text1.3</td>
                                <td><button>View</button></td>
                            </tr>
                            <tr>
                                <td>text3.1</td>
                                <td>text3.2</td>
                                <td>text3.3</td>
                                <td>text1.3</td>
                                <td>text1.3</td>
                                <td><button>View</button></td>
                            </tr>
                            <tr>
                                <td>text3.1</td>
                                <td>text3.2</td>
                                <td>text3.3</td>
                                <td>text1.3</td>
                                <td>text1.3</td>
                                <td><button>View</button></td>
                            </tr>
                            <tr>
                                <td>text3.1</td>
                                <td>text3.2</td>
                                <td>text3.3</td>
                                <td>text1.3</td>
                                <td>text1.3</td>
                                <td><button>View</button></td>
                            </tr>
                            <tr>
                            </tr>
                        </tbody>
                    </table> */}
                <Table style={{ marginTop: '5%' }}
                    columns={columns}
                    dataSource={data}
                    scroll={{
                        x: 1500,
                        y: 300,
                    }}
                />
            </section>

        </>
    )
}

export default Services