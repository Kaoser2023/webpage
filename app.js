const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));  // Serves static files from 'public' folder

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});





// Get all elements with the class "semester"
    const semesters = document.querySelectorAll('.semester');

    // Loop through each semester
    semesters.forEach(semester => {
        semester.addEventListener('click', function() {
            // Toggle the display of the sub-list
            const subList = this.querySelector('.sub-list');
            if (subList.style.display === 'none' || subList.style.display === '') {
                subList.style.display = 'block'; // Show the sub-list
            } else {
                subList.style.display = 'none'; // Hide the sub-list
            }
        });
});

