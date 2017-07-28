window.onload = () => {

    let example = document.getElementById("canvasTest");
    let thickness = document.getElementById("lineWidth");
    let clear = document.getElementById("clearCanvas");
    let moove = document.getElementById("moove");
    let canvasColor = document.getElementById("canvasColor");

    let canvasProps = {};
    let params = [];


    let ctx = example.getContext('2d');




    clearFild = () => {
        ctx.clearRect(0, 0, 600, 400);
    }

    setWidth = () => {
        let thick = thickness.options[thickness.selectedIndex].value
        canvasProps.width = thick;
        ctx.lineWidth = thick;
        //console.log(canvasProps.width);
        return thick;
    }

    setColor = () => {
        let color = document.querySelector('input[name="checkColor"]:checked').value;
        canvasProps.color = color;
        ctx.strokeStyle = color;
        ctx.fillStyle = color;
        //console.log(canvasProps.color);
        return color;
    }

    moovePic = () => {
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

        ctx.beginPath();
        ctx.moveTo(50, 100);
        ctx.arc(100, 100, canvasProps.width, 0, (2 * Math.PI), false);
        ctx.fill();
    }

    getFirstPosition = (event) => {
        console.log("event.pageX = " + event.pageX + " " + "event.pageY = " + event.pageY);
        params.push(event.clientX - 11);
        params.push(event.clientY - 11);
    }

    getSecondPosition = (event) => {
        console.log("event.pageX = " + event.pageX + " " + "event.pageY = " + event.pageY);
        params.push(event.clientX - 11);
        params.push(event.clientY - 11);
        mooveLine();
    }

    mooveLine = () => {
            if (params.length > 4) {
                params = params.slice(3);
            }
            if (params.length == 4) {
                if (params[0] == params[2] && params[1] == params[3]) {
                    ctx.beginPath();
                    ctx.moveTo(params[0], params[1]);
                    ctx.arc(params[0], params[1], (canvasProps.width == 1 ? canvasProps.width : canvasProps.width / 2), 0, (2 * Math.PI), false);
                    ctx.fill();
                } else {
                    /*console.log(params[0]);
                    console.log(params[1]);
                    console.log(params[2]);
                    console.log(params[3]);*/

                    ctx.beginPath();
                    ctx.moveTo(params[0], params[1]);
                    ctx.lineTo(params[2], params[3]);
                    ctx.stroke();
                    ctx.closePath();
                    //ctx.strokeText("Hello World", 50, 50);
                }

            }
            params = params.slice(3);
        }
        //console.log(elem);

    setWidth();
    setColor();

    clear.addEventListener("click", clearFild, false);
    moove.addEventListener("click", moovePic, false);
    thickness.addEventListener("click", setWidth, false);
    canvasColor.addEventListener("click", setColor, false);

    example.addEventListener("mousedown", getFirstPosition, false);
    example.addEventListener("mouseup", getSecondPosition, false);
    example.addEventListener("mouseup", mooveLine, false);
};