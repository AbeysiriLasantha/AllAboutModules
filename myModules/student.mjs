class Student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    display() {
        return `Student Name: ${this.name}, Age: ${this.age}`;
    }
}

// Sample data for demonstration
const student1 = new Student('Alex', 35);
const student2 = new Student('Carli', 25);

// Display student information
export  function displayStudent(){
//Clear the content before add
const dislayInfodiv=document.getElementById("dislayInfo")
dislayInfodiv.innerHTML ="";
dislayInfodiv.innerHTML = `
    <h2>Students</h2>
    <p>${student1.display()}</p>
    <p>${student2.display()}</p>
`;
}