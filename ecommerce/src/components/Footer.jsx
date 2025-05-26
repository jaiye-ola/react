import React from "react";
import Container from "./shared/Container";
// import facebook, whatsapp, tiktok, twitter

function Footer() {
  return (
    <div className="bg-gray-600">
      <Container>
        <div className="footer-1 grid grid-cols-1 md:grid-cols-3 justify-center items-center gap-3">
          <div>
            <h3 className="text-xl font-bold">
              <a href="">Venus</a>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </h3>
          </div>
          <div>
            <ul>
              <h3>Quick Links</h3>
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">About</a>
              </li>
              <li>
                <a href="">Contact</a>
              </li>
              <li>
                <a href="">Products</a>
              </li>
              <li>
                <a href="">FAQ</a>
              </li>
            </ul>
          </div>
          <div>
            <h3>Social Handles</h3>
            <ul className="flex flex-wrap justify-center gap-3">
              <li>
                <a href="">Facebook</a>
              </li>
              <li>
                <a href="">Whatsapp</a>
              </li>
              <li>
                <a href="">Tiktok</a>
              </li>
              <li>
                <a href="">Twitter</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-2 text-white border-2 border-white text-center capitalize p-6">
          <p>Copyright &copy; 2025 | team-jan 13 | all rights reserved</p>
        </div>
      </Container>
    </div>
  );
}

export default Footer;
