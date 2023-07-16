const baseURL = "https://databases-done-right.github.io/wdd230/";
//const baseURL = "http://127.0.0.1:5500/";
const linksURL = baseURL + "data/links.json";

async function getLinks() {
    const theResponse = await fetch(linksURL);
    const data = await theResponse.json();
    //console.log(data);
    displayLinks(data.weeks);
}

const displayLinks = (weeks) => {
    const ul = document.querySelector("#learningActivities");
    weeks.forEach((week) => {
        const li = document.createElement("li");
        li.textContent = `${week.week}: `;
        week.links.forEach((link) => {
            if(li.textContent.length > 9) {
                const span = document.createElement("span");
                span.textContent = " | ";
                li.appendChild(span);
            }
            const a = document.createElement("a");
            a.textContent = link.title;
            a.href = link.url;
            li.appendChild(a);
        });
        ul.appendChild(li);
    });
}

getLinks();