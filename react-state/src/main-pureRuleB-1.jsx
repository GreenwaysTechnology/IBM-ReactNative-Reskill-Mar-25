//Rule B:

//pure or not 
function updateProfile(city, profile) {
    //update
    profile.city = city
    return profile
}

let profile = {
    name: 'Subramanian',
    city: 'Delhi'
}
console.log('Before update ',profile)
updateProfile('Coimbatore',profile)
console.log('After Update ',profile)
