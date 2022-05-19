function uuid() {
    const IP = document.getElementById("ip").value;
    const PORT = document.getElementById("port").value;
    var api = "http://" + IP + ":" + PORT;
    var request = new XMLHttpRequest();
    request.open('GET', api + '/v1/presentation/slide_index');
    request.send();
    request.onload = ()=>{
        try {
            data = JSON.parse(request.response);
            presentationUuid = data['presentation']['presentation_id']['uuid']
            slide_index = data['presentation']['index']

            return presentationUuid;
        }
        catch {}
    }
}

function changesrc(index, quality="190") {
    const IP = document.getElementById("ip").value;
    const PORT = document.getElementById("port").value;
    var api = "http://" + IP + ":" + PORT;
    var request = new XMLHttpRequest();
    request.open('GET', api + '/v1/presentation/slide_index');
    request.send();
    request.onload = ()=>{
        try {
            data = JSON.parse(request.response);
            var presentationUuid = data['presentation_index']['presentation_id']['uuid']
            slide_index = data['presentation_index']['index']

            var imgSrc = api + "/v1/presentation/" + presentationUuid + "/thumbnail/" + index + '?quality=' + quality;
            var name = "slide_" + index.toString();
            document.getElementById(name).src = imgSrc
        }
        catch {
            console.log("could not get image")
        }
    }

    
}



function updateimg() {

    var slides = 5;

    for (let i = 0; i <= slides; i++) {
        changesrc(i);
        console.log(i)
    }
    
}
setInterval(updateimg(),1000);

function test() {
    changeslide(0)
}

function apicall(call) {
const IP = document.getElementById("ip").value;
const PORT = document.getElementById("port").value;
var api = "http://" + IP + ":" + PORT;

var request = new XMLHttpRequest();
request.open('GET', api + call);
request.send();
request.onload = ()=>{
    try {
        console.log(JSON.parse(request.response));
    }
    catch {

    }

}   
}

function changeslide(index) {
    const IP = document.getElementById("ip").value;
    const PORT = document.getElementById("port").value;
    var api = "http://" + IP + ":" + PORT;
    var uuid = getUuid();
    var call = api + "/v1/presentation/" + uuid + "/" + index.toString() + "/trigger";
    console.log("call: ", call)
    apicall(call);
}

function getUuid() {
    const IP = document.getElementById("ip").value;
    const PORT = document.getElementById("port").value;
    var api = "http://" + IP + ":" + PORT;
    var request = new XMLHttpRequest();
    request.open('GET', api + '/v1/presentation/active');
    request.send();
    request.onload = ()=>{
        try {
            data = JSON.parse(request.response);
            return data['presentation']['id']['uuid'].toString();
            
        }
        catch {
            console.log("Error: could not get UUID")
            return null;
        }
    }

}