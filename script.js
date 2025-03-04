fetch('https://charrismagparoc.github.io/json/courses.json')
    .then(response => response.json())
    .then(data => {
        let studentList = document.getElementById('student-list');
        
        if (data.students && Array.isArray(data.students)) {
            data.students.forEach(student => {
                let listItem = document.createElement('li');
                listItem.textContent = `${student.name} - ${student.age} (Course: ${student.course})`;
                studentList.appendChild(listItem);
            });
        } else {
            console.error('Expected "students" array but got:', data);
        }
    })
    .catch(error => console.error('Error fetching JSON:', error));