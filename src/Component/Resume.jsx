import React from "react";
import HeadTitle from "./HeadTitle";
export default function Resume() {
  const printResume = (areaId) => {
    const printContent = document.getElementById(areaId).innerHTML;
    const originalContents = document.body.innerHTML;
    document.body.innerHTML = printContent;
    window.print();
    document.body.innerHTML = originalContents;
  };

  return (
    <section>
      <div
        id="resumeimg"
        className="col-12 resume d-flex justify-content-center">
        <div className="resume_page p-5">
          <div className=" fs-md-1 d-flex justify-content-between fw-bold mb-5">
            <HeadTitle title="Resume"></HeadTitle>
            <button
              onClick={() => printResume("resumeimg")}
              className="btn btn-primary">
              Print CV
            </button>
          </div>
          <img src="Resume.jpg" className="img-fluid shadow" alt="" />
        </div>
      </div>
    </section>
  );
}
