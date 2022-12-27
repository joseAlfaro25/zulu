import React from "react";

import { Images } from "image";
import "./_NoResults.styles.scss";

const NoResult = () => {
  return (
    <div className="container_result container_general">
      <p className="no_result_title">No se encontró resultado</p>
      <img src={Images.no_results} alt="no se encontro resultado" />
    </div>
  );
};

export default NoResult;
