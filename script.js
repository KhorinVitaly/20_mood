var phrase = document.getElementById('phrase');
var signature = document.getElementById('signature');

var quotes_json = document.getElementById('quotes_json');

quotesArr = JSON.parse(quotes_json.innerHTML);
var rand = Math.floor(Math.random() * quotesArr.length);

phrase.innerHTML = escapeRegExp(quotesArr[rand].phrase);

if (quotesArr[rand].signature != undefined){
  signature.innerHTML = escapeRegExp(quotesArr[rand].signature);
} else{
  signature.innerHTML = "";
}

function escapeRegExp(str) {
  return str.replace("/","\u002F");
}