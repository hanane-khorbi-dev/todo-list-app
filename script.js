/*let task="Study Javascript";
const completed=false;
let tasksCount=3;

console.log(task);
console.log(completed);
console.log(tasksCount);
///-----------------TYPEOF-----------
let city="Berlin";
let age=22;
let isLearning=true;

console.log(typeof city);
console.log(typeof age);
console.log(typeof isLearning);
//---------------------ARETHMETIC OPERATORS----------
let price=100;
let quantity=3;

console.log(price*quantity);
console.log(price-quantity);
console.log(price+quantity);
console.log(price/quantity);

//-----------------MODULUS----------->

console.log(10%3);


let number=10;
console.log(number%2);

//---------------COMPARISON OPERATORS-------->

let TasksCount=5;
console.log(TasksCount>3);
console.log(TasksCount<3);
console.log(TasksCount===5);
console.log(TasksCount!==5);

//-------------HMMMM------
console.log(5=="5");
console.log(5==="5");

//----------LOGICAL OPERATORS-------------
let nummer=22;
let hasAccount=true;

console.log(nummer>18&&hasAccount);

let mummer=16;
let schongemacht=true;
console.log(mummer>18&&schongemacht);


let num=16;
let done=true;

console.log(num>22||done);

 let isCompleted=true;
 console.log(!isCompleted);

//---------------------EXERCICE------------

let alter=22;
let activ=false;
let hubsh=true;

console.log(alter>18 &&activ);
console.log(alter>18 || activ);
console.log(!hubsh);  */


/*
let task="Study German";
if (task !==""){
    console.log("task added");
}
else {
    console.log("please add the task");
}
*/

/*
let task="";
if(task!==""){
    console.log("task added")
}
else{
    console.log("add your task")
}

*/
/*--------------
let task=7;
if(task===0){console.log("No Tasks");}
else if (task<5){ console.log("a few tasks");}
else {
    console.log("Many tasks");
} */








    /*

//--------------------FUNCTIONs----------- 

function sayhello(){
    console.log ("HELLO");
}
sayhello();

function study(){
    console.log("I am learning");

}
study();
study();


//----------PARAMETERS----------

function addTask(task){
    console.log(task)
}
addTask("shopping");
addTask("study jabvascript");


function greet(name){
    console.log("Hello " +name);
}
greet("hanane");
greet("salma"); //-- salma anad hanane are the arguments(the infos that we give to the parameters)

//--------RETURN-------------

function calculateTotal(Price,Quantity){
           
    return Price*Quantity ; }  // result of calculatetotal is(10*3 ) price *quantity as the retorn told us 

    let result=calculateTotal(10,3); // now we gave the result the value of calculatetotal

    console.log(result);

    ///exercice
    function calculateAge(today,birthday){
        return today-birthday ;
    }
    let Result=calculateAge(2026,2004);
    console.log(Result);
/// function with PARAMETER and without 
        //1 without
       
function sayHello(){
    console.log("Hello"); // function without paraneter receive no informations its just simple
}
sayHello();


       //2 with PARAMETER 

function sayhi(name){
    console.log("HI may name is "+name); // function with parameter need informations like name ,age,birthday,number....
}
sayhi("hanane");
sayhi("salma");


///another example 

function introduce(name,age){
    console.log("my name is "+name +" and i am "+age+" years old");
}
introduce("sarah",22);
introduce("Adam",13);   // we type the function only one time but use it with different informations and many times
 

function double(number){
     return number*2 ;
}
let x=double(5);
let Y=double(10);

let total=x+Y;
let esult=x*Y;
 console.log(x);
 console.log(Y);
 console.log(total);
 console.log(esult); */



/*
 function addTask(tasksname){
     console.log("new task: "+tasksname);
 }
 addTask("Learn Javascript");
 addTask("Shopping");
 addTask("Practice English");
*/





//-------LOCALSTORAGE w JSON.stringify() w JSON.parse w setItem("") w getItem("")

 let tasks =[];
 let savedtasks=localStorage.getItem("tasks"); //hna jbdna l items li khbina f local storage
  tasks = JSON.parse(savedtasks);// JSON.parse() kst7ewel l element mn string l array. bach nkhdmo 3liha 
  let myInput = 
