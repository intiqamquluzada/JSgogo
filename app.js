// document.wrtie ile ekrana vermek

// document.writeln("HEllo world <br>");
// document.write(555);


//console.log ile consola vermek 
// console.log("SALAAAM");
// console.log(555);
// console.log(false)
// console.log({"name": "HASAN", "surname": "Hasanov"});

// console.clear();

// let a = 5;
// let b = 8;
// console.log(a-b);

// console.log("a ve b-nin cemi: ", a+b);



// alert
// alert("Sehifede agilli ol atas:!");
// let a = 3;
// let b = 2;
// alert("a ve b-nin toplami = " + (a+b));

// console.log(window);
// console.log(location.port);


//scopelar 3 cur olur : function, global, block
/*

GLOBAL: hecbirseyin daxilinde yazilmayanda umumiyetle js faylimizda olanda global scope olur ve functionlarin, looplarin icinde istifade etmek olur
FUNCTION: funksiya daxilinde elan etdikde ele ancaq hemin funksiyanin daxilinde istifade etmek olur
BLOCK: if, while, for bloklari daxilinde elan olunan deyisenler ucundur.


*/

/*
var function ve block daxilinde elan etmek ucun istifade olunursa function scopedir hemise Azad sekilde elan edirse global scopedir

let/const: ise block scope ozelliyine sahibdirler

*/


//! var ve let/const ferqleri
//1.
// function SayHello(){
//     var salam = "Hello World";
//     if(true){
//         let b = 10;
//         var a = 10;
//     }
    // console.log(b) cunki let -le elan etmisik ve let/const daima block scopedir.
//     console.log(a)
// }

// SayHello();


//2.
// var a = 8;
// var a = 12;
// console.log(a);

//3.
// let a = 3;
// let a = 4;
// console.log(a);

const user = {
    username: "intigam",
    password: "buralardaol"
}

// biz bu deyiseni deyise bilmirik amma icindeki username-nin yaxud password-un deyise bilerik. Meselen: 

user.username = "KadyBorges"
console.log(user);


