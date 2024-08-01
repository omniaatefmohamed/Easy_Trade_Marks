import React from 'react'
import './Slider.css'
import Robot from './../../Images/robot.png'
import { Row } from 'react-bootstrap'

const Slider = () => {
    return (
        <section className='Slider text-center position-relative mb-80'>
            <h2>Easy Trademarks is <span className='text-white fw-bold'>transforming </span>how brands are:
                <br /><br />
                Protected <br />
                Enforced <br />
                Commercialized
            </h2>
            <img src={Robot} className='position-absolute Slider__img' alt="Slider img"/>

        </section>
    )
}

export default Slider
