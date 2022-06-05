AFRAME.registerComponent("markerhandler",{
  init:async function(){
    this.el.addEventListener("markerFound",()=>{
      console.log("marker is found");
      this.handleMarkerFound();
    });

    this.el.addEventListener("markerLost",()=>{
      console.log("marker is lost");
      this.handleMarkerLost();
    })
  },
  handleMarkerFound:function(){
    var buttonDiv = document.getElementById("button-div");
    buttonDiv.style.display="flex";

    var orderButton = document.getElementById("order-button");
    var orderSummaryButton = document.getElementById("order-summary-button");

    orderButton.addEventListener("click",()=>{
      swal({
        icon:"",
        title:"Thanks For The Order !",
        text:"",
        timer:2000,
        buttons: false
      });
    });

    orderSummaryButton.addEventListener("click",()=>{
      swal({
        icon:"warning",
        title:"Order Summary",
        text:"Work In Progress"
      })
    }),
    getAllToys: async function(){
      return await firebase
      .firestore()
      .collection("toys")
      .get()
      .then(snap=>{
        return snap.docs.map(doc => doc.data())
      }),
    }
    handleOrder: function(uid,toy){
      firebase
        .firestore
        .collection("users")
        .doc(uid)
        .get()
        .then(doc => {
          var details = doc.data();

          if(details["current_orders"][toy.id]){
            detail["current_orders"][toy.id]["quatity"] +=1;

            var currentQuantity = details["current_orders"][toy.id]["quatity"]

            details["current_orders"][toy.id]["subtotal"] =
              currentQuantity * toy.price;
            }else{
              details["current_orders"][toy.id]={
                item: toy.toy_name,
                price: toy.price,
                quantity: 1,
                subtotal: toy.price * 1
              };
            }
            details.total_bill += toy.price;

            firebase
              .firebase()
              .collection("users")
              .doc(doc.id)
              .update(details);
          }
        });
    },
  },
});
