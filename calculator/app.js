const selectAllBtn = document.querySelectorAll(".btn");
const input = document.querySelector(".screen");
const clearBtn = document.querySelector(".btn-clear");
const equalBtn = document.querySelector(".btn-equal");

selectAllBtn.forEach(function(singleBtn){
    // console.log(singleBtn,'singleBtn');
    singleBtn.addEventListener("click",function(event){
        event.preventDefault();
        // console.log(event,'event');
        const currentBtn = event.target;
        // console.log(currentBtn,'currentBtn');
        // input.value += currentBtn.innerText;
        const btnValue = currentBtn.getAttribute("data-num");
        // console.log(btnValue,'btnValue');
        input.value += btnValue;
    });
});

equalBtn.addEventListener("click",function(event){
    event.preventDefault();
    input.value = eval(input.value);
});

clearBtn.addEventListener("click",function(event){
    event.preventDefault();
    input.value = "";
})