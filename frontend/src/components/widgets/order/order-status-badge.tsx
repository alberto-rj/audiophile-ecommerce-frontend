import { cn } from '@/libs/cn';
import { toOrderStatusText } from '@/libs/helpers';
import type { OrderStatus } from '@/libs/types';

interface OrderStatusBadgeProps {
  status: OrderStatus;
}

const OrderStatusBadge = ({ status }: OrderStatusBadgeProps) => {
  return (
    <dl>
      <dt className={cn('sr-only')}>Status</dt>
      <dd
        className={cn(
          'inline-fit',
          'py-1',
          'px-3',

          'h8',
          'rounded-lg',
          {
            'bg-success-50': status === 'delivered',
            'text-success-1400': status === 'delivered',
            'bg-info-50': status === 'processing',
            'text-info-950': status === 'processing',
            'bg-warning-100': status === 'pending',
            'text-warning-1100': status === 'pending',
            'bg-danger-300': status === 'cancelled',
            'text-danger-950': status === 'cancelled',
            'bg-primary-50': status === 'shipped',
            'text-primary-950': status === 'shipped',
          },
        )}
      >
        {toOrderStatusText(status)}
      </dd>
    </dl>
  );
};

export default OrderStatusBadge;
