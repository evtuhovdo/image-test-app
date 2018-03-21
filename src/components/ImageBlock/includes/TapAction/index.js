import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classNames from 'classnames';

import FlatButton from '../../../../components/FlatButton';

import './TapAction.css';

class TapAction extends Component {
  state = {
    showAction: false,
  };

  handleTap = event => {
    if (!this.state.showAction) {
      this.setState({
        showAction: true,
      });

      event.stopPropagation();

      return false;
    }
  };

  render() {
    const { smallView, onRemoveImage } = this.props;
    const { showAction } = this.state;

    if (!smallView) {
      return null;
    }

    return (
      <div
        className={classNames(['TapAction', smallView && showAction && 'TapAction-ActionVisible'])}
        onClick={this.handleTap}
      >
        {smallView &&
          showAction && (
            <FlatButton
              text="Delete"
              fullWidth
              fullHeight
              color="red"
              onClick={onRemoveImage}
            />
          )}
      </div>
    );
  }
}

TapAction.propTypes = {
  onRemoveImage: PropTypes.func.isRequired,
  smallView: PropTypes.bool.isRequired,
};

const mapStoreToProps = ({ browser }) => ({ smallView: browser.lessThan.big });

export default connect(mapStoreToProps)(TapAction);
