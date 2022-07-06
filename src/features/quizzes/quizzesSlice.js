import { createSlice } from '@reduxjs/toolkit';
import { addQuizIdForTopic } from '../topics/topicSlice';

const quizzesSlice = createSlice(
	{
		name: 'quizzes',
		initialState: {
			quizzes: {}
		},
		reducers: {
			addQuiz: (state, action) => {
				const { id, name, topicId, cardIds } = action.payload;
				state.quizzes[id] = {
					id: id,
					name: name,
					topicId: topicId,
					cardIds: cardIds
				}
			}
		}
	}
)

export const addQuizForTopicId = (quiz) => {
	const { topicId, id } = quiz;
	return (dispatch) => {
		dispatch(quizzesSlice.actions.addQuiz(quiz));
		dispatch(addQuizIdForTopic({ topicId: topicId, quizId: id}))
	}
}

export const selectQuizzes = (state) =>  state.quizzes.quizzes;
export const { addQuiz } = quizzesSlice.actions;
export default quizzesSlice.reducer;
