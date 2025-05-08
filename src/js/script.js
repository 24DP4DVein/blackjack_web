


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
    document.getElementById("ka_spelet").scrollIntoView({ behavior: "smooth" });
});

document.getElementById("scrol2").addEventListener("click", function(event) {
    event.preventDefault(); 
    document.getElementById("rules-text").scrollIntoView({ behavior: "smooth" });
});

document.addEventListener("DOMContentLoaded", function () {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        item.addEventListener('click', () => {
            
            faqItems.forEach(i => {
                if (i !== item) i.classList.remove('active');
            });

            
            item.classList.toggle('active');
        });
    });
});



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


btnUp.el.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});


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

window.onload = function() {
    document.getElementById('ageModal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('ageModal').style.display = 'none';
}

function redirectToYoutube() {
    window.location.href = 'https://youtu.be/dQw4w9WgXcQ?si=m9lTZXHQs-EQWB99';
}
