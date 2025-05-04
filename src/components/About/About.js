import React, {Component} from "react";
import './About.css';

class About extends Component {
    render() {
        return (
            <div>
                <div className='image-section-about'>
                    <div className='image-section-text'>Sunshine Takeaway</div>
                    <div className='left-image-section-wrapper'><img className='credit-cards-logo' src={require('../../img/creditcards.png')} alt='yolo'/></div>
                    <div className='right-image-section-wrapper'><img className='food-hygiene-logo' src={require('../../img/food-hygiene-rating.png')} alt='yolo'/></div>
                </div>
                <div className='section-wrapper'>
                    <div className="row">
                        <div className="column">
                            <h1>Sunshine Takeaway</h1>
                            <h2>Sunshine Takeaway is a family-owned business founded in 1989. We serve a wide variety of authentic Chinese dishes, along with popular British dishes. A diverse and traditional chippy menu is also available to choose from.</h2>
                        </div>
                        <div className="column">
                            <h1>Where to find us</h1>
                            <div>We are just off the Talwrn Road, in Coedpoeth. Our exact address is 63, Heol Celyn, Coedpoeth, Wrexham, LL113HR. We look forward to seeing you soon!</div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="column">
                            <h1>Contact Information</h1>
                            <div>Telephone number: 01978 753000<br/>
                                Business Enquiries Email : thesimonlam@gmail.com<br/>
                                Address: 63 Heol Celyn, Coedpoeth, Wrexham, LL11 3HR </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;
