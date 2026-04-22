import { useEffect, useId } from 'react';

import { Button, Card, Input, Label, Radio } from '@/components/ui';
import { cn } from '@/libs/cn';
import { toMoney } from '@/libs/helpers';

const cartItems = [
  {
    image: 'https://tempimg.cc/64x64',
    name: 'xx99 Mk II',
    price: 2999,
    quantity: 2,
  },
  {
    image: 'https://tempimg.cc/64x64',
    name: 'xx59',
    price: 899,
    quantity: 3,
  },
  {
    image: 'https://tempimg.cc/64x64',
    name: 'yx1',
    price: 599,
    quantity: 1,
  },
];

const cartSummary = [
  { name: 'Total', value: 5396, isHighlighted: false },
  { name: 'Shipping', value: 50, isHighlighted: false },
  { name: 'VAT (Included)', value: 1079, isHighlighted: false },
  { name: 'Grand Total', value: 5446, isHighlighted: true },
];

const CheckoutPage = () => {
  const summaryHeadingId = useId();

  useEffect(() => {
    document.documentElement.style.backgroundColor = 'var(--color-gray-300)';
  }, []);

  return (
    <div className={cn('region')}>
      <div
        className={cn(
          'wrapper',
          'flex',
          'flex-col',

          'gap-8',

          'lg:flex-row',
          'lg:justify-between',
          'lg:items-start',
          'lg:gap-7.5',
        )}
      >
        <Card
          className={cn(
            'p-6',

            'md:p-8',

            'lg:p-12',
          )}
        >
          <h1
            className={cn(
              'uppercase',
              'text-xl',

              'lg:text-2xl',
              'text-black',
            )}
          >
            Checkout
          </h1>
          <form className={cn('form', 'form__flow')}>
            <fieldset className={cn('form__group')}>
              <legend className={cn('form__group-name')}>
                Billing Details
              </legend>
              <div className={cn('form__grid')}>
                <div className={cn('form__grid-item', 'form__field')}>
                  <Label htmlFor='name'>Name</Label>
                  <Input
                    type='text'
                    id='name'
                    name='name'
                    placeholder='John Doe'
                  />
                </div>
                <div className={cn('form__grid-item', 'form__field')}>
                  <Label htmlFor='email'>Email Address</Label>
                  <Input
                    type='email'
                    inputMode='email'
                    id='email'
                    name='email'
                    placeholder='johndoe@example.com'
                  />
                </div>
                <div className={cn('form__grid-item', 'form__field')}>
                  <Label htmlFor='phone'>Phone Number</Label>
                  <Input
                    type='text'
                    id='phone'
                    name='phone'
                    placeholder='+1 202-55-0136'
                  />
                </div>
              </div>
            </fieldset>
            <fieldset className={cn('form__group')}>
              <legend className={cn('form__group-name')}>Shipping Info</legend>

              <div className={cn('form__grid')}>
                <div
                  className={cn(
                    'form__grid-item',
                    'form__grid-item--full',
                    'form__field',
                  )}
                >
                  <Label htmlFor='address'>Address</Label>
                  <Input
                    type='text'
                    id='address'
                    name='address'
                    placeholder='1137 Williams Avenue'
                  />
                </div>
                <div className={cn('form__grid-item', 'form__field')}>
                  <Label htmlFor='zipCode'>Zip Code</Label>
                  <Input
                    type='text'
                    id='zipCode'
                    name='zipCode'
                    placeholder='10001'
                  />
                </div>
                <div className={cn('form__grid-item', 'form__field')}>
                  <Label htmlFor='city'>City</Label>
                  <Input
                    type='text'
                    id='city'
                    name='city'
                    placeholder='New York'
                  />
                </div>
                <div className={cn('form__grid-item', 'form__field')}>
                  <Label htmlFor='country'>Country</Label>
                  <Input
                    type='text'
                    id='country'
                    name='country'
                    placeholder='United States'
                  />
                </div>
              </div>
            </fieldset>
            <fieldset className={cn('form__group')}>
              <legend className={cn('form__group-name')}>
                Payment Details
              </legend>
              <div className={cn('form__flow')}>
                <fieldset className={cn('form__subgroup')}>
                  <legend className={cn('form__subgroup-name')}>
                    Payment Method
                  </legend>
                  <div className={cn('form__grid')}>
                    <div className={cn('form__grid-tem')}>
                      <Radio
                        name='paymentMethod'
                        label='Cash on Delivery'
                        value='cash-on-delivery'
                        onChange={(value) => console.log(value)}
                      />
                    </div>
                    <div className={cn('form__grid-tem')}>
                      <Radio
                        name='paymentMethod'
                        label='e-Money'
                        value='e-money'
                        onChange={(value) => console.log(value)}
                      />
                    </div>
                  </div>
                </fieldset>
                <div className={cn('form__grid')}>
                  <div className={cn('form__grid-item', 'form__field')}>
                    <Label htmlFor='eMoneyNumber'>e-Money Number</Label>
                    <Input
                      type='text'
                      id='eMoneyNumber'
                      name='eMoneyNumber'
                      placeholder='238521993'
                    />
                  </div>
                  <div className={cn('form__grid-item', 'form__field')}>
                    <Label htmlFor='eMoneyPIN'>e-Money PIN</Label>
                    <Input
                      type='text'
                      id='eMoneyPIN'
                      name='eMoneyPIN'
                      placeholder='6891'
                    />
                  </div>
                </div>
              </div>
            </fieldset>
          </form>
        </Card>
        <Card
          className={cn(
            'p-6',

            'md:p-8',

            'lg:max-inline-87.5',
          )}
        >
          <div
            className={cn(
              'size-full',
              'flex',
              'flex-col',
              'justify-between',
              'gap-8',
            )}
          >
            <section aria-labelledby={summaryHeadingId}>
              <h2
                id={summaryHeadingId}
                className={cn('uppercase', 'text-md', 'text-black')}
              >
                Summary
              </h2>
              <ul
                role='list'
                className={cn('py-8', 'flex', 'flex-col', 'gap-6')}
              >
                {cartItems.map(({ image, name, price, quantity }) => (
                  <li
                    key={name}
                    className={cn(
                      'flex',
                      'justify-between',
                      'items-center',
                      'gap-8',
                    )}
                  >
                    <div className={cn('flex', 'items-center', 'gap-4')}>
                      <img
                        src={image}
                        className={cn(
                          'aspect-64/64',
                          'object-cover',
                          'rounded-lg',
                          'overflow-hidden',
                        )}
                        alt=''
                        width={64}
                        height={64}
                      />
                      <div className={cn('flex', 'flex-col')}>
                        <span
                          className={cn(
                            'uppercase',
                            'text-base',

                            'text-black',
                            'font-bold',
                          )}
                        >
                          {name}
                        </span>
                        <span
                          className={cn(
                            'uppercase',
                            'text-xs',

                            'font-bold',
                            'text-black-o-50',
                          )}
                        >
                          {price}
                        </span>
                      </div>
                    </div>
                    <div>
                      <span className={cn('sr-only')}>times: {quantity}</span>
                      <span
                        aria-hidden={true}
                        className={cn(
                          'text-base',

                          'font-bold',
                          'text-black-o-50',
                        )}
                      >
                        x{quantity}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
              <dl className={cn('flex', 'flex-col', 'gap-2')}>
                {cartSummary.map(({ name, value, isHighlighted }) => (
                  <div
                    key={name}
                    className={cn(
                      'flex',
                      'justify-between',
                      'items-center',
                      'gap-8',
                      {
                        'mbs-4': isHighlighted,
                      },
                    )}
                  >
                    <dt
                      className={cn(
                        'uppercase',
                        'text-base',

                        'text-black-o-50',
                      )}
                    >
                      {name}
                    </dt>
                    <dd
                      className={cn(
                        'uppercase',
                        'text-md',

                        {
                          'text-primary-400': isHighlighted,
                          'text-black': !isHighlighted,
                        },
                      )}
                    >
                      {toMoney(value)}
                    </dd>
                  </div>
                ))}
              </dl>
            </section>
            <Button
              type='submit'
              variant='primary'
              className={cn('w-full')}
            >
              Continue & pay
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default CheckoutPage;
