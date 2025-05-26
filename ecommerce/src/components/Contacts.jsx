import React from "react";
import Container from "./shared/Container";

function Contacts() {
  return (
    <Container className="mt-12 mb-12">
      <h1>Contact Us</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-2">
        <div>
          <div className="cform shadow-md w-full p-5">
            <form action="">
              <div className="mb-3">
                <input
                  type="text"
                  className="w-full outline none p-2 border-gray-100"
                  name=""
                  placeholder="Enter your name"
                  id=""
                />
              </div>

              <div className="mb-3">
                <input
                  type="text"
                  className="w-full p-2 border-gray-100"
                  name=""
                  placeholder="Enter your email"
                  id=""
                />
              </div>

              <div className="mb-3">
                <input
                  type="text"
                  className="w-full p-2 border-gray-100"
                  name=""
                  placeholder="Enter subject"
                  id=""
                />
              </div>
            </form>
          </div>
          <div className="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.383781125619!2d3.344284875075693!3d6.599135093394697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b9231a8afe793%3A0x5f297da31d68daec!2sAnchorsoft%20Academy!5e0!3m2!1sen!2sng!4v1748250050822!5m2!1sen!2sng"
              className="w-full"
              style="border:0;"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Contacts;
