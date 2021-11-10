function cachingDecoratorNew (func) {
  let cache = [];
  
  function wrapper(...args) {
    const hash = args.join(',');
    let idx = cache.findIndex((item) => item.hash === args.join(',') );
    
    if (idx !== -1 ) {
      console.log("Из кэша: " + cache[idx].value);
      return "Из кэша: " + cache[idx].value ;
      }

      let result = func(...args);
      cache.push({hash, value: result});
      
      if (cache.length > 5) {
        cache.shift();
      }
      console.log("Вычисляем: " + result);
      return "Вычисляем: " + result;  
  } 
  
  return wrapper;
}


const sendSignal = () => console.log("Сигнал отправлен");

function debounceDecoratorNew(f, ms) {
  let timeout
  let flag = false;

  return function (...args) {
    clearTimeout(timeout)
    timeout = setTimeout(() => {
      f.apply(this.args)
      }, ms)

      if (!flag) {
        f.apply(this.args)
        flag = true
      }
  }
}

function debounceDecorator2(func) {
  // Ваш код
}
