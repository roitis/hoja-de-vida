
window.onload = function() {
    loadContent();
};

function toggleEdit() {
    document.querySelectorAll('#name, #profession, #email, #phone, #address, #skills, #languages, #experience, #education, #referencias').forEach(function(element) {
        element.contentEditable = true;  
        element.style.border = "1px solid #ddd";
        element.style.padding = "2px";
    });
}

function saveChanges() {
    document.querySelectorAll('#name, #profession, #email, #phone, #address, #skills, #languages, #experience, #education, #referencias').forEach(function(element) {
        element.contentEditable = false;  
        element.style.border = "none";
        element.style.padding = "0";

        
        localStorage.setItem(element.id, element.innerHTML);
    });
    alert('Cambios guardados.');
}

function loadContent() {
    
    document.querySelectorAll('#name, #profession, #email, #phone, #address, #skills, #languages, #experience, #education, #referencias').forEach(function(element) {
        const savedData = localStorage.getItem(element.id);
        if (savedData) {
            element.innerHTML = savedData;  
        }
    });
}
