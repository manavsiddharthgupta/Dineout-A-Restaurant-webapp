import SubTitle from "../ui/CustomSubTitle";
import Title from "../ui/CustomTitle";
import Button from "./Button";

const BookTable = (props) => {
  return (
    <section
      ref={props.scr.bookTable}
      className="mt-28 py-8 px-5 sm:px-[5%] lg:px-[15%] block sm:flex sm:items-center sm:justify-between"
    >
      <div className="sm:w-3/5">
        <Title>Book table</Title>
        <SubTitle>
          Book table for Private Dinning, BirthDay Party and Wedding Anniversery
        </SubTitle>
        <p className="mt-5 font-light">
          Reservations available , we reserve a number of tables for walk-in
          guests on a first-come, first-served basis. The safety and well being
          of our team, guests, and community is always our top priority.
        </p>
      </div>
      <div className="mt-5 sm:mt-0">
        <Button
          onClick={() => {
            props.onsetBookFormVisibility(true);
          }}
          className="px-4 py-2 w-fit h-fit"
        >
          Reservation
        </Button>
      </div>
    </section>
  );
};
export default BookTable;
