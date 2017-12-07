import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'dva';
import FigureCard from './Card/FigureCard';
import ImageCard from './Card/ImageCard';

class Dashboard1 extends React.Component {

  render() {

    const { dashboard } = this.props;
    const { figurecard, imagecard } = dashboard;

    const figurecardProps = {
      figurecard
    }
    const imagecardProps = {
      imagecard
    }

    return (
      <div>
        <FigureCard {...figurecardProps} />
        <ImageCard {...imagecardProps} />
      </div>
    );
  }
}

Dashboard1.propTypes = {
  dashboard: PropTypes.object,
}

export default connect(({ dashboard }) => ({ dashboard }))(Dashboard1);
