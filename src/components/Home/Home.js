import React, {Component} from "react";
import "./Home.css";

class Home extends Component {
    render() {
        return (
            <div>
                <div className='image-section-home'>
                    <div className='image-section-text'>Sunshine Takeaway</div>
                    <div className='left-image-section-wrapper'><img className='credit-cards-logo' src={require('../../img/creditcards.png')} alt='yolo'/></div>
                    <div className='right-image-section-wrapper'><img className='food-hygiene-logo' src={require('../../img/food-hygiene-rating.png')} alt='yolo'/></div>
                </div>
                <div className='section-wrapper'>
                    <div className="row">
                        <div className="column">
                            <h1>Opening Times</h1>
                             <table>
                                <tbody>
                                {/* <tr style={{"color": "red"}}>
                                    <td>24th Dec</td>
                                    <td>CLOSED</td>
                                </tr>
                                <tr style={{"color": "red"}}>
                                    <td>25th Dec</td>
                                    <td>CLOSED</td>
                                </tr>
                                <tr style={{"color": "red"}}>
                                    <td>26th Dec</td>
                                    <td>CLOSED</td>
                                </tr>
                                <tr style={{"color": "red"}}>
                                    <td>31st Dec</td>
                                    <td>CLOSED</td>
                                </tr>
                                <tr style={{"color": "red"}}>
                                    <td>1st Jan</td>
                                    <td>CLOSED</td>
                                </tr>
                                <br></br> */}
                                <tr>
                                    <td>Monday</td>
                                    <td>4:30pm - 10:00pm</td>
                                </tr>
                                <tr>
                                    <td>Tuesday</td>
                                    <td>CLOSED</td>
                                </tr>
                                <tr>
                                    <td>Wednesday</td>
                                    <td>4:30pm - 10:00pm</td>
                                </tr>
                                <tr>
                                    <td>Thursday</td>
                                    <td>4:30pm - 10:00pm</td>
                                </tr>
                                <tr>
                                    <td>Friday</td>
                                    <td>4:30pm - 10:00pm</td>
                                </tr>
                                <tr>
                                    <td>Saturday</td>
                                    <td>4:30pm - 10:00pm</td>
                                </tr>
                                <tr>
                                    <td>Sunday</td>
                                    <td>5:00pm - 10:00pm</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="column">
                            <h1>We are at your service for fish, chips, and Chinese Takeaways</h1>
                            <h1>Telephone orders are welcomed:</h1>
                            <h2 className='number-text'>01978 753000</h2>
                        </div>
                    </div>
                    <h3>Ewch i food.gov.uk/ratings i ganfod sgor hylendid bwyd ein busnes neu gofynnwch inni beth yw ein sgor hylendid bwyd wrth archebu.</h3>
                    <h3>Go to food.gov.uk/ratings to find out the food hygiene ratings of our business or ask us for our food hygiene rating when you order.</h3>
                </div>
            </div>
        );
    }
}

export default Home;
