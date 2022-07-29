const api = "https://my-json-server.typicode.com/Jeck99/fake-server/devices";

async function getDevices() {
  const response = await fetch(api);
  return response.json();
}
let galleryArray = [
  'galaxy.gold.jpg',
  'galaxy.white.jpg',
  'iphonewhite.jpg',
  'mi.black.jpg',
  'sony.green.jpg',
  'google.gold.jpg',
  'iphone.silver.jpg',
  'iphone.gold.jpg',
  'sony.blue.jpg',
  'iphone.blue.jpg',
  'iphone.white.jpg',
  'google.black.jpg',
  'sony.white.jpg',
  'mi.silver.jpg',
  'iphone.blue2.jpg',
];

function printDevicesDetails() {
  getDevices().then((result) => {
    result.forEach((item, index) => {
      document.getElementById("card").innerHTML += 
      `<div class="myCard col-md-4 border 1px black solid bg-light  mt-3>
    
     <div class="card  p-3 ps-5 pe-5 text-black">
            <h4 class="text-center">${item.brand}</h4>
            <img src="/devices/${galleryArray[index]}">
            <p><b>color:</b> ${item.color}</p>
            <p><b>created:</b> ${item.createdAt}</p>
            <p><b>isAvailable:</b> ${item.isAvailable}</p>
            <p><b>price:</b> ${item.price}</p>
            <p><b>ram:</b> ${item.ram}</p>
            <button class="btn2 bg-primary" onclick="addToCard()" type="submit">Add</button>
            <br><br>
            </div>
            </div>`;
    });    
  });
}
printDevicesDetails() 
function addToCard(){
    alert("The device is added to the cart")
  }

