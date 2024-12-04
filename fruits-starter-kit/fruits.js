let fruits = [{ name: "Orange", image: "orange.jpg" },
{ name: "Kiwi", image: "kiwi.jpg" },
{ name: "Banane", image: "banane.jpg" },
{ name: "Peche", image: "peche.jpg" },
{ name: "Cerise", image: "cerise.jpg" }];


let button = document.getElementById("fruits");
let imageContainer = document.getElementById("imageFruit");



fruits.forEach((fruit) => {
    console.log(fruit.name);
    let div = document.createElement("div");
    div.textContent = fruit.name;
    div.classList.add('boutonFruits');

    div.addEventListener("click", () => {
        let allButtons = document.querySelectorAll('.boutonFruits');
        allButtons.forEach(btn => {
            btn.style.backgroundColor = 'gray';
        });
        div.style.backgroundColor = "red"
        imageContainer.style.backgroundImage = `url(${fruit.image})`;
    });

    div.addEventListener("mouseout", () => {
        let allButtons = document.querySelectorAll('.boutonFruits');

    });

    div.addEventListener("mouseover", () => {
        let allButtons = document.querySelectorAll('.boutonFruits');

    });


    button.appendChild(div);
});