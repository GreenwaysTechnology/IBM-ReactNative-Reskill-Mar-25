
function createElement(){
   console.log('create a dom element(html) element and insert into existing dom tree')
   const Heading = document.createElement('h1')
   Heading.innerHTML = 'Hello DOM!'
   //attach h1 with existing tree
   const rootElement = document.getElementById('root')
   rootElement.appendChild(Heading)
}
createElement()