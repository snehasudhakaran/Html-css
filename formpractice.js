let details={
    first:"",
    second :"",
}
let name=[]

function add(){
    details = new Object;
    details.first = document.getElementById("first").value;
    details.second = document.getElementById("second").value;

    
    // console.log(details)
    let push = name.find((val, i , arr)=>val.first==details.first)
    // console.log(push)
    if (!push){
        name.push(details)
    }
    else{
        alert("already taken , it's a duplicate value")
    }
    console.log(name)

    reset();
}
function reset(){
    document.getElementById("first").value =null;
     document.getElementById("second").value =null;
}