import './style.css';
import todo from './modules/todo.js';

let db = {
    project1 : []
    // db.projekt1.push('value')
};

// Try to add flag somehow to the event listeners with addAddMenu; - done
// Try add todos to current db - done
// Check if todo class is made ok and how i can improve it - done
// Try to display one of elements from db on page - done
// Add functionality to buttons to the left -
// Try to connect db with web storage -
// Make it look ok xd -

function screenControler() {
    const cardContainer = document.querySelector('.right-content');
    const buttonAddProject = document.querySelector('.add-project');
    const buttonAddElement = document.querySelector('.add-element');

    displayFromDatabase(db, cardContainer);

    buttonAddProject.addEventListener('click', addAddMenu);
    buttonAddElement.addEventListener('click', addAddMenu);

    let flag = true;
    
    function addAddMenu() {

        

        if (flag) {
            flag = false;
            let parentElement = this.parentNode;

            const newDiv = document.createElement('div');
            const buttonsDiv = document.createElement('div');
            const buttonAdd = document.createElement('button');
            const buttonRemove = document.createElement('button');
            const titleInput = document.createElement('input');
            const descriptionInput = document.createElement('input');
            const radioContainer = document.createElement('div');
            const dateInput = document.createElement('input');


            dateInput.type = 'date';
            dateInput.className = "input-date";

            const optionsAndValues = [
                { option: 'Easy', value: 'Easy' },
                { option: 'Medium', value: 'Medium' },
                { option: 'Hard', value: 'Hard' },
            ];

            optionsAndValues.forEach((item, index) => {
                // Create a radio button element
                const radioButton = document.createElement('input');
                radioButton.type = 'radio';
                radioButton.id = `option${index + 1}`;
                radioButton.name = 'options'; 
                radioButton.value = item.value; 
            

                const label = document.createElement('label');
                label.htmlFor = `option${index + 1}`;
                label.textContent = item.option;
            
                radioContainer.appendChild(radioButton);
                radioContainer.appendChild(label);
            
            });

            radioContainer.id = 'radioContainer';
            titleInput.type = 'text';
            titleInput.value = 'Title';

            descriptionInput.type = 'text';
            descriptionInput.value = 'Description';

            titleInput.id = "title";
            descriptionInput.id = "description";

            buttonsDiv.className = 'add-buttons';
            buttonAdd.className = 'menu-add-button';
            buttonRemove.className = 'menu-remove-button'

            buttonAdd.innerHTML = 'Add';
            buttonRemove.innerHTML = 'Remove'

            newDiv.className = 'add-menu';

            // Add radiolist with priority
            newDiv.appendChild(titleInput);
            newDiv.appendChild(descriptionInput);
            newDiv.appendChild(dateInput);
            newDiv.appendChild(radioContainer);
            buttonsDiv.appendChild(buttonAdd);
            buttonsDiv.appendChild(buttonRemove);
            newDiv.appendChild(buttonsDiv);
            parentElement.appendChild(newDiv);

            buttonAdd.addEventListener('click', () => {
                const selectedRadio = document.querySelector('input[name="options"]:checked');
                // Data needs to be todo class !
                let title = titleInput.value;
                let description = descriptionInput.value;
                let dueDate = dateInput.value;
                let prority = selectedRadio ? selectedRadio.value : 'nothing';
                let data = new todo(title, description, dueDate, prority);
                submitToStorage(db, 'project1', data);
                flag = true;
                parentElement.removeChild(newDiv);

                displayFromDatabase(db, cardContainer, selectWeek);
            });

            buttonRemove.addEventListener('click', () => {
                parentElement.removeChild(newDiv);
                flag = true;
            });
        };
    }  

};

function submitToStorage(database, projectName, data) {
    database[projectName].push(data);
};

function displayFromDatabase(database, container, filterFunction = () => true) {
    container.innerHTML = ''; // To change
    for (const key in database) {
        const value = database[key];
        for (const data of database[key]) {
            if (filterFunction(data)) {
                container.appendChild(displayCard(data));
            }
        }
    }
}

function displayCard(data) {
    const container = document.createElement('div');
    container.className = 'card-container';
    for (const key in data) {
        if (data.hasOwnProperty(key)) {
            const propertyDiv = document.createElement('p');
            propertyDiv.textContent = `${data[key]}`
            container.appendChild(propertyDiv);
        }
    }
    return container;
}

// Filters to display function

function selectToday(data) {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0'); // Adding 1 because months are zero-based
    const day = String(today.getDate()).padStart(2, '0');
    const newData = data.dueDate.split('-');

    if (year == newData[0] && month == newData[1] && day == newData[2]) {
        return true;
    } else {
        return false;
    }
}

function selectWeek(data) {
    const today = new Date();
    const nextWeek = new Date(today);
    nextWeek.setDate(today.getDate() + 7);

    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0'); // Adding 1 because months are zero-based
    const day = String(today.getDate()).padStart(2, '0');
    
    const newData = data.dueDate.split('-');
    const dataDate = new Date(newData[0], newData[1] - 1, newData[2]);

    if (dataDate >= today && dataDate <= nextWeek) {
        return true;
    } else {
        return false;
    }
}


function selectImportant(data) {
    return data.prority == 'Hard';
}
    


screenControler();