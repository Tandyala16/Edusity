import React from 'react';
import './Team.css';
import user_1 from '../../assets/user-1.png';
import user_2 from '../../assets/user-2.png';
import user_3 from '../../assets/user-3.png';
import user_4 from '../../assets/user-4.png';

const TeamMember = ({ img, name, role }) => {
    return (
        <div className="team-member">
            <div className="member-img">
                <img src={img} alt={name} />
                <div className="social-overlay">
                    <i className="fab fa-linkedin"></i>
                    <i className="fab fa-twitter"></i>
                </div>
            </div>
            <h3>{name}</h3>
            <p>{role}</p>
        </div>
    );
};

const Team = () => {
    return (
        <div className="team-section">
            <h2 className="title">Meet Our Faculty</h2>
            <div className="team-grid">
                <TeamMember img={user_1} name="Dr. Emily Smith" role="Dean of Sciences" />
                <TeamMember img={user_2} name="Prof. John Doe" role="Head of Arts" />
                <TeamMember img={user_3} name="Dr. Sarah Lee" role="Senior Lecturer" />
                <TeamMember img={user_4} name="Prof. Michael Brown" role="Research Lead" />
            </div>
        </div>
    );
};

export default Team;
