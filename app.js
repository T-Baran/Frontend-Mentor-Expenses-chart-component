const barEl = document.querySelector(".bars");
const barTitle = document.querySelector(".bar-tags");

async function printItems() {
  const response = await fetch("data.json");
  const data = await response.json();
  console.log(data);
  const amounts = [];
  // getting the max amount value from json file
  for (let i = 0; i < data.length; i++) {
    amounts.push(data[i].amount);
  }
  const maxAmount = Math.max(...amounts);
  //creating bars
  for (let i = 0; i < data.length; i++) {
    const divContainer = document.createElement("div");
    divContainer.classList.add("itemContainer");
    const divHover = document.createElement("div");
    divHover.classList.add("itemHover");
    divHover.classList.add("dNone");
    const div = document.createElement("div");
    div.classList.add("item");
    //if max value make color cyan
    if (data[i].amount == maxAmount) {
      div.style.backgroundColor = "hsl(186, 34%, 60%)";
    }
    //calculate height of bars based on percentage
    const heightValue = (data[i].amount / maxAmount) * 100;

    div.style.height = `${heightValue}%`;
    divHover.textContent = data[i].amount;
    div.appendChild(divHover);
    divContainer.appendChild(div);
    //below are days
    const p = document.createElement("p");
    p.textContent = data[i].day;
    divContainer.appendChild(p);
    barEl.appendChild(divContainer);
  }
  const barItem = document.querySelectorAll(".item");
  const barItemHover = document.querySelectorAll(".itemHover");
  console.log(barItem);

  //adding queryselectors for hover
  for (let i = 0; i < barItem.length; i++) {
    barItem[i].addEventListener("mouseenter", () => {
      barItemHover[i].classList.remove("dNone");
      barItem[i].style.filter = "brightness(1.2)";
    });
    barItem[i].addEventListener("mouseout", () => {
      barItemHover[i].classList.add("dNone");
      barItem[i].style.filter = "brightness(1)";
    });
  }
}
printItems();
