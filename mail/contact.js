const recetas = {
    "Carlota de Limón": {
        "jugo de limón (ml)": 20,
        "Lechera (g)": 66,
        "Clavel (ml)": 59,
        "galletas marías (g)": 57
    },
    "Cupcakes": {
        "harina de chocolate (g)": 36,
        "huevo (g y u)": { gramos: 12.5, unidades: 0.25 }, // 1 huevo = 50 g
        "aceite (ml)": 10,
        "agua (ml)": 20,
        "Chantillí (ml)": 41.67, 
        "Colorante vegetal (gotas)": 0.5,
        "Betún preparado (g)": 41.67,
        "chispas de colores/chocolate (g)": 15
    },
    "Panqué de Naranja": {
        "azúcar (g)": 25,
        "ralladura de naranja (u)": 0.33,
        "huevo (g y u)": { gramos: 16.67, unidades: 0.33 }, // 2 huevos = 100 g
        "aceite (ml)": 18.67,
        "yogurt (g)": 10,
        "jugo de naranja (ml)": 20,
        "harina (g)": 26.67,
        "fécula de maíz (g)": 3.33,
        "polvo para hornear (g)": 2.5
    },
    "Galletas con Chispas de Chocolate": {
        "mantequilla (g)": 40,
        "azúcar morena/parda (g)": 40,
        "azúcar blanca (g)": 26.67,
        "sal (g)": 0.83,
        "huevo (g y u)": { gramos: 8.33, unidades: 0.17 }, // 1 huevo = 50 g
        "maicena (g)": 2.67,
        "polvo para hornear (g)": 2.5,
        "bicarbonato (g)": 2.5,
        "harina (g)": 133.33,
        "chispas de chocolate (g)": 100
    }
};

function calcularIngredientes() {
    const postre = document.getElementById('postre').value;
    const porciones = parseInt(document.getElementById('porciones').value);
    const ingredientes = recetas[postre];

    let resultado = `<h3>Ingredientes para ${porciones} porciones de ${postre}:</h3><ul>`;
    for (const ingrediente in ingredientes) {
        const cantidad = ingredientes[ingrediente];
        if (typeof cantidad === 'object' && 'gramos' in cantidad && 'unidades' in cantidad) {
            const gramos = (cantidad.gramos * porciones).toFixed(2);
            const unidades = (cantidad.unidades * porciones).toFixed(2);
            resultado += `<li>${ingrediente}: ${gramos} g (${unidades} huevo${unidades > 1 ? 's' : ''})</li>`;
        } else {
            resultado += `<li>${ingrediente}: ${(cantidad * porciones).toFixed(2)}</li>`;
        }
    }
    resultado += `</ul>`;
    document.getElementById('resultado').innerHTML = resultado;
}