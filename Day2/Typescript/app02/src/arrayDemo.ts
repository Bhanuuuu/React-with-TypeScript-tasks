const arrayDemo = function () {
    let num : number[];
    num = [1,2,3,4,5,6,7,8,9];
    console.log(num);


    let friends: string[];
    friends = [];
    friends.push('Umesh');
    friends.push('Rahul');
    friends.push('Ebin');

    console.log(friends);


    let days: readonly string[] = ['Sun', 'mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];
    //days.push('newDay')  -- > will throw error since days is readonly
    console.log(days);
};
export default arrayDemo;