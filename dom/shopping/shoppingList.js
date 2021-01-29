
    // Do the following steps in this file, and make sure this file is linked to the shopping-list.html file

    

    // 1. Create three variables that hold references to the following elements &lt;ul&gt; &lt;input&gt; &lt;button&gt; elements.
    // Create a function that will run in response to the button being clicked.
    // Inside the function body, start off by storing the current value of the input element in a variable.
    // Next, empty the input element by setting its value to an empty string — ''.
       // 5. Create three new elements — a list item (&lt;li&gt;), &lt;span&gt;, and &lt;button&gt;, and store them in variables.
    // 6. Append the span and the button as children of the list item.
    // 7. Set the text content of the span to the input element value you saved earlier, and the text content of the button to 'Delete'.
    // 8. Append the list item as a child of the list.
    // 9. Attach an event handler to the delete button, so that when clicked it will delete the entire list item it is inside.
    // 10. Finally, use the focus() method to focus the input element ready for entering the next shopping list item.

    let button = document.querySelector("button");

    button.addEventListener("click", () => {
        let input = document.querySelector("input");
        let currentList = input.value;
        let listItem = document.createTextNode(currentList);
        let ul = document.querySelector("ul");
        let li = document.createElement("li");
        let span = document.createElement("span");
        let btn = document.createElement("button");

        // li.appendChild(span);
        li.appendChild(btn);
        li.appendChild(listItem);
        ul.appendChild(li);
        btn.textContent = "Delete"
        btn.value = "Remove";
        btn.onclick = removeList; 

        input.focus();

    })
        function removeList(event){
            let el = event.target;
            el.parentNode.remove()
        }


    

 
