
// function saveUser(user){
//     let oldUsers = readUsers()
//     oldUsers.push(user);
//     console.log(user); // this is obj
//     let val = JSON.stringify(oldUsers);// parse the obj into string
//     console.log(val);//this is string
//     localStorage.setItem("users",val);
// }

// function readUsers(){
//     let users = localStorage.getItem("users");
//     console.log(users)

//     if(!users){
//         return [];
//     }else{
//         let listUsers = JSON.parse("users");
//         console.log(listUsers);
//         return listUsers
//     }
// }
   const KEY = "users";


function saveUser(user){
    let users = readUsers();
  
    users.push(user);
    let val = JSON.stringify(users);
  
    localStorage.setItem(KEY,val);

}





function readUsers(){
    let data = localStorage.getItem(KEY);
    if(!data){//not data?
        return[];//creating array

    } else {
        let usersList=JSON.parse(data);

        return usersList;
    }
}