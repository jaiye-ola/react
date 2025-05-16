import React from 'react'
import Card from './shared/Card'

function Feedbackstats() {
  return (
    <div>
      <Card className={"p-5 bg-white shadow-md hover:bg-white"}>
        <div className="text-center text-2xl font-semibold space-y-7">
          <h4>Total Feedback</h4>
          <h6>10</h6>
        </div>
        <div className="text-center text-2xl font-semibold space-y-7">
          <h4>Average rating</h4>
          <h6>50</h6>
        </div>
      </Card>
    </div>
  )
}

export default Feedbackstats;
