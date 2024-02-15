exports.giveInputs = function (search){
    if(search != null){
        search = search.substring(1,(search.length - 1));
        let vbls = search.split('&');
        let arr = [];
        vbls.forEach(sch => {
            let  vbl = sch.split('=');
            arr.push([vbl[0] , vbl[1].replaceAll('+' , ' ')]); 
        });
        return arr;
    }
    return null;
}