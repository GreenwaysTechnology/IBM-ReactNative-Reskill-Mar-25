//Rule B:

//impure function
// function updateProfile(city, profile) {
//     //update
//     profile.city = city
//     return profile
// }

//pure function : using plain js pattern
// function updateProfile(city, profile) {
//     //immutablity logic: return new object every time
//     return {
//         name: profile.name,
//         city: city
//     }
// }

//pure function : using Object.assign method pattern

// function updateProfile(city, profile) {
//     //immutablity logic: return new object every time
//     return Object.assign({}, profile, { city: city})
// }

//pure function : using es7 spread notation
function updateProfile(city, profile) {
    //immutablity logic: return new object every time
    return { ...profile, city: city }
}

let profile = {
    name: 'Subramanian',
    city: 'Delhi'
}
console.log('Before update ', profile)
let result = updateProfile('Coimbatore', profile)
console.log(result === profile ? "Same Object" : "Different Object")
console.log('After Update ', profile)
