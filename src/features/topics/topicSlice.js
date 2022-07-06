import { createSlice } from '@reduxjs/toolkit';

export const topicsSlice = createSlice(
	{
		name: 'topics',
		initialState: {
			topics: {}
		},
		reducers: {
			addTopic: (state, action) => {
				const { id, name, icon } = action.payload;
				state.topics[id] = {
					id: id,
					name: name,
					icon,
					quizIds: []
				}
			},
			addQuizIdForTopics: (state, action) => {
				const {quizId, topicId} = action.payload;
				state.topics[topicId].quizIds.push(quizId);
			}
		}
	}
)

export const selectTopics = (state) => state.topics.topics;
export const { addTopic, addQuizIdForTopics } = topicsSlice.actions;
export default topicsSlice.reducer;