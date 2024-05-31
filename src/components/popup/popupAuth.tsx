import React from "react";
import { PopupLogin } from "./PopupLogin";
import { PopupRegistration } from "./PopupRegistration";

interface Prosp {
  open: boolean;
  setOpen: (value: boolean) => void;
}

export const PopupAuth: React.FC<Prosp> = ({ setOpen }) => {
  const [selector, setSelector] = React.useState(false);

  return (
    <>
    <div></div>
      {selector ? (
        <PopupRegistration setOpen={setOpen} setSelector={setSelector} selector={selector}/>
      ) : (
        <PopupLogin setOpen={setOpen} setSelector={setSelector} selector={selector}/>
      )}
    </>
  );
};
