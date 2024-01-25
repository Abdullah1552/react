import React from 'react'
import Lottie from 'lottie-react'
import cancel from '../Images/cancel.json'
function CancelPage() {
  return (
    <div>
        <div className='success'>
            <Lottie animationData={cancel} />
            <h2>Payment Cancel</h2>
            <a href="/">Go to Home Page</a>
            {/* <p>u_id: {u_id}</p> */}
        </div>
    </div>
  )
}

export default CancelPage