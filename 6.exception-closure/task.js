const x = +prompt ("введите цифру")

function parseCount(x) {
  if (isNaN (Number.parseInt( x )) === true) {
    throw new Error ("Невалидное значение");
  } 
  return Number.parseInt( x );
  } 

function validateCount(x) {
     try {
      parseCount(x);
      return parseCount(x);
    } catch(err) {
      return err
    }
  }
  validateCount(x)

  class Triangle {
  
    constructor (a, b, c) {
      this.a = a;
      this.b = b;
      this.c = c;
      if (a+b < c || b+c < a || a+c < b) {
    throw new Error ("Треугольник с такими сторонами не существует")
      }
    }
  
    getPerimeter() {
    return this.a + this.b + this.c
    }
    
    getArea() {
      return +Math.sqrt(this.getPerimeter()/2 * (this.getPerimeter()/2 - this.a) * (this.getPerimeter()/2 - this.b) * (this.getPerimeter()/2 - this.c)).toFixed(3)
    }
  }
 
  function getTriangle (a, b, c) {
    try {
      return new Triangle (a, b, c);
    } catch (err) {
      return {getPerimeter: "Ошибка! Треугольник не существует", getArea: "Ошибка! Треугольник не существует"}
    }
  }



 
