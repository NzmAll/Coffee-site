import React from "react";
import aboutImg from "../../assets/about-img.jpg";
import { FiCheck } from "react-icons/fi";
import "./about.css";

const About = () => {
  return (
    <section className="about section" id="about">
      <div className="about__grid container grid">
        <div className="about__img-wrapper">
          <img src="{aboutImg}" alt="" className="about__img" />
        </div>
        <div className="about__content">
          <h2 className="section__title" data-title="About Us">
            Fresh Quality And Organic Tasty Coffee House For You
          </h2>
          <p className="about__description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
            officia unde consectetur animi in doloremque quisquam ea, vitae
            praesentium? Delectus provident nemo vitae optio dolorem culpa eaque
            nihil id molestias laudantium.
          </p>

          <div className="about__details grid">
            <p className="about__details-description">
              <FiCheck />
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <p className="about__details-description">
              <FiCheck />
              Lorem ipsum dolor sit amet consectetur adipisicing.
            </p>
            <p className="about__details-description">
              <FiCheck />
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel.
            </p>
          </div>

          <a href="#team" className="btn">
            Our Experts
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
