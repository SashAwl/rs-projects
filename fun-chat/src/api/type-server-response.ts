export type UserLogin = {
  id: string;
  type: 'USER_LOGIN';
  payload: {
    user: {
      login: string;
      isLogined?: boolean;
      error?: string;
    };
  };
};

export type UserLogout = {
  id: string;
  type: 'USER_LOGOUT';
  payload: {
    user: {
      login: string;
      isLogined?: boolean;
      error?: string;
    };
  };
};

export type ServerResponse = UserLogin | UserLogout;
