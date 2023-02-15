import MeetupList from '../components/meetups/MeetupList';

const DUMMY_MEETUPS = [
  {
    id: 'm1',
    title: 'First Meetup',
    image:
      'https://images.pexels.com/photos/1709003/pexels-photo-1709003.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    address: 'GIT India Gate Jaipur',
    description: 'This is the first meetup',
  },
  {
    id: 'm2',
    title: 'Second Meetup',
    image:
      'https://images.pexels.com/photos/1709003/pexels-photo-1709003.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    address: 'White House America',
    description: 'This is the second meetup',
  },
];

function HomePage() {
  return <MeetupList meetups={DUMMY_MEETUPS} />;
}

export default HomePage;
