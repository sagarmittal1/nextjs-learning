import MeetupDetail from '../../components/meetups/MeetupDetail';

const MeetupDetails = () => {
  return (
    <MeetupDetail
      title="First Meetup"
      image="https://images.pexels.com/photos/1709003/pexels-photo-1709003.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
      address="Billford Stret, Minnesota"
      description="This is the first meetup"
    />
  );
};

export async function getStaticPaths() {
  return {
    // if false means if the paths not there here then generates 404 error
    // if true means the nextJS will pre-render the page for it & it generates pages on path pages
    fallback: false,
    paths: [
      {
        params: {
          meetupId: 'm1',
        },
      },
      {
        params: {
          meetupId: 'm2',
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;
  // console.log(meetupId);

  return {
    props: {
      meetupData: {
        image:
          'https://images.pexels.com/photos/1709003/pexels-photo-1709003.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
        id: meetupId,
        title: 'First Meetup',
        address: 'Billford Stret, Minnesota',
        description: 'This is the first event',
      },
    },
  };
}

export default MeetupDetails;
