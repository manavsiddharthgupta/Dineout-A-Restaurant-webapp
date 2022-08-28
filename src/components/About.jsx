import restaurantImgAbt from "../images/restaurant_img2.jpg";
import Button from "./Button";
import Title from "../ui/CustomTitle";
import SubTitle from "../ui/CustomSubTitle";

const About = (props) => {
  return (
    <section
      ref={props.scr.about}
      className="mt-28 py-8 px-5 sm:px-[5%] lg:px-[15%] sm:flex sm:flex-row-reverse items-center justify-between"
    >
      <div className="px-6 sm:px-8 sm:w-2/4 text-center sm:text-left">
        <Title>About us</Title>
        <SubTitle>Nothing brings people together like good food.</SubTitle>
        <p className="sm:px-0 px-[6%] mt-5 lg:pr-12 font-light">
          We cook the best food in the entire city, with excellent customer
          service, the best meals and at the best price, visit us.
        </p>
        <Button className="px-4 py-2 mt-6">Explore history</Button>
      </div>
      <div className="mt-12 h-[400px] sm:mt-0 sm:p-0">
        <img
          className="mx-auto h-full rounded-xl"
          src={restaurantImgAbt}
          alt="restaurant_AbtImg"
        />
      </div>
    </section>
  );
};

export default About;
