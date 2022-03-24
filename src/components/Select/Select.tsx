import styled from 'styled-components'
import {
    width,
    height,
    fontSize,
    borderRadius,
    background,
  } from 'styled-system'

const StyledSelect = styled.select`
  ${width}
  ${height}
  ${background}
  ${borderRadius}
  ${fontSize}

  
  option {
    color: black;
    background: white;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
  }
  option:nth-child(odd) {    
    background-color: #f5f5f5;
  }
  `;

  const Select = ({ ...rest }) => <StyledSelect {...rest} />

  Select.defaultProps = {
    width: '20%',
    height: '2.2rem',
    background: '#f5f5f5',
    fontSize:'20px',
  }

  export default Select