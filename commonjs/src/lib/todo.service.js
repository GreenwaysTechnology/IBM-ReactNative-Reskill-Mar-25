class TodoService {
    findAll() {
        return ["done"]
    }
}
//try to export class
// module.exports = TodoService
module.exports = new TodoService()