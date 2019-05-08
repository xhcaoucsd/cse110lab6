var inputElem = document.querySelector('.chatMessage');
var messages = document.querySelector('.messages');
function createHTMLMessage(msg, source){
	var li = document.createElement("li");
	var div = document.createElement("div");
	div.innerHTML += msg;
	div.className += "messageInstance " + source;
	li.appendChild(div);
	messages.appendChild(li);
}


inputElem.addEventListener('keypress', function (e) {
	var key = e.which || e.keyCode;
	if (key === 13) {
	createHTMLMessage(inputElem.value, 'client');
	inputElem.value = "";
	}
});

var xhr = new XMLHttpRequest();
var nextIdx = 0;

function doPostRequest(endpoint, body, callback) {
    xhr.onreadystatechange = callback;
    xhr.open('POST', endpoint);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify(body));
}

function onPostResponse() {
    if (this.readyState === 4 && this.status === 200) {
        var response = JSON.parse(this.responseText);
        if (response.newMessages.length <= 0) {
            return;
        }
        for (var i = 0; i < response.newMessages.length - 1; i++) {
            createHTMLMessage(response.newMessages[i], 'server'); 
        }
        var message = response.newMessages[response.newMessages.length - 1];

        var source = response.isLastClient ? 'client' : 'server';
        createHTMLMessage(message, source);
        nextId = response.nextIdx);
    }
}
