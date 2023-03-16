function labelBlur(input){
  console.log(input.value)
  if (input.value.length !== 0) {
    input.parentNode.classList.add('form-check');
  } else {
    input.parentNode.classList.remove('form-check');
  }
}
