import React from "react";
import Container from "./shared/Container";
import SelectRated from "./selectRated";
import Feedbackstats from "./Feedbackstats";
import { useForm } from "react-hook-form";

function FeedbackForm({ feedbackstats_prop, addFeedbackHandler }) {
  const {
    register,
    reset,
    handleSubmit,
    setValue,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      title: "",
      rating: 5,
    },
  });

  const onSubmit = (data) => {
    const newFeedback = {
      ...data,
    };

    console.log(newFeedback);

    addFeedbackHandler(newFeedback);
    reset({
      title: "",
      rating: 4,
    });
  };

  const getSelectRated = (rating) => {
    console.log(rating);
    setValue("rating", rating);
  };
  return (
    <div>
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 items-center justify-center gap-3">
          <div className="md:col-span-2 bg-red-100">
            <div className="cform bg-white shadow-lg rounded-md p-5">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3">
                  <SelectRated selectrated_prop={getSelectRated} />
                </div>
                <div className="mb-3">
                  <label htmlFor="">Enter Feedback</label>
                  <input
                    type="text"
                    className="w-full bg-gray-200 p-3 border-none outline-none focus:border-none focus:outline-none rounded-lg"
                    name="title"
                    {...register("title", {
                      required: "Title is required",
                      maxLength: {
                        value: 25,
                        message: "Feedback should be at least 25 characters",
                      },
                    })}
                    placeholder="Enter your feedback"
                    id="title"
                  />
                </div>
                {errors.title && (
                  <p className="text-red-500 text-start">
                    {errors.title.message}
                  </p>
                )}
                <div>
                  <button
                    disabled={!isValid}
                    type="submit"
                    className='w-[20%] p-3 text-white rounded-md ${!isValid} ? "bg-gray-200" : "bg-gray-500" hover:bg-gray-400 duration-500 hover:translate-x-2 bg-gray-500'
                  >
                    Add feedback
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="">
            <Feedbackstats feedbackstats_prop={feedbackstats_prop} />
            {/* <Feedbackstats/> */}
          </div>
        </div>
      </Container>
    </div>
  );
}

export default FeedbackForm;
