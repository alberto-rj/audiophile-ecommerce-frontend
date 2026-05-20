import type { Decorator } from '@storybook/react-vite';
import { useLayoutEffect } from 'react';
import { useDispatch } from 'react-redux';

import { clearCredentials, setCredentials } from '@/app/features/auth';
import { getMockCredentials } from '@/mocks';

export const WithCredentialsDecorator: Decorator = (Story, ctx) => {
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    dispatch(setCredentials(getMockCredentials()));
    return () => {
      dispatch(clearCredentials());
    };
  }, [dispatch]);

  return <Story {...ctx} />;
};
