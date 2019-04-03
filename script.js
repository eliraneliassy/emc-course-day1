// document.addEventListener('click', function (event) {
//     console.log(event);
// })

// function lastWordLength(str) {
//     str = str.trim();
//     var res = str.split(' ');
//     return res[res.length - 1].length;
// }

// document.getElementById('btn').addEventListener('click', () => {
//     var input = document.getElementById('txt').value;
//     document.getElementById('result').innerHTML = `<b>${lastWordLength(input)}</b>`;
// })

// var arr = [1, 3, 2, 5, 4, 0];


// function findSum(arr, c) {
//     var map = {};
//     for (var i = 0; i < arr.length; i++) {
//         var x = c - arr[i];
//         if (map[arr[i]]) {
//             return true;
//         }
//         else {
//             map[x] = x;
//         }
//     }
//     return false;
// }

// console.log(findSum(arr, 9));



function init(){
    var x = Math.floor(Math.random()*2);
    document.getElementById('round').innerHTML = x === 0 ? 'its O turn' : 'its X turn';
}

init();

