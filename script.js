var txtin = document.querySelector(".inputtxt");
var btn = document.querySelector(".bt1");
var btn1=document.querySelector(".bt2");
var txtout = document.querySelector(".outputtxt");
btn.addEventListener("click", transfun);
btn1.addEventListener("click", function(){
    txtin.value="Apple is great fruit fries are yummy when you are in the car";});

var url;

function buildurl(txtinp) {
        url = "https://api.funtranslations.com/translate/emoji.json?text=" + txtinp;
}

function errorhandler(error) {
        alert("error occured" + error);
}

function transfun() {
        var txtinp = txtin.value;
        if (txtinp != "") {
                buildurl(txtinp);
                fetch(url).then(function responsehandler(response) {
                        return response.json()
                }).then(function jsonparsing(json) {
                        txtout.innerHTML = json.contents.translated;
                }).catch(errorhandler);
        } else {
                alert("Type something to translate");
                txtin.style.borderColor = "red";

        }
}