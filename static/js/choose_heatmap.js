const choice1Button = document.getElementById('choice1');
const choice2Button = document.getElementById('choice2');
const choice3Button = document.getElementById('choice3');
const choice4Button = document.getElementById('choice4');
const heatmap = document.getElementById('heatmap');
const tooltip = document.getElementById('tooltip');
choice1Button.addEventListener('click', function() {
    clearContent();
    loadChoice1();
});
choice2Button.addEventListener('click', function() {
    clearContent();
    loadChoice2();
});
choice3Button.addEventListener('click', function() {
    clearContent();
    loadChoice3();
});
choice4Button.addEventListener('click', function() {
    clearContent();
    loadChoice4();
});
function clearContent() {
    heatmap.innerHTML = ''; // Clear current heatmap content
    tooltip.innerHTML = ''; // Clear current tooltip content
    removeExistingScripts();
}
function loadChoice1() {
    loadScript('static/js/heatmap_python_rej.js');
}
function loadChoice2() {
    loadScript('static/js/heatmap_python_suc.js');
}
function loadChoice3() {
    loadScript('static/js/heatmap_bash_rej.js');
}
function loadChoice4() {
    loadScript('static/js/heatmap_bash_suc.js');
}
function loadScript(src) {
    const script = document.createElement('script');
    script.src = src;
    script.onload = () => { console.log(`Loaded script: ${src}`); };
    script.onerror = () => { console.error(`Failed to load script: ${src}`); };
    document.body.appendChild(script);
}
function removeExistingScripts() {
    const existingScripts = document.querySelectorAll('script[src*="static/js/"]');
    existingScripts.forEach(script => {
        script.remove();
        URL.revokeObjectURL(script.src); // Clear the loaded script content
    });
}