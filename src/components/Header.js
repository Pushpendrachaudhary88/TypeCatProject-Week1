import React from 'react'
import { TiMessageTyping } from "react-icons/ti";
import { ImUsers } from "react-icons/im";

const Header = () => (
    <div className='header'>
        <div className='header-1'>
            <h1>TypeCat</h1>
            <TiMessageTyping className='fonticon' />
        </div>
        <div>
        <ImUsers  className='fonticon-2' />
        </div>
    </div>
)

export default Header