const keyboardCode = [
"Backquote", "Digit1", "Digit2", "Digit3", "Digit4", "Digit5", "Digit6", "Digit7", "Digit8", "Digit9", "Digit0", "Minus", "Equal", "Backspace", 
"Tab", "KeyQ", "KeyW", "KeyE", "KeyR", "KeyT", "KeyY", "KeyU", "KeyI", "KeyO", "KeyP", "BracketLeft", "BracketRight", "Delete", 
"CapsLock", "KeyA", "KeyS", "KeyD", "KeyF", "KeyG", "KeyH", "KeyJ", "KeyK", "KeyL", "Semicolon", "Quote", "Enter", 
"ShiftLeft", "KeyZ", "KeyX", "KeyC", "KeyV", "KeyB", "KeyN", "KeyM", "Comma", "Period", "Slash", "&#8593;", "ShiftRight", 
"ControlLeft", "MetaLeft", "AltLeft", "Space", "AltRight", "ControlRight", "ArrowLeft", "ArrowUp", "ArrowDown", "ArrowRight"];

const keyboardKeyCode = [192, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 189, 187, 8, 
    9, 81, 87, 69, 82, 84, 89, 85, 73, 79, 80, 219, 221, 46, 
    20, 20, 65, 83, 68, 70, 71, 72, 74, 75, 76, 186, 222, 13, 
    16, 90, 88, 67, 86, 66, 78, 77, 188, 190, 191, 16, 
    17, 91, 91, 18, 32, 18, 17, 37, 38, 40, 39];

let keyboardKeyEN = ["`ё", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "Backspace", 
"Tab", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "Del",
"CapsLock", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'", "Enter", 
"Shift", "z", "x", "c", "v", "b", "n", "m", ",", ".", "/", "&#8593;", "Shift", 
"Ctrl", "Win", "Alt", " ", "Alt", "Ctrl", "&#8592;", "&#8595;", "&#8594;"];

let keyboardKeyRU = ["`ё", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "Backspace", 
"Tab", 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', "Del",
"CapsLock", 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', "Enter", 
"Shift", 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', "/", "&#8593;", "Shift",  
"Ctrl", "Win", "Alt", " ", "Alt", "Ctrl", "&#8592;", "&#8595;", "&#8594;"];

const special = ['Backspace', 'Tab', 'Delete', 'CapsLock', 'Enter', 'ShiftLeft', 'ArrowUp', 'ShiftRight', 'ControlLeft', 
                'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ControlRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight'];

// document.onkeydown = function (e) {
//     console.log(e);
//     console.log(e.key);
//     keyboardKey.push(e.key);
//     console.log(keyboardKey);
// }



// let capsLock = false;
// let shift = false;


// if (capsLock == true) {
//     for (let i=0; i<keyboardKeyRU.length; i++) {
//         keyboardKeyRU[i].toUpperCase();
//     }
// }

function constructor() {
let WRAPPER = document.querySelector('.wrapper');
const p = document.createElement('p').textContent = "Для смены языка нажмите Shift + Alt";
    WRAPPER.append(p)
}
constructor();

let KEYBOARD = document.querySelector('#keyboard');
let FLAG = [] = keyboardKeyEN;
function Lang() {
    let flagAlt = false;
    let flagCtrl = false;
    let count = 1;
    document.querySelector('body').onkeydown = function(event) {
        // console.log(event);
        // code: "AltLeft"
        if (event.code == 'AltLeft') {
            flagAlt = true;
        } else if (event.code == 'ShiftLeft') {
            flagCtrl = true;
        }
    document.querySelector('body').onkeyup = function(event) {
        if (event.code == 'ShiftLeft' && flagAlt || event.code == 'AltLeft' && flagCtrl) {
            console.log('event');
            count +=1;
            flagAlt = false;
            flagCtrl = false;
            if(count%2 == 0){
                FLAG = keyboardKeyRU;
                init();
            } else {
                FLAG = keyboardKeyEN;
                init();
            }
        }
    }
    }
}
Lang()

function init() {
    let out = '';
    for (let i=0; i<FLAG.length; i++) {
        if (FLAG[i] == "Enter"|| FLAG[i] =="Shift"||FLAG[i] =="Backspace"|| FLAG[i] =="CapsLock") {
            out += '<div class="key widthDouble" data=" '+keyboardCode[i]+' ">'+String(FLAG[i])+'</div>'
        } else  if (FLAG[i] == " " ) {
            out += '<div class="key widthDSpace" data=" '+keyboardCode[i]+' ">'+String(FLAG[i])+'</div>'
        } else
        out += '<div class="key" data=" '+keyboardCode[i]+' ">'+String(FLAG[i])+'</div>'
    }
    document.querySelector('#keyboard').innerHTML = out;

    const textarea = document.createElement('textarea');
    textarea.setAttribute('placeholder', 'Для смены языка нажмите Shift + Alt');
    keyboard.append(textarea);
    //textarea.classList.add('textwindow');
}
init()



function CLICK() {
    document.querySelectorAll('#keyboard .key').forEach(function(el) {
            el.onclick = function(event) {
                document.querySelectorAll('#keyboard .key').forEach(function(el) {
                    el.classList.remove('active');
                    el.classList.remove('key:hover');
                });
                let code = this.getAttribute('data');
                this.classList.add('active');
                //console.log(event.key);
                console.log(code);
                console.log(event.code);
            }
    });
}
CLICK()


function ONKEYUP() {
    document.onkeyup = function(e) {
        // console.log(e); // смотрим клавишу A
        // console.log(e.code); // KeyA
        // console.log(e.keyCode); // 
        document.querySelectorAll('#keyboard .key').forEach(function(el) {
            el.classList.remove('active');
        })
        document.querySelector('#keyboard .key[data=" '+e.code+' "]').classList.add('active');
        console.log(e.code)
    }
}
ONKEYUP()

