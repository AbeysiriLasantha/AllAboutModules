// course.mjs
class Course {
    constructor(title, duration) {
        this.title = title;
        this.duration = duration;
    }

    display() {
        return `Course Title: ${this.title}, Duration: ${this.duration}`;
    }
}

// Sample data for demonstration
const course1 = new Course('Introduction to JavaScript ', '2 weeks');
const course2 = new Course('Advance JavaScript', '16 weeks');

//export default function 
export default function displayCourse(){
//Clear the content before add
const dislayInfodiv=document.getElementById("dislayInfo")
dislayInfodiv.innerHTML ="";
dislayInfodiv.innerHTML = `
    <h2>Courses</h2>
    <p>${course1.display()}</p>
    <p>${course2.display()}</p>
`;

}
