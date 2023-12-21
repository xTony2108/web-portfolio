import { Hero } from "../components/Hero";
import { Navbar } from "../components/Navbar";

export const Home = () => {
  return (
    <>
      <div className="flex">
        <Navbar />
        <div className="flex flex-col justify-center w-full">
          <Hero />
          <div className="h-96">a</div>
        </div>
      </div>
    </>
  );
};
