import React from "react";
import "../CSS/Question.css";

const Question = () => {
  return (
    <div className="questionBody">
      <div className="questionTopDiv">
        <p className="queContactTitle1">Contact Us</p>
        <p className="queContactTitle2">Have Any Questions? Let’s Talk!</p>
      </div>

      <div className="questionBtmDiv">
        <form action="">
          <div className="questionForm">
            <div className="nameAddress">
              <div className="inputTextDiv">
                <label className="labelform" htmlFor="">
                  Your Name
                </label>
                <input
                  className="inputform"
                  type="text"
                  placeholder="Type your name here"
                />
              </div>
              <div className="inputTextDiv">
                <label className="labelform" htmlFor="">
                  Email Address
                </label>
                <input
                  className="inputform"
                  type="email"
                  placeholder="Type your email here"
                />
              </div>
            </div>

            <div className="subjPhone">
              <div className="inputTextDiv">
                <label className="labelform" htmlFor="">
                  Subject
                </label>
                <input
                  className="inputform"
                  type="text"
                  placeholder="Type your subject here"
                />
              </div>
              <div className="inputTextDiv">
                <label className="labelform" htmlFor="">
                  Phone Number
                </label>
                <input
                  className="inputform"
                  type="text"
                  placeholder="Type your name here"
                />
              </div>
            </div>

            <div className="messageDiv">
              <label className="labelform" htmlFor="">
                Message....
              </label>
              <textarea
                className="inputMessage"
                placeholder="Type your message here ..........."
                cols="30"
                rows="10"
              ></textarea>
            </div>

            <div className="checkAccept">
              <input type="checkbox" id="terms" />
              <label htmlFor="terms" className="privacy">
                Accept <span className="red">terms</span> and{" "}
                <span className="red">privacy policy</span>
              </label>
            </div>

            <button className="btnSubmit">Submit Message</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Question;
