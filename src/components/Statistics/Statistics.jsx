import React, { useEffect, useState } from 'react';
import './Statistics.css';
import { useInView } from 'react-intersection-observer';

const StatCard = ({ end, label, suffix = '+', icon }) => {
    const [count, setCount] = useState(0);
    const { ref, inView } = useInView({ threshold: 0.5, triggerOnce: true });

    useEffect(() => {
        if (inView) {
            let start = 0;
            const duration = 2000;
            const increment = end / (duration / 16); // 60fps

            const timer = setInterval(() => {
                start += increment;
                if (start >= end) {
                    setCount(end);
                    clearInterval(timer);
                } else {
                    setCount(Math.ceil(start));
                }
            }, 16);

            return () => clearInterval(timer);
        }
    }, [inView, end]);

    return (
        <div className="stat-card" ref={ref}>
            <div className="stat-icon">
                <i className={icon}></i>
            </div>
            <h3>{count}{suffix}</h3>
            <p>{label}</p>
        </div>
    );
};

const Statistics = () => {
    return (
        <div className="statistics">
            <StatCard end={15000} label="Graduates" icon="fas fa-user-graduate" />
            <StatCard end={50} label="Degree Programs" icon="fas fa-book-open" />
            <StatCard end={100} label="Awards Won" icon="fas fa-trophy" />
            <StatCard end={25} label="Years of Experience" icon="fas fa-clock" />
        </div>
    );
};

export default Statistics;
