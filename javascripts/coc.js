// <p id="p1">Hello World!</p>

// <script>
// document.getElementById("p1").innerHTML = "New text!";
// </script>

// <p>The paragraph above was changed by a script.</p>

// </body>
// </html>

// <!DOCTYPE html>
// <html>
// <body>

// <p>Creating a JavaScript Object.</p>

// <p id="demo"></p>

// <script>
//var person = {
//     firstName: "John",
//     lastName : "Doe",
//     id       : 5566,
//     fullName : function() {
//        return this.firstName + " " + this.lastName;
//     }
// };

// document.getElementById("demo").innerHTML =
// person.firstName + " is " + person.age + " years old.";
// </script>

// </body>
// </html>

var y8 = { name : "Y 8", ID : "#2V9J9JY2C" , numberATTK: 0, noATTK: 0}
var camby = { name : "Camby", ID : "#2V9J9JY2C" , numberATTK: 0, noATTK: 0 }

var apple = { name : "Crispy Apple", ID : "#2V9J9JY2C", numberATTK: 0, noATTK: 0 }
var agit = { name : "agit" ,ID : "#2V9J9JY2C" , numberATTK: 0, noATTK: 0 }

var ya = { name : "Yamann", ID : "#2V9J9JY2C" , numberATTK: 0, noATTK: 0}
var merik = {name : "Merik", ID : "#2V9J9JY2C", numberATTK: 0, noATTK: 0}

var aj = {name : "DexterBadger AJ", ID : "#2V9J9JY2C", numberATTK: 0, noATTK: 0}
var acheng = {name : "acheng", ID : "#2V9J9JY2C", numberATTK: 0, noATTK: 0}

var josh = {name : "josh", ID : "#2V9J9JY2C", numberATTK: 0, noATTK: 0}
var abby = {name : "abby", ID : "#2V9J9JY2C", numberATTK: 0, noATTK: 0}

var att = { s1 : "*", s2 :"**", s3 : "***", s0: "" , f: "FAILED",

// apple
// Yamann
// y8
// camby
// agit
// merik
// abby
// DexterBadger
// acheng
// josh

stars1 : function(){return att.s1;},
stars2 : function(){return att.s2;},
stars3 : function(){return att.s3;}
}

function name(player)
{
	return player.name;
}

function AATKs3() {
	    var x = document.getElementById("war1");
	    var y = x.getElementsByClassName("s3");
	    var length = y.length;
	    var i;
	    for (i = 0; i < length; i++) 
	    {
	        y[i].innerHTML = att.s3;
	    }

	}

function AATKs3() {
	    var x = document.getElementById("war");
	    var y = x.getElementsByClassName("s3");
	    var length = y.length;
	    var i;
	    for (i = 0; i < length; i++) 
	    {
	        y[i].innerHTML = att.s3;
	    }

	}

function AATKs2() {
	    var x = document.getElementById("war");
	    var y = x.getElementsByClassName("s2");
	    var length = y.length;
	    var i;
	    for (i = 0; i < length; i++) 
	    {
	        y[i].innerHTML = att.s2;
	    }

	}

function AATKs1() {
	    var x = document.getElementById("war");
	    var y = x.getElementsByClassName("s1");
	    var length = y.length;
	    var i;
	    for (i = 0; i < length; i++) 
	    {
	        y[i].innerHTML = att.s1;
	    }

	}

function AATKs0() {
	    var x = document.getElementById("war");
	    var y = x.getElementsByClassName("s0");
	    var length = y.length;
	    var i;
	    for (i = 0; i < length; i++) 
	    {
	        y[i].innerHTML = att.s0;
	    }

	}


window.onload = function() 
{
    // all of your code goes in here
    // it runs after the DOM is built
    // obj = document.getElementById("ca");
	// obj.innerHTML = name(apple);

	// obj = document.getElementById("y");
	// obj.innerHTML = name(y8);

    document.getElementById("y8").innerHTML = name(y8);
    document.getElementById("ca").innerHTML = name(apple);

    document.getElementById("cam").innerHTML = name(camby);
    document.getElementById("merik").innerHTML = name(merik);

    document.getElementById("ya").innerHTML = name(ya);
    document.getElementById("agit").innerHTML = name(agit);

    document.getElementById("ab").innerHTML = name(abby);
    document.getElementById("aj").innerHTML = name(aj);

    document.getElementById("acheng").innerHTML = name(acheng);
    document.getElementById("josh").innerHTML = name(josh);

    AATKs3();
    AATKs2();
    AATKs1();
    AATKs0();
	

 //    document.getElementsByClassName("s1")[0].innerHTML = att.s1;
	// document.getElementsByClassName("s3")[0].innerHTML = att.s3;
	// document.getElementsByClassName("s0")[0].innerHTML = att.s0;


}

