const input1 = document.getElementById('number-1');
const input2 = document.getElementById('number-2');
const plusBtn = document.getElementById('btn-add');
const restBtn = document.getElementById('btn-rest');
const resultText = document.getElementById('result');

function clean(){
    input1.value = "";
    input1.focus();
    input2.value = "";
}

clean()

function pluss() {
    const n1 = Number(input1.value)
    const n2 = Number(input2.value)
    const result = n1 + n2;
    resultText.textContent = result;
}

function rest() {
    const n1 = Number(input1.value)
    const n2 = Number(input2.value)
    const result = n1 - n2;
    resultText.textContent = result;
}



plusBtn.addEventListener('click', function(){
    pluss();
    clean();
})

restBtn.addEventListener('click', function(){
    rest();
    clean();
})