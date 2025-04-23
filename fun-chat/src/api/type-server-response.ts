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

export type ErrorResponse = {
  id: string;
  type: 'ERROR';
  payload: {
    error: 'a user with this login is already authorized';
  };
};

type AllAuthenticatedUsersResponse = {
  id: string;
  type: 'USER_ACTIVE';
  payload: {
    users: [];
  };
};

type AllUnauthorizedUsersResponse = {
  id: string;
  type: 'USER_INACTIVE';
  payload: { users: [] };
};

type MessageHistoryResponse = {
  id: string;
  type: 'MSG_FROM_USER';
  payload: {
    messages: [];
  };
};

export type ServerResponse =
  | UserLogin
  | ErrorResponse
  | UserLogout
  | AllAuthenticatedUsersResponse
  | AllUnauthorizedUsersResponse
  | MessageHistoryResponse;
