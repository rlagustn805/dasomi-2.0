import Footer from '@/components/footer/Footer';
import Header from '@/components/header/Header';
import Title from '@/components/main/title/Title';
import Description from '@/components/main/description/Description';
import Dormitory from '@/components/main/dormitory/Dormitory';

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <Title />
        <Dormitory />
        <Description />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
