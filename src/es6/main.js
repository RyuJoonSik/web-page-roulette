"use strict";
const NAV_LIST = document.getElementById(`navList`);
const H2S = document.getElementsByTagName(`h2`);
const H2S_LENGTH = H2S.length;

for (let i = 0; i < H2S_LENGTH; i += 1) {
  const LI = document.createElement(`li`);
  LI.className = `navigation__list`;

  if (i === H2S_LENGTH - 1) {
    LI.style.borderBottom = "none";
  }

  const BUTTON = document.createElement(`button`);
  BUTTON.className = `navigation__title`;

  const SPAN = document.createElement(`span`);
  SPAN.textContent = H2S[i].innerText;

  let parentEl = H2S[i].parentNode;
  for (; parentEl.nodeName !== `SECTION`; parentEl = parentEl.parentNode);

  const H3S = document.querySelectorAll(`.${parentEl.className} h3`);
  const UL = document.createElement(`ul`);
  UL.className = `navigation__lists-sub`;

  const H3S_LENGTH = H3S.length;
  for (let j = 0; j < H3S_LENGTH; j += 1) {
    const LI = document.createElement(`li`);
    LI.className = `navigation__list-sub`;

    if (j === H3S_LENGTH - 1) {
      LI.style.borderBottom = "none";
    }

    const A = document.createElement(`a`);
    A.href = `#${H3S[j].id}`;
    A.className = `navigation__title-sub`;
    A.title = `이동`;
    A.textContent = H3S[j].innerText;

    LI.appendChild(A);
    UL.appendChild(LI);
  }

  BUTTON.appendChild(SPAN);
  LI.appendChild(BUTTON);
  LI.appendChild(UL);
  NAV_LIST.appendChild(LI);
}

NAV_LIST.addEventListener(`click`, (e) => {
  if (e.target.nodeName !== `BUTTON`) {
    return;
  }

  e.target.classList.toggle(`navigation__title--clicked`);
  e.target.nextSibling.classList.toggle(`navigation__lists-sub--on`);
});

NAV_LIST.addEventListener(`mouseout`, (e) => {
  if (e.target.nodeName !== `BUTTON`) {
    return;
  }
});

const BUTTON_HIDE_NAV = document.getElementById(`btnHideNav`);

BUTTON_HIDE_NAV.addEventListener(`click`, (e) => {
  e.target.classList.toggle(`button-hide--clicked`);
  e.target.classList.toggle(`button-hide--nav-clicked`);

  const NAV_BAR = document.getElementById(`nav`);

  NAV_BAR.classList.toggle(`navigation--show`);
});
