





/*
var XMLHttpRequest = {
  response = ciało odpowiedzi,
  responseText = tekt odpowiedzi,
  responseType = text, documement, json,
  status = wartosc numeryczna,
  statusText = wartosc tekstowa kodu, ok/not found,
  withCredentials = metody autoryzacji - ciasteczka/naglowki,
}

METODY
open
setRequestHeader - ustawia wartosc konkretnego naglowka przed wyslaniem zapytania
send
abort - przerywa send;
getAllResponseHeaders - zwraca wszystkie naglowki
onload - gdy nadejdzie odpowiedz z serwera;
onprogress - postep ladowania;
onerror - gdy serwer nie zwroci odpowiedzi;
addEventListener - nasluchiwacz;
*/

// Synchroniczne
var request = new XMLHttpRequest();
request.open('GET', 'http://apis.is/concerts', false);
// async flag set to false
request.send(); // interface suspension
if(request.status == 200) {
	console.log(request.response);
}

// Asynchroniczne / kod po wykonaniu *send* bedzie wykonywal sie dalej,
// a w momencie odpowiedzi *onload*  wykona calllback

var request = new XMLHttpRequest();
request.open('GET', 'http://apis.is/concerts');
// just like it's been until now
request.onload(function() {
	if (request.status == 200) {
		console.log(request.response);
	}
});
request.send();
