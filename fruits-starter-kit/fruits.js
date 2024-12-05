let fruits = [{ name: "Orange", image: "orange.jpg" },
            { name: "Kiwi", image: "kiwi.jpg" },
            { name: "Banane", image: "banane.jpg" },
            { name: "Peche", image: "peche.jpg" },
            { name: "Cerise", image: "cerise.jpg" }];


let button = document.getElementById("fruits");
let imageContainer = document.getElementById("imageFruit");
let SelectedImage = "";

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
        SelectedImage = `url(${fruit.image})`;
        imageContainer.style.backgroundImage = SelectedImage;
        
    });

    div.addEventListener("mouseout", () => {
        
        imageContainer.style.backgroundImage = SelectedImage ;
        
        
    });

    div.addEventListener("mouseover", () => {
        imageContainer.style.backgroundImage = `url(${fruit.image})`;
    });

    

    button.appendChild(div);

});