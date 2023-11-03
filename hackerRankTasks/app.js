function staircase(n) {
    // Write your code here
    // console.log(n)
    let stairs="";
    for(let i = 1; i<=n; i++){
           for(let j = 1; j<=n-i; j++){
            stairs+=" ";
        }
        for(let k = 1; k<=i; k++){
            stairs += "#";
        }
        stairs+="\n";
    }

    console.log(stairs);

}