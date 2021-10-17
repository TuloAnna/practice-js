class User {
    constructor(name, birthday) {
        this.name = name;
        this.birthday = new Date(birthday);
    }
    convertAge = () => {
        let miliSec = this.birthday.getTime();
        let years = Math.floor((Date.now() - miliSec)/1000/60/60/24/365);
        let todayString = new Date().toISOString().slice(0, 10);
        let currentMonth = new Date(todayString).getMonth();
        let months;
        if(currentMonth>=this.birthday.getMonth()){
            months = currentMonth - this.birthday.getMonth();
        }
        else {
           months = (currentMonth - this.birthday.getMonth()) + 12;
        }
        return `${years} years and ${months} months`;
    }
}

const user1 = new User('Zosia', '1993-02-12');
const user2 = new User('Stanisław', '1978-12-09');
const user3 = new User('Jan', '2020-11-02');

