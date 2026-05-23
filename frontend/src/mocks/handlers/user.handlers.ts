import { http, HttpResponse } from 'msw';

import type { ProfileResponse, UpdateProfilePayload } from '@/libs/types';

import { mockUsers } from '../auth-store';
import { withAuth } from '../middlewares/with-auth';
import { withDelay, withInfiniteDelay } from '../middlewares/with-delay';
import type { AuthenticatedRequest } from '../types';

export function makeGetMeHandler(
  options: { type?: 'error' | 'infinite' | 'default' } = {},
) {
  const { type = 'default' } = options;

  const endpoint = '/api/users/me';

  if (type === 'infinite') {
    return http.get(
      endpoint,
      withAuth(
        withInfiniteDelay(async () => {
          return HttpResponse.json(undefined);
        }),
      ),
    );
  }

  if (type === 'error') {
    return http.get(
      endpoint,
      withAuth(
        withDelay(async () => {
          return HttpResponse.json(undefined, { status: 500 });
        }),
      ),
    );
  }

  return http.get(
    endpoint,
    withDelay(
      withAuth(async ({ request }) => {
        const { authUser } = request as AuthenticatedRequest;

        const response: ProfileResponse = {
          user: {
            id: authUser.id,
            name: authUser.name,
            email: authUser.email,
          },
        };

        return HttpResponse.json(response);
      }),
    ),
  );
}

export function makeUpdateMeHandler(
  options: { type?: 'error' | 'infinite' | 'default' } = {},
) {
  const { type = 'default' } = options;

  const endpoint = '/api/users/me';

  if (type === 'infinite') {
    return http.put(
      endpoint,
      withAuth(
        withInfiniteDelay(async () => {
          return HttpResponse.json(undefined);
        }),
      ),
    );
  }

  if (type === 'error') {
    return http.put(
      endpoint,
      withAuth(
        withDelay(async () => {
          return HttpResponse.json(undefined, { status: 500 });
        }),
      ),
    );
  }

  return http.put(
    endpoint,

    withDelay(
      withAuth(async ({ request }) => {
        const { authUser } = request as AuthenticatedRequest;

        const payload = (await request.json()) as UpdateProfilePayload;

        const foundUser = mockUsers.find((user) => user.id === authUser.id);

        if (typeof foundUser === 'undefined') {
          return HttpResponse.json(undefined, { status: 401 });
        }

        const isExistingEmail = mockUsers.some(
          (user) =>
            user.id !== authUser.id &&
            user.email.toLowerCase() === payload.email.toLowerCase(),
        );

        if (isExistingEmail) {
          return HttpResponse.json(undefined, { status: 409 });
        }

        const updatedUser = {
          ...authUser,
          ...payload,
        };

        const newUsers = [
          ...mockUsers.filter((user) => user.id !== authUser.id),
          updatedUser,
        ];

        mockUsers.splice(0, mockUsers.length);
        newUsers.forEach((user) => mockUsers.push(user));

        const response: ProfileResponse = {
          user: {
            id: updatedUser.id,
            name: updatedUser.name,
            email: updatedUser.email,
          },
        };

        return HttpResponse.json(response);
      }),
    ),
  );
}

export const userHandlers = [makeGetMeHandler(), makeUpdateMeHandler()];
