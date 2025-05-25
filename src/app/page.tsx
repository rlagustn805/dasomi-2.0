import Header from '@/components/Header';
import SectionOne from '@/components/main/SectionOne';

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">{<SectionOne />}</main>
    </div>
  );
};

export default Home;
