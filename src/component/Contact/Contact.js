import { motion } from "framer-motion";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Toaster, toast } from "react-hot-toast";

const Contact = ({ activeMenu }) => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_qwpxed7",
        "template_3gr025i",
        form.current,
        "9x_hqnUMuI0cwil4A"
      )
      .then(
        (result) => {
          console.log(result.text);
          form.current.reset();
          toast('Massage sent!');
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <motion.section
      data-id="contact"
      className={`animated-section ${
        activeMenu === "contact" ? "section-active" : "ps--active-y"
      } `}
      data-ps-id="c943fef0-d3be-c142-4494-013893d3157b"
      intial={{ width: 0, opacity: 0}}
      animate={{ width: "100%", opacity: 1 }}
      exit={{ x: window.innerWidth, opacity: 0, transition: { duration: 0.4 }}}
    >
      <div className="page-title">
        <h2>Contact</h2>
      </div>

      <div className="section-content">
        <div className="row">
          {/* <!-- Contact Info --> */}
          <div className="col-xs-12 col-sm-5">
            <div className="lm-info-block gray-default">
              <div className="d-flex flex-column align-items-center">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 512 512"
                  className="my-0"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{
                    fontSize: "40px",
                    verticalAlign: "middle",
                    color: "#04B4E0",
                  }}
                >
                  <path
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="32"
                    d="M256 48c-79.5 0-144 61.39-144 137 0 87 96 224.87 131.25 272.49a15.77 15.77 0 0025.5 0C304 409.89 400 272.07 400 185c0-75.61-64.5-137-144-137z"
                  ></path>
                  <circle
                    cx="256"
                    cy="192"
                    r="48"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="32"
                  ></circle>
                </svg>
                <h4 className="mb-0">Bangladesh</h4>
              </div>
              <span className="lm-info-block-value"></span>
              <span className="lm-info-block-text"></span>
            </div>
            <div className="lm-info-block gray-default">
              <div className="d-flex flex-column align-items-center">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 16 16"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{
                    fontSize: "35px",
                    verticalAlign: "middle",
                    color: "#04B4E0",
                  }}
                >
                  <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"></path>
                </svg>
                <h4>+8801581123833</h4>
              </div>
              <span className="lm-info-block-value"></span>
              <span className="lm-info-block-text"></span>
            </div>
            <div className="lm-info-block gray-default">
              <div className="d-flex flex-column align-items-center">
                <svg
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{
                    fontSize: "40px",
                    verticalAlign: "middle",
                    color: "#04B4E0",
                  }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  ></path>
                </svg>
                <h4>suraiyaaktertrishna@gmail.com</h4>
              </div>
              <span className="lm-info-block-value"></span>
              <span className="lm-info-block-text"></span>
            </div>
            <div className="lm-info-block gray-default">
              <div className="d-flex flex-column align-items-center">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 16 16"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{
                    fontSize: "35px",
                    verticalAlign: "middle",
                    color: "#04B4E0",
                  }}
                >
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"></path>
                  <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"></path>
                </svg>
                <h4>Freelance Available</h4>
              </div>
              <span className="lm-info-block-value"></span>
              <span className="lm-info-block-text"></span>
            </div>
          </div>
          {/* <!-- End of Contact Info --> */}

          {/* <!-- Contact Form --> */}
          <div className="col-xs-12 col-sm-7">
            <div className="block-title">
              <h3>
                How Can I <span>Help You?</span>
              </h3>
            </div>

            <form
              id="contact_form"
              className="contact-form"
              action="https://lmpixels.com/demo/breezycv/dark/1/contact_form/contact_form.php"
              method="post"
              noValidate={true}
              ref={form}
               onSubmit={sendEmail}
            >
              <div className="messages"></div>

              <div className="controls two-columns">
                <div className="fields clearfix">
                  <div className="left-column">
                    <div className="form-group form-group-with-icon">
                      <input
                        id="form_name"
                        type="text"
                        name="user_name"
                        className="form-control"
                        placeholder=""
                        required
                        data-error="Name is required."
                      />
                      <label>Full Name</label>
                      <div className="form-control-border"></div>
                      <div className="help-block with-errors"></div>
                    </div>

                    <div className="form-group form-group-with-icon">
                      <input
                        id="form_email"
                        type="email"
                        name="user_email"
                        className="form-control"
                        placeholder=""
                        required
                        data-error="Valid email is required."
                      />
                      <label>Email Address</label>
                      <div className="form-control-border"></div>
                      <div className="help-block with-errors"></div>
                    </div>

                    <div className="form-group form-group-with-icon">
                      <input
                        id="form_subject"
                        type="text"
                        name="subject"
                        className="form-control"
                        placeholder=""
                        required
                        data-error="Subject is required."
                      />
                      <label>Subject</label>
                      <div className="form-control-border"></div>
                      <div className="help-block with-errors"></div>
                    </div>
                  </div>
                  <div className="right-column">
                    <div className="form-group form-group-with-icon">
                      <textarea
                        id="form_message"
                        name="message"
                        className="form-control"
                        placeholder=""
                        rows="7"
                        required
                        data-error="Please, leave me a message."
                      ></textarea>
                      <label>Message</label>
                      <div className="form-control-border"></div>
                      <div className="help-block with-errors"></div>
                    </div>
                  </div>
                </div>

                <input
                  type="submit"
                  className="button btn-send disabled"
                  value="Send message"
                />
              </div>
              <Toaster />
            </form>
          </div>
          {/* <!-- End of Contact Form --> */}
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
