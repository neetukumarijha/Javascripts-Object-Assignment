var Rectangle = function (
    width,
    height 
  ) {
    this.width = width;
    this.height = height;
    this.area = function () {
      console.log("Area of the Rectangle is : " + this.width * this.height);
    };
  };
   //calling objects/making intances
   
  var Rect1 = new Rectangle(4,5);
  

  //calling objects properties
  console.log(Rect1.width); 
  console.log(Rect1.height);
  
  Rect1.area();
  