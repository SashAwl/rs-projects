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

type AllAuthenticatedUsersRequest = {
  id: string;
  type: 'USER_ACTIVE';
  payload: null;
};

type AllUnauthorizedUsersRequest = {
  id: string;
  type: 'USER_INACTIVE';
  payload: null;
};

type MessageHistoryRequest = {
  id: string;
  type: 'MSG_FROM_USER';
  payload: {
    user: {
      login: string;
    };
  };
};

export type ServerRequest =
  | UserLoginRequest
  | UserLogoutRequest
  | AllAuthenticatedUsersRequest
  | AllUnauthorizedUsersRequest
  | MessageHistoryRequest;
