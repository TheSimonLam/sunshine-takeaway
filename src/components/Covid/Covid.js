import React, {Component} from "react";
import "./Covid.css";

class Covid extends Component {
    render() {
        return (
            <div className="covid-info-container">
                <div className="covid-info-title">New distancing and ordering procedures</div>
                <div className="covid-info-description">
                    <div>
                        In line with other shops, we have had to impose some sensible rules to keep everyone safe from Covid-19.
                    </div>

                    <br/>

                    <div>
                        Please order by telephone if possible. We can then  schedule a pickup time for you. Please try to arrive at the exact pickup time so we can keep things running smoothly. Unfortunately this will mean if you are late, your food will be not as crisp or hot as it could be. But it should keep waiting time to a minimum which is now a priority to minimise the number of customers waiting in the shop.
                    </div>

                    <br/>

                    <div>
                        We will now pack your order ready for your arrival.
                    </div>

                    <br/>

                    <div>
                        When packing your order, we will automatically charge you 5p per carrier bag used. We are sorry but we are  unable to accept your own carrier bags for reuse at this time.
                    </div>

                    <br/>

                    <div>
                        If there are no orders pending then your order will be cooked as normal.
                    </div>

                    <br/>

                    <div>
                        On arrival, if you have come to pick up a phone order, don’t join the queue. Instead, wait until your name or time is called, then collect your meal from the hatch.
                    </div>

                    <br/>

                    <div>
                        If you haven’t ordered by telephone, please join the queue in the waiting area. Upon ordering, we may give you a time to return for collection as our waiting area cannot accommodate more than 6 people under social distancing rules.
                    </div>

                    <br/>

                    <div>
                        Please pay using contactless or card.
                    </div>

                    <br/>

                    <div>
                        You may pay by cash but please try to have the exact money.
                    </div>

                    <br/>

                    <div>
                        Please remember our measures are for everybody’s safety.
                    </div>

                    <br/>

                    <div>
                        Thank you for your cooperation.
                    </div>
                </div>
            </div>
        );
    }
}

export default Covid;
