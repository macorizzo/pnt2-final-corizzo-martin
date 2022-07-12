

import Vue from "vue";

Vue.filter("Mayuscula", function (value) {
  return value.toUpperCase();
});
Vue.filter("Minuscula", function (value) {
    return value.toLowerCase();
});

/* Vue.filter("Codificado", function (value) {
    value.toLowerCase().map(function(x) {
        if (x.index() % 2 != 0){
            x.toUpperCase()
            return x;
        }
    /* return x * 2; */
    //}); */
    // doubles is now [2, 10, 20, 30]
    // numbers is still [1, 5, 10, 15]

    /* var numbers = [1, 4, 9];
    var roots = numbers.map(function(num) {
    return Math.sqrt(num);
    });
    // roots is now [1, 2, 3]
    // numbers is still [1, 4, 9]

    
    return value.replaceAll('a','u').filter() */
//}); 

Vue.filter("Intercalado", function (value) {
    let cadena = value.toUpperCase();
    cadena.forEach(function(currentValue, index) {
        if (index % 2 != 0) {
            currentValue = currentValue.toLowerCase()
        }
    })

    /* let cadena = [];
    value.toUpperCase();
    cadena = value.filter(element => {
        if (indexOf(element) % 2 != 0) {
            element.toLowerCase()
        } 
    }) */
    
    
    return cadena;
}); 