class CreatePencil {
    constructor(name, price, color, company) {
        this.name = name;
        this.price = price;
        this.color = color;
        this.company = company;
    }

    erase() {
        document.body.querySelectorAll("h1").forEach((elem) => {
            if( elem.style.color === this.color) {
                elem.remove();
            }
        });
    }
    write(text) {
        let h1 = document.createElement("h1");
        h1.textContent = text;
        h1.style.color = this.color;
        document.body.appendChild(h1);
    }
}

let pencil1 = new CreatePencil("Nataraj", 10, "red", "Nataraj");
let pencil2 = new CreatePencil("Apsara", 15, "black", "Apsara");