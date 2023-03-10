"use strict";
import tabs from "./modules/tabs";
import timer from "./modules/timer";
import modal from "./modules/modal";
import slider from "./modules/slider";
import calc from "./modules/calc";
import forms from "./modules/forms";
import cards from "./modules/cards";
import { openModal } from "./modules/modal";

window.addEventListener("DOMContentLoaded", () => {
  const modalTimerId = setTimeout(
    () => openModal(".modal", modalTimerId),
    15000
  );

  tabs(
    ".tabheader__item",
    ".tabcontent",
    ".tabheader__items",
    ".arr",
    "tabheader__item_active"
  );
  timer(".timer", "2023-06-22");
  modal("[data-modal]", ".modal", modalTimerId);
  slider({
    container: ".offer__slider",
    nextArrow: ".offer__slider-next",
    prevArrow: ".offer__slider-prev",
    totalCounter: "#total",
    currentCounter: "#current",
    wrapper: ".offer__slider-wrapper",
    field: ".offer__slider-inner",
  });
  calc();
  forms("form", modalTimerId);
  cards();
});
