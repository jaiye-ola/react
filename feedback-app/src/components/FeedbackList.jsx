import React from 'react'
import Container from './shared/Container'
import Card from './shared/Card';
import Feedbackitems from './Feedbackitems';

function FeedbackList({ feedbacklist_prop }) {
  console.log(feedbacklist_prop)
  return (
    <div>
        <Container className={'mt-5 mb-5'}>
      <div className="max-w-6xl m-auto">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2 justify-center items-center">
        {feedbacklist_prop.map((items) => (
      <div key={items.id}>
        <Feedbackitems feedbackitems_prop={items} />
      </div>
        ))}
    </div>
    </div>
        </Container>
    </div>
  )
}

export default FeedbackList;
