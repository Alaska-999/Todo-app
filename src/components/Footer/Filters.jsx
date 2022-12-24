import React from 'react';
import styled from "styled-components";
import {Link, useParams} from "react-router-dom";

const Filters = () => {
    return (
        <div>
            <Filter to='/all'>All</Filter>
            <Filter to='/active'>Active</Filter>
            <Filter to='/completed'>Completed</Filter>
        </div>
    );
};

const Filter = styled(Link)`
  text-decoration: none;
  color: #4D5066;
  margin-left: 10px;
  transition: color ease 0.2s;
  
  &:hover {
    color: #CACDE8;
  }

  &:focus {
    color: #3f84e7;
  }
`

export default Filters;