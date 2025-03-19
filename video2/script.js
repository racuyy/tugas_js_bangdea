//implementasi javascript
document.title = "Video 2";
const body = document.body;
const btn1 = document.getElementById("btn1");
const btn = document.querySelector("button");

const defaulttext = "klik saya 1!";
btn1.textContent = defaulttext;

btn1.style.border = 'none';
btn1.style.padding = '10px';
btn1.style.fontSize = '24px';
btn1.style.backgroundColor = 'blue';

function clickbutton() {
    btn1.style.backgroundColor = 'aqua';
    const newtext = document.createElement("p");
    newtext.textContent = "halo apa kabar";
    body.append(newtext);
}

function ubahtext () {
    btn1.textContent = "hihi haha";
}

function oritext () {
    btn1.textContent = defaulttext;
}


//tugas disini pakai button ke 2
const btn2 = document.getElementById("btn2");

function  muncultext () {
    const newtext = document.createElement("p");
    newtext.textContent = "rafa hafiz iqbal s";
    body.append(newtext);
}

function gantiwarnatext () {
    const newtext = document.querySelector("p");
    newtext.style.color = 'red';
}