const FOLLOW_USER = 'FOLLOW_USER';
const UNFOLLOW_USER = 'UNFOLLOW_USER';
const SET_USERS = 'SET_USERS';

const initialState = {
  users: [
    {
      id: 1,
      photoUrl:
        'https://pbs.twimg.com/profile_images/1078352782577594369/ztmZgQIS_400x400.jpg',
      isFollowed: true,
      name: 'Reimi',
      status: 'I am looking for a new job right now',
      location: { country: 'USA', city: 'New York' },
    },
    {
      id: 2,
      photoUrl:
        'https://c-sf.smule.com/rs-s80/arr/5f/b9/b50b3845-3172-42bb-814d-ec0a2b27ad86.jpg',
      isFollowed: true,
      name: 'Tom',
      status: 'I like football!',
      location: { country: 'Belarus', city: 'Minsk' },
    },
    {
      id: 3,
      photoUrl:
        'https://lh3.googleusercontent.com/proxy/htVjfkBfK7kBdi3D_CG5Bb3KqlL5GA514o2BhiD3rCXGi2KEYrs0wBBxnDxBLhP9Dc2Dn1KR1krGRGuWLY8L2BNocGbyg-x1q3jCcH93QXH4zz3lkZhjpbxOgKKu0l4wdfQuw_bY1TE4CGOt5Q',
      isFollowed: false,
      name: 'Helen',
      status: 'Cant wait for the quarantine to finish',
      location: { country: 'Russia', city: 'Moscow' },
    },
    {
      id: 4,
      photoUrl: 'https://avatarfiles.alphacoders.com/773/77360.png',
      isFollowed: false,
      name: 'Peter',
      status: 'Wassup',
      location: { country: 'Kazakhstan', city: 'Almaty' },
    },
  ],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW_USER: {
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.userId) {
            return {
              ...user,
              isFollowed: true,
            };
          }
          return user;
        }),
      };
    }

    case UNFOLLOW_USER: {
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.userId) {
            return {
              ...user,
              isFollowed: false,
            };
          }
          return user;
        }),
      };
    }

    case SET_USERS: {
      return {
        ...state,
        users: [...state.users, ...action.users],
      };
    }

    default:
      return state;
  }
};

export const followUser = (userId) => ({ type: FOLLOW_USER, userId });
export const unfollowUser = (userId) => ({ type: UNFOLLOW_USER, userId });
export const setUsers = (users) => ({ type: SET_USERS, users });

export default usersReducer;
