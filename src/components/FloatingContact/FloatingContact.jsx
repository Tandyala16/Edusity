import React from 'react';
import './FloatingContact.css';
import msg_icon from '../../assets/msg-icon.png';
import { Link } from 'react-scroll';

const FloatingContact = () => {
    return (
        <div className='floating-contact'>
            <Link to='contact' smooth={true} offset={-260} duration={500}>
                <img src={msg_icon} alt="" />
            </Link>
        </div>
    )
}

export default FloatingContact;
