const api = "https://my-json-server.typicode.com/Jeck99/fake-server/devices";

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
            <td>${item.brand}</td>
            <td>${item.id}</td>
            <td>${item.price}</td>
            <td>${item.color}</td>
            <td>${item.isAvailable}</td>
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

