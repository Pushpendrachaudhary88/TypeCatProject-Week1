import React from 'react'
import { FaGithub } from "react-icons/fa";
import {FaLinkedin } from "react-icons/fa";
import {FaEnvelope } from "react-icons/fa";
import {FaDiscord } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-1'>
          < FaGithub />
          < FaLinkedin />
          < FaEnvelope />
          < FaDiscord />

        </div>
        <div className='footer-2'>
            <select  placeholder='Select Theme'>
                <option value="fruit">Dark-Black</option>
                <option value="vegetable">Coloured-Pink</option>
                <option value="meat">Coloured-Green</option>
                <option value="meat">Coloured-Blue</option>
                <option value="meat">Coloured-Grey</option>
                <option value="meat">Coloured-White</option>
                <option value="meat">Coloured-LightPurple</option>
            </select>
       </div>
         
    </div>
  )
}

export default Footer
