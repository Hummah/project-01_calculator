// takky user bahar sy value put kr sky is liye string empty rakhty hain.
let string="";
// sab buttons ko kia hai kiu k hum ny sab lk name same likhy thy
let buttons = document.querySelectorAll(".btn");
// we converted button from array sepretaly and run for each loop
Array.from(buttons).forEach((button)=>{
button.onclick =(e)=>{
    // conditions
    console.log(e.target.innerHTML)
    
    // e is parameter of button
    if(e.target.innerHTML == "="){
        // function to evaluate
        string=eval(string);
document.querySelector("input").value=string;
// string ko dobara empty krny k liye
string=""
    } 

   else if(e.target.innerHTML == "c"){
       string="";
       document.querySelector("input").value=string;

    } 
   else if(e.target.innerHTML == "M+"){
        string=string*2;
document.querySelector("input").value=string;
string=""

    } 
   else if(e.target.innerHTML == "$"){
       let already=document.querySelector("input").value;
string=already.toString();
document.querySelector("input").value=string.substr(0, string.length-1);
string=document.querySelector("input").value;
    } 
   else if(e.target.innerHTML == "M-"){
        string=string-string;
document.querySelector("input").value=string;
string=""

    } 
    else{

        // console.log(e.target);
        string = string + e.target.innerHTML;
        document.querySelector("input").value=string;
    }
}
});
