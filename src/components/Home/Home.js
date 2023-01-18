import React, { useEffect, useState } from "react";
import { getOpeningTimes } from "../../services/api";
import "./Home.css";

function Home() {
  const [openingTimes, setOpeningTimes] = useState();

  useEffect(() => {
    const fetchOpeningTimes = async () => {
      let res = await getOpeningTimes();
      if (res && res.openingTimes) {
        setOpeningTimes(res.openingTimes);
      }
    };
    fetchOpeningTimes();
  }, []);

  return (
    <div>
      <div className="image-section-home">
        <div className="image-section-text">Sunshine Takeaway</div>
        <div className="left-image-section-wrapper">
          <img
            className="credit-cards-logo"
            src={require("../../img/creditcards.png")}
            alt="yolo"
          />
        </div>
        <div className="right-image-section-wrapper">
          <img
            className="food-hygiene-logo"
            src={require("../../img/food-hygiene-rating.png")}
            alt="yolo"
          />
        </div>
      </div>
      <div className="section-wrapper">
        <div className="row">
          <div className="column">
            <h1>Opening Times</h1>
            {/* <div style={{ color: "red" }}>
                We are CLOSED for a staff holiday and will open again on Friday 12th August
                <b>Open again the next day on Wednesday 20th July</b>
              </div> */}

            <br />

            <table>
              <tbody>
                {openingTimes &&
                  openingTimes.map(({ day, time }) => (
                    <tr>
                      <td>{day}</td>
                      <td>{time}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
          <div className="column">
            <h1>
              We are at your service for fish, chips, and Chinese Takeaways
            </h1>
            <h1>Telephone orders are welcomed:</h1>
            <h2 className="number-text">01978 753000</h2>
          </div>
        </div>
        <h3>
          Ewch i food.gov.uk/ratings i ganfod sgor hylendid bwyd ein busnes neu
          gofynnwch inni beth yw ein sgor hylendid bwyd wrth archebu.
        </h3>
        <h3>
          Go to food.gov.uk/ratings to find out the food hygiene ratings of our
          business or ask us for our food hygiene rating when you order.
        </h3>
      </div>
    </div>
  );
}

export default Home;
