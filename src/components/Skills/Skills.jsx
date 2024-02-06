import React from "react";
import { BsFillPatchCheckFill } from "react-icons/bs";

export default function Skills() {
  return (
    <section id="skills">
      <h5>What Skills I have </h5>
      <h2>Skills</h2>
      <div className="container skills__container">
        {/* Frontend */}
        <div className="skills__frontend">
          <h3>FrontEnd Development</h3>
          <div className="skills__content">
            <article className="skills__details">
              <BsFillPatchCheckFill className='skills__details-icons' />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="skills__details">
              <BsFillPatchCheckFill className='skills__details-icons'  />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="skills__details">
              <BsFillPatchCheckFill className='skills__details-icons' />
              <div>
                <h4>Javascripts</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="skills__details">
              <BsFillPatchCheckFill className='skills__details-icons' />
              <div>
                <h4>TailWind Css</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="skills__details">
              <BsFillPatchCheckFill className='skills__details-icons' />
              <div>
                <h4>React Js</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
        </div>
        {/* Backend */}
        <div className="skills__backend">
          <h3>Backend Development</h3>
          <div className="skills__content">
            <article className="skills__details">
              <BsFillPatchCheckFill className='skills__details-icons' />
              <div>
                <h4>Nodejs</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="skills__details">
              <BsFillPatchCheckFill className='skills__details-icons' />
              <div>
                <h4>C++</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="skills__details">
              <BsFillPatchCheckFill className='skills__details-icons' />
              <div>
                <h4>MongoDB</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="skills__details">
              <BsFillPatchCheckFill className='skills__details-icons' />
              <div>
                <h4>Singlestore</h4>
                <small className="text-light">Expereinced</small>
              </div>
            </article>
            <article className="skills__details">
              <BsFillPatchCheckFill className='skills__details-icons' />
              <div>
                <h4>MySQL</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
