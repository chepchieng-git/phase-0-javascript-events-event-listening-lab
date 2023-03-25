function addingEventListener() {
    // const input = document.getElementById('input')
    // input.addEventListener('click', function() {
    //     alert('I was clicked!')
    //  })
    const input = document.getElementById('input');

    function clickAlert() {
        alert('I was clicked!');
    }
    input.addEventListener('click', clickAlert)
}
addingEventListener()



// //create an alert
// document.querySelector('#main').addingEventListener
// ('click',() => alert('I was clicked!'))
// // ('click', alertMe)

// // function alertMe() {
// //     return alert('Hi, I was clicked!')
// // }

// // log something

// //will delete task
// function handleDelete(e) {
//     e.target.parentNode.remove()
// }

// document.querySelectorAll('#log').addingEventListener
// ('click', () => console.log('I\'ve been logged'))

// // grabs button and deletes parent Node of the button
// function addingEventListenerToDeleteButtons() {
//     let buttons = document.getElementsByClassName('delete_btn')
//     for(let btn of buttons) {
//         btn.addEventListener('click', handleDelete)
//     }
// }