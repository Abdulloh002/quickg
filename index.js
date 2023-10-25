function copyIt(){
    // find the element we will select
    let copyInput = document.querySelector('#copy-input')
    // select that input
    copyInput.select()
    // copy it!
    document.execCommand("copy")
  }
