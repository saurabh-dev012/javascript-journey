// closures

function countForme(){
    let c = 0;
    return function(){
        c++;
        console.log(c);
    };
}

let fnc1 = countForme();   // has its own c variable
fnc1();  //1
fnc1();  //2
fnc1();  //3


let fnc2 = countForme();  // also has its own c variable
fnc2();  //1
fnc2();  //2
fnc2();  //3
fnc2();  //4