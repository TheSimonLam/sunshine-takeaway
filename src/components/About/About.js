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

                    <div className="row">
                        <div className="column">
                            <h1>Frequently Asked Questions</h1>
                            <div>Q: Do you do deliveries?<br/>A: Unfortunately, we do not process deliveries at this moment in time.</div>
                            <br/>
                            <div>Q: How long will my food take to make? <br/>A: We're usually busier on weekends, but on average it should take around 10 minutes for you food to be prepared.
                                If you phone in for collection, we can prepare your food before you arrive making the process faster. </div>
                            <br/>
                            <div>Q: Do you have any special offers? <br/>A: If your order comes to £23 or more, you will be offered a free bag of prawn crackers. £42 or more and you will receive a 2L bottle of soft drink for free.</div>
                            <br/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;
