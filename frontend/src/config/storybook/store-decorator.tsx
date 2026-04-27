import type { Decorator } from '@storybook/react-vite';
import { Provider } from 'react-redux';

import { store } from '@/app/store';
import { categoryApi } from '@/app/services/categories';
import { productApi } from '@/app/services/products';
import { clearCart } from '@/app/features/cart';

export const StoreDecorator: Decorator = (Story, context) => {
  store.dispatch(categoryApi.util.resetApiState());
  store.dispatch(productApi.util.resetApiState());

  store.dispatch(clearCart());

  return (
    <Provider store={store}>
      <Story {...context} />
    </Provider>
  );
};
