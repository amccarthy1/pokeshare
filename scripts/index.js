'use strict';

function setCode(code) {
    var code_length = document.getElementsByClassName('box').length;
    for (var i = 0; i < code_length && i < code.length; i++) {
        var box = document.getElementById('box-' + i);
        box.className = 'code-' + code[i];
    }
}

function updateCode() {
    var code = window.location.hash.substring(1);
    if (code.length == 0) {
        randomize()
    } else if (code.length != 3) {
        code = (code + '000').substring(0, 3);
        window.location.hash = '#' + code;
    } else {
        setCode(code)
    }
}

function randomDigit() {
    return (10*Math.random())|0;
}

function randomize() {
    var code = "#"
    for (var i = 0; i < 3; i++) {
        code = code + randomDigit();
    }
    window.location.hash = code;
}

function onLoad() {
    updateCode()
    document.getElementById('randomize').addEventListener('click', randomize);
}

window.addEventListener('load', onLoad);
window.addEventListener('hashchange', updateCode);