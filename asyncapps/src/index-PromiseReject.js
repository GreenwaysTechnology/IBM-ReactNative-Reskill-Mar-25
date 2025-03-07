//Promise factory api with success and default async

function blockMe(message) {
    console.log(message)
}
function getError() {
    return Promise.reject('something went wrong')
}
function main() {
    blockMe('start')
    getError().catch(err => console.log(err))
    blockMe('end')
}
main()
