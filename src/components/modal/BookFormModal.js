import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import BackDrop from "./BackDrop";
import Button from "../Button";
import CustomTextField from "../../ui/CustomTextField";
import ErrorMessage from "../../ui/ErrorMessage";
import useInputState from "../useInputState";
export const BookTableForm = () => {
  const {
    value: firstName,
    enteredValueisInvalid: enteredfirstNameisValid,
    onSetValue: onSetFirstName,
    onsetTouched: onSetfirstNameTouched,
    fieldIsValid: firstNamefieldInvalid,
    reset: firstnamereset,
  } = useInputState((value) => {
    return value.trim() !== "";
  });

  const {
    value: lastName,
    enteredValueisInvalid: enteredlastNameisValid,
    onSetValue: onSetLastName,
    onsetTouched: onSetlastNameTouched,
    fieldIsValid: lastNamefieldInvalid,
    reset: lastnamereset,
  } = useInputState((value) => {
    return value.trim() !== "";
  });

  const {
    value: email,
    enteredValueisInvalid: enteredEmailisValid,
    onSetValue: onSetEmail,
    onsetTouched: onSetEmailTouched,
    fieldIsValid: emailfieldInvalid,
    reset: emailreset,
  } = useInputState((value) => {
    return value.includes("@");
  });

  const {
    value: phnNumber,
    enteredValueisInvalid: enteredPhoneisValid,
    onSetValue: onSetPhone,
    onsetTouched: onSetPhoneTouched,
    fieldIsValid: phonefieldInvalid,
    reset: phnreset,
  } = useInputState((value) => {
    return value.trim().length > 9;
  });

  const {
    value: date,
    enteredValueisInvalid: enteredDateisValid,
    onSetValue: onSetDate,
    onsetTouched: onSetDateTouched,
    fieldIsValid: datefieldInvalid,
    reset: datereset,
  } = useInputState((value) => {
    return value.trim() !== "";
  });

  const {
    value: time,
    enteredValueisInvalid: enteredTimeisValid,
    onSetValue: onSetTime,
    onsetTouched: onSetTimeTouched,
    fieldIsValid: timefieldInvalid,
    reset: timereset,
  } = useInputState((value) => {
    return value.trim() !== "";
  });

  const {
    value: person,
    enteredValueisInvalid: enteredPersonisValid,
    onSetValue: onSetPerson,
    onsetTouched: onSetPersonTouched,
    fieldIsValid: personfieldInvalid,
    reset: perreset,
  } = useInputState((value) => {
    return value.trim() !== "";
  });

  let formValidity = false;
  if (
    enteredfirstNameisValid &&
    enteredlastNameisValid &&
    enteredEmailisValid &&
    enteredPhoneisValid &&
    enteredDateisValid &&
    enteredTimeisValid &&
    enteredPersonisValid
  ) {
    formValidity = true;
  }

  console.log(
    firstNamefieldInvalid,
    lastNamefieldInvalid,
    emailfieldInvalid,
    phonefieldInvalid,
    datefieldInvalid,
    timefieldInvalid,
    personfieldInvalid
  );

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (!formValidity) {
          return;
        }
        console.log("submit");
        firstnamereset();
        lastnamereset();
        emailreset();
        phnreset();
        datereset();
        timereset();
        perreset();
      }}
      className="bg-white w-[50%] min-w-[330px] max-h-[500px] fixed top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 z-40 p-8 rounded-lg"
    >
      <div className="flex gap-4">
        <CustomTextField
          className="w-2/4"
          type="text"
          placeholder="First Name"
          onChange={onSetFirstName}
          onBlur={onSetfirstNameTouched}
          value={firstName}
        />
        <CustomTextField
          className="w-2/4"
          type="text"
          placeholder="Last Name"
          onChange={onSetLastName}
          onBlur={onSetlastNameTouched}
          value={lastName}
        />
      </div>
      <div className="flex gap-4 mb-4 py-1">
        <div className="w-2/4">
          {firstNamefieldInvalid && (
            <ErrorMessage>empty firstname</ErrorMessage>
          )}
        </div>
        <div className="w-2/4">
          {lastNamefieldInvalid && <ErrorMessage>empty lastName</ErrorMessage>}
        </div>
      </div>
      <div className="flex gap-4">
        <CustomTextField
          className="w-2/4"
          type="email"
          placeholder="E-Mail"
          onChange={onSetEmail}
          onBlur={onSetEmailTouched}
          value={email}
        />
        <CustomTextField
          className="w-2/4"
          type="tel"
          placeholder="Phone Number"
          onChange={onSetPhone}
          onBlur={onSetPhoneTouched}
          value={phnNumber}
        />
      </div>
      <div className="flex gap-4 mb-4 py-1">
        <div className="w-2/4">
          {emailfieldInvalid && <ErrorMessage>invalid mail</ErrorMessage>}
        </div>
        <div className="w-2/4">
          {phonefieldInvalid && <ErrorMessage>invalid number</ErrorMessage>}
        </div>
      </div>
      <div className="sm:flex-nowrap flex gap-4 flex-wrap">
        <label className="text-xs font-light sm:w-2/4 w-full">
          Reservation Date:
          <CustomTextField
            className="w-full placeholder:text-base"
            type="date"
            onChange={onSetDate}
            onBlur={onSetDateTouched}
            value={date}
          />
        </label>
        <label className="text-xs font-light sm:w-2/4 w-full">
          Reservation Time:
          <CustomTextField
            className="w-full placeholder:text-base"
            type="time"
            onChange={onSetTime}
            onBlur={onSetTimeTouched}
            value={time}
          />
        </label>
      </div>
      <div className="flex gap-4 mb-4 py-1">
        <div className="w-2/4">
          {datefieldInvalid && <ErrorMessage>invalid date</ErrorMessage>}
        </div>
        <div className="w-2/4">
          {timefieldInvalid && <ErrorMessage>invalid time</ErrorMessage>}
        </div>
      </div>
      <div>
        <CustomTextField
          className="w-full"
          type="number"
          placeholder="How many person you will be with ?"
          onChange={onSetPerson}
          onBlur={onSetPersonTouched}
          value={person}
        />
      </div>
      <div className="mb-4 py-1">
        {personfieldInvalid && (
          <ErrorMessage>invalid number of person</ErrorMessage>
        )}
      </div>
      <Button type="submit" className="px-4 py-2">
        Book it !
      </Button>
    </form>
  );
};

const BookFormModal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <BackDrop
          onClick={() => {
            props.onsetBookFormVisibility(false);
          }}
        />,
        document.getElementById("bookForm-modal")
      )}
      {ReactDOM.createPortal(
        <BookTableForm />,
        document.getElementById("bookForm-modal")
      )}
    </Fragment>
  );
};
export default BookFormModal;
