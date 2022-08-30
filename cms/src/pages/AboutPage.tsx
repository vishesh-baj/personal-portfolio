import Navbar from "../components/Navbar";

type Props = {};

const AboutPage = (props: Props) => {
  return (
    <div>
      <Navbar />
      <div className="w-screen h-screen flex flex-col gap-10 justify-center items-center">
        <h1 className="text-8xl uppercase font-extrabold">About Page</h1>
        <button className=" btn btn-lg btn-accent">KNOW MORE</button>
      </div>
    </div>
  );
};

export default AboutPage;
