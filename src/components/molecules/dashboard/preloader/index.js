import React from "react";

export default function index() {
  let enabled = false;
  if (!localStorage.firstSignin) {
    localStorage.firstSignin = true;
    enabled = true;
    setTimeout(function () {
      const d = document;
      var preloader = d.querySelector(".preloader");
      if (preloader) {
        setTimeout(function () {
          preloader.classList.add("show");

          setTimeout(function () {
            if (localStorage.forceSignout) {
              localStorage.removeItem("forceSignout");
            } else {
              d.querySelector(".loader-element").classList.add("hide");
            }
          }, 200);
        }, 1000);
      }
    }, 100);
  }

  return enabled ? (
    <div className="preloader bg-soft flex-column justify-content-center align-items-center">
      <img
        className="loader-element animate__animated animate__jackInTheBox"
        src="../../assets/img/logo.svg"
        height="60"
        alt="Car & Driver"
      />
    </div>
  ) : (
    <div></div>
  );
}