document.getElementById("TaskInput"); 
  let taskButton =
document.getElementById("addButton");
  let myList =
document.getElementById("taskList");
           
           function createTask(item){
            let newTask= document.createElement("li");
            
           
            let taskText = document.createElement("span");
     taskText.textContent= item;
     newTask.appendChild(taskText);

     let editButton =
     document.createElement("button");
     editButton.textContent = "Edit"; editButton.classList.add("edit-btn");
     newTask.appendChild(editButton);

     editButton.addEventListener("click",function(){
       /* let updatedText = prompt("Edit your task:", taskText.textContent );

          if(updatedText!== null  && updatedText.trim() !=="" ){ // null kat3ni khawi makayn hta ktba w "" kat3ni kayn string walakin khawi
            taskText.textContent= updatedText;*/

            let editInput= document.createElement("input");
            editInput.value = taskText.textContent;
            taskText.replaceWith(editInput),
            editInput.focus();

            let savebutton=
            document.createElement("button");
            savebutton.textContent= "save";
            editButton.after(savebutton);

            

            savebutton.addEventListener("click",function(){
                if(editInput.value.trim()===""){
                    return;
                }


                let updatedText =editInput.value;
                let oldtext= taskText.textContent;
                let taskindex=tasks.indexOf(oldtext);
                tasks[taskindex] = updatedText;
                taskText.textContent=updatedText;
                localStorage.setItem("tasks",JSON.stringify(tasks));
                editInput.replaceWith(taskText);
                savebutton.remove();
            })
            let cancelbutton = document.createElement("button");
            cancelbutton.textContent = "Cancel";
            editButton.replaceWith(cancelbutton);
            cancelbutton.addEventListener("click",function(){
                editInput.replaceWith(taskText);
                savebutton.remove();
                cancelbutton.replaceWith(editButton);
            })

          } )
        
     

     let deleteButton =   // all this should be in the taskbutton function cz the li work and appear  when the user use the taskbutton 
    document.createElement("button");
    deleteButton.textContent="delete"; deleteButton.classList.add("delete-btn");
        newTask.appendChild(deleteButton); 

             deleteButton.addEventListener("click",function(){   // so whenever the user click the task get removed 
        newTask.remove();
    })

    let doneButton = document.createElement("button");
    doneButton.textContent = "Done"; doneButton.classList.add("done-btn");
    newTask.appendChild(doneButton);

    doneButton.addEventListener("click",function(){     //-------------------TOGGLE and change color
        if(newTask.style.textDecoration === "line-through"){
            newTask.style.textDecoration = "";
        } else{
            newTask.style.textDecoration = "line-through";
        }
        if (newTask.style.color === ""){
            newTask.style.color ="gray";
        } else{ newTask.style.color= "";

        }
    })
             myList.appendChild(newTask);

           }

   tasks.forEach(function(item){
           createTask(item);
   });
//getElmementbyId

    //let myInput = 
document.getElementById("TaskInput"); 
//console.log("Javascript is working");
//console.log(myInput);
//console.log(myInput.value); IT SHOWS THE VALUE ONLY ONE TIME AND NOT LIVE SO WE NEED THE ADDEVENTLISTENER 
//--Events..

myInput.addEventListener("input",function(){ // THATS HOW WE WILL WATCH THE INPUT S VALUE LIVE
    //console.log("I am typing");
    console.log(myInput.value);
})





//-----BUTTON CLICK EVENT----

//let taskButton =
document.getElementById("addButton");

taskButton.addEventListener("click",function(){
    //console.log(myInput.value);
 if (myInput.value ===""){
    return;
 }             //-------LOCALSTORAGE2step
             tasks.push(myInput.value);  // push katdef elemennt jdid fl ARRAY[] matalan shpopping // as if we tell pls add anything thr user put to the array(tasks)
              //console.log(tasks); 
            localStorage.setItem("tasks",JSON.stringify(tasks)); //setitem katkhezzenha f localstorage // hna json.stringify() kat7ewel array l string bach n9dro ndiroha f localstorage psq local storage kaykhzzen ghir strings"

          createTask(myInput.value);
            myInput.value = ""; // we add it so the input get empty after adding a task to add a new one 
    })

    // myList.appendChild(newTask);  so the li appear on the page web 
   

































