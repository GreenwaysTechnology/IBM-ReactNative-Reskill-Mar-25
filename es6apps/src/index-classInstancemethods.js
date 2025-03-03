
class EmployeeService {
    //instance methods
    save() {
        return 'saved'
    }
    findAll = () => {
       return 'FindAll'
    }
}
let empService = new EmployeeService()
console.log(empService.save(),empService.findAll())