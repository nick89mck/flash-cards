import { configureStore } from "@reduxjs/toolkit";
import quizzesSlice from "../features/quizzes/quizzesSlice";
import topicSlice from "../features/topics/topicSlice";

export default configureStore({
  reducer: {
    topics: topicSlice,
    quizzes: quizzesSlice
  },
});
