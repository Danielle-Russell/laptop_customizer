import React from 'react';
import SummarySection from './SummarySection';
import Price from './Price';

function Summary(props) {
  const { selected } = props;

  const summary = Object.keys(selected)
    .map(key =>
      <SummarySection
        key={key}
        featureTitle={key}
        selected={selected} /> 
    );

  return (
    <section className="main__summary">
      <h3>NEW GREENLEAF 2018</h3>
      {summary}
      <Price selected={selected} />
    </section>
  );
}

export default Summary

