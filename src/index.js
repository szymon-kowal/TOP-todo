import './style.css';
import todo from './modules/todo.js'

let db = {};

function dbSaver(){

}

function screenControler() {
    const buttonAddProject = document.querySelector('.add-project');
    const buttonAddElement = document.querySelector('.add-element');
    
    buttonAddProject.addEventListener('click', addAddMenu);
    buttonAddElement.addEventListener('click', addAddMenu);

    function addAddMenu() {
        let parentElement = this.parentNode;

        const newDiv = document.createElement('div');
        const buttonsDiv = document.createElement('div');
        const buttonAdd = document.createElement('button');
        const buttonRemove = document.createElement('button');

        buttonsDiv.className = 'add-buttons';
        buttonAdd.className = 'menu-add-button';
        buttonRemove.className = 'menu-remove-button'
        
        buttonAdd.innerHTML = 'Add';
        buttonRemove.innerHTML = 'Remove'

        newDiv.className = 'add-menu';
        newDiv.innerHTML = `<input type="text">`;
        
        buttonsDiv.appendChild(buttonAdd);
        buttonsDiv.appendChild(buttonRemove);
        newDiv.appendChild(buttonsDiv);
        parentElement.appendChild(newDiv);
    }

    function submitToStorage() {
        const confirmButton = 1;
    }
}


screenControler();