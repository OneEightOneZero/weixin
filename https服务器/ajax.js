let initMessage = 0;
setInterval(() => {
    let messages = document.querySelectorAll(".js_message_plain");
    let message = messages[messages.length - 1].innerText;
    if (message != initMessage) {
        console.log("发送");
        initMessage = message;
        var xmlhttp;
        xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                console.log(xmlhttp.responseText);
                var appElement = document.querySelector('[ng-controller=chatSenderController]');
                var $scope = angular.element(appElement).scope();
                $scope.editAreaCtn = xmlhttp.responseText;
                $scope.sendTextMessage();
            }
        }
        xmlhttp.open("GET", `https://10.3.143.180:3000?message=${message}`, true);
        xmlhttp.send();
    }
}, 1000)