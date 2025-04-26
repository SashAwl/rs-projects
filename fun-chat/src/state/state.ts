import type { User, UserResponse } from '../vue/pages/main';

let currentUser: User | null;
let users: UserResponse[] = [];
let activeUsers: UserResponse[] = [];

export { currentUser, users, activeUsers };

export function setCurrentUser(user: User | null): void {
  currentUser = user;
}

export function getCurrentUser(): User | null {
  return currentUser;
}

export function setUsers(usersResponse: UserResponse[]): void {
  users = [...usersResponse];
}

export function getUsers(): UserResponse[] {
  return users;
}

export function setActiveUsers(usersResponse: UserResponse[]): void {
  activeUsers = [...usersResponse];
}

export function getActiveUsers(): UserResponse[] {
  return activeUsers;
}

export function getUserStatus(): UserResponse[] {
  const activeUserNames = activeUsers.map((user) => user.login);
  const inactiveUsers = users.filter((user) => {
    return !activeUserNames.includes(user.login);
  });

  return [...activeUsers, ...inactiveUsers];
}
