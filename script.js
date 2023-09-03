let password_input_length = document.querySelector("#password-length");
let output = document.querySelector(".display-output input");
let display_input_length = document.querySelector(".password-label h3 span");
let generate_btn = document.querySelector(".generate-btn");
let options = document.querySelectorAll(".options input");
let strength_display = document.querySelector(".strength p");
let copy_icon=document.querySelector(".display-output span")
let pass_len = 5;
let ans;

const capital_characters =
    ['A', 'B', 'C', 'D', 'E', 'F', 'G',
        'H', 'I', 'J', 'K', 'L', 'M', 'N',
        'O', 'P', 'Q', 'R', 'S', 'T', 'U',
        'V', 'W', 'X', 'Y', 'Z'];
const small_characters =
    ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
        'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p',
        'q', 'r', 's', 't', 'u', 'v', 'w', 'x',
        'y', 'z'];
const numbers =
    ['0', '1', '2', '3',
        '4', '5', '6', '7',
        '8', '9'];
const symbols =
    ["!", "@", "#", "$", "%", "^", "&", "*", ";", ":",
        ",", ".", "?", "/"];

const indx = [capital_characters, small_characters, numbers, symbols];



password_input_length.addEventListener("change", () => {
    display_input_length.innerText = password_input_length.value;
    pass_len = password_input_length.value;
})



// button click eventListener

generate_btn.addEventListener("click", () => {
    
    let refrence = [];
    let v = 0;
    for (let i = 0; i < options.length; i++) {
        if (options[i].checked) {
            v++;
            refrence.push(...indx[i]);
        }
    }

    console.log(refrence);

    ans = "";

    if (!refrence.length) {
        ans += "error : no selections";
    }
    else {
        for (let j = 0; j < pass_len; j++) {
            let r = Math.floor(Math.random() * (refrence.length - 0 - 1)) + 0 + 1;
            ans += refrence[r];
        }
    }

    console.log(ans);
    output.value = ans;

    if ((pass_len > 5 && v > 1) || ((v == 1) && pass_len > 7)) {
        strength_display.style.backgroundColor = "#39FF14";
        strength_display.style.boxShadow = "0px 0px 10px #39FF14";
    }
    else {
        strength_display.style.backgroundColor = "red";
        strength_display.style.boxShadow = "0px 0px 10px red";
    }

});


copy_icon.onclick = () =>
{
    navigator.clipboard.writeText(ans);
}




