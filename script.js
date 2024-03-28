/**
 * 
 * @author Laura Luque
 * @date 21/01/2024
 * @version 1.0
 */

{   
    const colores = ["#FFD700", "#FFB6C1", "#98FB98", "#DDA0DD", "#00CED1", "#FFA07A", "#FFDAB9", "#87CEFA", "#FFD700", "#98FB98", "#F08080", "#AFEEEE", "#FF6347", "#F0E68C", "#DA70D6", "#00FA9A", "#B0E0E6", "#FF69B4", "#D8BFD8", "#FFA500"];

    const init = function () {
        document.addEventListener('contextmenu', function (event) {
            event.preventDefault();
        })

        document.querySelectorAll('canvas').forEach(element => {
            element.addEventListener(element.id, cargarContextoCanvas.bind(element));
            cargarContextoCanvas.bind(element)();
        });
    }
    const cargarContextoCanvas = function (event) {
        let color;
        let contexto = this.getContext('2d');
        if (contexto) {
            do {
                color = colores[Math.floor(Math.random() * colores.length)];
            } while (this.dataset.color === color);
    
            this.dataset.color = color;
            contexto.fillStyle = color;
            contexto.fillRect(0, 0, 300, 300);
            contexto.font = "bold 1.5em sans-serif";
            contexto.fillStyle = 'black';
            contexto.textAlign = 'center';
            
            event && contexto.fillText(`(${event.offsetX}, ${event.offsetY})`, 70, 30);
            event && contexto.fillText(`(${event.button}, ${event.buttons})`, 70, 90);

            contexto.fillText(this.getAttribute("id"), 70, 140);
        }
    }

    document.addEventListener("DOMContentLoaded", init);
}