import {
  HomePageHeader,
  HomePageFeatured,
  HomePageServices,
  HomePageNewsletter,
} from '../components';
const HomePage = () => {
  return (
    <main>
      <HomePageHeader />
      <HomePageFeatured />
      <HomePageServices />
      <HomePageNewsletter />
    </main>
  );
};

export default HomePage;
