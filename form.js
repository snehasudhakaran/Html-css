// let people=[];


let person={
    fname:"",
    lname:"",
};

let people=[

];

function add(){
    person = new Object;
    person.fname=document.getElementById("fname").value;
    person.lname =document.getElementById("lname").value;

    
    console.log(person)
    people.push(person)
    console.log(people)
    reset();
}
function reset(){
    document.getElementById("fname").value =null;
    document.getElementById("lname").value=null;
}
function add()
