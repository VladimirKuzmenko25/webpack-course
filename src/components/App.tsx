import { Suspense, useState } from "react";
import classes from "./App.module.scss";
import { Link, Outlet } from "react-router-dom";
import avatarPng from "@/assets/avatar.png";
import avatarJpg from "@/assets/avatar.jpg";
import Calendar from "@/assets/calendar.svg";

function TODO() {
  TODO2();
}

function TODO2() {
  throw new Error("oshibka");
}

export const App = () => {
  const [count, setCount] = useState<number>(0);

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => prev - 1);
  const throwError = () => TODO();

  // TODO("asd");

  // if (__PLATFORM__ === "desktop") {
  //   return <div>ISDESKTOPPLATFORM</div>;
  // }
  // if (__PLATFORM__ === "mobile") {
  //   return <div>ISMOBILEPLATFORM</div>;
  // }

  return (
    <div data-testId={"App.DataTestId"}>
      <h1 data-testId={"Platform"}>Platform={__PLATFORM__}</h1>
      <div>
        <img width={100} height={100} src={avatarPng} alt="avatar"></img>
        <img width={100} height={100} src={avatarJpg} alt="avatar"></img>
      </div>
      <div>
        <Calendar width={50} height={50} />
      </div>
      <div>
        <Link to={"/about"}>about</Link>
        <br />
        <Link to={"/shop"}>shop</Link>
      </div>
      <h1 className={classes.h1}>{count}</h1>
      <button className={classes.button} onClick={throwError}>
        <span>increment</span>
      </button>
      <button onClick={decrement}>decrement</button>
      <Suspense fallback={"Loading..."}>
        <Outlet />
      </Suspense>
    </div>
  );
};
