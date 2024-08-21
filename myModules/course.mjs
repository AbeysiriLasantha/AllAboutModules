class Course {
    
    constructor (courseName, courseType, duration, courseFee) {
        this.courseName=courseName;
        this.courseType=courseType;
        this.duration=duration;
        this.courseFee=courseFee;
    }

    isFree() {
        return this.courseFee<=0;
        
    }

}