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

let keyboardKeyEN_UpperCase = ["`ё", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "Backspace", 
"Tab", "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "[", "]", "Del",
"CapsLock", "A", "S", "D", "F", "G", "H", "J", "K", "L", ";", "'", "Enter", 
"Shift", "Z", "X", "C", "V", "B", "N", "M", ",", ".", "/", "&#8593;", "Shift", 
"Ctrl", "Win", "Alt", " ", "Alt", "Ctrl", "&#8592;", "&#8595;", "&#8594;"];

let keyboardKeyRU = ["`ё", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "Backspace", 
"Tab", 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', "Del",
"CapsLock", 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', "Enter", 
"Shift", 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', "/", "&#8593;", "Shift",  
"Ctrl", "Win", "Alt", " ", "Alt", "Ctrl", "&#8592;", "&#8595;", "&#8594;"];

let keyboardKeyRU_UpperCase = ["`ё", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "Backspace", 
"Tab", "Й", "Ц", "У", "К", "Е", "Н", "Г", "Ш", "Щ", "З", "Х", "Ъ", "Del",
"CapsLock", "Ф", "Ы", "В", "А", "П", "Р", "О", "Л", "Д", "Ж", "Э", "Enter", 
"Shift", "Я", "Ч", "С", "М", "И", "Т", "Ь", "Б", "Ю", "/", "&#8593;", "Shift",  
"Ctrl", "Win", "Alt", " ", "Alt", "Ctrl", "&#8592;", "&#8595;", "&#8594;"];

const special = ['Backspace', 'Tab', 'Delete', 'CapsLock', 'Enter', 'ShiftLeft', 'ArrowUp', 'ShiftRight', 'ControlLeft', 
                'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ControlRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight']

    function constructor() {
        const BODY = document.querySelector('body');
        let wrapper = document.createElement('div');
        wrapper.classList.add('wrapper')
        BODY.append(wrapper);
        const H1 = document.createElement('h1');
        H1.textContent = "Клавиатура создана на Windows 10";
        wrapper.append(H1);
        const keyboard = document.createElement('div');
        keyboard.classList.add('keyboard');
        wrapper.append(keyboard)

    let FLAG = [] = keyboardKeyEN;
    function Flag() {
        if(FLAG == keyboardKeyEN){
            FLAG = keyboardKeyEN_UpperCase;
            init();
        } else if (FLAG == keyboardKeyEN_UpperCase){
            FLAG = keyboardKeyEN;
            init();
        } else if (FLAG == keyboardKeyRU) {
            FLAG = keyboardKeyRU_UpperCase;
            init();
        } else if (FLAG == keyboardKeyRU_UpperCase) {
            FLAG = keyboardKeyRU;
            init();
        }
    }

    function Lang() {
        let flagAlt = false;
        let flagCtrl = false;
        let countLang = 1;
        document.querySelector('body').onkeydown = function(event) {
            // console.log(event);
            // code: "AltLeft"
            if (event.code == 'AltLeft') {
                flagAlt = true;
            } else if (event.code == 'ShiftLeft') {
                flagCtrl = true;
            }
        document.querySelector('html').onkeyup = function(event) {
            if (event.code == 'CapsLock') {
                Flag()
                }
            
            if (event.code == 'ShiftLeft' && flagAlt || event.code == 'AltLeft' && flagCtrl) {
                console.log('event');
                flagAlt = false;
                flagCtrl = false;
                if(FLAG == keyboardKeyEN){
                    FLAG = keyboardKeyRU;
                    init();
                } else if (FLAG == keyboardKeyEN_UpperCase){
                    FLAG = keyboardKeyRU_UpperCase;
                    init();
                } else if (FLAG == keyboardKeyRU) {
                    FLAG = keyboardKeyEN;
                    init();
                } else if (FLAG == keyboardKeyRU_UpperCase) {
                    FLAG = keyboardKeyEN_UpperCase;
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
            out += '<div class="key" data=" '+keyboardCode[i]+' " data2=" '+String(FLAG[i])+' ">'+String(FLAG[i])+'</div>'
        }
        document.querySelector('.keyboard').innerHTML = out;
        const textarea = document.createElement('textarea');
        textarea.setAttribute('placeholder', 'Для смены языка нажмите Shift + Alt');
        keyboard.prepend(textarea);
        const p = document.createElement('p');
        p.textContent = "Для смены языка нажмите Shift + Alt";
        keyboard.append(p)
    }
    init()



    function CLICK() {
        document.querySelectorAll('.keyboard .key').forEach(function(elem, i) {
                elem.onclick = function(event) {
                    document.querySelectorAll('.keyboard .key').forEach(function(el) {
                        el.classList.remove('active');
                        el.classList.remove('key:hover');
                    });
                    let code = this.getAttribute('data2');
                    this.classList.add('active');
                    if(typeof code == "string" && code.length == 3) {
                    document.querySelector('textarea').innerHTML += code.trim();
                    }
                }
        });
    }
    CLICK()


    function ONKEYUP() {
        document.onkeyup = function(e) {
            console.log(e.keyCode); // 
            document.querySelectorAll('.keyboard .key').forEach(function(el) {
                el.classList.remove('active');
            })
            document.querySelector('.keyboard .key[data=" '+e.code+' "]').classList.add('active');
        }
    }
    ONKEYUP()

}
constructor();
