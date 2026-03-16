const editorElement = document.getElementById("editor-kecil");
const charCountElement = document.getElementById("hf");
const lowercaseCountElement = document.getElementById("hk"); 
const uppercaseCountElement = document.getElementById("hb"); 
const btnBesarkan = document.getElementById("huruf-besar");
const btnKecilkan = document.getElementById("huruf-kecil");

const updateCounts = (text) => {
    charCountElement.textContent = text.length;

    const lowercaseMatch = text.match(/[a-z]/g);
    lowercaseCountElement.textContent = lowercaseMatch ? lowercaseMatch.length : 0;

    const uppercaseMatch = text.match(/[A-Z]/g);
    uppercaseCountElement.textContent = uppercaseMatch ? uppercaseMatch.length : 0;
};

editorElement.addEventListener("input", (event) => {
    updateCounts(event.target.value);
});

btnBesarkan.addEventListener("click", () => {
    editorElement.value = editorElement.value.toUpperCase();
    updateCounts(editorElement.value); 
});

btnKecilkan.addEventListener("click", () => {
    editorElement.value = editorElement.value.toLowerCase();
    updateCounts(editorElement.value);
});