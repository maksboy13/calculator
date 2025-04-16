let text = document.getElementById("res") // сам текст

// первое и второе число
let num1 = ""
let num2 = ""
now = 1

// кнопки
let buttons = document.querySelectorAll("button")


// привязка функции
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function() {
        calc(buttons[i].innerHTML);
    });
}


// сама функция
function calc (sym) {
    // определение символа
    switch (sym) {
        case "=":  // равно
            text.innerHTML = eval(text.innerHTML);
            num1 = text.innerHTML;
            num2 = ""
            break;
        case "AC":  // убрать символ
            text.innerHTML = text.innerHTML.slice(0, -1);
            if (text.innerHTML == "") {text.innerHTML = "0"}
            break;
        case "C":  // очистить
            text.innerHTML = "0";
            now = 1;
            num1 = "";
            num2 = "";
            break;
        default:  // остальное
            switch (sym) {
                case "+":
                case "*":
                case "/":
                    if (text.innerHTML != "0") {
                        if (
                            text.innerHTML.includes("+") ||
                            text.innerHTML.includes("-") ||
                            text.innerHTML.includes("*") ||
                            text.innerHTML.includes("/")
                        ) {  // если уже есть
                            if (num2 == "") {
                                console.log(text.innerHTML.charAt(text.innerHTML.length - 3));
                                text.innerHTML = text.innerHTML.replace(text.innerHTML.charAt(text.innerHTML.length - 2), sym)
                            } else {
                                if (num2 != "-") {
                                    console.log(num2);
                                    text.innerHTML = eval(text.innerHTML);
                                    num2 = "";
                                    num1 = text.innerHTML;
                                    text.innerHTML += " " + sym + " ";
                                }
                                
                            }
                        } else {text.innerHTML += " " + sym + " "; now = 2} // если нет
                    }
                    break;
                case "-": //  минус
                    if (text.innerHTML == "0") { // если пусто
                        text.innerHTML = sym;
                        num1 += sym;
                    } else {
                        if (now == 1) {   // если надо оператор
                            console.log(now);
                            text.innerHTML += " " + sym + " "; 
                            now = 2;
                        } else {
                            if (num2 == "") { // если второе число
                                text.innerHTML += sym;
                                num2 += sym
                            }
                        }
                    }
                    break;
                case "." :  // запятая
                    switch (now) {
                        case 1 :  // в первом числе
                            if (!(text.innerHTML.includes("."))) {
                                text.innerHTML += sym;
                                if (num1 == "") {num1 = "0";}
                                num1 += sym;
                            }
                            break;
                        case 2 :  // во втором числе
                            if (!(num2.includes("."))) {
                                if (num2 == "") {text.innerHTML += "0"; num2 += "0"}
                                text.innerHTML += sym;
                                num2 += sym;
                            }
                    }
                    break;
                default: {  // цифры
                    if (text.innerHTML == "0") {
                        text.innerHTML = ""; // убираем ноль
                    };
                    text.innerHTML += sym;
                    switch (now) {  // к какому приписываем
                        case 1 :
                            num1 += sym;
                            break;
                        case 2 :
                            num2 += sym;
                            break;
                    }
                }
            }
    }
}




