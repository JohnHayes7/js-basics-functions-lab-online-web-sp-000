// Code your solution in this file!
function distanceFromHqInBlocks(pickupLocation){
    let distance;
    if(pickupLocation >= 42){
        distance = pickupLocation - 42;
    }else{
        distance = 42 - pickupLocation;
    }
        
    return distance
}

function distanceFromHqInFeet(pickupLocation){
    let distanceInFeet;
    distanceInFeet = distanceFromHqInBlocks(pickupLocation) * 264;
    return distanceInFeet
}

function distanceTravelledInFeet(pickup, destination){
    let distance;
    if(pickup > destination){
        distance = (pickup - destination) * 264;
    }else{
        distance = (destination - pickup) * 264;
    }
    return distance
}

function calculatesFarePrice(pickup, destination){
    let fare; 
    if(distanceTravelledInFeet(pickup, destination) < 400){
        fare = 0;
    }else if(distanceTravelledInFeet(pickup, destination) > 400 && distanceTravelledInFeet(pickup, destination) < 2000){
        fare = (distanceTravelledInFeet(pickup, destination) - 400) * .02
    }else if((distanceTravelledInFeet(pickup, destination) > 2000) && (distanceTravelledInFeet(pickup, destination) < 2500)){
        fare = 25;
    }else if (distanceTravelledInFeet(pickup, destination) > 2500){
        fare = "cannot travel that far";
    }
    return fare
}   