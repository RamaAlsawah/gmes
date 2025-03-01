document.addEventListener("DOMContentLoaded", function () {
    console.log("Script loaded!");

    // إعدادات canvas
    const canvas = document.getElementById("gameCanvas");
    const ctx = canvas.getContext("2d");
    canvas.width = 600;
    canvas.height = 400;

    // اللاعب
    let player = {
        x: canvas.width / 2,
        y: canvas.height / 2,
        size: 20,
        speed: 5
    };

    // إضافة حدث للمفاتيح
    window.addEventListener("keydown", (event) => {
        switch (event.key) {
            case "ArrowUp":
                player.y += player.speed; // الحركة للأعلى تؤدي إلى النزول
                break;
            case "ArrowDown":
                player.y -= player.speed; // الحركة للأسفل تؤدي إلى الصعود
                break;
            case "ArrowLeft":
                player.x += player.speed; // الحركة لليسار تؤدي إلى الذهاب لليمين
                break;
            case "ArrowRight":
                player.x -= player.speed; // الحركة لليمين تؤدي إلى الذهاب لليسار
                break;
        }
    });

    // رسم اللاعب
    function drawPlayer() {
        ctx.fillStyle = "red";
        ctx.fillRect(player.x, player.y, player.size, player.size);
    }

    // تحديث اللعبة
    function updateGame() {
        ctx.clearRect(0, 0, canvas.width, canvas.height); // مسح الشاشة
        drawPlayer(); // رسم اللاعب
        requestAnimationFrame(updateGame); // تحديث مستمر
    }

    // بدء اللعبة
    updateGame();
});
