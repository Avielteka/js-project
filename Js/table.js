const api = "https://my-json-server.typicode.com/Jeck99/fake-server/users";

async function getPhones() {
  const response = await fetch(api);
  return response.json();
}

function printUserInformation() {
    getPhones().then((result) => {
      result.forEach((item) => {
        console.log(result);
        document.getElementById("userTable").innerHTML += 
        `<tr>
            <td>${item.age}</td>
            <td>${item.email}</td>
            <td>${item.index}</td>
            <td>${item.name.first} </td>
            <td><button onclick="deleteUser()" class="bg-danger" >delete</button></td>
       </tr>        
`;
      });    
    });
  }

  printUserInformation() 

  function deleteUser(){
    alert("user deleted")
  }

