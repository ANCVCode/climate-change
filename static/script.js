// /static/script.js

document.addEventListener('DOMContentLoaded', function() {
    // Dünya Modelini Döndürme
    const canvas = document.getElementById('earth');
    const context = canvas.getContext('2d');
    let angle = 0;

    function drawGlobe() {
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.fillStyle = 'blue';
        context.beginPath();
        context.arc(canvas.width / 2, canvas.height / 2, canvas.width / 2 - 5, 0, Math.PI * 2);
        context.closePath();
        context.fill();
        context.fillStyle = 'green';
        context.beginPath();
        context.arc(canvas.width / 2, canvas.height / 2, canvas.width / 4, angle, angle + Math.PI);
        context.closePath();
        context.fill();
        angle += 0.01;
        requestAnimationFrame(drawGlobe);
    }

    canvas.width = 500;
    canvas.height = 500;
    drawGlobe();

    // Kronoloji Çizgisi Slider
    const slider = document.getElementById('timeline-range');
    const timelinePoints = document.querySelectorAll('.timeline-point');

    slider.addEventListener('input', function() {
        timelinePoints.forEach(point => {
            if (point.dataset.year === slider.value) {
                point.style.display = 'block';
            } else {
                point.style.display = 'none';
            }
        });
    });

    // Varsayılan olarak en son yılı göster
    timelinePoints.forEach(point => {
        if (point.dataset.year === slider.value) {
            point.style.display = 'block';
        } else {
            point.style.display = 'none';
        }
    });
});
