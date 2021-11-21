const divEl = document.querySelector(".rect_div");
const pEl = document.querySelector(".rect_p");
const spanEl = document.querySelector(".rect_span");
const clearBtn = document.querySelector(".clear-btn");
const removeBtn = document.querySelector(".remove-handlers-btn");
const addBtn = document.querySelector(".attach-handlers-btn");
const eventsListEl = document.querySelector(".events-list");

const logTarget = (text, color) => {
  const createSpanElement = document.createElement("span");
  createSpanElement.style = `color: ${color}; margin-left: 8px;`;
  createSpanElement.textContent = text;
  eventsListEl.appendChild(createSpanElement);
};

const clearField = () => {
  eventsListEl.innerHTML = "";
};

const logGreenDiv = logTarget.bind(null, "DIV", "green");
const logGreenP = logTarget.bind(null, "P", "green");
const logGreenSpan = logTarget.bind(null, "SPAN", "green");

const logGreyDiv = logTarget.bind(null, "DIV", "grey");
const logGrayP = logTarget.bind(null, "P", "grey");
const logGraySpan = logTarget.bind(null, "SPAN", "grey");

const removeHandlers = () => {
  divEl.removeEventListener("click", logGreenDiv);
  pEl.removeEventListener("click", logGreenP);
  spanEl.removeEventListener("click", logGreenSpan);

  divEl.removeEventListener("click", logGreyDiv, true);
  pEl.removeEventListener("click", logGrayP, true);
  spanEl.removeEventListener("click", logGraySpan, true);
};

const attachHandlers = () => {
  divEl.addEventListener("click", logGreenDiv);
  pEl.addEventListener("click", logGreenP);
  spanEl.addEventListener("click", logGreenSpan);

  divEl.addEventListener("click", logGreyDiv, true);
  pEl.addEventListener("click", logGrayP, true);
  spanEl.addEventListener("click", logGraySpan, true);
};

clearBtn.addEventListener("click", clearField);
removeBtn.addEventListener("click", removeHandlers);
addBtn.addEventListener("click", attachHandlers);

document.addEventListener("DOMContentLoaded", () => {
  attachHandlers();
});
