import React from 'react'
import { CiTimer } from "react-icons/ci";
import { BsFillBusFrontFill } from "react-icons/bs";
import { FaCalendarAlt } from "react-icons/fa";
import Container from './Container';

function About() {
  return (
    <Container>
      <div className="mmyy flex justify-around items-center gap-3 mt-12 mb-12">
        <div className='border-[#0B4F6c] text-center py-14 h-[300px] w-[300px] rounded-full'>
          <div className=""><CiTimer size={20}/></div>
          <div className="">
            <h5>24/7 delivery</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
        <div className='border-[#0B4F6c] text-center py-14 h-[300px] w-[300px] rounded-full'>
          <div className=""><BsFillBusFrontFill size={20}/></div>
          <div className="">
            <h5>24/7 delivery</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
        <div className='border-[#0B4F6c] text-center py-14 h-[300px] w-[300px] rounded-full'>
          <div className=""><FaCalendarAlt size={20}/></div>
          <div className="">
            <h5>Time</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default About
