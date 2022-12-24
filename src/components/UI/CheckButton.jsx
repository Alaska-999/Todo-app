import React from 'react';
import styled from "styled-components";
import {motion, useMotionValue, useTransform} from "framer-motion";

const checkVariants = {
    checked: {
        pathLength: 1,
        color: '#fff',
    },
    unchecked: {
        pathLength: 0,
        color: '#25273C',
    }
}

const boxVariant = {
    checked: {
        borderRadius: '50em',
        background: 'linear-gradient(#57DDFF, #C058F3) padding-box,\n linear-gradient(#57DDFF, #C058F3) border-box',
        // border: '2px solid transparent',
        transition: {duration: .1},
    },
    unchecked: {
        // background: 'linear-gradient(#25273C, #25273C) padding-box,\n    linear-gradient(#474b5e, #474b5e) border-box',
        // border:' 2px solid #474b5e',
        transition: {duration: .1},
    }
}

const CheckButton = ({checked, checkHandler}) => {
    const pathLength = useMotionValue(0)
    const opacity = useTransform(pathLength, [0.05, .15], [0, 1])
    return (
        <SvgBox
            variants={boxVariant}
            animate={checked ? 'checked' : 'unchecked'}
            onClick={checkHandler}
        >
            <Svg
                viewBox='0 0 53 38'
                fill='none'
                xmlns="http://www.w3.org/2000/svg"
            >
                <motion.path
                    variants={checkVariants}
                    animate={checked ? 'checked' : 'unchecked'}
                    style={{pathLength, opacity}}
                    fill="none"
                    strokeMiterlimit="10"
                    strokeWidth="6"
                    d="M1.5 22L16 36.5L51.5 1"
                    strokeLinejoin="round"
                    strokeLinecap="round"/>
            </Svg>
        </SvgBox>
    );
};

const SvgBox = styled(motion.div)`
  flex-basis: 25px;
  flex-shrink: 0;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  cursor: pointer;
  transition: 0.2s ease all;
  border-radius: 100px;
  background-color: transparent;
  border: 2px solid #474b5e;

  &:hover {
    background: linear-gradient(#25273C, #25273C) padding-box,
    linear-gradient(#57DDFF, #C058F3) border-box;
    border-radius: 50em;
    border: 2px solid transparent;
  }
`

const Svg = styled(motion.svg)`
  width: 100%;
  height: 100%;
  stroke: white;
  display: flex;
  align-items: center;
  justify-content: center;
`

export default CheckButton;