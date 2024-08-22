// app.js
//Importing Named Exports
import {createMenu} from './myModules/menu.mjs';
//Importing All Named Exports at Once
import * as student from './myModules/student.mjs';
//Importing a Default Export
import displayCourse from './myModules/course.mjs';


// Create menu
createMenu();
// Create student objects
student.student1;
student.student2;

//Add a div element to display the information
const dislayInfo = document.createElement('div');
dislayInfo.id="dislayInfo"
document.body.appendChild(dislayInfo);

//Find all the list items in the menu
const menuItems = document.querySelectorAll("li");
// Loop through each <li> element
menuItems.forEach((item, index) => {
    // Get the text content of the current <li> element
    const text = item.textContent;
       // Add a click event listener to each <li> element
    item.addEventListener("click", () => {
        if (text==="Home"){
            const dislayInfodiv=document.getElementById("dislayInfo")
            dislayInfodiv.innerHTML ="";
            const divImage = document.createElement('img');
            divImage.src ='./images/PerScholas.png';
            dislayInfodiv.appendChild(divImage);

        }else if (text==="Students"){
            student.displayStudent();
        }else if (text==="Courses"){
            displayCourse();
        }
       
    });
});



