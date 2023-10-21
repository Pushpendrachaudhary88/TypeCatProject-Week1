import React from 'react'
import { IoReload } from "react-icons/io5";

const Statistics = () => {
  return (
    <div className='statistics'>
        <div className='static-1'>
            {/* <button>Refresh</button> */}
            <IoReload className='static-icon' />
        </div>
        <div className='static-2'>
            <button>esc</button>
             <p>-</p>
             <p>reset</p>
        </div>
        <div className='static-3'>
            <button>10</button>
            <button>50</button>
            <button>80</button>
            <button>100</button>
            -
            <p>no. of Words</p>
        </div>


         
    </div>
  )
}

export default Statistics