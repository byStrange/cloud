HTMLElement.prototype.replace = function replace(tg) {
  this.innerHTML = this.textContent.replace(/[a-zA-z]/g, `<${tg}>$&</${tg}>`);
  let bugs = document.querySelectorAll(tg);
  for (bad of bugs) {
    if (!bad.innerText) bad.innerHTML = "&nbsp";
  }
};
let text = document.querySelector(".first");
let text2 = document.querySelector(".second");
let text3 = document.querySelector(".third");
let text4 = document.querySelector(".fourth");
let btn = document.querySelectorAll("button");
for (let i = 0; i < btn.length; i++) {
  btn[i].onclick = function () {
    if (i == 0) {
      btn[0].style.display = "none";
      btn[1].style.display = "initial";
      btn[2].style.display = "initial";
      btn[3].style.display = "initial";
      first();
    } else if (i == 1) {
      btn[0].style.display = "initial";
      btn[1].style.display = "none";
      btn[2].style.display = "initial";
      btn[3].style.display = "initial";
      second();
    } else if (i == 2) {
      btn[0].style.display = "initial";
      btn[1].style.display = "initial";
      btn[2].style.display = "none";
      btn[3].style.display = "initial";
      third();
    } else if (i == 3) {
      btn[0].style.display = "initial";
      btn[1].style.display = "initial";
      btn[2].style.display = "initial";
      btn[3].style.display = "none";
      fourth();
    }
  };
}
text.replace("b");
text2.replace("u");
text3.replace("i");
text4.replace("d");
first();
function first() {
  // body...
  document.querySelector(".second").style.display = " none";
  document.querySelector(".fourth").style.display = " none";
  document.querySelector(".third").style.display = " none";
  document.querySelector(".first").style.display = "initial";

  let a = anime
    .timeline({
      loop: true
    })
    .add({
      targets: "b",
      scale: [0, 1],
      translateY: 0,
      translateX: 0,
      rotate: 0,
      opacity: [1, 1],
      delay: anime.stagger(100)
    })
    .add({
      targets: "b",
      translateX: 20,
      rotate: 15,
      delay: anime.stagger(100)
    })
    .add({
      targets: "b",
      translateY: -20,
      rotate: 0,
      delay: anime.stagger(100)
    })
    .add({
      targets: "b",
      translateY: -40,
      rotate: 15,
      delay: anime.stagger(100)
    })
    .add({
      targets: "b",
      translateY: -60,
      rotate: 0,
      opacity: [1, 0],
      delay: anime.stagger(100)
    })
    .add({
      targets: "b",
      translateY: 0,
      opacity: [0, 1],
      delay: anime.stagger(100)
    })
    .add({
      targets: "b",
      scale: 0,
      delay: anime.stagger(100)
    });
}

function second() {
  // body...
  document.querySelector(".first").style.display = "none";
  document.querySelector(".fourth").style.display = "none";
  document.querySelector(".third").style.display = "none";
  document.querySelector(".second").style.display = "initial";
  let a = anime
    .timeline({
      loop: true,
      delay: anime.stagger(100)
    })
    .add({
      targets: "u",
      rotate: 0,
      translateX: function () {
        return anime.random(-600, 600);
      },
      scale: 1,
      opacity: [1, 0],
      translateY: [
        500,
        function () {
          return anime.random(-600, 600);
        }
      ]
    })
    .add({
      targets: "u",
      translateX: 0,
      translateY: 0,
      easing: "easeOutExpo",
      opacity: 1
    });
}

function third() {
  document.querySelector(".first").style.display = "none";
  document.querySelector(".fourth").style.display = "none";
  document.querySelector(".third").style.display = "initial";
  document.querySelector(".second").style.display = "none";
  anime
    .timeline({
      loop: true
    })
    .add({
      targets: "i",
      delay: anime.stagger(100),
      translateY: [1000, -40],
      opacity: [0, 1],
      scale: [4, 1]
    })
    .add({
      targets: "i",
      delay: anime.stagger(100),
      skew: 2,
      rotate: 90
    })
    .add({
      targets: "i",
      delay: anime.stagger(100),
      skew: 0,
      translateY: 0
    })
    .add({
      targets: "i",
      rotate: 0,
      delay: anime.stagger(100)
    })
    .add({
      targets: "i",
      delay: anime.stagger(100),
      rotateY: 180
    })
    .add({
      targets: "i",
      delay: anime.stagger(100),
      rotateX: 180
    })
    .add({
      targets: "i",
      delay: anime.stagger(100),
      rotateY: 0
    })
    .add({
      targets: "i",
      delay: anime.stagger(100),
      rotateX: 0
    })
    .add({
      targets: "i",
      delay: anime.stagger(100),
      translateY: 1000,
      opacity: 0,
      scale: [1, 3]
    });
}

function fourth() {
  document.querySelector(".first").style.display = "none";
  document.querySelector(".fourth").style.display = "initial";
  document.querySelector(".third").style.display = "none";
  document.querySelector(".second").style.display = "none";
  anime
    .timeline({
      loop: true
    })
    .add({
      targets: "d",
      opacity: 0,
      delay: anime.stagger(110)
    });
}
