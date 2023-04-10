const help = {
    yes:{
        text: "Anything to add ?"
    },maybe:{
        text: "Tell us, what we could improve ?"
    },not:{
        text: "Tell us, what went wrong ?"
    }
};

/* const help = [
    "Anything to add ?",
    "Tell us, what we could improve ?",
    "Tell us, what went wrong ?"
]; */

let Area, selected, info, text_content;

Area = document.getElementsByTagName("button");
for (let i = 0; i < Area.length; i++) {
  Area[i].addEventListener("click", () => {
    selected = Area[i].getAttribute("title");
    show_feed(selected);
  });
}

function show_feed(selected){
    info = help[selected];
    text_content = info["text"];

    document.getElementById("form").innerHTML = "";

    const input = document.createElement("input");
    input.setAttribute("type", "text");
    input.setAttribute("placeholder", text_content);
    input.setAttribute("name", "username");
    input.setAttribute("id", "input_1");
    input.classList.add("input-1");

    const button = document.createElement("button");
    button.textContent = "submit";
    button.setAttribute("type", "button");
    button.classList.add("btn-2");
    button.setAttribute("onclick", "feed()");

    const container = document.createElement("div");
    container.classList.add("konter");
    container.appendChild(input);
    container.appendChild(button);

    const form = document.querySelector("form");
    form.appendChild(container);
}

function feed() {
    const feed_back = document.getElementById("input_1").value;
    document.getElementById("section_1").innerHTML = "";
    document.getElementById("section_1").style.padding = "0";


    
    if (feed_back.trim() === '') {
        alert("Please enter some feedback");
    } else {
        const h3 = document.createElement("h3");
        h3.textContent = "Thanks for your feedback 👍";

        const box = document.createElement("div");
        box.appendChild(h3);
        box.classList.add("box");

        document.getElementById("section_1").appendChild(box);
        //  document.body.appendChild(box);
    }
}
  