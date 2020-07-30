const colors = ['red', 'blue', 'green', 'yellow', 'purple']

const btn = document.getElementById('btn');

btn.addEventListener('click',() => {
    const rundomNumber = Math.trunc((Math.random()*colors.length))
    document.body.style.backgroundColor = colors[rundomNumber]
    let colorCode = document.querySelector('span')
    colorCode.innerText = colors[rundomNumber]
})


















