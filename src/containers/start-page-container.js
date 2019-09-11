import { useState } from "react";
import { history } from "..";

export const StartPageContainer = ({ render }) => {
  const [name, setName] = useState("");

  const getName = e => setName(e.currentTarget.value);

  const goNextStep = linkTo => {
    localStorage.setItem("name", name);
    history.push(linkTo);
  };

  return render({ name, getName, goNextStep });
};
