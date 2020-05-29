$(document).ready(function(){


$(".button").click(function(){
    var textInput = document.getElementById("inputText").value;
    function letterToMorse (letters){
        var letterArray = ["A","B","C", "D","E", "F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," "];
        var morseArray=[".+-+++","-+.+.+.+++","-+.+-+.+++","-+.+.+++",".+++",".+.+-+.+++","-+-+.+++",".+.+.+.+++",".+.+++",".+-+-+-+++","-+.+-+++",".+-+.+.+++","-+-+++","-+.+++","-+-+-+++",".+-+-+.+++","-+-+.+-+++",".+-+.+++",".+.+.+++","-+++",".+.+-+++",".+.+.+-+++",".+-+-+++","-+.+.+-+++","-+.+-+-+++","-+-+.+.+++","++++"];
        var temp = '';
        for (var i=0;i<letters.length;i++){
            temp= temp + morseArray[letterArray.indexOf(letters.charAt(i))];
        }
            return temp;
    }
    final= letterToMorse(textInput)



    $("rect").hide();


    for (var i=0;i<final.length;i++){
        if (final.charAt(i)=="."){
            $("rect").fadeIn(200);
            $("rect").fadeOut(200);
        }else if (final.charAt(i)=="-"){
            $("rect").fadeIn(600);
            $("rect").fadeOut(600);
        }else {
            $("rect").delay(400).hide();
        }
        $("#rect").show();
    }

})
    function hideIt(){
        $("#rect").hide();
    }
});