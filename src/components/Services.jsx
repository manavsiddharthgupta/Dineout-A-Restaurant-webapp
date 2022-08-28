import SubTitle from "../ui/CustomSubTitle";
import Title from "../ui/CustomTitle";
import Offering from "../ui/Offering";
import {
  faUtensils,
  faTruckFast,
  faChampagneGlasses,
} from "@fortawesome/free-solid-svg-icons";

const allOfferings = [
  {
    service_icon: faUtensils,
    service_headline: "Excellence food",
    service_desc:
      "We offer our clients excellent quality services for many years, with the best and delicious food in the city. Our menu is meant to be shared...and create a family style dining experience.",
  },
  {
    service_icon: faTruckFast,
    service_headline: "Fast Delivery",
    service_desc:
      "We offer our clients excellent quality services for many years, with the best and delicious food in the city. Our menu is meant to be shared...and create a family style dining experience. ",
  },
  {
    service_icon: faChampagneGlasses,
    service_headline: "Reservation",
    service_desc:
      "Our private dining team will work closely with you to customize a menu for your event. We believe in making dining experience better and memorable paired with thoughtful hospitality.",
  },
];
const Services = (props) => {
  return (
    <section
      ref={props.scr.services}
      className="mt-28 text-center sm:px-[5%] lg:px-[13%] py-4"
    >
      <Title>Offerings</Title>
      <SubTitle>Our amazing services</SubTitle>
      <div className="flex flex-col lg:flex-row mb-8">
        {allOfferings.map((eachService, index) => (
          <Offering
            icn={eachService.service_icon}
            title={eachService.service_headline}
            descpt={eachService.service_desc}
            key={index}
          />
        ))}
      </div>
    </section>
  );
};
export default Services;
