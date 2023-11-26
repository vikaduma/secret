const div = document.querySelector('.not-loaded');
const form = document.querySelector('.decor');
const section = document.querySelector('section');
let time;


function yesClick() {
  
window.alert("і я тебе люблю, бубік! Лови подаруночок)");
  
  
    // Видаляємо форму
    form.remove();

    const c = setTimeout(() => {
        document.body.classList.remove("not-loaded");
        clearTimeout(c);
    }, 1000);
};



function noClick() {
    const newDiv = document.createElement("div");
    newDiv.innerHTML = "<h2 style='color: #f69a73; z-index: 3; text-align: center;'>ну і йди нахуй, уїбан</h2>";
    newDiv.innerHTML += "<img style='z-index: 3; width: 50%; display: block; margin: auto;' src='https://i.pinimg.com/originals/af/c8/e6/afc8e6da7225216e9bc6aadfa334f9ba.jpg' />";
    document.body.appendChild(newDiv);
 
  section.appendChild(newDiv);
  newDiv.style.marginBottom = 'auto';
  newDiv.style.marginTop = 'auto';
    // Видаляємо форму
    form.remove();
}

const yesB = document.getElementById('yesB');
const noB = document.getElementById('noB');

yesB.addEventListener('click', yesClick);
noB.addEventListener('click', noClick);