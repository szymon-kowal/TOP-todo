import './style.css';
import todo from './modules/todo.js'

let db = {
    projekt1 : []
    // db.projekt1.push('value')
};


function screenControler() {
    const buttonAddProject = document.querySelector('.add-project');
    const buttonAddElement = document.querySelector('.add-element');
    
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
            newDiv.appendChild(radioContainer);
            buttonsDiv.appendChild(buttonAdd);
            buttonsDiv.appendChild(buttonRemove);
            newDiv.appendChild(buttonsDiv);
            parentElement.appendChild(newDiv);

            buttonAdd.addEventListener('click', () => {
                
            });

            buttonRemove.addEventListener('click', () => {
                parentElement.removeChild(newDiv);
                flag = true;
            });

            buttonAddProject.removeEventListener('click', addAddMenu);
            buttonAddElement.removeEventListener('click', addAddMenu); 
        };
    }  
};

function submitToStorage(database, projectName, data) {
    database.projectName.push(data);
};

screenControler();