   let count = 1;
   let data = {};
   let canvasProps = {};

   let ctx = example.getContext('2d');
   let img = document.getElementById("img");



   clearFild = () => {
       ctx.clearRect(0, 0, 600, 400);
   }

   setWidth = () => {
       return canvasProps.width = thickness.options[thickness.selectedIndex].value;
   }

   setColor = () => {
       return canvasProps.color = document.querySelector('input[name="checkColor"]:checked').value;
   }

   moovePic = () => {
       ctx.fillStyle = canvasProps.color;

       ctx.beginPath();
       ctx.lineWidth = canvasProps.width;
       ctx.strokeStyle = canvasProps.color;

       ctx.font = "40px Arial";
       ctx.strokeText("Hello World !", 64, 164);
       ctx.stroke();
   }

   addPic = () => {
       ctx.drawImage(img, 0, 0, 600, 400);
   }

   getFirstPosition = (event) => {
       //console.log("event.pageX = " + event.pageX + " " + "event.pageY = " + event.pageY);
       //canvasProps.params.push(event.clientX - 11);
       //canvasProps.params.push(event.clientY - 11);
       canvasProps.W1X = event.clientX - 11;
       canvasProps.H1X = event.clientY - 11;
   }

   getSecondPosition = (event) => {
       canvasProps.W2X = event.clientX - 11;
       canvasProps.H2X = event.clientY - 11;
   }

   startDrawing = () => {

       if (canvasProps.W1X === canvasProps.W2X && canvasProps.H1X === canvasProps.H2X && canvasProps.W1X != false) {
           putPoint();
       } else {
           mooveLine();
       }
       setDataToLocalStorage();
   }

   mooveLine = () => {
       ctx.beginPath();
       ctx.lineWidth = canvasProps.width;
       ctx.strokeStyle = canvasProps.color;
       ctx.moveTo(canvasProps.W1X, canvasProps.H1X);
       ctx.lineTo(canvasProps.W2X, canvasProps.H2X);
       ctx.stroke();
       ctx.closePath();
   }

   putPoint = (colorLS) => {
       ctx.beginPath();
       ctx.strokeStyle = colorLS || canvasProps.color;
       ctx.fillStyle = colorLS || canvasProps.color;
       ctx.arc(canvasProps.W1X, canvasProps.H1X, (canvasProps.width == 1 ? canvasProps.width : canvasProps.width / 2), 0, (2 * Math.PI), false);
       ctx.fill();
   }

   setDataToLocalStorage = () => {
       if (count == 1) { localStorage.clear(); }
       localStorage.setItem("canvasDrow" + count++, JSON.stringify(canvasProps));
   }

   checkData = () => {
       if (window.localStorage.length > 0) {
           let a = localStorage;
           // console.log("HI2");
       } else {
           console.log("HI");
       }
   }

   getSavedData = () => {
       let lS = localStorage;

       for (var i = 0, n = lS.length; i < n; i++) {
           let keyName = lS.key(i);
           let keyParam = lS[keyName].split(',');
           let thickLS = +keyParam[0].slice(10, -1);
           let colorLS = keyParam[1].slice(9, -1);
           let X1LS = +keyParam[2].slice(6);
           let Y1LS = +keyParam[3].slice(6);
           let X21LS = +keyParam[4].slice(6);
           let Y2LS = +keyParam[5].slice(6, -1);
           console.log(keyName);
           console.log("width : " + thickLS);
           console.log("color : " + colorLS);
           console.log("X1LS : " + X1LS);
           console.log("Y1LS : " + Y1LS);
           console.log("X21LS : " + X21LS);
           console.log("Y2LS :" + Y2LS);
       }
   }

   clearStorageData = () => {
       localStorage.clear();
   }

   setWidth();
   setColor();
   checkData();