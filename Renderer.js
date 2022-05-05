const { ipcRenderer } = require("electron")

window.addEventListener("DOMContentLoaded", () => {
    // Close Button
    document.getElementById("closebtn").addEventListener("click", () => {ipcRenderer.send("closeaction")})
    // Max Button
    document.getElementById("maxbtn").addEventListener("click", () => {ipcRenderer.send("maxaction")})
    // Min Button
    document.getElementById("minbtn").addEventListener("click", () => {ipcRenderer.send("minaction")})

    // X or O Value
    let Dynamic_Value = true
    let X_SCORE = 0
    let Y_SCORE = 0

    // Checker
    const Checker = () => {

        //  For X Value in Line
        if(document.getElementById("btn1").innerHTML == "X" && document.getElementById("btn2").innerHTML == "X" && document.getElementById("btn3").innerHTML == "X"){
            document.getElementById("btn1").setAttribute("style","background-color:red;color:white")
            document.getElementById("btn2").setAttribute("style","background-color:red;color:white")
            document.getElementById("btn3").setAttribute("style","background-color:red;color:white")
            document.getElementById("x_player").value = (X_SCORE+1)
            X_SCORE += 1
            Dynamic_Value = undefined
        }
        if(document.getElementById("btn4").innerHTML == "X" && document.getElementById("btn5").innerHTML == "X" && document.getElementById("btn6").innerHTML == "X"){
            document.getElementById("btn4").setAttribute("style","background-color:red;color:white")
            document.getElementById("btn5").setAttribute("style","background-color:red;color:white")
            document.getElementById("btn6").setAttribute("style","background-color:red;color:white")
            document.getElementById("x_player").value = (X_SCORE+1)
            X_SCORE += 1
            Dynamic_Value = undefined
        }
        if(document.getElementById("btn7").innerHTML == "X" && document.getElementById("btn8").innerHTML == "X" && document.getElementById("btn9").innerHTML == "X"){
            document.getElementById("btn7").setAttribute("style","background-color:red;color:white")
            document.getElementById("btn8").setAttribute("style","background-color:red;color:white")
            document.getElementById("btn9").setAttribute("style","background-color:red;color:white")
            document.getElementById("x_player").value = (X_SCORE+1)
            X_SCORE += 1
            Dynamic_Value = undefined
        }
        if(document.getElementById("btn1").innerHTML == "X" && document.getElementById("btn4").innerHTML == "X" && document.getElementById("btn7").innerHTML == "X"){
            document.getElementById("btn1").setAttribute("style","background-color:red;color:white")
            document.getElementById("btn4").setAttribute("style","background-color:red;color:white")
            document.getElementById("btn7").setAttribute("style","background-color:red;color:white")
            document.getElementById("x_player").value = (X_SCORE+1)
            X_SCORE += 1
            Dynamic_Value = undefined
        }
        if(document.getElementById("btn2").innerHTML == "X" && document.getElementById("btn5").innerHTML == "X" && document.getElementById("btn8").innerHTML == "X"){
            document.getElementById("btn2").setAttribute("style","background-color:red;color:white")
            document.getElementById("btn5").setAttribute("style","background-color:red;color:white")
            document.getElementById("btn8").setAttribute("style","background-color:red;color:white")
            document.getElementById("x_player").value = (X_SCORE+1)
            X_SCORE += 1
            Dynamic_Value = undefined
        }
        if(document.getElementById("btn3").innerHTML == "X" && document.getElementById("btn6").innerHTML == "X" && document.getElementById("btn9").innerHTML == "X"){
            document.getElementById("btn3").setAttribute("style","background-color:red;color:white")
            document.getElementById("btn6").setAttribute("style","background-color:red;color:white")
            document.getElementById("btn9").setAttribute("style","background-color:red;color:white")
            document.getElementById("x_player").value = (X_SCORE+1)
            X_SCORE += 1
            Dynamic_Value = undefined
        }
        if(document.getElementById("btn1").innerHTML == "X" && document.getElementById("btn5").innerHTML == "X" && document.getElementById("btn9").innerHTML == "X"){
            document.getElementById("btn1").setAttribute("style","background-color:red;color:white")
            document.getElementById("btn5").setAttribute("style","background-color:red;color:white")
            document.getElementById("btn9").setAttribute("style","background-color:red;color:white")
            document.getElementById("x_player").value = (X_SCORE+1)
            X_SCORE += 1
            Dynamic_Value = undefined
        }
        if(document.getElementById("btn3").innerHTML == "X" && document.getElementById("btn5").innerHTML == "X" && document.getElementById("btn7").innerHTML == "X"){
            document.getElementById("btn3").setAttribute("style","background-color:red;color:white")
            document.getElementById("btn5").setAttribute("style","background-color:red;color:white")
            document.getElementById("btn7").setAttribute("style","background-color:red;color:white")
            document.getElementById("x_player").value = (X_SCORE+1)
            X_SCORE += 1
            Dynamic_Value = undefined
        }

        //  For o Value in Line
        if(document.getElementById("btn1").innerHTML == "O" && document.getElementById("btn2").innerHTML == "O" && document.getElementById("btn3").innerHTML == "O"){
            document.getElementById("btn1").setAttribute("style","background-color:aqua;color:black")
            document.getElementById("btn2").setAttribute("style","background-color:aqua;color:black")
            document.getElementById("btn3").setAttribute("style","background-color:aqua;color:black")
            document.getElementById("y_player").value = (Y_SCORE+1)
            Y_SCORE += 1
            Dynamic_Value = undefined
        }
        if(document.getElementById("btn4").innerHTML == "O" && document.getElementById("btn5").innerHTML == "O" && document.getElementById("btn6").innerHTML == "O"){
            document.getElementById("btn4").setAttribute("style","background-color:aqua;color:black")
            document.getElementById("btn5").setAttribute("style","background-color:aqua;color:black")
            document.getElementById("btn6").setAttribute("style","background-color:aqua;color:black")
            document.getElementById("y_player").value = (Y_SCORE+1)
            Y_SCORE += 1
            Dynamic_Value = undefined
        }
        if(document.getElementById("btn7").innerHTML == "O" && document.getElementById("btn8").innerHTML == "O" && document.getElementById("btn9").innerHTML == "O"){
            document.getElementById("btn7").setAttribute("style","background-color:aqua;color:black")
            document.getElementById("btn8").setAttribute("style","background-color:aqua;color:black")
            document.getElementById("btn9").setAttribute("style","background-color:aqua;color:black")
            document.getElementById("y_player").value = (Y_SCORE+1)
            Y_SCORE += 1
            Dynamic_Value = undefined
        }
        if(document.getElementById("btn1").innerHTML == "O" && document.getElementById("btn4").innerHTML == "O" && document.getElementById("btn7").innerHTML == "O"){
            document.getElementById("btn1").setAttribute("style","background-color:aqua;color:black")
            document.getElementById("btn4").setAttribute("style","background-color:aqua;color:black")
            document.getElementById("btn7").setAttribute("style","background-color:aqua;color:black")
            document.getElementById("y_player").value = (Y_SCORE+1)
            Y_SCORE += 1
            Dynamic_Value = undefined
        }
        if(document.getElementById("btn2").innerHTML == "O" && document.getElementById("btn5").innerHTML == "O" && document.getElementById("btn8").innerHTML == "O"){
            document.getElementById("btn2").setAttribute("style","background-color:aqua;color:black")
            document.getElementById("btn5").setAttribute("style","background-color:aqua;color:black")
            document.getElementById("btn8").setAttribute("style","background-color:aqua;color:black")
            document.getElementById("y_player").value = (Y_SCORE+1)
            Y_SCORE += 1
            Dynamic_Value = undefined
        }
        if(document.getElementById("btn3").innerHTML == "O" && document.getElementById("btn6").innerHTML == "O" && document.getElementById("btn9").innerHTML == "O"){
            document.getElementById("btn3").setAttribute("style","background-color:aqua;color:black")
            document.getElementById("btn6").setAttribute("style","background-color:aqua;color:black")
            document.getElementById("btn9").setAttribute("style","background-color:aqua;color:black")
            document.getElementById("y_player").value = (Y_SCORE+1)
            Y_SCORE += 1
            Dynamic_Value = undefined
        }
        if(document.getElementById("btn1").innerHTML == "O" && document.getElementById("btn5").innerHTML == "O" && document.getElementById("btn9").innerHTML == "O"){
            document.getElementById("btn1").setAttribute("style","background-color:aqua;color:black")
            document.getElementById("btn5").setAttribute("style","background-color:aqua;color:black")
            document.getElementById("btn9").setAttribute("style","background-color:aqua;color:black")
            document.getElementById("y_player").value = (Y_SCORE+1)
            Y_SCORE += 1
            Dynamic_Value = undefined
        }
        if(document.getElementById("btn3").innerHTML == "O" && document.getElementById("btn5").innerHTML == "O" && document.getElementById("btn7").innerHTML == "O"){
            document.getElementById("btn3").setAttribute("style","background-color:aqua;color:black")
            document.getElementById("btn5").setAttribute("style","background-color:aqua;color:black")
            document.getElementById("btn7").setAttribute("style","background-color:aqua;color:black")
            document.getElementById("y_player").value = (Y_SCORE+1)
            Y_SCORE += 1
            Dynamic_Value = undefined
        }
    }

    let Buttons = document.getElementsByClassName("gamebtn")
    for (let index = 0; index < Buttons.length; index++) {
        Buttons[index].addEventListener("click", () => {
            if(Dynamic_Value == true && Buttons[index].innerHTML == ""){
                Buttons[index].innerHTML = "X"
                Dynamic_Value = false
                document.getElementById("player").innerHTML = "Player O"
                Checker()
            }
            else if(Dynamic_Value == false && Buttons[index].innerHTML == ""){
                Buttons[index].innerHTML = "O"
                Dynamic_Value = true
                document.getElementById("player").innerHTML = "Player X"
                Checker()
            }
        })
    }

    // New Game
    document.getElementById("newgamebtn").addEventListener("click", () => {
        document.getElementById("btn1").innerHTML = ""
        document.getElementById("btn2").innerHTML = ""
        document.getElementById("btn3").innerHTML = ""
        document.getElementById("btn4").innerHTML = ""
        document.getElementById("btn5").innerHTML = ""
        document.getElementById("btn6").innerHTML = ""
        document.getElementById("btn7").innerHTML = ""
        document.getElementById("btn8").innerHTML = ""
        document.getElementById("btn9").innerHTML = ""
        document.getElementById("btn1").setAttribute("style","background-color:#efefef;color:black")
        document.getElementById("btn2").setAttribute("style","background-color:#efefef;color:black")
        document.getElementById("btn3").setAttribute("style","background-color:#efefef;color:black")
        document.getElementById("btn4").setAttribute("style","background-color:#efefef;color:black")
        document.getElementById("btn5").setAttribute("style","background-color:#efefef;color:black")
        document.getElementById("btn6").setAttribute("style","background-color:#efefef;color:black")
        document.getElementById("btn7").setAttribute("style","background-color:#efefef;color:black")
        document.getElementById("btn8").setAttribute("style","background-color:#efefef;color:black")
        document.getElementById("btn9").setAttribute("style","background-color:#efefef;color:black")
        Dynamic_Value = true
        document.getElementById("player").innerHTML = "Player X"
    })

    // Reset Game
    document.getElementById("resetgamebtn").addEventListener("click", () => {
        document.getElementById("btn1").innerHTML = ""
        document.getElementById("btn2").innerHTML = ""
        document.getElementById("btn3").innerHTML = ""
        document.getElementById("btn4").innerHTML = ""
        document.getElementById("btn5").innerHTML = ""
        document.getElementById("btn6").innerHTML = ""
        document.getElementById("btn7").innerHTML = ""
        document.getElementById("btn8").innerHTML = ""
        document.getElementById("btn9").innerHTML = ""
        document.getElementById("btn1").setAttribute("style","background-color:#efefef;color:black")
        document.getElementById("btn2").setAttribute("style","background-color:#efefef;color:black")
        document.getElementById("btn3").setAttribute("style","background-color:#efefef;color:black")
        document.getElementById("btn4").setAttribute("style","background-color:#efefef;color:black")
        document.getElementById("btn5").setAttribute("style","background-color:#efefef;color:black")
        document.getElementById("btn6").setAttribute("style","background-color:#efefef;color:black")
        document.getElementById("btn7").setAttribute("style","background-color:#efefef;color:black")
        document.getElementById("btn8").setAttribute("style","background-color:#efefef;color:black")
        document.getElementById("btn9").setAttribute("style","background-color:#efefef;color:black")
        Dynamic_Value = true
        document.getElementById("x_player").value = ""
        document.getElementById("y_player").value = ""
        X_SCORE = 0
        Y_SCORE = 0
        document.getElementById("player").innerHTML = "Player X"
    })
})