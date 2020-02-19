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
    const { count, handleCountItem } = this.props;
    return (
      <div>
        <h1>
          Count:
          {count}
        </h1>
        <Button onClick={handleCountItem}>Count Up</Button>
      </div>
    );
  }
}

CountItem.propTypes = {
  count: PropTypes.number.isRequired,
  handleCountItem: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  count: state.count,
});


const mapDispatchToProps = (dispatch) => bindActionCreators(
  {
    handleCountItem: countItem,
  },
  dispatch,
);

export default connect(mapStateToProps, mapDispatchToProps)(CountItem);
