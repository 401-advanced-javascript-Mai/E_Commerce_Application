import React from 'react';
import { connect } from 'react-redux';

const Status = props => {
  return (
    <section>
      {props.activeCategories}
    </section>
  )
}

const mapStateToProps = state => ({
    activeCategories: state.category.activeCategories
});

export default connect(mapStateToProps)(Status);