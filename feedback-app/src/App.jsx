import { useState } from "react";
import FeedbackList from "./components/feedbackList";
import Header from "./components/Header";
import FeedbackData from "./data/feedBackData";
import FeedbackForm from "./components/feedbackForm";
// import Feedbackstats from "./components/Feedbackstats";
// import useForm from "react-hook-form"

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);
  // console.log(feedback);

  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure, you want to delete feedback?"))
      setFeedback(feedback.filter((items) => items.id !== id));
  };

  const addFeedbackHandler = (newFeedback) => {
    console.log(newFeedback);
    newFeedback.id = feedback.length + 1;
    setFeedback([newFeedback, ...feedback]);
  };

  return (
    <>
      <Header />
      <FeedbackForm
        feedbackstats_prop={feedback}
        addFeedbackHandler={addFeedbackHandler}
      />
      <FeedbackList
        deleteFeedback={deleteFeedback}
        feedbacklist_prop={feedback}
      />
    </>
  );
}

export default App;
