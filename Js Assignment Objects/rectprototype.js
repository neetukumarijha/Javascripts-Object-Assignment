var Rectangle = function (width, height) {
    this.width = width;
    this.height = height;
  
  };
  //using prototype
  Rectangle.prototype.getArea = function () {
    console.log("Getting Area using prototype property : " + this.width * this.height );
  };

  var Rect1 = new Rectangle(40, 10);
  var Rect2 = new Rectangle(50, 10);
  
  console.log(Rectangle.prototype);
  //calling method which is created using prototype property
  Rect1.getArea();
  Rect2.getArea();