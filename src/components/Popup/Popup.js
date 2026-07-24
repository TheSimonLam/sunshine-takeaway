import React, { Component } from "react";
import ReactHtmlParser from "react-html-parser";

import "./Popup.css";

const Popup = ({ notice = {} }) => {
  return (
    <div>
      <div className={"popup-overlay"}>
        <div className={"popup-container"}>
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
