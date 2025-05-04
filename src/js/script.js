


// BUTTON1.addEventListener("click", function ()
// {
//     window.alert("Registracija ir pieniemta");
// })









document.getElementById("button_reg").addEventListener("click", function(event) {
    event.preventDefault(); 
    document.getElementById("download").scrollIntoView({ behavior: "smooth" });
});


document.getElementById("scrol1").addEventListener("click", function(event) {
    event.preventDefault(); 
    document.getElementById("how-to-play").scrollIntoView({ behavior: "smooth" });
});

document.getElementById("scrol2").addEventListener("click", function(event) {
    event.preventDefault(); 
    document.getElementById("rules-text").scrollIntoView({ behavior: "smooth" });
});

document.addEventListener("DOMContentLoaded", function () {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        item.addEventListener('click', () => {
            // Закрываем все
            faqItems.forEach(i => {
                if (i !== item) i.classList.remove('active');
            });

            // Переключаем текущий
            item.classList.toggle('active');
        });
    });
});


// Кнопка "наверх"
const btnUp = {
    el: document.querySelector('.btn-up'),
    scrolling: false,
    show() {
        if (this.el.classList.contains('btn-up_hide') && !this.el.classList.contains('btn-up_hiding')) {
            this.el.classList.remove('btn-up_hide');
            this.el.classList.add('btn-up_hiding');
            window.setTimeout(() => {
                this.el.classList.remove('btn-up_hiding');
            }, 300);
        }
    },
    hide() {
        if (!this.el.classList.contains('btn-up_hide') && !this.el.classList.contains('btn-up_hiding')) {
            this.el.classList.add('btn-up_hiding');
            window.setTimeout(() => {
                this.el.classList.add('btn-up_hide');
                this.el.classList.remove('btn-up_hiding');
            }, 300);
        }
    },
    addEventListener() {
        window.addEventListener('scroll', () => {
            const scrollY = window.scrollY || document.documentElement.scrollTop;
            scrollY > 400 ? this.show() : this.hide();
        });
    }
};

// Обработчик клика по кнопке "наверх"
btnUp.el.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// Запускаем прослушивание прокрутки
btnUp.addEventListener();


function triggerDownload(fileName) {
  const element = document.createElement('a');
  element.setAttribute('href', fileName);
  element.setAttribute('download', fileName);
  element.style.display = 'none';
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
}

