type UserLoginRequest = {
  id: string;
  type: 'USER_LOGIN';
  payload: {
    user: {
      login: string;
      password: string;
    };
  };
};

type UserLogoutRequest = {
  id: string;
  type: 'USER_LOGOUT';
  payload: {
    user: {
      login: string;
      password: string;
    };
  };
};

export type ServerRequest = UserLoginRequest | UserLogoutRequest;
