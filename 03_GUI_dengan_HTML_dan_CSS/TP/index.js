const editorElement = document.getElementById("editor-kecil");
const charCountElement = document.getElementById("hf");

editorElement.addEventListener("input", (event) => {
    const textLength = event.target.value.length;
    charCountElement.textContent = textLength;
});