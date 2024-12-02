const heading = document.createElement('h1');
heading.innerHTML = 'Digital Clock!';
heading.style.textAlign = 'center';
heading.style.fontSize = '50px';
document.body.appendChild(heading);
document.body.style.backgroundColor = '#F3F2E5';

let mainDiv = document.createElement('div');      
mainDiv.style.height = '25rem';
mainDiv.style.width = '25rem';
mainDiv.style.margin = 'auto';
mainDiv.style.textAlign = 'center';
mainDiv.style.backgroundColor = '#5DB079';
mainDiv.style.borderRadius = '10px';
mainDiv.style.padding = '20px';
document.body.appendChild(mainDiv);

function displayDate() {
    let samay = new Date();
    let dateOnly = samay.getDate();
    let month = samay.getMonth() + 1;  
    let year = samay.getFullYear();

    let displayD = document.createElement('div');
    displayD.style.fontSize = '40px';
    displayD.style.marginBottom = '20px';
    displayD.style.color = '#F4F1C7';
    displayD.innerHTML = `${dateOnly}/${month}/${year}`;
    mainDiv.appendChild(displayD);
}

let timeDiv = document.createElement('div');      
timeDiv.style.height = '5rem';
timeDiv.style.width = '100%';
timeDiv.style.backgroundColor = '#236C54';
timeDiv.style.color = 'white';
timeDiv.style.display = 'flex';
timeDiv.style.alignItems = 'center';
timeDiv.style.justifyContent = 'center';
timeDiv.style.borderRadius = '10px';
mainDiv.appendChild(timeDiv);

function displayTime() {
    let samay = new Date();
    let timeString = samay.toLocaleTimeString();
    
    let displayT = document.createElement('div');
    displayT.style.fontSize = '30px';
    displayT.innerHTML = `${timeString}`;
    timeDiv.innerHTML = '';  
    timeDiv.appendChild(displayT);
}

function timer() {
    let timerDiv = document.createElement('div');
    timerDiv.style.height = '10rem';
    timerDiv.style.width = '22rem';
    timerDiv.style.marginTop = '20px';
    timerDiv.style.backgroundColor = '#236C54'; 
    timerDiv.style.textAlign = 'center';
    timerDiv.style.borderRadius = '10px';
    timerDiv.style.display = 'flex';
    timerDiv.style.flexDirection = 'column';
    timerDiv.style.justifyContent = 'space-between';
    timerDiv.style.padding = '20px';

    let running = false;
    let interval;

    const timeDisplay = document.createElement('h2');
    timeDisplay.style.fontSize = '40px';
    timeDisplay.style.marginBottom = '20px';
    timeDisplay.style.color = 'black';
    timeDisplay.innerHTML = '00:00:00';

    const buttonDiv = document.createElement('div');
    buttonDiv.style.marginTop = '20px';
    buttonDiv.style.display = 'flex';
    buttonDiv.style.justifyContent = 'center';
    buttonDiv.style.gap = '10px';

    const startBtn = document.createElement('button');
    const stopBtn = document.createElement('button');
    const resetBtn = document.createElement('button');

    let hour = 0, minute = 0, second = 0, millisecond = 0;
    let totalMilliseconds = 0;

    startBtn.innerHTML = 'Start';
    stopBtn.innerHTML = 'Stop';
    resetBtn.innerHTML = 'Reset';

    startBtn.style.padding = '10px 20px';
    stopBtn.style.padding = '10px 20px';
    resetBtn.style.padding = '10px 20px';

    function updateDisplay() {
        timeDisplay.innerHTML = `${hour}:${minute}:${second}:${millisecond}`;
    }

    startBtn.onclick = function () {
        if (!running) {
            running = true;
            interval = setInterval(function () {
                totalMilliseconds++;
                hour = Math.floor(totalMilliseconds / 3600000);
                minute = Math.floor((totalMilliseconds % 3600000) / 60000);
                second = Math.floor((totalMilliseconds % 60000) / 1000);
                millisecond = totalMilliseconds % 1000;
                updateDisplay();
            }, 1);
        }
    };

    stopBtn.onclick = function () {
        if (running) {
            running = false;
            clearInterval(interval);
        }
    };

    resetBtn.onclick = function () {
        running = false;
        clearInterval(interval);
        totalMilliseconds = 0;
        hour = 0;
        minute = 0;
        second = 0;
        millisecond = 0;
        updateDisplay();
    };

    buttonDiv.appendChild(startBtn);
    buttonDiv.appendChild(stopBtn);
    buttonDiv.appendChild(resetBtn);

    timerDiv.appendChild(timeDisplay);
    timerDiv.appendChild(buttonDiv);
    mainDiv.appendChild(timerDiv);
}
 //function timer

timer();
displayDate();
setInterval(displayTime, 1000);
