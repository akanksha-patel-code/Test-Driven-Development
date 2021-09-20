import PostsReducer from '../reducers/PostsReducer';
import expect from 'expect';

describe('team reducer', () => {

  it('should return the initial state', () => {
    expect(PostsReducer(undefined, {})).toEqual(
        {
            posts: [],
            postsLoaded: false
        }
    );
  });
});