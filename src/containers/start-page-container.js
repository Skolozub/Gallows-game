import { useState } from "react";
import { history } from "..";

export const StartPageContainer = ({ component: Component, render }) => {
  const [name, setName] = useState("");

  const getName = e => setName(e.currentTarget.value);

  const goNextStep = linkTo => {
    localStorage.setItem("name", name);
    history.push(linkTo);
  };

  if (Component) return <Component {...{ name, getName, goNextStep }} />;
  return render({ name, getName, goNextStep });
};
