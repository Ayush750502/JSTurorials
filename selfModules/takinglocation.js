const success = function(position){
    return position;
}
const somethingWentWrong = function(error){
    return error;
}

exports.location = function(){
    let crdnt = navigation.geolocation.getCurrentPosition(success , somethingWentWrong);
    return crdnt;
}