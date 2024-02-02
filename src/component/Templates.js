import React from 'react'

const Templates = () => {
    return (
        <>
            <div className="template">
                <div className="screenshotImage">
                    <img src="assets/img4.webp" alt="" className='img-fluid' />
                </div>
                <div className="temp1">
                    <div className="container">
                        <h2>Beautiful & Personalized Templates</h2>
                        <p>Start with a professional template or templates with cool colors, it’s your choice. We have a variety of Beautiful & Personalized templates, so you can pick just what you like.</p>
                        <button className='mt-4 start-btn'>Start Now</button>

                        <div className='template_nabvar'>
                            <ul className='mb-3' >
                                <li>freelancer</li>
                                <li>tech heads</li>
                                <li>mba</li>
                                <li>ui/ux</li>
                                <li>full stack developer</li>

                            </ul>

                        <div className="template_images row">
                            <div className="col-md-6 d-flex justify-content-end">
                                <img src="assets/po1.png" alt="" className='img-fluid'/>
                            </div>
                            <div className="col-md-6 mt-2 d-flex justify-content-start">
                                <img src="assets/po2.png" alt="" className='img-fluid'/>
                            </div>
                        </div>
                        <div className="template_images row mt-3">
                            <div className="col-md-6 d-flex justify-content-end">
                                <img src="assets/po3.png" alt="" className='img-fluid'/>
                            </div>
                            <div className="col-md-6 mt-2  d-flex justify-content-start">
                                <img src="assets/po4.png" alt="" className='img-fluid'/>
                            </div>
                        </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Templates