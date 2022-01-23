import "./data.js";
import { dates } from "./data.js";

const newDiv = document.createElement("div");
newDiv.className = "timeline-item";

for (let i = 0; i < dates.length; i++) {
  const timeline = document.querySelector(".timeline");
  console.log(dates);
  console.log(i);
  const h2 = document.createElement("h2");
  h2.className = "timeline-item-title";
  h2.textContent = dates[i].title;
  newDiv.appendChild(h2);

  const span = document.createElement("span");
  span.className = "timeline-item-date";
  span.textContent = dates[i].date;
  newDiv.appendChild(span);

  const text = document.createElement("p");
  text.className = "timeline-item-summary";
  text.textContent = dates[i].summary;
  newDiv.appendChild(text);

  const openButton = document.createElement("button");
  openButton.className = "timeline-item-more-info";
  openButton.textContent = "More Info";
  newDiv.appendChild(openButton);
  openButton.addEventListener("click", openModal);

  timeline.appendChild(newDiv);

  function openModal() {
    const modal = document.createElement("div");
    modal.id = "modal-container";
    newDiv.appendChild(modal);

    const date = document.createElement("h3");
    date.id = "modal-date";
    date.textContent = dates[i].date;
    modal.appendChild(date);

    const title = document.createElement("h2");
    title.id = "modal-title";
    title.textContent = dates[i].title;
    modal.appendChild(title);

    const image = document.createElement("img");
    image.id = "modal-image";
    image.src = dates[i].image;
    modal.appendChild(image);

    const info = document.createElement("p");
    info.id = "modal-full-description";
    info.textContent = dates[i].fullDescription;
    modal.appendChild(info);

    const closeButton = document.createElement("button");
    closeButton.id = "modal-close-button";
    closeButton.textContent = "Close";
    modal.appendChild(closeButton);
    closeButton.addEventListener("click", closeModal)
 
  function closeModal() {
    newDiv.removeChild(modal);
  } }
}
