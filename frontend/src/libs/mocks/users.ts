import type { BaseUser } from '@/libs/types';

export const user: BaseUser = {
  id: 1,
  name: 'Test User',
  email: 'test@example.com',
};

export const john: BaseUser = {
  id: 2,
  name: 'John Doe',
  email: 'john@example.com',
};

export const jane: BaseUser = {
  id: 3,
  name: 'Jane Doe',
  email: 'jane@example.com',
};

export const demo: BaseUser = {
  id: 4,
  name: 'Demo User',
  email: 'demo@example.com',
};

export const users: BaseUser[] = [user, john, jane, demo];
