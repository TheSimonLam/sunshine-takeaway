import React, {Component} from "react";
import "./Home.css";

class Home extends Component {
    render() {
        return (
            <div>
                <div className='image-section'>
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
                                <tr>
                                    <td>Monday</td>
                                    <td>-</td>
                                    <td>4:30pm - 10:30pm</td>
                                </tr>
                                <tr>
                                    <td>Tuesday</td>
                                    <td>CLOSED</td>
                                    <td>CLOSED</td>
                                </tr>
                                <tr>
                                    <td>Wednesday</td>
                                    <td>-</td>
                                    <td>CLOSED</td>
                                </tr>
                                <tr>
                                    <td>Thursday</td>
                                    <td>-</td>
                                    <td>4:30pm - 10:30pm</td>
                                </tr>
                                <tr>
                                    <td>Friday</td>
                                    <td>-</td>
                                    <td>4:30pm - 10:30pm</td>
                                </tr>
                                <tr>
                                    <td>Saturday</td>
                                    <td>12:00pm - 2:00pm</td>
                                    <td>4:30pm - 10:30pm</td>
                                </tr>
                                <tr>
                                    <td>Sunday</td>
                                    <td>12:00pm - 2:00pm</td>
                                    <td>5:00pm - 10:30pm</td>
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
                </div>
            </div>
        );
    }
}

export default Home;
