import React from 'react'
import Card from './shared/Card'

function Feedbackstats({ feedbackstats_prop }) {
  const total = feedbackstats_prop.reduce((acc, curr )=> (
    acc + curr.rating
  ), 0)
  const avgRate = total / feedbackstats_prop.length;
  console.log(Math.round(avgRate));

  return (
    <div>
      <Card className={"p-5 bg-white shadow-md hover:bg-white"}>
        <div className="text-center text-2xl font-semibold space-y-7">
          <h4>Total Feedback</h4>
          <h6>{feedbackstats_prop.length}</h6>
        </div>
        <div className="text-center text-2xl font-semibold space-y-7">
          <h4>Average rating</h4>
          <h6>{isNaN(avgRate) ? 0 : Math.round(avgRate)}</h6>
        </div>
      </Card>
    </div>
  )
}

export default Feedbackstats;
