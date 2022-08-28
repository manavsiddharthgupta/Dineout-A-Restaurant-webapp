import Button from "./Button";
import restaurantImg from "../images/restaurant_img4.png";

const Home = (props) => {
  return (
    <section
      ref={props.scr.home}
      className="mt-16 px-5 sm:items-center overflow-hidden sm:h-[26rem] sm:flex block lg:px-[15%] sm:px-[5%]"
    >
      <div className="sm:w-2/4 w-full pl-6">
        <h1 className="w-fit font-sea font-extrabold text-7xl text-[#069C54]">
          Dineout
        </h1>
        <p className="font-semibold text-3xl w-[280px] mt-6 leading-10">
          Food that tells a story.
        </p>
        <Button
          onClick={() => {
            window.scrollTo({
              top: props.scr.menu.current.offsetTop,
              behavior: "smooth",
            });
          }}
          className="px-4 py-2 mt-6"
        >
          View Menu
        </Button>
      </div>
      <div className="sm:w-2/4 p-5">
        <img
          className="w-full h-full "
          src={restaurantImg}
          alt="restaurant_img"
        />
      </div>
    </section>
  );
};

export default Home;
