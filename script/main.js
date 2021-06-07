function signo(){
  var cumple = document.getElementById("cumple").value
  var signo = document.getElementById("signo-cliente")

  var mes = cumple[5]+cumple[6]
  var dia = cumple[8]+cumple[9]

  if(mes == "03"){
    if(dia >= "21" && dia <= "31"){
      signo.innerHTML = "¡Eres Aries!"
    }else{
      signo.innerHTML = "¡Eres Piscis!"
    }
  }else if(mes == "04"){
    if(dia >= "01" && dia <= "20"){
      signo.innerHTML = "¡Eres Aries!"
    }else{
      signo.innerHTML = "¡Eres Tauro!"
    }
  }else if(mes == "05"){
    if(dia >= "01" && dia <= "20"){
      signo.innerHTML = "¡Eres Tauro!"
    }else{
      signo.innerHTML = "¡Eres G&eacute;minis!"
    }
  }else if(mes == "06"){
    if(dia >= "01" && dia <= "20"){
      signo.innerHTML = "¡Eres G&eacute;minis!"
    }else{
      signo.innerHTML = "¡Eres C&aacute;ncer!"
    }
  }else if(mes == "07"){
    if(dia >= "01" && dia <= "20"){
      signo.innerHTML = "¡Eres C&aacute;ncer!"
    }else{
      signo.innerHTML = "¡Eres Leo!"
    }
  }else if(mes == "08"){
    if(dia >= "01" && dia <= "21"){
      signo.innerHTML = "¡Eres Leo!"
    }else{
      signo.innerHTML = "¡Eres Virgo!"
    }
  }else if(mes == "09"){
    if(dia >= "01" && dia <= "22"){
      signo.innerHTML = "¡Eres Virgo!"
    }else{
      signo.innerHTML = "¡Eres Libra!"
    }
  }else if(mes == "10"){
    if(dia >= "01" && dia <= "22"){
      signo.innerHTML = "¡Eres Libra!"
    }else{
      signo.innerHTML = "¡Eres Escorpion!"
    }
  }else if(mes == "11"){
    if(dia >= "01" && dia <= "22"){
      signo.innerHTML = "¡Eres Escorpion!"
    }else{
      signo.innerHTML = "¡Eres Sagitario!"
    }
  }else if(mes == "12"){
    if(dia >= "01" && dia <= "20"){
      signo.innerHTML = "¡Eres Sagitario!"
    }else{
      signo.innerHTML = "¡Eres Capricornio!"
    }
  }else if(mes == "01"){
    if(dia >= "01" && dia <= "19"){
      signo.innerHTML = "¡Eres Capricornio!"
    }else{
      signo.innerHTML = "¡Eres Acuario!"
    }
  }else if(mes == "02"){
    if(dia >= "01" && dia <= "18"){
      signo.innerHTML = "¡Eres Acuario!"
    }else{
      signo.innerHTML = "¡Eres Piscis!"
    }
  }
}
