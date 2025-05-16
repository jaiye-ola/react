import { useState } from "react";
import FeedbackList from "./components/feedbackList";
import Header from "./components/Header";
import FeedbackData from "./data/feedBackData";
import FeedbackForm from "./components/feedbackForm";
import Feedbackstats from "./components/Feedbackstats";
function App() {
  const [feedback, setFeedback] = useState(FeedbackData)
  console.log(feedback);

  return (
    <>
      < Header />
      {/* < Header /> */}
      < FeedbackForm />
      <FeedbackList feedbacklist_prop={feedback} />
    </>
  )
}

export default App;
