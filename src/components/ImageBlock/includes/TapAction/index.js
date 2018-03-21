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

  showAction = () => {
    this.setState({
      showAction: true,
    });
  };

  render() {
    const { smallView, onRemoveImage } = this.props;
    const { showAction } = this.state;

    if (!smallView) {
      return null;
    }

    return (
      // eslint-disable-next-line jsx-a11y/click-events-have-key-events
      <div
        role="button"
        className={classNames(['TapAction', smallView && showAction && 'TapAction-ActionVisible'])}
        onClick={this.showAction}
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
