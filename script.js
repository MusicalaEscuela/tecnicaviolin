// Efecto de escribir en el encabezado
document.addEventListener("DOMContentLoaded", function () {
    let text = "Técnica en el Violín";
    let index = 0;
    function typeWriter() {
        if (index < text.length) {
            document.querySelector(".typewriter").textContent += text.charAt(index);
            index++;
            setTimeout(typeWriter, 100);
        }
    }
    document.querySelector(".typewriter").textContent = "";
    typeWriter();
});

// Barra de progreso dinámica
window.onscroll = function () {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPercent = (scrollTop / scrollHeight) * 100;
    document.getElementById("progress-bar").style.width = scrollPercent + "%";
};
