var n;
search:while(true){
    n+=1;
    for(var i=32;i<Math.sqrt(n);i+=1){
        if(n%i==0){
            continue search;
        }
    }
    postMessage(n);
}