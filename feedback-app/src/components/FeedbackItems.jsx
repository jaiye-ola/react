import React from "react";
import Card from "./shared/Card";
import { MdCreditScore } from "react-icons/md";
import { HiMiniXMark } from "react-icons/hi2";

function Feedbackitems({
  feedbackitems_prop,
  deleteFeedback,
  editFeedbackHandler,
}) {
  // console.log(feedbackitems_prop)
  return (
    <Card>
      <div className="flex justify-between items-center">
        <div className="bg-amber-200 w-[40px] h-[40px] text-center rounded-full py-2">
          {feedbackitems_prop.rating}
        </div>
        <div>
          <button
            type="button"
            onClick={() => editFeedbackHandler(feedbackitems_prop)}
            className="text-xl text-blue-500"
          >
            <MdCreditScore size={20} />
          </button>
          <button
            type="button"
            className="text-xl text-red-500"
            onClick={() => deleteFeedback(feedbackitems_prop.id)}
          >
            <HiMiniXMark size={20} />
          </button>
        </div>
      </div>
      <div>{feedbackitems_prop.title}</div>
    </Card>
  );
}

export default Feedbackitems;
