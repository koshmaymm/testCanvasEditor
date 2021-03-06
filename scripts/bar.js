export default function bar() {

let example = document.getElementById("canvasTest");
let thickness = document.getElementById("lineWidth");
let clear = document.getElementById("clearCanvas");
let clearStorage = document.getElementById("clearStorage");
let moove = document.getElementById("moove");
let canvasColor = document.getElementById("canvasColor");
let addPicture = document.getElementById("addPicture");
let addData = document.getElementById("addData");
 
 
let count = 1,
       data = {},
       canvasProps = {},
       dataLSArray = [],

       ctx = example.getContext('2d'),
       img = document.getElementById("img");

let funcs = {

    clearFild: () =>{
        ctx.clearRect(0, 0, 600, 400);
    },

    setWidth: () =>{
        return canvasProps.width = thickness.options[thickness.selectedIndex].value; 
    },


    setColor: () => {
        return canvasProps.color = document.querySelector('input[name="checkColor"]:checked').value; 
    },

    moovePic: () =>{
        ctx.fillStyle = canvasProps.color;
        
        ctx.beginPath();
        ctx.lineWidth = canvasProps.width;
        ctx.strokeStyle = canvasProps.color;
        
        ctx.font = "40px Arial";
        ctx.strokeText("Hello World !", 64, 164);
        ctx.stroke();
    },

    addPic: () => {
        ctx.drawImage(img, 0, 0, 600, 400);
    },

    getFirstPosition: (event) =>{
        canvasProps.W1X = event.pageX - 11;
        canvasProps.H1X = event.pageY - 11;
    },

    getSecondPosition: (event) => {
        canvasProps.W2X = event.pageX - 11;
        canvasProps.H2X = event.pageY - 11;
    },

    startDrawing: () => {
        if (canvasProps.W1X === canvasProps.W2X && canvasProps.H1X === canvasProps.H2X && canvasProps.W1X != false) {
            funcs.putPoint();
        } else {
            funcs.mooveLine();
        }
        funcs.setDataToLocalStorage();
    },
    mooveLine: (color, thick, X1LS, Y1LS, X2LS, Y2LS) => {
        let colo = color || canvasProps.color,
        moveLineThick = thick || canvasProps.width,
        X1W = X1LS || canvasProps.W1X,
        Y1W = Y1LS || canvasProps.H1X,
        X2W = X2LS || canvasProps.W2X,
        Y2W = Y2LS || canvasProps.H2X;

    ctx.beginPath();
    ctx.lineWidth = moveLineThick;
    ctx.strokeStyle = colo;
    ctx.moveTo(X1W, Y1W);
    ctx.lineTo(X2W, Y2W);
    ctx.stroke();
    ctx.closePath();
    },
    putPoint: (colo, thick, X1, Y1) => {
        let col = colo || canvasProps.color,
        thickLine = thick || canvasProps.width,
        X1P = X1 || canvasProps.W1X,
        Y1P = Y1 || canvasProps.H1X;
    ctx.beginPath();
    ctx.strokeStyle = col;
    ctx.fillStyle = col;
    ctx.arc(X1P, Y1P, (thickLine == 1 ? thickLine : thickLine / 2), 0, (2 * Math.PI), false);
    ctx.fill();
    },
    setDataToLocalStorage: () => {
        if (count == 1) { localStorage.clear(); }
        localStorage.setItem("canvasDrow" + count++, JSON.stringify(canvasProps));
    },
    moovePictureWithData: () => {
        let data = dataLSArray;
        for (let i = 0, n = data.length; i < n; i++) {
            let params = data[i].split(','),
                thickLS = params[0].slice(10, -1),
                colorLS = params[1].slice(9, -1),
                X1LS = +params[2].slice(6),
                Y1LS = +params[3].slice(6),
                X2LS = +params[4].slice(6),
                Y2LS = +params[5].slice(6, -1);
 
            if ((X1LS == X2LS) && (Y1LS == Y2LS)) {
                funcs.putPoint(colorLS, thickLS, X1LS, Y1LS)
            } else {
                funcs.mooveLine(colorLS, thickLS, X1LS, Y1LS, X2LS, Y2LS)
            }
        }
    },
    getSavedData: () => {
        let lS = localStorage;
        count = lS.length + 1;
        for (var prop in lS) {
            let priority = +prop.slice(10),
                keyParam = lS[prop];
            dataLSArray[priority - 1] = keyParam;
        }
        funcs.moovePictureWithData();
    },

    clearStorageData: () => {
        localStorage.clear();
    }
};

   funcs.setWidth();
   funcs.setColor();

clear.addEventListener("click", funcs.clearFild, false);
clearStorage.addEventListener("click", funcs.clearStorageData, false);
moove.addEventListener("click", funcs.moovePic, false);
addPicture.addEventListener("click", funcs.addPic, false);
thickness.addEventListener("click", funcs.setWidth, false);
canvasColor.addEventListener("click", funcs.setColor, false);
addData.addEventListener("click", funcs.getSavedData, false);

example.addEventListener("mousedown", funcs.getFirstPosition, false);
example.addEventListener("mouseup", funcs.getSecondPosition, false);
example.addEventListener("mouseup", funcs.startDrawing, false);
}