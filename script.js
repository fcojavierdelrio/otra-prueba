const form = document.getElementById('multiStepForm');
const numeroPaletasInput = document.getElementById('numeroPaletas');
const matriculaCamionInput = document.getElementById('matriculaCamion');
const formTitle = document.getElementById('formTitle');
let currentStep = 1;

form.addEventListener('submit', function (e) {
    e.preventDefault();

    if (currentStep === 1) {
        const numeroPaletas = numeroPaletasInput.value.trim();
        if (numeroPaletas === "" || parseInt(numeroPaletas) <= 0) {
            alert("Por favor, ingrese un número válido de paletas.");
            return;
        }

        currentStep = 2;
        numeroPaletasInput.style.display = "none";
        matriculaCamionInput.style.display = "block";
        matriculaCamionInput.setAttribute('required', true);
        formTitle.textContent = "Ingrese la Matrícula del Camión";
        matriculaCamionInput.focus();
    } else if (currentStep === 2) {
        const matriculaCamion = matriculaCamionInput.value.trim();
        if (matriculaCamion === "") {
            alert("Por favor, ingrese una matrícula válida.");
            return;
        }

        insertRow({
            PALETAS: numeroPaletasInput.value,
            MATRICULA: matriculaCamion
        });
        alert(`Número de paletas: ${numeroPaletasInput.value}\nMatrícula del camión: ${matriculaCamion}`);

        form.reset();
        currentStep = 1;
        matriculaCamionInput.style.display = "none";
        matriculaCamionInput.removeAttribute('required');
        numeroPaletasInput.style.display = "block";
        formTitle.textContent = "Ingrese el Número de Paletas";
    }
});