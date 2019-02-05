import {
    FETCH_STORIES_START,
    FETCH_STORIES_SUCCESS,
    FETCH_STORIES_FAILURE,
    ADD_STORY_START,
    ADD_STORY_SUCCESS,
    ADD_STORY_FAILURE,
  } from '../actions';
  
  const initialState = {
    stories: [],
    fetchingStories: false,
    addingStory: false,
    error: null
  };
  
  const storiesReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_STORIES_START:
        return {
          ...state,
          fetchingStories: true,
          error: null
        };
      case FETCH_STORIES_SUCCESS:
        return {
          ...state,
          fetchingStories: false,
          error: null,
          stories: action.payload
        };
      case FETCH_STORIES_FAILURE:
        return {
          ...state,
          fetchingStories: false,
          error: action.payload
        };
      case ADD_STORY_START:
        return {
          ...state,
          addingStory: true,
          error: null
        };
      case ADD_STORY_SUCCESS:
        return {
          ...state,
          addingStory: false,
          error: null,
          stories: action.payload
        };
      case ADD_STORY_FAILURE:
        return {
          ...state,
          addingStory: false,
          error: action.payload
        };
      default:
        return state;    
    }
  };
  
  export default storiesReducer;