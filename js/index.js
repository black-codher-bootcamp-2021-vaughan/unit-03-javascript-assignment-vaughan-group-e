import './data.js' 
import { dates } from './data.js'

const newDiv = document.createElement("div");
newDiv.className = 'timeline-item';


for(let i = 0; i < dates.length; i++) {

    const timeline = document.querySelector(".timeline");
    console.log(dates)
    console.log(i)
    const h2 = document.createElement("h2")
    h2.className = 'timeline-item-title'
    h2.textContent = dates[i].title
    newDiv.appendChild(h2)


    const span = document.createElement("span")
    span.className = 'timeline-item-date'
    span.textContent = dates[i].date 
    newDiv.appendChild(span)

    const text = document.createElement("p")
    text.className = 'timeline-item-summary'
    text.textContent = dates[i].summary
    newDiv.appendChild(text)

    const info = document.createElement("info")
    info.className = 'timeline-item-more-info'
    info.textContent = dates[i].fullDescription
    newDiv.appendChild(info)

    timeline.appendChild(newDiv);
}
