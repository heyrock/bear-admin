import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'dva';
import CountCard from './Card/CountCard';
import SalesCard from './Card/SalesCard';
import ChartsCard from './Card/ChartsCard';

class Dashboard2 extends React.Component {

  render() {

    const { dashboard } = this.props;
    const { countcard, salescard, chartscard } = dashboard;

    const figurecardProps = {
      countcard
    }
    const salescardProps = {
      salescard
    }
    const chartscardProps = {
      chartscard
    }

    return (
      <div>
        <CountCard {...figurecardProps} />
        <SalesCard {...salescardProps} />
        <ChartsCard {...chartscardProps} />
      </div>
    );
  }
}

Dashboard2.propTypes = {
  dashboard: PropTypes.object,
}

export default connect(({ dashboard }) => ({ dashboard }))(Dashboard2)
