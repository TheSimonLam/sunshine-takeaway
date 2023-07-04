import React, { Component } from "react";
import "./Popup.css";

class Popup extends Component {
  constructor() {
    super();
    this.closePopup = this.closePopup.bind(this);
  }

  closePopup() {
    document.getElementsByClassName("popup-overlay")[0].style.display = "none";
  }

  render() {
    return (
      <div>
        <div className={"popup-overlay"} onClick={this.closePopup}>
          <div className={"popup-container"}>
            <svg
              className={"exit-button"}
              height="20pt"
              viewBox="0 0 365.71733 365"
              width="20pt"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g fill="#f44336">
                <path d="m356.339844 296.347656-286.613282-286.613281c-12.5-12.5-32.765624-12.5-45.246093 0l-15.105469 15.082031c-12.5 12.503906-12.5 32.769532 0 45.25l286.613281 286.613282c12.503907 12.5 32.769531 12.5 45.25 0l15.082031-15.082032c12.523438-12.480468 12.523438-32.75.019532-45.25zm0 0" />
                <path d="m295.988281 9.734375-286.613281 286.613281c-12.5 12.5-12.5 32.769532 0 45.25l15.082031 15.082032c12.503907 12.5 32.769531 12.5 45.25 0l286.632813-286.59375c12.503906-12.5 12.503906-32.765626 0-45.246094l-15.082032-15.082032c-12.5-12.523437-32.765624-12.523437-45.269531-.023437zm0 0" />
              </g>
            </svg>

            <h2 className={"notice-title"}>Surcharge due to potato shortage</h2>
            <div className={"notice-content"}>
              <div style={{ color: "red" }}>
                There is currently a shortage of chipping potatoes in the UK and
                it has meant that the price of these potatoes have increased
                significantly in recent weeks. <br></br> They have now reached a level
                that is well beyond the usual expected price range, which we
                normally absorb, and we need to increase the price of portions
                of chips to compensate.<br></br> Since we only expect the shortage to
                last until the new crop of potatoes are ready to be harvested
                this year, we are introducing a temporary surcharge on chips.
                and when the price of potatoes comes back into the expected
                range, the surcharge will end.<br></br> The surcharge will be: 40p per
                portion of chips 30p per portion of small chips 20p per chip
                cone 30p will be added for each meal with chips or where you
                have the chips option Surcharges are only on chips. Other foods
                are not affected.
                {/* <br />
                <b>Open again the next day on Wednesday 20th July</b> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Popup;
