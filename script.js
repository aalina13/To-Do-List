let buton = document.getElementById("buton");
let list = document.querySelector(".list");
var input;
var nrTask = 0;

buton.addEventListener("click", function(){
    input = document.querySelector(".add_task input").value;
    nrTask++;

    if(input != "")
    {
        console.log(nrTask);
        let task = document.createElement('div');
        task.style.width = '500px';    //as big as the list
        task.style.height = 'auto';
        task.style.textAling = 'center';
        task.style.alignItems = 'center';
        task.style.justifyContent = 'center';
        task.style.display = 'flex';
        if(nrTask != 0)
        {
            list.style.paddingBottom = '30px';
        }

        //create the text box
        let textBox = document.createElement('div');
        textBox.textContent = `${input}`;
        textBox.style.backgroundColor = "white";
        textBox.style.width = '375px';
        textBox.style.height = 'auto';    //the height changes by the length of the text
        textBox.style.textAlign = 'justify';
        textBox.style.border = '0';
        textBox.style.borderRadius = '20px';
        textBox.style.marginBottom = '5px';
        textBox.style.color = "black";
        textBox.style.padding = "10px";
        textBox.style.fontSize = "15px";
        

        //create a check box for the task
        let checkBox = document.createElement('input');
        checkBox.setAttribute('type', 'checkbox');
        checkBox.style.width = '20px';
        checkBox.style.height = '20px';
        checkBox.style.marginRight = '5px';
        checkBox.style.backgroundColor = 'salmon';
        checkBox.addEventListener('click', function(){
            if(checkBox.checked)
                textBox.style.textDecoration = 'line-through';
            else
                textBox.style.removeProperty('text-decoration');
        })

        //create a delete button
        let deleteButton = document.createElement('button');
        deleteButton.textContent = "Delete";
        deleteButton.style.width = '50px';
        deleteButton.style.height = '20px';
        deleteButton.style.border = '0';
        deleteButton.style.borderRadius = '20px';
        deleteButton.style.marginLeft = '5px';

        deleteButton.addEventListener('click', function(){
            task.remove();
            nrTask --;
            if(nrTask == 0)
            {
                list.style.removeProperty('padding-bottom');
            }
        })

        task.appendChild(checkBox);
        task.appendChild(textBox);
        task.appendChild(deleteButton);

        let divider = document.querySelector(".list");
        divider.appendChild(task);
    }

    document.querySelector(".add_task input").value = "";
});