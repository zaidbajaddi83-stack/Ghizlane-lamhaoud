document.getElementById("startBtn").addEventListener("click", function() {
    const music = document.getElementById("music");
    music.play();

    // إخفاء زر البداية وإظهار المشهد
    document.getElementById("start-screen").style.display = "none";
    const scene = document.getElementById("main-scene");
    scene.style.display = "flex";

    const text = "On dit que la vie est un voyage, et la présence d'une personne aussi distinguée et exceptionnelle que toi donne à ce voyage un sens plus beau et plus noble. Parce que tu mérites des vœux exceptionnels à ton image, j’ai conçu pour toi ce 'voyage spécial' à travers ce lien... Je te souhaite une nouvelle année pleine de paix, de succès et de surprises joyeuses qui ressemblent à la pureté de ton cœur. Joyeux anniversaire et reste toujours aussi rayonnante.";
    const target = document.getElementById("typing-text");
    let i = 0;

    function type() {
        if (i < text.length) {
            target.textContent += text.charAt(i);
            i++;
            setTimeout(type, 50); // سرعة الكتابة
        } else {
            // إظهار التوقيع بعد انتهاء النص
            gsap.to("#signature", { opacity: 1, duration: 1.5 });
        }
    }

    // حركة ظهور الصندوق ثم بدء الكتابة
    gsap.from(".letter-box", { opacity: 0, y: 30, duration: 1, onComplete: type });
});