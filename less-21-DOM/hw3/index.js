export function getTitle() {
  const titleElem = document.querySelector(".title").textContent;
  console.log(titleElem);
  return titleElem;
}

getTitle();

export function getDescription() {
  const desElem = document.querySelector(".about").innerText;
  console.log(desElem);
  return desElem;
}

getDescription();

export function getPlans() {
  const planElem = document.querySelector(".plans").innerHTML;
  console.log(planElem);
  return planElem;
}

getPlans();

export function getGoal() {
  const goalElem = document.querySelector(".plans").outerHTML;
  console.log(goalElem);
  return goalElem;
}

getGoal();