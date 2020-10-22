import React from "react";

export default function index() {
  return (
    <div className="preloader bg-soft flex-column justify-content-center align-items-center">
      <img
        className="loader-element animate__animated animate__jackInTheBox"
        src="../../assets/img/logo.svg"
        height="60"
        alt="Car & Driver"
      />
    </div>
  );
}
