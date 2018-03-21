import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './AppMainActions.css';

import BorderedButton from '../../components/BorderedButton';

const AppMainActions = ({ onAddClick, smallView }) => (
  <section className="AppMainActions">
    <BorderedButton text="NEW" fullWidth={smallView} onClick={onAddClick} />
  </section>
);

AppMainActions.propTypes = {
  onAddClick: PropTypes.func.isRequired,
  smallView: PropTypes.bool.isRequired,
};

const mapStoreToProps = ({ browser }) => ({ smallView: browser.lessThan.big });

export default connect(mapStoreToProps)(AppMainActions);
