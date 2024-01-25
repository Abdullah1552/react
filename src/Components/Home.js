import React from 'react';
import gif from '../Images/Profile.json';
import dollar from '../Images/dollar.json';
import wallet from '../Images/wallet.json';
import cart from '../Images/cart.json';
import deposit from '../Images/deposit.png';
import youtube from '../Images/youtube.png'
import cart1 from '../Images/add-to-cart.png'
import facebook from '../Images/facebook.png'
import list from '../Images/list.png'
import instagram from '../Images/instagram.png'
import twitter from '../Images/twitter.png'
import tiktok from '../Images/tiktok.png'
import { Routes, Route, NavLink } from 'react-router-dom';
import clock from '../Images/clock.png'
import telegram from '../Images/telegram.png'
import snapchat from '../Images/snapchat.png'
import linkedin from '../Images/linkedin.png'
import social from '../Images/social.png'
import other from '../Images/plus(1).png'
import rocket from '../Images/rocket.png'
import stopwatch from '../Images/stopwatch.png'
import crown from '../Images/crown.png'
import Lottie from 'lottie-react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
function Home() {
    const [services, setServices] = useState([]);
    const [totalOrder, setTotalOrder] = useState(0);
    const [categories, setCategories] = useState([]);
    const [subcategories, setsubCategories] = useState([]);
    const [selectedSubCategoryId, setSelectedSubCategoryId] = useState(null);
    const [filteredServices, setFilteredServices] = useState([]);
    const [filteredminServices, setminFilteredServices] = useState([]);
    // const [selectedServiceData, handleServiceChange] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(null);
    const [quantity, setQuantity] = useState('');
    const [charge, setCharge] = useState('');
    const [selectedService, setSelectedService] = useState(null);
    const [payments, setPayments] = useState([]);
    const [totalAmount, setTotalAmount] = useState(0);
    const token = localStorage.getItem('token');

    useEffect(() => {
        const getservicedData = async () => {
            try {
                const res = await axios.get('http://localhost:8000/api/serviceslist');
                const { data } = res;
                setServices(data.length >= 1 ? data : []);
            } catch (error) {
                console.log(error.message);
            }
        }
        getservicedData();
    }, []);
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
    useEffect(() => {
        const getorderData = async () => {
            try {
                const res = await axios.get('http://localhost:8000/api/orderlist');
                const data = res.data;
                setTotalOrder(data.length);
            } catch (error) {
                console.log(error.message);
            }
        }
        getorderData();
    }, []);
    useEffect(() => {
        const getsubcategoryData = async () => {
            try {
                const res = await axios.get('http://localhost:8000/api/subcategorieslist');
                const { data } = res;
                setsubCategories(data.length >= 1 ? data : []);
            } catch (error) {
                console.log(error.message);
            }
        }
        getsubcategoryData();
    }, []);

    useEffect(() => {
        // Retrieve the user's data from session storage
        const userData = sessionStorage.getItem('user');

        if (userData) {
            const user = JSON.parse(userData);
            const userId = user.id;

            // Fetch payment data for the logged-in user
            const fetchPaymentDataForUser = async (userId) => {
                try {
                    const res = await axios.get(`http://localhost:8000/api/paymentlist/${userId}`);
                    const { data } = res;
                    setPayments(data.payments);
                    setTotalAmount(data.totalAmount);
                } catch (error) {
                    console.log(error.message);
                }
            };

            fetchPaymentDataForUser(userId);
        }
    }, []);
    const handleServiceChange = (selectedServiceData) => {
        setSelectedService(selectedServiceData);
        setQuantity(''); // Reset the quantity field
        setCharge(''); // Reset the charge field
    };
    const handleQuantityChange = (event) => {
        const newQuantity = parseInt(event.target.value);
        setQuantity(newQuantity);

        if (selectedService) {
            if (newQuantity >= selectedService.min && newQuantity <= selectedService.max) {
                const calculatedCharge = (selectedService.price / selectedService.max) * newQuantity;
                setCharge(calculatedCharge.toFixed(2));
            } else {
                setCharge('Invalid Quantity');
            }
        }
    };

    useEffect(() => {
        if (selectedSubCategoryId === null) {
            setFilteredServices([]); // Clear the filtered services when no sub-category is selected
        } else {
            const filtered = services.filter(service => service.sub_category_id === parseInt(selectedSubCategoryId));
            setFilteredServices(filtered);
        }
    }, [selectedSubCategoryId, services]);


    const handleCategoryClick = (categoryId) => {
        setSelectedCategory(categoryId);
        setQuantity(''); // Reset the quantity field
        setCharge('');
        setSelectedSubCategoryId(null); // Clear the selected sub-category when a new category is selected
    };
    const [formData, setFormData] = useState({
        // Initialize form fields here
        service_id: '',
        link: '',
        quantity: '',
        charge: '',
        // Add other form fields as needed
    });
    // const handleChargeChange = (e) => {
    //     setFormData({ ...formData, charge: e.target.value }); // Update charge field
    // };
    const userInfoString = sessionStorage.getItem('user');
    const userInfo = JSON.parse(userInfoString);
    const handleSubmit = async (e) => {
        e.preventDefault();
        // const totalAmount = payments.reduce((acc, payment) => acc + payment.amount, 0);
        if (Number(totalAmount) < Number(charge)) {
            console.log(totalAmount, charge);
            // Display an error message
            const MySwal = withReactContent(Swal);

            MySwal.fire({
                title: <strong>Error</strong>,
                html: <i>Insufficient Balance!</i>,
                icon: 'error',
            });
            return; // Prevent the API call and exit the function
        }
        try {
            // Create an object with the data you want to send
            const dataToSend = {
                userId: userInfo.id,
                service_id: formData.service_id,
                link: formData.link,
                quantity: formData.quantity,
                amount: charge,
            };
            // const subtractResponse = await axios.post('http://localhost:8000/api/subtract', dataToSend, {
            //     headers: {
            //         'Content-Type': 'application/json',
            //     },
            // });

            // Handle the API response for subtracting the charge here
            // console.log(subtractResponse.data);

            // Make an HTTP POST request to your Laravel API
            const response = await axios.post('http://localhost:8000/api/order', dataToSend, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            // Handle the API response here
            console.log(response.data);
            const MySwal = withReactContent(Swal)

            MySwal.fire({
                title: <strong>Congratulations</strong>,
                html: <b>Your Order Placed Successfully!</b>,
                icon: 'success',
            }).then((result) => {
                // Check if the user clicked the "OK" button
                if (result.isConfirmed) {
                    // Reload the page
                    window.location.reload();
                }
            });
        } catch (error) {
            // Handle errors
            console.error(error);

            // Display an error SweetAlert
            const MySwal = withReactContent(Swal)

            MySwal.fire({
                title: <strong>Error</strong>,
                html: <b>There was an error placing your order.</b>,
                icon: 'error'
            });
        }
    };

    // const handleChange = (e) => {
    //     setFormData({ ...formData, [e.target.name]: e.target.value });
    // };
    const handleInputChange = (e) => {
        // Update the form data when input fields change
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };
    console.log(filteredServices);
    const totalOrdersSum = 5000 + totalOrder;
    return (
        <>
            <section className='main'>
                <h1 className='first-heading'>Welcome</h1>
                <p style={{ color: 'white' }}>All you want about Social Media</p>
                <div className="row">
                    <div className="card">
                        <div className="gif">
                            <Lottie animationData={gif} />
                        </div>
                        <div className="heading">
                            <p>Account Status</p>
                            <h1>New</h1>
                            <p>Want to know more?</p>
                            <a href="#">Click Here</a>
                        </div>
                    </div>
                    <div className="card">
                        <div className="gif">
                            <Lottie animationData={dollar} />
                        </div>
                        <div className="heading">
                            <p>Total Orders</p>
                            
                            <h1>{totalOrdersSum}</h1>
                            <p>10+ years experience!</p>
                            <a href="#">Learn More</a>
                        </div>
                    </div>
                    <div className="card">
                        <div className="gif">
                            <Lottie animationData={wallet} />
                        </div>
                        <div className="heading">
                            <p>Total Balance</p>
                            <h1>${totalAmount}</h1>
                            {/* {payments.map((payment, index) => (
                                <div key={payment.id || index}>
                                    <h1>{payment.amount}</h1>
                                </div>
                            ))} */}
                            <p>Current Balance <b>${totalAmount}</b>.</p>
                            <a href="#">Deposit more here</a>
                        </div>
                    </div>
                    <div className="card">
                        <div className="gif">
                            <Lottie animationData={cart} />
                        </div>
                        <div className="heading">
                            <p>Orders Completed</p>
                            <h1>0</h1>
                            <p>Services you Offered</p>
                            <a href="#">See Your History</a>
                        </div>
                    </div>
                </div>
                <h1 className='services'>Select Service:</h1>
                <div className="row1">
                    {/* {categories.map((category, index) => (
                        <div className="card">
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
                                <a href="/#">{category.name}</a>
                            </div>
                        </div>
                    ))} */}
                    {categories.map((category, index) => (
                        <div
                            key={index}
                            className={`card ${selectedCategory === category.id ? 'selected' : ''} ${selectedCategoryIndex === index ? 'clicked' : ''}`}
                            onClick={() => {
                                handleCategoryClick(category.id);
                                handleServiceChange();
                                setSelectedCategoryIndex(index);
                            }}
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

                            <img src={facebook} alt="" />
                            <a href="/">Facebook</a>
                        </div>

                    </div>
                    <div className="card">
                        <div className="data">

                            <img src={instagram} alt="" />
                            <a href="/">Instagram</a>
                        </div>

                    </div>
                    <div className="card">
                        <div className="data">

                            <img src={twitter} alt="" />
                            <a href="/">Twitter</a>
                        </div>

                    </div>
                    <div className="card">
                        <div className="data">

                            <img src={tiktok} alt="" />
                            <a href="/">Tiktok</a>
                        </div>

                    </div>
                    <div className="card">
                        <div className="data">

                            <img src={telegram} alt="" />
                            <a href="/">Telegram</a>
                        </div>

                    </div>
                    <div className="card">
                        <div className="data">

                            <img src={snapchat} alt="" />
                            <a href="/">Snapchat</a>
                        </div>

                    </div>
                    <div className="card">
                        <div className="data">

                            <img src={linkedin} alt="" />
                            <a href="/">Linkedin</a>
                        </div>
                    </div>
                    <div className="card">
                        <div className="data">

                            <img src={social} alt="" />
                            <a href="/">Spotify</a>
                        </div>

                    </div>
                    <div className="card">
                        <div className="data">

                            <img src={other} alt="" />
                            <a href="/">Other</a>
                        </div>

                    </div> */}
                    {/* <img src={ } /> */}
                </div>
                <div className="forms">
                    <div className="form1">
                        <form onSubmit={handleSubmit}>
                            <div className="parent-flex">

                                <div className="flex">
                                    <img src={cart1} alt="" />
                                    <h3><NavLink to="/">New Order </NavLink></h3>
                                </div>
                                <div className="flex">
                                    <img src={cart1} alt="" />
                                    <h3><NavLink to="/massorder">Mass Order </NavLink></h3>
                                </div>
                            </div>
                            <div className="flex1">
                                <img src={list} alt="" />
                                <label htmlFor="">Select A Category : </label>
                            </div>
                            {/* <select
                            value={selectedSubCategoryId || ''}
                            onChange={e => setSelectedSubCategoryId(e.target.value === '' ? null : e.target.value)}
                        >
                            <option value="">All Sub-Categories</option>
                            {services.map(service => (
                                <option key={service.id} value={service.sub_category_id}>{service.subcategory.name}</option>
                            ))}
                        </select> */}
                            {/* <select
                            onChange={(e) => setSelectedSubCategoryId(e.target.value)}
                            value={selectedSubCategoryId || ''}
                        >
                            <option value="">Select a Category </option>
                            {subcategories
                                .filter(subcategory => subcategory.category_id === selectedCategory)
                                .map(subcategory => (
                                    <option key={subcategory.id} value={subcategory.id}>
                                        {subcategory.name}
                                    </option>
                                ))}
                        </select> */}
                            <select
                                onChange={(e) => {
                                    handleServiceChange();
                                    setSelectedSubCategoryId(e.target.value)
                                }
                                }

                                value={selectedSubCategoryId || ''}
                            >
                                <option value="">Select a Category</option>
                                {selectedCategory === null
                                    ? subcategories.map(subcategory => (
                                        <option key={subcategory.id} value={subcategory.id}>
                                            {subcategory.name}
                                        </option>
                                    ))
                                    : subcategories
                                        .filter(subcategory => subcategory.category_id === selectedCategory)
                                        .map(subcategory => (
                                            <option key={subcategory.id} value={subcategory.id}>
                                                {subcategory.name}
                                            </option>
                                        ))}
                            </select>
                            <div className="flex1">
                                <img src={deposit} alt="" />
                                <label htmlFor="">Select A Service : </label>
                            </div>
                            {/* <select
                            onChange={(e) => {
                                const selectedServiceId = e.target.value;
                                const selectedServiceData = filteredServices.find(service => service.id === parseInt(selectedServiceId));
                                setSelectedService(selectedServiceData);
                            }}
                            value={selectedService ? selectedService.id : ''}
                        >
                            <option value="">Select a Service</option>
                            {filteredServices.map(service => (
                                <option key={service.id} value={service.id}>
                                    {service.name}
                                </option>
                            ))}
                        </select> */}
                            <select
                                onChange={(e) => {
                                    handleServiceChange(e);
                                    handleInputChange(e);
                                    const selectedServiceId = e.target.value;
                                    const selectedServiceData = services.find(
                                        service => parseInt(service.api_id) === parseInt(selectedServiceId)
                                        );
                                        console.log(selectedServiceData,'kjk');
                                    setSelectedService(selectedServiceData);
                                }}
                                value={formData.service_id}
                                // value={selectedService ? selectedService.id : ''}
                                name="service_id"
                            >
                                <option value="">Select a Service</option>
                                {selectedSubCategoryId === null
                                    ? filteredServices.map(service => {
                                        return (
                                            <option key={service.id} value={service.api_id}>
                                                {service.name}
                                            </option>
                                        )
                                    })
                                    : filteredServices.map(service => {
                                        return (
                                            <option key={service.id} value={service.api_id}>
                                                {service.name}
                                            </option>
                                        )
                                    })
                                    }
                            </select>
                            {/* <select name="" id="" placeholder='Select A Category'>
                            {services.map(service => (
                                <option key={service.id}>{service.sub_category_id ? service.subcategory.name : 'Unknown Category'}</option>
                            ))}
                        </select>
                        <div className="flex1">
                            <img src={deposit} alt="" />
                            <label htmlFor="">Select A Service : </label>
                        </div>
                        <select name="" id="" placeholder='Select A Category'>
                        {services.map(service => (
                                <option key={service.id}>{service.name}</option>
                            ))}
                        </select> */}
                            <label htmlFor="">Link :</label> <br />
                            <input type="text" placeholder='Enter Link' name='link' value={formData.link}
                                onChange={handleInputChange} />
                            <label htmlFor="">Quantity :</label> <br />
                            <input
                                type="number"
                                id="quantity"
                                placeholder="Enter Quantity"
                                // value={quantity}
                                value={formData.quantity}
                                name='quantity'
                                // value={formData.quantity}
                                onChange={(e) => {
                                    handleInputChange(e);
                                    handleQuantityChange(e);
                                }}
                            />
                            {selectedService && (
                                <div>
                                    <p><small>Min: {selectedService.min} - Max: {selectedService.max}</small></p>
                                    {/* You can use the selectedService.min and selectedService.max here */}
                                </div>
                            )} <br />
                            <label htmlFor="">Charge :</label> <br />
                            <input
                                type="text"
                                id="charge"
                                disabled
                                placeholder="Your Charge"
                                name='amount'
                                value={charge}
                            // value={formData.charge} // Use formData.charge
                            // onChange={handleChargeChange} // Add onChange handler
                            />
                            <button type='submit'>Submit</button>
                        </form>
                    </div>
                    <div className="form2">
                        <h2>Service Details :</h2>
                        <div className="row-one">
                            <div className="group-form">
                                <label htmlFor="">Start Time : </label> <br />
                                <img src={clock} alt="" />
                                <input type="text" name="" id="" placeholder='0-3 Hours' disabled />
                            </div>
                            <div className="group-form">
                                <label htmlFor="">Speed :</label> <br />
                                <img src={rocket} alt="" />
                                <input type="text" name="" id="" placeholder='100-150/Days' disabled />
                            </div>
                        </div>
                        <div className="row-one">
                            <div className="group-form">
                                <label htmlFor="">Avg Time :</label> <br />
                                <img src={stopwatch} alt="" />
                                <input type="text" name="" id="" placeholder='0-3 Hours' disabled />
                            </div>
                            <div className="group-form">
                                <label htmlFor="">Gurentee :</label> <br />
                                <img src={crown} alt="" />
                                <input type="text" name="" id="" placeholder='100-150/Days' disabled />
                            </div>
                        </div>
                        <div className="row-one">
                            <div className="group-form">

                                <label htmlFor="">Description :</label> <br />
                                {/* <input type="text" name="" id="" placeholder='100-150/Days' disabled /> */}
                                {/* <textarea name="" id="" cols="30" rows="10" placeholder='Description' disabled></textarea> */}
                                {/* {services.map(service => (
                                // <option key={service.id}>{service.name}</option>
                                <textarea name="" id="" key={service.id} cols="30" rows="10" placeholder={service.name} disabled></textarea>
                            ))} */}
                                {selectedService && (
                                    <div>
                                        <textarea name="" id="" key={selectedService.id} cols="30" rows="10" placeholder={selectedService.description} disabled></textarea>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home