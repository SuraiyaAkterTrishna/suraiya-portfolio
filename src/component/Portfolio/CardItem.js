import React, { useState } from "react";
import ProjectModal from "../shared/ProjectModal";

const CardItem = ({ project }) => {
    const [openedAdd, setOpenedAdd] = useState(false);
  const controlAddModal = () => {
    setOpenedAdd((prevState) => !prevState);
  };
  return (
    <div className="col-12 col-md-6 col-lg-4">
      <div
        className="project-card"
        style={{ backgroundImage: `url(${project?.img})` }}
      >
        <div onClick={controlAddModal}>
          <div className="fplogo">{project?.name}</div>
          <div className="fptext">
            <p>{project?.description.slice(0, 100)}</p>
          </div>
        </div>
      </div>
      
      {/* modal */}
      <ProjectModal
        open={openedAdd}
        setOpened={setOpenedAdd}
        control={controlAddModal}
      />
    </div>
  );
};

export default CardItem;
