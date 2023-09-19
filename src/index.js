import './style.css';
import todo from './modules/todo.js'

let db = {
    projekt1 : []
    // db.projekt1.push('value')
};

// Try to add flag somehow to the event listeners with addAddMenu; - done
// Try add todos to current db -
// Check if todo class is made ok and how i can improve it -
// Add functionality to buttons to the left -
// Try to connect db with web storage -
// Make it look ok xd -

function screenControler() {
    const buttonAddProject = document.querySelector('.add-project');
    const buttonAddElement = document.querySelector('.add-element');
    
    buttonAddProject.addEventListener('click', addAddMenu);
    buttonAddElement.addEventListener('click', addAddMenu);

    let flag = true;

    

    function addAddMenu() {
        console.log(flag);
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
                // Data needs to be todo class !
                let data = 
                console.log(data);
                submitToStorage(db, project1, data)
            });

            buttonRemove.addEventListener('click', () => {
                parentElement.removeChild(newDiv);
                flag = true;
                console.log(flag);
            });
        };
    }  
};

function submitToStorage(database, projectName, data) {
    database.projectName.push(data);
};

screenControler();