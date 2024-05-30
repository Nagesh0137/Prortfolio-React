import React from "react";
import HeadTitle from "./HeadTitle";
export default function Contact() {
  const handleSend = (e) => {
    e.preventDefault();
    // Add your form submission logic here
  };

  return (
    <section className="contact_section d-flex flex-column align-items-center">
      <h1 className="mt-5 fw-bold fst-italic">
        <HeadTitle title="Let's talk">Let's talk</HeadTitle>
      </h1>
      <div className="bg-white mt-5 col-11 col-md-6 shadow-lg p-4 mb-5">
        <div className="row">
          <form className="text-capitalize container">
            <br />
            <br />
            <div className="col-12 ">
              <label className="col-12 col-md-6">
                First Name <sup className="text-danger">*</sup>
                <input className="is-invalid " type="text" />
              </label>

              <label className="float-end col-12 col-md-6">
                Last Name <sup className="text-danger">*</sup>
                <input className="w-100 w-md-75" type="text" />
              </label>
            </div>
            <br />
            <br />
            <br />
            <br />
            <label className="ms-3">
              Email<sup className="text-danger">*</sup>
            </label>
            <input type="email" className="w-100" />
            <br />
            <br />
            <label className="ms-3">
              Subject<sup className="text-danger">*</sup>
            </label>
            <br />
            <br />
            <input type="text" className="w-100" />
            <br />
            <br />
            <label className="ms-3">
              Message<sup className="text-danger">*</sup>
            </label>
            <br />
            <br />
            <input type="text" className="w-100" />
            <br />
            <br />
            <button className="btn btn-outline-dark" onClick={handleSend}>
              SEND
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
