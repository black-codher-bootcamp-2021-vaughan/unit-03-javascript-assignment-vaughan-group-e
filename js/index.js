import './data.js' 
import { dates } from './data.js'

const newDiv = document.createElement("div");
newDiv.className = 'timeline-item';


for(let i = 0; i < dates.length; i++); {
    const h2 = document.createElement("h2")
h2.className = 'timeline-item-title'
h2.textContent = dates.title


const span = document.createElement("span")
span.className = 'timeline-item-date'
span.textContent = dates.date 


const text = document.createElement("text")
text.className = 'timeline-item-summary'
text.textContent = dates.summary

const info = document.createElement("info")
info.className = 'timeline-item-more-info'
info.textContent = dates.fullDescription

const timeline = document.querySelector(".timeline")

newDiv.textContent = dates[3].date


newDiv.appendChild(h2)
newDiv.appendChild(span)
newDiv.appendChild(text)
newDiv.appendChild(info)
timeline.appendChild(newDiv);
}
