const baseURL = "https://databases-done-right.github.io/wdd230/chamber/";
//const baseURL = "http://127.0.0.1:5500/chamber/";
const membersURL = baseURL + "data/members.json";

async function getMembers() {
    const theResponse = await fetch(membersURL);
    const data = await theResponse.json();
    //console.log(data);
    displayMembers(data.members);
}

const displayMembers = (members) => {
    const container = document.querySelector("#memberCards");
    members.forEach((member) => {
        const div = document.createElement("div");
        const h3 = document.createElement("h3");
        h3.textContent = member.name;
        div.appendChild(h3);
        const logo = document.createElement("img");
        logo.setAttribute("src", baseURL + member.imageURL);
        logo.setAttribute("alt", member.name);
        logo.setAttribute("loading", "lazy");
        logo.setAttribute("width", "300");
        logo.setAttribute("height", "200");
        div.appendChild(logo);
        const divAddress = document.createElement("div");
        divAddress.textContent = member.address;
        div.appendChild(divAddress);
        const divPhone = document.createElement("div");
        divPhone.textContent = member.phoneNumber;
        div.appendChild(divPhone);
        const a = document.createElement("a");
        a.textContent = member.websiteURL;
        a.href = member.websiteURL;
        div.appendChild(a);
        const p = document.createElement("p");
        p.textContent = member.info;
        div.appendChild(p);
        const hours = document.createElement("div");
        hours.textContent = `Open: ${member.hours}`;
        div.appendChild(hours);
        container.appendChild(div);
    });
}

getMembers();