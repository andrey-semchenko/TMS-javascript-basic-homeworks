
/*
Дан инпут. По его изменению проверьте, количество символов в нем
меньше 5-ти или нет. Если меньше - покрасьте границу инпута в
зеленый цвет, а если больше - в красный.
*/

document.querySelector('input').addEventListener('input', function(){
    if(this.value.length < 4) this.style.border = '3px solid green'
    else this.style.border = '3px solid red'
})

/*
My own task
*/
const newParagraf = document.createElement('p');
const inp = document.querySelector('#inpTask2');
const btn = document.querySelector('#bntTask2');

btn.addEventListener('click', function() {
    btn.after(newParagraf);
    addStyle(newParagraf);
    newParagraf.innerText = name(inp.value);
})

import { userName as name} from "./function.js"
import { addStyle } from "./addStyle.js";
