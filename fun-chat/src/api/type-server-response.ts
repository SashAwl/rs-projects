export type UserLogin = {
  id: string;
  type: 'USER_LOGIN';
  payload: {
    error?: string;
    user: {
      login: string;
      isLogined?: boolean;
    };
  };
};

export type UserLogout = {
  id: string;
  type: 'USER_LOGOUT';
  payload: {
    error?: string;
    user: {
      login: string;
      isLogined?: boolean;
    };
  };
};

export type ServerResponse = UserLogin | UserLogout;
