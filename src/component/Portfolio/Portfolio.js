import useProjects from "../../hooks/useProjects";
import { useState } from "react";
import ProjectModal from "../shared/ProjectModal";
import { motion } from "framer-motion";

const Portfolio = ({ activeMenu }) => {
  const [openedAdd, setOpenedAdd] = useState(false);
  const [id, setId] = useState();
  const controlAddModal = (projectId) => {
    setId(projectId);
    setOpenedAdd((prevState) => !prevState);
  };
  const [projects] = useProjects();
  return (
    <motion.section
      data-id="portfolio"
      className={`animated-section ${
        activeMenu === "portfolio" ? "section-active" : "ps--active-y"
      } `}
      data-ps-id="c654bd47-22e2-198f-753b-81e925370a08"
      intial={{ width: 0, opacity: 0}}
      animate={{ width: "100%", opacity: 1 }}
      exit={{ x: window.innerWidth, opacity: 0, transition: { duration: 0.4 }}}
    >
      <div className="page-title">
        <h2>Portfolio</h2>
      </div>

      <div className="section-content">
        <div className="row">
          <div className="col-xs-12 col-sm-12">
            {/* <!-- Portfolio Content --> */}
            <div className="portfolio-content">
              {/* <ul className="portfolio-filters">
                <li className="active">
                  <a
                    className="filter btn btn-sm btn-link"
                    href="/"
                    data-group="category_all"
                  >
                    All
                  </a>
                </li>
                <li>
                  <a
                    className="filter btn btn-sm btn-link"
                    href="/"
                    data-group="category_detailed"
                  >
                    Detailed
                  </a>
                </li>
                <li>
                  <a
                    className="filter btn btn-sm btn-link"
                    href="/"
                    data-group="category_mockups"
                  >
                    Mockups
                  </a>
                </li>
                <li>
                  <a
                    className="filter btn btn-sm btn-link"
                    href="/"
                    data-group="category_soundcloud"
                  >
                    SoundCloud
                  </a>
                </li>
                <li>
                  <a
                    className="filter btn btn-sm btn-link"
                    href="/"
                    data-group="category_vimeo-videos"
                  >
                    Vimeo Videos
                  </a>
                </li>
                <li>
                  <a
                    className="filter btn btn-sm btn-link"
                    href="/"
                    data-group="category_youtube-videos"
                  >
                    YouTube Videos
                  </a>
                </li>
              </ul> */}

              {/* <!-- Portfolio Grid --> */}
              <div className="container">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 project-details g-3">
                  {projects.map((project) => (
                    <div className="col-12 col-md-6 col-lg-4" key={project.id}>
                      <div
                        className="project-card"
                        style={{ backgroundImage: `url(${project.img})` }}
                      >
                        <div
                          className="btn"
                          onClick={() => controlAddModal(project?.id)}
                        >
                          <div className="fplogo">{project.name}</div>
                          <div className="fptext">
                            <p>{project.description.slice(0, 100)}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* <!-- End of Portfolio Content --> */}
          </div>
        </div>
      </div>
      {/* modal */}
      <ProjectModal
        id={id}
        projects={projects}
        open={openedAdd}
        setOpened={setOpenedAdd}
        control={controlAddModal}
      />
    </motion.section>
  );
};

export default Portfolio;
