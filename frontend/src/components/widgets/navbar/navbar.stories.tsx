import type { Meta, StoryObj } from '@storybook/react-vite';
import { http, HttpResponse } from 'msw';

import { Navbar } from '@/components/widgets';
import { API_ENDPOINTS } from '@/config/api-endpoints';
import { WithCredentialsDecorator } from '@/config/storybook';
import { emptyCartResponse, filledCartResponse } from '@/libs/mocks';

type StoryProps = React.ComponentProps<typeof Navbar>;

const meta = {
  title: 'widgets/Navbar',
  component: Navbar,
  parameters: {
    layout: 'fullscreen',
    msw: {
      handlers: [
        http.get(`/api${API_ENDPOINTS.cart}`, () =>
          HttpResponse.json(emptyCartResponse),
        ),
      ],
    },
  },
} satisfies Meta<StoryProps>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithLoggedUser: Story = {
  decorators: [WithCredentialsDecorator],
};

export const WithFilledCart: Story = {
  decorators: [WithCredentialsDecorator],
  parameters: {
    msw: {
      handlers: [
        http.get(`/api${API_ENDPOINTS.cart}`, () =>
          HttpResponse.json(filledCartResponse),
        ),
      ],
    },
  },
};
