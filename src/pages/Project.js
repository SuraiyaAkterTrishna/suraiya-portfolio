import React from "react";
import { useParams } from "react-router-dom";
import useProjects from "../hooks/useProjects";

const Project = () => {
    const {id} = useParams();
    const [projects] = useProjects();
    const project = projects.find((p) => p.id == id);
    console.log(project)
  return (
    <div id="ajax-page" className="ajax-page-content">
      <div className="ajax-page-wrapper">
        {/* <div className="ajax-page-nav">
          <div className="nav-item ajax-page-prev-next">
            <a className="ajax-page-load" href="portfolio-3.html">
              <i className="lnr lnr-chevron-left"></i>
            </a>
            <a className="ajax-page-load" href="portfolio-2.html">
              <i className="lnr lnr-chevron-right"></i>
            </a>
          </div>
          <div className="nav-item ajax-page-close-button">
            <a id="ajax-page-close-button" href="#">
              <i className="lnr lnr-cross"></i>
            </a>
          </div>
        </div> */}

        <div className="ajax-page-title">
          <h1>{project?.name}</h1>
        </div>

        <div className="row">
          <div className="col-sm-8 col-md-8 portfolio-block">
          <img src={project?.img1} className="mb-4 img-fluid" alt="" />
          <img src={project?.img2} className="mb-4 img-fluid" alt="" />
          <img src={project?.img3} className="mb-4 img-fluid" alt="" />
          </div>
          <div className="col-sm-4 col-md-4 portfolio-block">
            {/* <!-- Project Description --> */}
            <div className="project-description">
              <div className="block-title">
                <h3>Description</h3>
              </div>
              <ul className="project-general-info">
                <li>
                  <p>
                    <i className="fa fa-user"></i> Most. Suraiya Akter
                  </p>
                </li>
                <li>
                  <p>
                    <i className="fa fa-globe"></i>{" "}
                    <a href={project?.link} target="_blank" rel="noreferrer">
                      {project?.link}
                    </a>
                  </p>
                </li>
                <li>
                  <p>
                    <i className="fa fa-calendar"></i> 25 december, 2016
                  </p>
                </li>
              </ul>

              <p className="text-justify">
              {project?.description}
              </p>
              {/* <!-- /Project Description --> */}

              {/* <!-- Technology --> */}
              <div className="tags-block">
                <div className="block-title">
                  <h3>Technology</h3>
                </div>
                <ul className="tags">
                  <li>
                    <a>HTML5</a>
                  </li>
                  <li>
                    <a>CSS3</a>
                  </li>
                  <li>
                    <a>jQuery</a>
                  </li>
                  <li>
                    <a>Ajax</a>
                  </li>
                  <li>
                    <a>PHP5</a>
                  </li>
                </ul>
              </div>
              {/* <!-- /Technology --> */}

              {/* <!-- Share Buttons --> */}
              <div className="btn-group share-buttons">
                <div className="block-title">
                  <h3>Share</h3>
                </div>
                <a href="#" target="_blank" className="btn">
                  <i className="fab fa-facebook-f"></i>{" "}
                </a>
                <a href="#" target="_blank" className="btn">
                  <i className="fab fa-twitter"></i>{" "}
                </a>
                <a href="#" target="_blank" className="btn">
                  <i className="fab fa-dribbble"></i>{" "}
                </a>
              </div>
              {/* <!-- /Share Buttons --> */}
            </div>
            {/* <!-- Project Description --> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
