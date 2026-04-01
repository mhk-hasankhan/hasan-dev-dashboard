const words = ["PHP (Symfony)", "C# (.NET)", "Machine Learning"];
let i = 0, j = 0;

function type() {
    if (j < words[i].length) {
        document.getElementById("typing").innerHTML += words[i][j];
        j++;
        setTimeout(type, 50);
    } else {
        setTimeout(() => {
            document.getElementById("typing").innerHTML = "";
            j = 0;
            i = (i + 1) % words.length;
            type();
        }, 1500);
    }
}
type();

let input = [];

function press(n) {
    input.push(n);

    if (input.length === 3) {
        if (input.join("") === "123") {
            window.location.href = "/files/Hasan_Khan.pdf";
        } else {
            alert("Wrong pattern");
        }
        input = [];
    }
}

setInterval(() => {
    let bug = document.createElement("div");
    bug.innerText = "🐞";
    bug.style.position = "fixed";
    bug.style.top = Math.random() * window.innerHeight + "px";
    bug.style.left = Math.random() * window.innerWidth + "px";
    bug.style.cursor = "pointer";

    bug.onclick = () => {
        alert("Bug squashed! Resolution improved by 20%");
        bug.remove();
    };

    document.body.appendChild(bug);
}, 8000);