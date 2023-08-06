let input = document.getElementById('getInput');
let btn = document.querySelectorAll('button');

let str = '';
let arr = Array.from(btn);
arr.forEach(btn => {
    btn.addEventListener('click', (event) => {
        if(event.target.innerHTML === '=') {
            str = eval(str);
            input.value = str;
        }
        else if(event.target.innerHTML === 'C') {
            str = '';
            input.value = str;
        }
        else if(event.target.innerHTML === 'DEL') {
            str = str.substring(0, str.length-1);
            input.value = str;
        }
        else {
            str += event.target.innerHTML;
            input.value = str;
        }
    })
})
