const input = document.getElementById("input")
const word = document.getElementById("word")
const davor = document.getElementById("davor")
const danach = document.getElementById("danach")
const before = document.getElementById("before")
const after = document.getElementById("after")

let trennen = () => {
    let index = input.value.indexOf(word.value)
    if (index == -1) {
        before.innerHTML = "das war wohl nix"
        after.innerHTML = " !!! "
        return;
    }
    if (davor.checked) {
        before.innerHTML = input.value.slice(0, index)
        after.innerHTML = input.value.slice(index)
    } else {
        before.innerHTML = input.value.slice(0, index + word.value.length)
        after.innerHTML = input.value.slice(index + word.value.length)
    }
}
    
