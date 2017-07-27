window.onload = function() {

    let example = document.getElementById("canvasTest");
    let thickness = document.getElementById("lineWidth");
    let clear = document.getElementById("clearCanvas");
    let moove = document.getElementById("moove");
    let canvasColor = document.getElementById("canvasColor");

    let canvasProps = {};
    let params = [];


    let ctx = example.getContext('2d');
    setWidth();
    setColor();

    clear.addEventListener("click", clearFild, false);
    moove.addEventListener("click", moovePic, false);
    thickness.addEventListener("click", setWidth, false);
    canvasColor.addEventListener("click", setColor, false);

    example.addEventListener("mousedown", getFirstPosition, false);
    example.addEventListener("mouseup", getSecondPosition, false);
    example.addEventListener("mouseup", mooveLine, false);

    function clearFild() {
        ctx.clearRect(0, 0, 600, 400);
    }

    function setWidth() {
        let thick = thickness.options[thickness.selectedIndex].value
        canvasProps.width = thick;
        ctx.lineWidth = thick;
        //console.log(canvasProps.width);
        return thick;
    }

    function setColor() {
        let color = document.querySelector('input[name="checkColor"]:checked').value;
        canvasProps.color = color;
        ctx.strokeStyle = color;
        ctx.fillStyle = color;
        //console.log(canvasProps.color);
        return color;
    }

    function moovePic() {
        ctx.fillStyle = canvasProps.color;
        ctx.fillRect(10, 20, 10, 20);
        ctx.beginPath();
        ctx.lineWidth = canvasProps.width;
        ctx.strokeStyle = canvasProps.color;
        ctx.moveTo(10, 20);
        ctx.lineTo(20, 30);
        ctx.font = "40px Arial";
        ctx.strokeText("Hello World", 50, 50);
        ctx.stroke();
    }

    function getFirstPosition(event) {
        console.log("event.pageX = " + event.pageX + " " + "event.pageY = " + event.pageY);
        params.push(event.clientX - 10);
        params.push(event.clientY - 10);
    }

    function getSecondPosition(event) {
        console.log("event.pageX = " + event.pageX + " " + "event.pageY = " + event.pageY);
        params.push(event.clientX - 10);
        params.push(event.clientY - 10);
    }

    function mooveLine() {

        if (params.length == 4) {
            console.log(params[0]);
            console.log(params[1]);
            console.log(params[2]);
            console.log(params[3]);
            //ctx.fillRect(params[0], params[2], params[1], params[3]);
            ctx.beginPath();
            ctx.moveTo(params[0], params[1]);
            ctx.lineTo(params[2], params[3]);
            ctx.stroke();
            ctx.closePath();
            //ctx.strokeText("Hello World", 50, 50);
        }
        params = [];
    }
    //console.log(elem);
};