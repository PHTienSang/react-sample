import React, { PureComponent } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { countItem } from '../action/ListAction';

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

class CountItem extends PureComponent {
  render() {
    const { count } = this.props;
    return (
      <div>
        <h1>
          Count:
          {count}
        </h1>
        <Button onClick={count.handleCountItem}>Count Up</Button>
      </div>
    );
  }
}

CountItem.propTypes = {
  count: PropTypes.number,
};

CountItem.defaultProps = {
  count: 0,
};

const mapStateToProps = (state) => ({ count: state.counteitem.count });


const mapDispatchToProps = (dispatch) => bindActionCreators(
  {
    handleCountItem: countItem,
  },
  dispatch,
);

export default connect(mapStateToProps, mapDispatchToProps)(CountItem);
