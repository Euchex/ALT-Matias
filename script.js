// Get all <p> tags inside the #skill div
const paragraphs = document.querySelectorAll('#skill p');

// Loop through each <p> tag and add a click event listener
paragraphs.forEach(paragraph => {
    paragraph.addEventListener('click', function() {
        // Remove yellow-background class from all paragraphs
        paragraphs.forEach(p => p.classList.remove('yellow-background'));
        // Add yellow-background class to the clicked paragraph
        this.classList.add('yellow-background');
    });
});