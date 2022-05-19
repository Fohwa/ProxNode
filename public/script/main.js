// src="script/main.js"

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

function gitSaveApicall(call) {
    const IP = document.getElementById("ip").value;
    const PORT = document.getElementById("port").value;
    var api = "http://" + IP + ":" + PORT + call;
    window.location = api;
}

function customStageDisplay() {
    const index = document.getElementById('index').value;
    var call = '/v1/stage/screen/0/layout/' + index
    gitSaveApicall(call)
}

function changeapi() {
    var ip = document.getElementById('ip').value;
    var port = document.getElementById('port').value;
    var link = "/changeapi/" + ip + "/" + port;

    var xhr = new XMLHttpRequest();
    xhr.open("POST", link, true);
    xhr.send(200);

}

function getimgSrc() {
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

            var imgSrc = api + "/v1/presentation/" + presentationUuid + "/thumbnail/" + slide_index + '?quality=1920';
            console.log(imgSrc)
            document.getElementById("live_slide").src = imgSrc
        }
        catch {}
    }
}