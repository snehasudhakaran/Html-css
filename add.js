    
// let array=[]
// count=0
// function add(){  
//     count++;
//     array.push(count)
//     console.log(array)

//     let fullAdded=""
//     for (let i of array){

//     let added="<p>"+i+"</p>"

//     fullAdded=fullAdded+added
//     document.getElementById("added").innerHTML=fullAdded;

//     }

    // document.getElementById("added").innerHTML=fullAdded;
// }
// add()
// add()

// function add(){
//     count++;
//     array.push(count)
//     console.log(array)
// }

let array=[]
let count =0
function add(){
    count++;
    array.push(count)

    addd()
}
function addd(){
    let fullAdded = "";
    for (let i of array){
        let added = "<p>"+i+"</p>"
        fullAdded+=added
        document.getElementById("added").innerHTML =fullAdded
    }
}