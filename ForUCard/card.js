/* =====================================
   OPEN CARD
===================================== */

function openCard() {

    const front =
        document.getElementById("front");

    const message =
        document.getElementById("message");


    front.style.display = "none";

    message.style.display = "block";


    celebrate();
}


/* =====================================
   CELEBRATE
===================================== */

function celebrate() {

    const emojis = [
        "💗",
        "🌸",
        "✨",
        "💕",
        "🌷"
    ];


    for (let i = 0; i < 20; i++) {

        const item =
            document.createElement("div");


        item.className =
            "confetti";


        item.textContent =
            emojis[
                Math.floor(
                    Math.random() *
                    emojis.length
                )
            ];


        item.style.left =
            Math.random() * 100 + "vw";


        item.style.animationDelay =
            Math.random() * 1.2 + "s";


        document.body.appendChild(item);


        setTimeout(() => {

            item.remove();

        }, 4000);
    }
}


/* =====================================
   OPEN GIFT
===================================== */

function openGift() {

    const message =
        document.getElementById("message");

    const gift =
        document.getElementById("gift");


    message.style.display = "none";

    gift.style.display = "block";


    bloomFlowers();

    celebrate();
}


/* =====================================
   BOUQUET ANIMATION
===================================== */

function bloomFlowers() {

    const flowers =
        document.querySelectorAll(
            ".bouquet span"
        );


    flowers.forEach(
        (flower, index) => {

            setTimeout(() => {

                flower.classList.add("bloom");

            }, index * 300);

        }
    );
}


/* =====================================
   FIREFLIES
===================================== */

function createFireflies() {

    const container =
        document.getElementById(
            "fireflies"
        );


    const amount = 35;


    for (let i = 0; i < amount; i++) {

        const firefly =
            document.createElement("span");


        firefly.className =
            "firefly";


        firefly.style.left =
            Math.random() * 100 + "%";


        firefly.style.top =
            Math.random() * 100 + "%";


        firefly.style.setProperty(
            "--duration",
            (4 + Math.random() * 5) + "s"
        );


        firefly.style.setProperty(
            "--move-x",
            (-100 + Math.random() * 200) + "px"
        );


        firefly.style.animationDelay =
            Math.random() * 5 + "s";


        container.appendChild(
            firefly
        );
    }
}


/* =====================================
   START
===================================== */

createFireflies();