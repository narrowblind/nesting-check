const nest = (str) => {

    let arr = str.split("");

    console.log(arr);

    for (var i=0; i<arr.length; i++) {
        if (arr[i] == "(") {
            //console.log(arr[i]);
            console.log(arr.slice(i).length);
            for (var j=0; j<=arr.slice(i).length; j++) {
                //console.log(arr[j])
                if (arr[j] == ")") {
                }
                else {
                    arr.splice(j,0,")");
                }

            }
        }
        else if (arr[i] == ")") {

        }
        else if (arr[i] == "{") {

        }
        else if (arr[i] == "}") {
            
        }
        else if (arr[i] == "[") {
            
        }
        else if (arr[i] == "]") {
            
        }
    }

    console.log(arr[i]);

}


nest("hell(o");


//console.log(nest("(){}"));