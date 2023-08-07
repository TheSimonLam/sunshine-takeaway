import React, { Component } from "react";
import ReactHtmlParser from "react-html-parser";

import "./Popup.css";

const Popup = ({ notice = {} }) => {
  const closePopup = () => {
    document.getElementsByClassName("popup-overlay")[0].style.display = "none";
  };

  return (
    <div>
      <div className={"popup-overlay"} onClick={closePopup}>
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

          {notice.noticeTitle && (
            <h2 className={"notice-title"}>
              {ReactHtmlParser(notice.noticeTitle)}
            </h2>
          )}
          {notice.noticeBody && (
            <div className={"notice-content"}>
              <div style={{ color: "red" }}>
                {ReactHtmlParser(notice.noticeBody)}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Popup;
