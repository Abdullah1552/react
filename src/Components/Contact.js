import React from 'react'
import skype from '../Images/skype.png'
import gmail from '../Images/gmail.png'
import whatsapp from '../Images/whatsapp.png'
import location from '../Images/location.png'
function Contact() {
    return (
        <>
            <section className='main1'>
                <h1 className='first-heading'>SMM Panel - UK, US, Canada # 1 Cheapest & Best SMM Panel</h1>
                <p style={{ color: 'black' }}>Smm Panel Reseller in USA</p>
                <div className="row3">
                    <div className="col">
                        <div className="data">
                            <h1>Skype</h1>
                            <p>live:Smmpakpanelllc</p>
                        </div>
                        <div className="img">
                            <img src={skype} alt="" />
                        </div>
                    </div>
                    <div className="col">
                        <div className="data">
                            <h1>Email</h1>
                            <p>inbound@gmail.com</p>
                        </div>
                        <div className="img">
                            <img src={gmail} alt="" />
                        </div>
                    </div>
                    <div className="col">
                        <div className="data">
                            <h1>Whatsapp</h1>
                            <p>0452532453453245</p>
                        </div>
                        <div className="img">
                            <img src={whatsapp} alt="" />
                        </div>
                    </div>
                    <div className="col">
                        <div className="data">
                            <h1>Address</h1>
                            <p>MultanPunjabPakistan</p>
                        </div>
                        <div className="img">
                            <img src={location} alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact