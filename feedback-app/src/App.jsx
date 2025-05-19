import { useState } from "react";
import FeedbackList from "./components/feedbackList";
import Header from "./components/Header";
import FeedbackData from "./data/feedBackData";
import FeedbackForm from "./components/feedbackForm";
// import Feedbackstats from "./components/Feedbackstats";
// import useForm from "react-hook-form"

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);
  const [editFeedback, setEditFeedback] = useState({
    items: [],
    edit: false,
  });
  // console.log(feedback)FeedbackData

  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure, you want to delete feedback?"))
      setFeedback(feedback.filter((items) => items.id !== id));
  };

  const addFeedbackHandler = (newFeedback) => {
    console.log(newFeedback);
    newFeedback.id = feedback.length + 1;
    setFeedback([newFeedback, ...feedback]);
  };

  const editFeedbackHandler = (items) => {
    console.log(items);
    setEditFeedback({
      items,
      edit: true,
    });
  };

  const updateFeedbackHandler = (id, updatedItem) => {
    setFeedback(
      feedback.map((items) =>
        items.id === id ? [...items, ...updatedItem] : items
      )
    );
  };

  return (
    <>
      <Header />
      <FeedbackForm
        updateFeedbackHandler={updateFeedbackHandler}
        editFeedback={editFeedback}
        feedbackstats_prop={feedback}
        addFeedbackHandler={addFeedbackHandler}
      />
      <FeedbackList
        editFeedbackHandler={editFeedbackHandler}
        deleteFeedback={deleteFeedback}
        feedbacklist_prop={feedback}
      />
    </>
  );
}

export default App;
