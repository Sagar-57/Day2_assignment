let x = 10; let y = "sagar"; let z = 5;
const a = z + x;
document.getElementById("result").innerHTML ="The value of a is " + a + " . " ;
document.getElementById("name").innerHTML ="Name is:" +y+".";
document.write(10)
//function call

// function sum(a,b){ //function declaration
//   let c = a+b;
//   console.log(c)
// }
const sum = (a,b) => {
    //tasks you want to be inside this function
      let c = a + b;
      console.log(c);
  }
  let u = sum(8,9) //function invokation/function call
function showAlert(){
  window.alert('heavy rain in hyd')
}
function myFunction() {
    document.getElementById("demo").innerHTML = "Hello World";
  }

  function change() {
    let x = document.getElementById("mySelect").value;
    document.getElementById("demo1").innerHTML = "You selected: " + x;
  }
  function key() {
    let x = document.getElementById("fname");
    x.value = x.value.toUpperCase();

  }
  function key1() {
    let x = document.getElementById("fname1");
    x.value = x.value.toLowerCase();
  }
  function form() {
    alert("The form was submitted");
  }
 