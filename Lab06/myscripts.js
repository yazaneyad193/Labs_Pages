alert("Welcome to Javascript World");

var number = 10;
var pepsi = "12 pepsi"

/*function checklargnumber()
{
    if(number <10)
{
    alert(number);
}else{
    alert("The number is large 10");
}
}
checklargnumber();*/

/*function checkpepsi()
{
    if(pepsi == "12 pepsi")
    {
        alert("Correct");
    }else
    {
        alert("Not correct");
    }
}
checkpepsi();*/

/*function checkparameter(param)
{
    if(param == "Hello")
    {
        alert("Correct " + param);
    }else
    {
        alert("rude");
    }
}
checkparameter("Hello");*/

/*var Mname = prompt("Enter your name");
alert(Mname);*/





function checkNameAndpassword()
{var name = "yazan";
    var myName = window.prompt("Please Insert your Name")
    if(myName == name)
    {
        alert("Correct Name "+ myName );

    }else
    {
        alert("Not correct");
        
    }
}
checkNameAndpassword();

function myFunction() {
    var x = document.getElementById("myDIV");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }