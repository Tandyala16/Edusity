import React from 'react';
import './Programs.css';
import program1 from '../../assets/program-1.png';
import program2 from '../../assets/program-2.png';
import program3 from '../../assets/program-3.png';

const Programs = React.forwardRef((props, ref) => {
  return (
    <section className="programs" id="programs" ref={ref}>
      <div className="container">
        <h2 className="programs-title">Our Programs</h2>
        <div className="programs-container">
          <div className="program-card">
            <img src={program1} alt="Program 1" className="program-image" />
            <div className="program-info">
              <h3 className="program-title">Bachelor of Science in Computer Science</h3>
              <p className="program-description">Our Computer Science program offers a solid foundation in software development, algorithms, and system design. Engage in hands-on projects and learn from industry experts.</p>
            </div>
          </div>
          <div className="program-card">
            <img src={program2} alt="Program 2" className="program-image" />
            <div className="program-info">
              <h3 className="program-title">Master of Business Administration</h3>
              <p className="program-description">The MBA program is designed to equip future leaders with critical business skills and a global perspective. Gain insights into strategic management, finance, and entrepreneurship.</p>
            </div>
          </div>
          <div className="program-card">
            <img src={program3} alt="Program 3" className="program-image" />
            <div className="program-info">
              <h3 className="program-title">Doctor of Philosophy in Education</h3>
              <p className="program-description">Our PhD in Education program focuses on advanced research methods and educational theory. Collaborate with renowned scholars and contribute to the field of education.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default Programs;
