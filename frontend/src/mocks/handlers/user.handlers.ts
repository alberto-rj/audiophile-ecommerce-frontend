import { http, HttpResponse } from 'msw';

import type { ProfileResponse, UpdateProfilePayload } from '@/libs/types';

import { mockUsers } from '../auth-store';
import type { AuthenticatedRequest } from '../types';
import { withAuth } from '../middlewares/with-auth';
import { withDelay } from '../middlewares/with-delay';

export const userHandlers = [
  http.get(
    '/api/users/me',

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
  ),

  http.put(
    '/api/users/me',

    withDelay(
      withAuth(async ({ request }) => {
        const { authUser } = request as AuthenticatedRequest;

        const payload = (await request.json()) as UpdateProfilePayload;

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
  ),
];
