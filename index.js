// Code your solution in this file!
const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];

const returnFirstTwoDrivers = function(drivers){
    return drivers.slice(0, 2)
}

const returnLastTwoDrivers = function (drivers) {
    return drivers.slice(2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

///////////
function createFareMultiplier(multi){
    if (multi === 5) {
        return fareQuintupler
    } else if (multi === 2) {
        return fareDoubler
    } else if (multi === 3) {
        return fareTripler
    }
}

function fareQuintupler (fare)  {return fare * 5} 
function fareTripler(fare){
    return fare * 3
}
function fareDoubler(fare){
    return fare + fare
}

////////////
function selectDifferentDrivers (drivers, functionE) {
    if (functionE === returnFirstTwoDrivers) {
        return drivers.slice(0, 2) 
    }else if (functionE === returnLastTwoDrivers) {
        return drivers.slice(2)
    } 
}