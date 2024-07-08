import { motion } from "framer-motion";

const AboutMe = ({activeMenu}) => {
    return (
        <motion.section
              data-id="about-me"
              className={`animated-section ${activeMenu==="about-me" ? "section-active" : "ps--active-y"} `}
              data-ps-id="22353e9c-52a4-9111-8bd9-8daa140cfdc2"
              intial={{ width: 0, opacity: 0}}
              animate={{ width: "100%", opacity: 1 }}
              exit={{ x: window.innerWidth, opacity: 0, transition: { duration: 0.4 }}}
            >
              <div className="page-title">
                <h2>
                  About <span>Me</span>
                </h2>
              </div>

              <div className="section-content">
                {/* <!-- Personal Information --> */}
                <div className="row">
                  <div className="col-xs-12 col-sm-7">
                    <p>
                    Passionate front-end developer with a keen eye for detail and a desire to create stunning, intuitive, and engaging user interfaces. Deep understanding of HTML, CSS, and JavaScript, with particular interest in React. Dedicated to writing clean, maintainable code that adheres to best practices and industry standards. Strong collaborator with excellent communication skills and a passion for development. Always striving to learn and grow as a developer, and excited about the endless possibilities of front-end development.
                    </p>
                  </div>

                  <div className="col-xs-12 col-sm-5">
                    <div className="info-list">
                      <ul>
                        <li>
                          <span className="title">Age</span>
                          <span className="value">25</span>
                        </li>

                        <li>
                          <span className="title">Residence</span>
                          <span className="value">Bangladesh</span>
                        </li>

                        <li>
                          <span className="title">Address</span>
                          <span className="value">Mohammadpur, Dhaka</span>
                        </li>

                        <li>
                          <span className="title">E-mail</span>
                          <span className="value">suraiyaaktertrishna@gmail.com</span>
                        </li>

                        <li>
                          <span className="title">Phone</span>
                          <span className="value">+8801581123833</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* <!-- End of Personal Information --> */}

                <div className="white-space-50"></div>

                {/* <!-- Services --> */}
                <div className="row">
                  <div className="col-xs-12 col-sm-12">
                    <div className="block-title">
                      <h3>
                        What <span>I Do</span>
                      </h3>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-xs-12 col-sm-6">
                    <div className="col-inner">
                      <div className="info-list-w-icon">
                        <div className="info-block-w-icon">
                          <div className="ci-icon">
                          </div>
                          <div className="ci-text">
                            <h4>Responsive Web Development</h4>
                            <p>
                            Building web applications that look and function perfectly on any device is a key aspect of my work. I develop responsive designs that adapt seamlessly to various screen sizes and resolutions, ensuring an optimal viewing experience across desktops, tablets, and smartphones. My approach involves careful planning and testing to ensure that every element works harmoniously across different platforms, providing a consistent and enjoyable user experience.
                            </p>
                          </div>
                        </div>
                        <div className="info-block-w-icon">
                          <div className="ci-icon">
                            <i className="lnr lnr-store"></i>
                          </div>
                          <div className="ci-text">
                            <h4>Advanced Frontend Technologies</h4>
                            <p>
                            Keeping up with the latest technologies and industry trends is essential to delivering innovative and efficient solutions. I utilize JavaScript, CSS, HTML, and React to implement cutting-edge features and functionalities in my projects. By integrating the latest advancements, I enhance the performance, scalability, and user experience of web applications, ensuring they are robust, fast, and future-proof.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-xs-12 col-sm-6">
                    <div className="col-inner">
                      <div className="info-list-w-icon">
                        <div className="info-block-w-icon">
                          <div className="ci-icon">
                            <i className="lnr lnr-pencil"></i>
                          </div>
                          <div className="ci-text">
                            <h4>Collaboration and Communication</h4>
                            <p>
                            Working effectively with designers, developers, and stakeholders is crucial to the success of any project. I emphasize clear and open communication throughout the development process, ensuring that everyone involved has a shared understanding of goals and expectations. By fostering a collaborative environment, I help bring collective ideas to life, resulting in more innovative and effective solutions.
                            </p>
                          </div>
                        </div>
                        <div className="info-block-w-icon">
                          <div className="ci-icon">
                            <i className="lnr lnr-flag"></i>
                          </div>
                          <div className="ci-text">
                            <h4>Continuous Learning and Adaptation</h4>
                            <p>
                            The field of web development is constantly evolving, and staying current with new tools and techniques is vital. I am committed to continuous learning, regularly updating my skills and knowledge through courses, workshops, and industry research. This dedication to ongoing education allows me to adapt to new challenges and incorporate the latest advancements into my work, keeping my projects at the forefront of technology and design.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- End of Services --> */}
              </div>
            </motion.section>
    );
};

export default AboutMe;