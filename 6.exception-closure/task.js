function parseCount(x) {
  let parsing = Number.parseInt( x );
  if (isNaN (parsing)) {
    throw new Error ("Невалидное значение");
  } 
  return parsing;
  } 

function validateCount(x) {
     try {
      return parseCount(x);
    } catch(err) {
      return err
    }
  }

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
    let halfPerimeter = this.getPerimeter()/2;
    return +Math.sqrt(halfPerimeter * (halfPerimeter - this.a) * (halfPerimeter - this.b) * (halfPerimeter - this.c)).toFixed(3)
  }
}

function getTriangle () {
    try {
      return new Triangle (a, b, c); 
  } catch (err) {
    return {getPerimeter: () => 'Ошибка! Треугольник не существует!', getArea: () => 'Ошибка! Треугольник не существует!'}
  }
}

  