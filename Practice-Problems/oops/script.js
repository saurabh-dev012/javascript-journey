// factories banana seekhna hai , ek baar blueprint do ki object ki kya properties hogi fir naye naye objects with different values bana paayenge >> oops


function CreatePencil( name , price , color , company) {
    this.name = name;
    this.price = price;
    this.color = color;
    this.company = company;
}

let pencil1 = new CreatePencil("Nataraj", 10, "Blue", "Nataraj");  //new >> constructor function
let pencil2 = new CreatePencil("Apsara", 15, "Black", "Apsara");