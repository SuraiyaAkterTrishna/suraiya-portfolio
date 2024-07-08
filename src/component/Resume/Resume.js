import { Link } from "react-router-dom";
import certificate1 from "../../assets/images/programming-hero-certificate.png";
import certificate2 from "../../assets/images/next-tech-certificate.png";
import { motion } from "framer-motion";

const Resume = ({activeMenu}) => {
    return (
        <motion.section
              data-id="resume"
              className={`animated-section ${activeMenu==="resume" ? "section-active" : "ps--active-y"} `}
              data-ps-id="7d918634-5594-f434-9725-af3dd55b1b19"
              intial={{ width: 0, opacity: 0}}
              animate={{ width: "100%", opacity: 1 }}
              exit={{ x: window.innerWidth, opacity: 0, transition: { duration: 0.4 }}}
            >
              <div className="page-title">
                <h2>Resume</h2>
              </div>

              <div className="section-content">
                <div className="row">
                  <div className="col-xs-12 col-sm-7">
                    <div className="block-title">
                      <h3>Education</h3>
                    </div>

                    <div className="timeline timeline-second-style clearfix">
                      <div className="timeline-item clearfix">
                        <div className="left-part">
                          <h5 className="item-period">2014 - 2018</h5>                        
                        </div>
                        <div className="divider"></div>
                        <div className="right-part">
                          <h4 className="item-title">Diploma in CSE</h4>
                          <span className="item-company">
                            Jessore Polytechnic Institute
                          </span>
                        </div>
                      </div>

                      <div className="timeline-item clearfix">
                        <div className="left-part">
                          <h5 className="item-period">2014</h5>
                        </div>
                        <div className="divider"></div>
                        <div className="right-part">
                          <h4 className="item-title">SSC</h4>
                          <span className="item-company">
                            Newtown High Girls' School
                          </span>
                        </div>
                      </div>

                    </div>

                    <div className="white-space-50"></div>

                    <div className="block-title">
                      <h3>Experience</h3>
                    </div>

                    <div className="timeline timeline-second-style clearfix">
                      <div className="timeline-item clearfix">
                        <div className="left-part">
                          <h5 className="item-period">2019 - 2020</h5>
                          <span className="item-company">Khulna Outsourcing IT Limited</span>
                        </div>
                        <div className="divider"></div>
                        <div className="right-part">
                          <h4 className="item-title">Android App Developer</h4>
                          <p>
                          As an Android App Developer and UI/UX Designer, I create intuitive, visually appealing mobile applications. I blend technical skills in Java with a keen eye for design, ensuring seamless functionality and engaging user experiences.
                          </p>
                        </div>
                      </div>

                      <div className="timeline-item clearfix">
                        <div className="left-part">
                          <h5 className="item-period">2021 - 2023</h5>
                          <span className="item-company">Yes IT Limited</span>
                        </div>
                        <div className="divider"></div>
                        <div className="right-part">
                          <h4 className="item-title">Frontend Developer</h4>
                          <p>
                          I specialize in developing and maintaining web application user interfaces using React.js, Node.js, Express.js, and MongoDB. Leveraging my expertise in JavaScript, Bootstrap 5, Tailwind CSS, HTML5, and CSS3, I build sophisticated and user-friendly interfaces. My role involves integrating these interfaces with backend systems and optimizing databases to enhance performance. I ensure all projects adhere to web standards and best practices, delivering high-quality and efficient web applications.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* <!-- Skills & Certificates --> */}
                  <div className="col-xs-12 col-sm-5">
                    {/* <!-- Design Skills --> */}
                    <div className="block-title">
                      <h3>
                        Frontend <span>Development</span>
                      </h3>
                    </div>

                    <div className="skills-info skills-second-style">
                      {/* <!-- Skill 1 --> */}
                      <div className="skill clearfix">
                        <h4>React.js</h4>
                        <div className="skill-value">100%</div>
                      </div>
                      <div className="skill-container skill-7">
                        <div className="skill-percentage"></div>
                      </div>
                      {/* <div className="skill clearfix">
                        <h4>React.js</h4>
                        <div className="skill-value">95%</div>
                      </div>
                      <div className="skill-container skill-1">
                        <div className="skill-percentage"></div>
                      </div> */}
                      {/* <!-- End of Skill 1 --> */}

                      {/* <!-- Skill 3 --> */}
                      <div className="skill clearfix">
                        <h4>JavaScript</h4>
                        <div className="skill-value">100%</div>
                      </div>
                      <div className="skill-container skill-7">
                        <div className="skill-percentage"></div>
                      </div>
                      {/* <!-- End of Skill 3 --> */}

                      {/* <!-- Skill 4 --> */}
                      <div className="skill clearfix">
                        <h4>Tailwind CSS</h4>
                        <div className="skill-value">100%</div>
                      </div>
                      <div className="skill-container skill-7">
                        <div className="skill-percentage"></div>
                      </div>
                      {/* <!-- End of Skill 5 --> */}
                      {/* <!-- Skill 5 --> */}
                      <div className="skill clearfix">
                        <h4>Bootstrap5</h4>
                        <div className="skill-value">100%</div>
                      </div>
                      <div className="skill-container skill-7">
                        <div className="skill-percentage"></div>
                      </div>
                      {/* <!-- End of Skill 5 --> */}
                      {/* <!-- Skill 6 --> */}
                      <div className="skill clearfix">
                        <h4>HTML5</h4>
                        <div className="skill-value">100%</div>
                      </div>
                      <div className="skill-container skill-7">
                        <div className="skill-percentage"></div>
                      </div>
                      {/* <!-- End of Skill 6 --> */}
                      {/* <!-- Skill 7 --> */}
                      <div className="skill clearfix">
                        <h4>CSS3</h4>
                        <div className="skill-value">100%</div>
                      </div>
                      <div className="skill-container skill-7">
                        <div className="skill-percentage"></div>
                      </div>
                      {/* <!-- End of Skill 7 --> */}
                    </div>
                    {/* <!-- End of Design Skills --> */}

                    <div className="white-space-10"></div>

                    {/* <!-- Coding Skills --> */}
                    <div className="block-title">
                      <h3>
                        Backend <span>Development</span>
                      </h3>
                    </div>

                    <div className="skills-info skills-second-style">
                      {/* <!-- Skill 8 --> */}
                      <div className="skill clearfix">
                        <h4>Node.js</h4>
                        <div className="skill-value">95%</div>
                      </div>
                      <div className="skill-container skill-5">
                        <div className="skill-percentage"></div>
                      </div>
                      {/* <!-- End of Skill 8 --> */}

                      {/* <!-- Skill 9 --> */}
                      <div className="skill clearfix">
                        <h4>Express.js</h4>
                        <div className="skill-value">90%</div>
                      </div>
                      <div className="skill-container skill-4">
                        <div className="skill-percentage"></div>
                      </div>
                      {/* <!-- End of Skill 9 --> */}

                      {/* <!-- Skill 10 --> */}
                      <div className="skill clearfix">
                        <h4>MongoDB</h4>
                        <div className="skill-value">100%</div>
                      </div>
                      <div className="skill-container skill-7">
                        <div className="skill-percentage"></div>
                      </div>
                      {/* <!-- End of Skill 10 --> */}

                      {/* <!-- Skill 11 --> */}
                      <div className="skill clearfix">
                        <h4>JWT</h4>
                        <div className="skill-value">90%</div>
                      </div>
                      <div className="skill-container skill-9">
                        <div className="skill-percentage"></div>
                      </div>
                      {/* <!-- End of Skill 11 --> */}

                    </div>
                    {/* <!-- End of Coding Skills --> */}

                    <div className="white-space-10"></div>

                    {/* <!-- Knowledges --> */}
                    <div className="block-title">
                      <h3>Knowledges</h3>
                    </div>

                    <ul className="knowledges">
                      <li>MERN Stack</li>
                      <li>JavaScript</li>
                      <li>GitHub</li>
                      <li>Firebase</li>
                      <li>Frontend</li>
                      <li>Debug</li>
                      <li>Responsive</li>
                      <li>Browser Dev-tool</li>
                      <li>Figma</li>
                    </ul>
                    {/* <!-- End of Knowledges --> */}
                  </div>
                  {/* <!-- End of Skills & Certificates --> */}
                </div>

                <div className="white-space-50"></div>

                {/* <!-- Certificates --> */}
                <div className="row">
                  <div className="col-xs-12 col-sm-12">
                    <div className="block-title">
                      <h3>Certificates</h3>
                    </div>
                  </div>
                </div>

                <div className="row">
                  {/* <!-- Certificate 1 --> */}
                  <Link className="col-xs-12 col-sm-6 w-100" to="https://drive.google.com/file/d/1ohrwRiaQCS3zXYnCEAacg-YGZmSe8e4f/view?usp=sharing" target={"_blank"} open>
                    <div className="certificate-item clearfix">
                      <div className="certi-logo">
                        <img
                          src={certificate1}
                          alt="logo"
                        />
                      </div>

                      <div className="certi-content">
                        <div className="certi-title">
                          <h4>Complete Web Development Course with Jhankar Mahbub</h4>
                        </div>
                        <div className="certi-id">
                          <span>ID: : WEB5-3758</span>
                        </div>
                        <div className="certi-date">
                          <span>08 June, 2022</span>
                        </div>
                        <div className="certi-company">
                          <span></span>
                        </div>
                      </div>
                    </div>
                  </Link>
                  {/* <!-- End of Certificate 1 --> */}

                  {/* <!-- Certificate 2 --> */}
                  <Link className="col-xs-12 col-sm-6 w-100" to="https://drive.google.com/file/d/1rO6jJwfVhDbQ6KPEusdGjrizROlHuOaF/view?usp=sharing" target={"_blank"} download>
                    <div className="certificate-item clearfix">
                      <div className="certi-logo">
                        <img
                          src={certificate2}
                          alt="logo"
                        />
                      </div>

                      <div className="certi-content">
                        <div className="certi-title">
                          <h4>Professional Android Application Development</h4>
                        </div>
                        <div className="certi-id">
                          <span>ID: NT2018148</span>
                        </div>
                        <div className="certi-date">
                          <span>30 April, 2018</span>
                        </div>
                        <br/>
                        <div className="certi-company">
                          <span></span>
                        </div>
                      </div>
                    </div>
                  </Link>
                  {/* <!-- End of Certificate 2 --> */}
                </div>
                {/* <!-- End of Certificates --> */}
              </div>
            </motion.section>
    );
};

export default Resume;