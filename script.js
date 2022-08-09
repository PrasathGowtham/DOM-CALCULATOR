let clacu=document.createElement("div");
clacu.innerHTML=`<div class="container">
<div class="Calculator">
    <input type="text" placeholder="0" id="output-screen">
    <button onclick="Clear()""style="color:red">c</button>
    <button onclick="del()">del</button>
        <button onclick="display('.')"style="color:red">.</button>
    <button onclick="display('*')"style="color:red">x</button>
    <button onclick="display('7')">7</button>
    <button onclick="display('8')">8</button>
    <button onclick="display('9')">9</button>
    <button onclick="display('/')"style="color:red">/</button>
    <button onclick="display('4')">4</button>
    <button onclick="display('5')">5</button>
    <button onclick="display('6')">6</button>
    <button onclick="display('-')"style="color:red">-</button>
    <button onclick="display('1')">1</button>
    <button onclick="display('2')">2</button>
    <button onclick="display('3')">3</button>
    <button onclick="display('+')"style="color:red">+</button>
    <button onclick="display('0')">0</button>
    
    <button onclick="display('00')">00</button>
    <button onclick="calculate()" class="equal" style="color:red">=</button>




</div>

</div>
`
document.body.append(clacu);



let outputScreen = document.getElementById("output-screen");

function display(num) {
    outputScreen.value += num;
}

function calculate() {
    try {
        outputScreen.value = eval(outputScreen.value);
    }
    catch (err) {
        alert("invalid")
    }
}
function Clear() {
    outputScreen.value = " ";

}
function del() {
    outputScreen.value = outputScreen.value.slice(0, -1);
}


