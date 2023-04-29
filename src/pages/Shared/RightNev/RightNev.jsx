import React from "react";
import { Button, ButtonGroup } from "react-bootstrap";
import {
  FaGithub,
  FaGoogle,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import quiz1 from "../../../assets/qZone1.png";
import quiz2 from "../../../assets/qZone2.png";
import quiz3 from "../../../assets/qZone3.png";
import bg1 from "../../../assets/bg1.png";

const RightNev = () => {
  return (
    <div>
      <div>
        <h4 className="my-3">Login With</h4>
        <Button variant="outline-primary" className="fs-5 mb-2 w-100">
          <FaGoogle className="me-2" />
          Login with Google
        </Button>
        <Button variant="outline-secondary" className="fs-5 w-100">
          <FaGithub className="me-2" />
          Login with GitHub
        </Button>
      </div>
      <div>
        <h4 className="my-3">Find Us On</h4>
        <ButtonGroup vertical className="w-100">
          <Button variant="outline-secondary" className="fs-5">
            <FaFacebook className="me-2" />
            Facebook
          </Button>
          <Button variant="outline-secondary" className="fs-5">
            <FaTwitter className="me-2" />
            Twitter
          </Button>
          <Button variant="outline-secondary" className="fs-5">
            <FaInstagram className="me-2" />
            Instragram
          </Button>
        </ButtonGroup>
      </div>
      <div className="bg-secondary p-2 my-3 rounded">
        <h4 className="mb-3 text-white">Q-Zone</h4>
        <div className="text-center">
          <img src={quiz1} alt="" />
          <img src={quiz2} alt="" />
          <img src={quiz3} alt="" />
        </div>
      </div>
      <div className="position-relative text-white text-center">
        <img className="w-100" src={bg1} alt="" />
        <div className="position-absolute top-0 p-5 px-4 my-5 ">
          <h3 className="fs-2 ">Create an Amazing Newspaper</h3>
          <p className="fs-5 my-3">Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
          <Button className="fs-4 mt-4" variant="danger">Learn More</Button>
        </div>
        
      </div>
    </div>
  );
};

export default RightNev;
