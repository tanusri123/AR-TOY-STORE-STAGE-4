AFRAME.registerComponent("createmarkers",{
  init: async function(){
    var mainScene = document.querySelector("#main-scene");
    var toys = await this.getAllToys();
    toys.map(toy =>{
      var marker = document
    })
  }
})
