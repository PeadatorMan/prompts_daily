export const headerLinks = [
  {
    label: 'Home',
    route: '/',
  },
  {
    label: 'Discover',
    route: '/events/discover',
  },
  {
    label: 'Create Event',
    route: '/events/create',
  },
  {
    label: 'My Profile',
    route: '/profile',
  },
]

export const eventDefaultValues = {
  title: '',
  description: '',
  location: '',
  imageUrl: '',
  startDateTime: new Date(),
  endDateTime: new Date(2026 ,0 ,1),
  categoryId: '',
  price: '3',
  isFree: false,
  url: 'https://localhost',
}
