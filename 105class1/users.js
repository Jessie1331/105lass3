function displayUsers(userArray){

  let tr="";


    for(var i=0; i<userArray.lengh; i++){
       
        let user=userArray[i];
        //  let gpa='';
        // gpa=(Number(user.g1)+Number(user.G2)+Number(user.g3))/3;
        
        tr= `
        <td>"${user.email}"</td>
          <td>${user.password}</td>
          <td>${user.fName}</td>
          <td>${user.lName}</td>
          <td>${user.age}</td>
          <td>${user.g1}</td>
          <td>${user.g2}</td>
          <td>${user.g3}</td>
          <td>${user.GPA}</td>
          
         
        </tr>
      `;
  $("#userTable").append(tr);
  console.log(tr);
}
    }
   
  
function init(){
    console.log("Listing");
   
    let users = readUsers();//get form
    displayUsers(users);
    console.log(users);
        }  

   window.onload=init;
