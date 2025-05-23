import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import PageComponents from '../PageComponents';

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(
        locale ?? 'en',
        [
          'common',
          'header',
          'hero',
          'about',
          'offers',
          'menu',
          'chefs',
          'blogs',
          'reservation',
          'footer'
        ],
        null,
        ['en', 'fr']
      ))
    }
  };
};

function HomePage() {
  return <PageComponents />;
}
export default HomePage;
