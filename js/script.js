
let checkPx = document.querySelector('.check-unit__px');
let checkProcent = document.querySelector('.check-unit__procent');
let checkBlock = document.querySelector('.check-unit');

checkPx.onmouseover = function () {
   checkPx.style.boxShadow = 'inset 1px 1px 10px rgb(196, 196, 196)'
}
checkPx.onmouseleave = function () {
   checkPx.style.boxShadow = 'unset'
}
checkProcent.onmouseover = function () {
   checkProcent.style.boxShadow = 'inset 1px 1px 10px rgb(196, 196, 196)'
}
checkProcent.onmouseleave = function () {
   checkProcent.style.boxShadow = 'unset'
}

checkBlock.onmouseover = function () {
   checkBlock.style.right = '0'
}
checkBlock.onmouseleave = function () {
   checkBlock.style.right = '-40px'
}


checkPx.addEventListener('click', function (event) {
   event.preventDefault();
   fun2();


})
//checkProcent.addEventListener('click', function (event) {
//   event.preventDefault();
//   unitProcent.classList.add('block-none-px');
//})



let unitPx = document.querySelectorAll('.block-px');
let unitProcent = document.querySelectorAll('.block-procent');

//---------------------------------------------------------

let inputRangeAll = document.querySelectorAll('.input-range');
let finalBlock = document.querySelector('.final-div');
let inputTextAll = document.querySelectorAll('.input-text');



inputRangeAll[0].oninput = fun1;
inputRangeAll[1].oninput = fun1;
inputRangeAll[2].oninput = fun1;
inputRangeAll[3].oninput = fun1;



function fun1() {
   let inputRangeFirst = inputRangeAll[0].value;
   let inputRangeSecond = inputRangeAll[1].value;
   let inputRangeThird = inputRangeAll[2].value;
   let inputRangeFourtin = inputRangeAll[3].value;

   let inputTextFirst = inputTextAll[0];
   let inputTextSecond = inputTextAll[1];
   let inputTextThird = inputTextAll[2];
   let inputTextFourtin = inputTextAll[3];


   inputTextFirst.value = inputRangeFirst + ' %';
   inputTextSecond.value = inputRangeSecond + ' %';
   inputTextThird.value = inputRangeThird + ' %';
   inputTextFourtin.value = inputRangeFourtin + ' %';




   finalBlock.style.borderRadius = inputRangeFirst + '%' + inputRangeSecond + '%' + inputRangeThird + '%' + inputRangeFourtin + '%';


}




function fun2() {
   let inputRangeFirst = inputRangeAll[0].value;
   let inputRangeSecond = inputRangeAll[1].value;
   let inputRangeThird = inputRangeAll[2].value;
   let inputRangeFourtin = inputRangeAll[3].value;

   let inputTextFirst = inputTextAll[0];
   let inputTextSecond = inputTextAll[1];
   let inputTextThird = inputTextAll[2];
   let inputTextFourtin = inputTextAll[3];


   inputTextFirst.value = inputRangeFirst + ' px';
   inputTextSecond.value = inputRangeSecond + ' px';
   inputTextThird.value = inputRangeThird + ' px';
   inputTextFourtin.value = inputRangeFourtin + ' px';




   finalBlock.style.borderRadius = inputRangeFirst + 'px' + inputRangeSecond + 'px' + inputRangeThird + 'px' + inputRangeFourtin + 'px';


}












//-------------------------------------------------------------------------------------



































