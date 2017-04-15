var minhaVar = 'minha variavel';
function minhaFunction(x, y) {
    return x + y;
}
//ES6 ou ES2015
var num = 2;
var PI = 3.14;
var numeros = [1, 2, 3];
numeros.map(function (value) {
    return value * 2;
});
numeros.map(function (x) { return x * 2; });
var Matematica = (function () {
    function Matematica() {
    }
    Matematica.prototype.soma = function (x, y) {
        return x + y;
    };
    return Matematica;
}());
var x = "asdfadf";
x = 4;
var n1 = "asdfgh";
n1 = 4;
var n2 = "asdfgh";
n2 = 4;
