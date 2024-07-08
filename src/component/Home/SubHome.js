import { motion } from "framer-motion";

const SubHome = () => {
    return (
        <motion.section
              data-id="home"
              className="animated-section start-page ps ps--theme_default section-active"
              data-ps-id="5da6f8d2-c2d7-f9b4-ecbd-8937f583834b"
              intial={{ hight: 0, opacity: 0}}
              animate={{ hight: "100%", opacity: 1 }}
              exit={{ y: window.innerHeight, opacity: 0, transition: { duration: 0.4 }}}
            >
              <div className="section-content vcentered">
                <div className="row">
                  <div className="col-sm-12 col-md-12 col-lg-12">
                    <div className="title-block">
                      <h2>Suraiya</h2>
                      <h4 className="mt-3" style={{color: "wheat"}}>Frontend-Developer</h4>
                    </div>
                  </div>
                </div>
              </div>
            </motion.section>
    );
};

export default SubHome;