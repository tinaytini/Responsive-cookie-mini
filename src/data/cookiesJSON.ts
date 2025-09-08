export interface CookieOption {
  title: string;
  description: string;
  toggle: boolean;
}

export const initialCookies: CookieOption[] = [
  {
    title: 'Essentials',
    description:
      'These cookies are essential for the proper functioning of our services and cannot be disabled.',
    toggle: true,
  },
  {
    title: 'Analytics',
    description:
      'These cookies collect information about how you use our services or potential errors you encounter. Based on this information we are able to improve your experience and react to any issues.',
    toggle: false,
  },
  {
    title: 'Marketing',
    description:
      'These cookies allow us to show you advertisements relevant to you through our advertising partners.',
    toggle: false,
  },
];