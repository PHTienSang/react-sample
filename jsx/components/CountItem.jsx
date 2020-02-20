import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Button = styled.button`
    position: relative;
    width: 177px;
    height: 36px;
    justify-content: center;
    
    font-family: Noto Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 13px;
    line-height: 13px;
    /* identical to box height, or 100% */

    display: flex;
    align-items: center;

    /* White */

    color: #FFFFFF;

    background: #26B297;
    border-radius: 40px;
`;

const CountItem = ({ count, countItem }) => (
  <div>
    <h1>
      Count:
      {count}
    </h1>
    <Button onClick={() => countItem()}>Count Up</Button>
  </div>
);

CountItem.propTypes = {
  count: PropTypes.number,
  countItem: PropTypes.func,
};

CountItem.defaultProps = {
  count: 0,
  countItem: () => {},
};
export default CountItem;
