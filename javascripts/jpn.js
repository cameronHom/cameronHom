var test =

[
["1"  ,"a"   ,"あ"],
["2"  ,"i"   ,"い"],
["3"  ,"u"   ,"う"],
["4"  ,"e"   ,"え"],
["5"  ,"o"   ,"お"],
["6"  ,"sa"  ,"さ"],
["7"  ,"shi" ,"し"],
["8"  ,"su"  ,"す"],
["9"  ,"se"  ,"せ"],
["10" ,"so"  ,"そ"],
["11" ,"za"  ,"ざ"],
["12" ,"zi"  ,"じ"],
["13" ,"zu"  ,"ず"],
["14" ,"ze"  ,"ぜ"],
["15" ,"zo"  ,"ぞ"],
["16" ,"na"  ,"な"],
["17" ,"ni"  ,"に"],
["19" ,"ne"  ,"ね"],
["20" ,"no"  ,"の"],
["21" ,"ma"  ,"ま"],
["22" ,"mi"  ,"み"],
["23" ,"mu"  ,"む"],
["24" ,"me"  ,"め"],
["25" ,"mo"  ,"も"],
["26" ,"ra"  ,"ら"],
["27" ,"ri"  ,"り"],
["28" ,"ru"  ,"る"],
["29" ,"re"  ,"れ"],
["30" ,"ro"  ,"ろ"],
["31" ,"ka"  ,"か"],
["32" ,"ki"  ,"き"],
["33" ,"ku"  ,"く"],
["34" ,"ko"  ,"こ"],
["35" ,"ke"  ,"け"],
["36" ,"ga"  ,"が"],
["37" ,"gi"  ,"ぎ"],
["38" ,"gu"  ,"ぐ"],
["39" ,"ge"  ,"げ"],
["40" ,"go"  ,"ご"],
["41" ,"ta"  , "x"],
["42" ,"chi" , "x"],
["43" ,"tsu" , "x"],
["44" ,"te"  ,"x"],
["45" ,"to"  ,"x"],
["46" ,"da"  ,"x"],
["47" ,"di"  ,"x"],
["48" ,"du"  ,"x"],
["49" ,"de"  ,"x"],
["50" ,"do"  ,"x"],
["51" ,"ha"  ,"x"],
["52" ,"hi"  ,"x"],
["53" ,"fu"  ,"x"],
["54" ,"he"  ,"x"],
["55" ,"ho"  ,"x"],
["56" ,"ba"  ,"x"],
["57" ,"bi"  ,"x"],
["58" ,"bu"  ,"x"],
["59" ,"be"  ,"x"],
["60" ,"bo"  ,"x"],
["61" ,"pa"  ,"ぱ"],
["62" ,"pi"  ,"ぴ"],
["63" ,"pu"  ,"ぷ"],
["64" ,"pe"  ,"ぺ"],
["65" ,"po"  ,"ぽ"],
["66" ,"ya"  ,"や"],
["67" ,"yu"  ,"ゆ"],
["68" ,"yo"  ,"よ"],
["69" ,"wa"  ,"わ"],
["70" ,"wo"  ,"を"],
["71" ,"n"   ,"ん"],
];

var quiz = [];

//document.getElementById("demo").innerHTML = test[0];
    



function showAns()
{
	var x = document.forms["QUIZ"]["ANS"].value;
	document.getElementById("display").innerHTML = x;
}

function myFunction() {
    var x = document.getElementById("frm1");
    var text = "";
    var i;
    for (i = 0; i < x.length ;i++) {
        text += x.elements[i].value + "<br>";
    }
    //document.getElementById("demo").innerHTML = text;
}

function selection()
{

}
function shuffle(array) {
  var currentIndex = array.length;
  var temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

function test2()
{
	var i = shuffle(test);
	document.getElementById("display").innerHTML = i;
}


    //      $(function(){ $.get('/read.txt', function(data){
    //         var array = data.split('\n');
    //         for (var i = 0; i < array.length; i++) 
    //         {
    //           document.write(array[i] , "<br>");
    //         }
            
    //     });
    // });
