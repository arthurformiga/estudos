function Verificar(){
    let data= new Date()
    let ano= data.getFullYear()
    let ano2=document.getElementById('txt')
    let res=document.getElementById('res')
    if(ano2.value.length==0 || ano2.value>ano){
        alert('[ERRO]Verifique os dados e tente novamente!')

    }else{
      let fsex=document.getElementsByName('radisex')
      let idade= ano - Number (ano2.value)
      let genero=''
      let img= document.createElement('img')
     img.setAttribute('id', 'foto')
      if(fsex[0].checked){
        genero='Homem'
        if(idade>=0 && idade<10){
          img.setAttribute('src','foto-criança-menino.jpg ')
        }else if(idade<21){
          img.setAttribute('src','foto-Adolescente-homem.jpg ')
        }else if(idade<50){
          img.setAttribute('src','foto-adulto.jpg ')
        }else{
          img.setAttribute('src','foto-idoso.jpg ')
        }

      }else if(fsex[1].checked){
        genero='Mulher'
      } if(idade>=0 && idade<10){
        img.setAttribute('src','foto-criança-menina.jpg ')
      }else if(idade<21){
        img.setAttribute('src','foto-Adolescente-mulher.jpg ')
      }else if(idade<50){
        img.setAttribute('src','foto-Adulta.jpg ')
      }else{
        img.setAttribute('src','foto-idosa.jpg ')
      }
      res.style.textAlign='center'
      res.innerHTML=`Detectamos ${genero} com ${idade} anos. `
      res.appendChild(img)
    
    }
}