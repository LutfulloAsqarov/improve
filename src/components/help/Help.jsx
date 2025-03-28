import React from "react";
import "./help.scss";

const Help = () => {
  return (
    <div className="help-request">
      <div className="container">
        {" "}
        <div className="help-request__container">
          <div className="help-request__avatars">
            <img
              src="/assets/images/avatar1.jpg"
              alt="Team Member 1"
              className="avatar"
            />
            <img
              src="/assets/images/avatar2.jpg"
              alt="Team Member 2"
              className="avatar"
            />
            <img
              src="/assets/images/avatar3.jpg"
              alt="Team Member 3"
              className="avatar"
            />
          </div>
          <h2 className="help-request__title">Qo‘shimcha yordam kerakmi?</h2>
          <p className="help-request__desc">
            Har qanday so‘rov yoki yordam uchun bepul murojaat qiling.
          </p>
          <button className="help-request__button">
            Uchrashuvni hozir band qiling
          </button>
        </div>
      </div>
    </div>
  );
};

export default Help;
