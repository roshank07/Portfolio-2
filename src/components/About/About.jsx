import React from "react";
import Me from "../../assets/me-about.jpg";
import { FiAward } from "react-icons/fi";
import { GrProjects } from "react-icons/gr";




export default function About() {
  return (
    <section id="about">
      <h5>Get to Know me</h5>
      <h2>About me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
          <img src={Me} alt="about-me" />
          </div>
        </div>
        <div className="about__content">
        <div className="about__cards">
          <div className="about__card">
            <FiAward className="about__icon"/>
            <h5>Experience</h5>
            <small>2+ Years</small>
          </div>
          <div className="about__card">
            <GrProjects className="about__icon"/>
            <h5>Projects</h5>
            <small>10+</small>
          </div>
        </div>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus, veritatis dicta minus fuga iure
          voluptas suscipit nisi eveniet! Consequuntur qui ullam voluptates recusandae nostrum, dignissimos explicabo mollitia amet. Debitis, inventore!
        </p>
        <a href="#contacts" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  );
}
