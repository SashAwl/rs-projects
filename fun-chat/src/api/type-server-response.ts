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

export type Error = {
  id: string;
  type: 'ERROR';
  payload: {
    error: 'a user with this login is already authorized';
  };
};

type AllAuthenticatedUsers = {
  id: string;
  type: 'USER_ACTIVE';
  payload: {
    users: [];
  };
};

type AllUnauthorizedUsers = {
  id: string;
  type: 'USER_INACTIVE';
  payload: { users: [] };
};

type MessageHistory = {
  id: string;
  type: 'MSG_FROM_USER';
  payload: {
    messages: [];
  };
};

type MessageSend = {
  id: string;
  type: 'MSG_SEND';
  payload: {
    message: {
      id: string;
      from: string;
      to: string;
      text: string;
      datetime: number;
      status: {
        isDelivered: boolean;
        isReaded: boolean;
        isEdited: boolean;
      };
    };
  };
};

export type ServerResponse =
  | UserLogin
  | Error
  | UserLogout
  | AllAuthenticatedUsers
  | AllUnauthorizedUsers
  | MessageHistory
  | MessageSend;
