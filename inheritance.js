class School {
    constructor(name, location, estd) {
        this.name = name;
        this.location = location;
        this.estd = estd;
    }

    getDetails() {
        return `${this.name} school is established on ${this.estd}, Location is ${this.location}.`;
    }
}

class PrimarySchool extends School {
    constructor(name,location,estd,facilities) {
        super(name, location, estd);
        this.facilities = facilities;
    }

    getDetails() {
        return `${super.getDetails()} It has facilities ${this.facilities.join(',')}`;
    }
}

const kesavaReddySchool = new School('Kesava Reddy', 'Madanapalle', '2010');
console.log(kesavaReddySchool)
console.log(kesavaReddySchool.getDetails());

const euroKids = new PrimarySchool('Euro Kids', 'Prashanth Nagar', '2020', ['Play Ground', 'Board Games', 'Good Security']);

console.log(euroKids.getDetails());
