document.addEventListener('DOMContentLoaded', () => {
    const text1 = document.getElementById('text1');
    const text2 = document.getElementById('text2');
    const caja2 = document.getElementById('caja2');
    const img = document.getElementById('img');
    const caja3 = document.getElementById('caja3');

    // Mostrar y ocultar el segundo <div> al pasar el mouse por el primer <div>
    text1.addEventListener('mouseover', () => {
        text2.classList.remove('hidden');
    });

    text1.addEventListener('mouseout', () => {
        text2.classList.add('hidden');
    });

    // Agrandar la imagen al hacer clic en el <div> id "caja2" y volver a su tamaño inicial al salir
    caja2.addEventListener('click', () => {
        img.classList.add('enlarged');
    });

    caja2.addEventListener('mouseleave', () => {
        img.classList.remove('enlarged');
    });

    // Agrandar el texto al hacer doble clic en el <div> id "caja3"
    caja3.addEventListener('dblclick', () => {
        caja3.classList.toggle('large-text');
    });
});
