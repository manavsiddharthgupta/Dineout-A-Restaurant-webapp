import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { TextField } from "@mui/material";
import Button from "./Button";

const Footer = () => {
  const [mailID, setmailID] = useState("");
  return (
    <footer className="mt-28 pt-8 pb-1 px-5 sm:px-[5%] lg:px-[15%]">
      <div className="flex justify-between flex-wrap">
        <div className="my-4 pr-4">
          <p className="mb-2 text-lg font-bold">Address</p>
          <div className="text-sm text-[#069C54]">
            <p>kp-12, Kiit</p>
            <p className="my-2">Bhubaneshwar, Odisha</p>
            <a className="hover:text-[#048654]" href="mailto: abc@example.com">
              abc@example.com
            </a>
          </div>
        </div>
        <div className="my-4 pr-4">
          <p className="mb-2 text-lg font-bold">Socials</p>
          <FontAwesomeIcon
            className="text-[#069C54] hover:text-[#048654] cursor-pointer"
            icon={faTwitter}
            size="2x"
          />
          <FontAwesomeIcon
            className="text-[#069C54] hover:text-[#048654] mx-4 cursor-pointer"
            size="2x"
            icon={faFacebook}
          />
          <FontAwesomeIcon
            className="text-[#069C54] hover:text-[#048654] cursor-pointer"
            icon={faInstagram}
            size="2x"
          />
        </div>
        <div className="my-4">
          <p className="mb-2 text-lg font-bold">Subscribe Newsletter</p>
          <div>
            <div className="flex">
              <TextField
                type="email"
                size="small"
                id="filled-basic"
                label="E-mail"
                variant="filled"
                value={mailID}
                onChange={(e) => {
                  setmailID(e.target.value);
                }}
              />
              <Button
                onClick={() => {
                  console.log(mailID);
                }}
                className="px-4 rounded-sm"
              >
                <FontAwesomeIcon icon={faPaperPlane} />
              </Button>
            </div>
            <p className="max-w-[267px] text-sm mt-4 font-extralight">
              Subscribe newsletter to get all updates about discount and offers.
            </p>
          </div>
        </div>
      </div>
      <p className="text-center text-xs font-light tracking-wide mt-8">
        © DineOut 2022. All right reserved
      </p>
    </footer>
  );
};
export default Footer;
