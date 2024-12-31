const users = [
    { name: 'Alice', eyeColor: 'blue', gender: 'female', isActive: true, email: 'alice@gmai;.com', age: 25 },
    { name: 'Bob', eyeColor: 'brown', gender: 'male', isActive: false, email: 'bob@gmai;.com', age: 30 },
    { name: 'Charlie', eyeColor: 'green', gender: 'male', isActive: true, email: 'charlie@gmai;.com', age: 35 },
    { name: 'Diana', eyeColor: 'blue', gender: 'female', isActive: false, email: 'diana@gmai;.com', age: 22 },
    { name: 'Eva', eyeColor: 'green', gender: 'female', isActive: true, email: 'eva@gmai;.com', age: 29 }
];

const Names = users => {
    const result = users.map(user => user.name);
    console.log(result);
    return result;
};

const EyeColor = (users, color) => {
    const result = users.filter(user => user.eyeColor === color);
    console.log(result);
    return result;
};

const NamesByGender = (users, gender) => {
    const result = users.filter(user => user.gender === gender).map(user => user.name);
    console.log(result);
    return result;
};

const InactiveUsers = users => {
    const result = users.filter(user => !user.isActive);
    console.log(result);
    return result;
};

const UserByEmail = (users, email) => {
    const result = users.find(user => user.email === email);
    console.log(result);
    return result;
};

const AgeRange = (users, min, max) => {
    const result = users.filter(user => user.age >= min && user.age <= max);
    console.log(result);
    return result;
};

Names(users);
EyeColor(users, 'blue');
NamesByGender(users, 'female');
InactiveUsers(users);
UserByEmail(users, 'bob@email.com')
AgeRange(users, 25, 30); 