import "./data.js";
import { dates } from "./data.js";

const timeline = document.querySelector(".timeline");

const newDiv = document.createElement("div");
newDiv.className = "timeline-item";

const h2 = document.createElement("h2");
h2.className = "timeline-item-title";
h2.textContent = dates.title;

const span = document.createElement("span");
span.className = "timeline-item-date";
span.textContent = dates.date;

const text = document.createElement("text");
text.className = "timeline-item-summary";
text.textContent = dates.summary;

const info = document.createElement("info");
info.className = "timeline-item-more-info";
info.textContent = dates.fullDescription;

newDiv.appendChild(h2);
newDiv.appendChild(span);
newDiv.appendChild(text);
newDiv.appendChild(info);
timeline.appendChild(newDiv);

for (let i = 0; i < dates.length; i++) {
  newDiv.textContent = dates[i].title + dates[i].summary;
}
