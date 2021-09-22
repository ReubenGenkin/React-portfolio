import React from 'react';
//import profilePicture from '../../assets/profilePic.jpg'
import './style.css';


function Home() {

    return (



        <section id="Home" className="col-md-12">

            <div className=" container-fluid" >
                <div className=" col-md-6 offset-3">

                    <div className="row col-md-6 offset-3">
                        <span className="icon page-icon"></span>
                    </div>

                    <div className="row col-md-6 offset-3">
                        <h1 className=" page-head">Reuben Genkin</h1>
                    </div>
                    <div className="row col-md-6 offset-3">
                        <p className="sub-header">Development & design</p>
                    </div>
                </div>
                <div className=" col-md-6 offset-3">
                    <div className="mouse_scroll animation-scroll-wrapper">

                        <div className="mouse">
                            <div className="wheel"></div>
                        </div>
                        <div>
                            <span className="m_scroll_arrows first"></span>
                            <span className="m_scroll_arrows second"></span>
                            <span className="m_scroll_arrows third"></span>
                        </div>
                    </div>
                </div>
            </div>
        </section>





    )
}

export default Home;