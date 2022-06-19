// Code your solution here
// const findMatching = (drivers, name) => {
//     let filteredDrivers = [];
//     filteredDrivers = drivers.filter(function(driver){
//         return (driver === name || driver === name.toLowerCase());
//     });
//     return filteredDrivers;
// }

function findMatching(drivers, name) {
    let matchingDrivers = [];
    matchingDrivers = drivers.filter(function(driver){
        return (driver === name || driver === name.toLowerCase());
    });
    return matchingDrivers;
}

function fuzzyMatch(drivers, name) {
    let fuzzyDriversMatch = [];
    fuzzyDriversMatch = drivers.filter(function(driver){
        return (driver[0] === name[0]);
    });
    return fuzzyDriversMatch;
}

function matchName(drivers, name) {
    let matchedDriverName = [];
    matchedDriverName = drivers.filter(function(driver){
        return (driver.name === name);
    });
    return matchedDriverName;
}