async function pushNewObjectToDevicesArray(obj) {
    try {
      await fetch(`${basicApi}devices`, {
        method: `POST`,
        body: JSON.stringify(obj),
        headers: { "content-type": "application/json" },
      }).then(response=>response.json());
    } catch (error) {}
  }

  function newObject() {
    
    let newMovieObject = {
      brand: userbrand.value,
      color: color.value,
      ceatedAt: created.value,
      isAvailable: tab_phoneAvailability.value,
      price: tab_price.value,
      ram: tab_ram.value,
    };
    pushNewObjectToApiArray(newMovieObject)
  }

  function alerInvite(){
    alert("Your order has been accepted")

  }