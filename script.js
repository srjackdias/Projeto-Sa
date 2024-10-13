let pessoas = []
/*isso é um vetor*/



let pessoa = {
    /*isso é um objeto*/
    
    
    
}

let userLogado

function cadastroPessoa(){

    pessoas = JSON.parse(localStorage.getItem('pessoasSalvo'))
   
    let pessoa ={

        nome: document.getElementById('inptNome').value,
        senha:document.getElementById('inptSenha').value,
        idade: document.getElementById('inptIdade').value,
        Endereco: document.getElementById('inptEndereco').value,
        doencas: document.getElementById('inptDoenca').value,
        
        email: document.getElementById('inptEmail').value,       
    
    }

    if (pessoas == null) {
        
        pessoas = []
        pessoas.push(pessoa)
        localStorage.setItem('pessoasSalvo', JSON.stringify(pessoas))
       
        alert("cadastro realizado")

    } else {

        pessoas.push(pessoa)
        localStorage.setItem('pessoasSalvo', JSON.stringify(pessoas))
      

    }

  
    
    // document.getElementById('cadastreAqui').style.display = 'none'
    // document.getElementById('divLogin').style.display = 'block'

     

    window.location.href = "login.html"
  
}

 function btncadastro(){
//     // document.getElementById('cadastreAqui').style.display = 'block'
//     // document.getElementById('divLogin').style.display = 'none'
//     // document.getElementById('containerLogin').style.display = 'none'
   
   
   
   
    
// }
// function btncadastro(){
//     document.getElementById('cadastreAqui').style.display = 'none'

 }
    

 



function Entrar(){

    let NomeUsuario=document.getElementById("inputNome").value
    let SenhaUsuario=document.getElementById("inputsenha").value
    let ApresentarnaTela=document.getElementById("inptMostra")

    pessoas = JSON.parse(localStorage.getItem('pessoasSalvo'))
    
    let existe = false
    
    for(i=0; i<pessoas.length;i++){

           if(pessoas[i].nome == NomeUsuario && pessoas[i].senha == SenhaUsuario){
            window.location.href="PressaoArterial.html"
           
            existe = true
            userLogado = pessoas[i].nome
            localStorage.setItem('userlogado', JSON.stringify(userLogado))
          
        }
    }
    
    if(existe == false){
       
        ApresentarnaTela.innerHTML=(`Usuario ou senha incorretos`)  
        
    }
    
}

function mostraDadouser(){

    pessoas = JSON.parse(localStorage.getItem('pessoasSalvo'))
    userLogado = JSON.parse(localStorage.getItem('userlogado'))
      
    for(i=0; i<pessoas.length;i++){

        if(pessoas[i].nome == userLogado){
         
             document.getElementById("inf01").innerHTML = `Nome: ${pessoas[i].nome}`
             //document.getElementById("inf02").innerHTML = `Nome Completo: ${pessoas[i].nomeCompleto}`
            // document.getElementById("inf03").innerHTML = `Senha: ${pessoas[i].senha}`
            document.getElementById("inf02").innerHTML = `Idade: ${pessoas[i].idade}`
            //document.getElementById("inf05").innerHTML = `Profissão: ${pessoas[i].profissao}`
            // document.getElementById("inf07").innerHTML = `Peso: ${pessoas[i].peso}`
            // document.getElementById("inf08").innerHTML = `Medicamento de Uso Contínuo: ${pessoas[i].medicamento}`
            document.getElementById("inf03").innerHTML = `Doenças: ${pessoas[i].doencas}`
            document.getElementById("inf04").innerHTML = `Endereço: ${pessoas[i].Endereco}`
            //document.getElementById("inf11").innerHTML = `Celular do familiar (Cuidador): ${pessoas[i].cuidadoCel}`
            document.getElementById("inf05").innerHTML = `Email do responsável: ${pessoas[i].email}`

            
        }

    }

}


function trocarpagina(){


    window.location.href="cadastro.html"

}
function trocarpaginaUm(){



window.location.href="teladeinformacao.html"




}

function trocarpaginadois(){

    window.location.href="login.html"

}

function buttonInfo(){


    window.location.href="PressaoArterial.html"

}

// SEÇÃO CÁLCULO DE PRESSÕES

let pressoes = []

let pressao = {

    sistolica: 0,
    diastolica: 0,
    data: 0

}

let maxSis = 0
let minSis = 1000
let somaSis = 0
let mediaSis

let maxDia = 0
let minDia = 1000
let somaDia = 0
let mediaDia

let DadosSis = document.getElementById('inptSis')
let DadosDia = document.getElementById('inptDia')
let DadosData = document.getElementById('inptData')

let valorSisMin = document.getElementById('inptMinSis')
let valorSisMed = document.getElementById('inptMedSis')
let valorSisMax = document.getElementById('inptMaxSis')
let valorDiaMin = document.getElementById('inptMinDia')
let valorDiaMed = document.getElementById('inptMedDia')
let valorDiaMax = document.getElementById('inptMaxDia')


function cadastrarPressao(){

    pressao = {

        sistolica: Number(DadosSis.value),
        diastolica: Number(DadosDia.value),
        data: DadosData.value

    }

    if(pressao.sistolica != 0 && pressao.sistolica != ''){

        if(pressao.diastolica != 0 && pressao.diastolica != ''){

            if(pressao.data != 0 && pressao.data != ''){

                pressoes.push(pressao)
              
                let tabPressao = document.getElementById('tabPressao')
                let linhaP = document.createElement('tr')
                let celulaP = document.createElement('td')

                if(pressao.sistolica >= 15 || pressao.diastolica >= 9){

                    linhaP.setAttribute('class', 'pressaoAlta')

                }
            
                celulaP.appendChild(document.createTextNode(pressao.sistolica))
                linhaP.appendChild(celulaP)
            
                celulaP = document.createElement('td')
                celulaP.appendChild(document.createTextNode(pressao.diastolica))
                linhaP.appendChild(celulaP)
            
                celulaP = document.createElement('td')
                celulaP.appendChild(document.createTextNode(pressao.data))
                linhaP.appendChild(celulaP)
            
                tabPressao.appendChild(linhaP)

                for(i = 0; i < pressoes.length; i++){
                        
                    if(pressoes[i].diastolica > maxDia){
        
                        maxDia = pressoes[i].diastolica                   
        
                    }
        
                    if(pressoes[i].diastolica < minDia){
        
                        minDia = pressoes[i].diastolica
        
                    }

                    if(pressoes[i].sistolica > maxSis){
            
                        maxSis = pressoes[i].sistolica                   
            
                    }
            
                    if(pressoes[i].sistolica < minSis){
            
                        minSis = pressoes[i].sistolica
            
                    }

                    somaDia += pressoes[i].diastolica   
                    somaSis += pressoes[i].sistolica    

                }

            }
            
            valorDiaMax.value = maxDia
            valorDiaMin.value = minDia
            
            valorSisMax.value = maxSis
            valorSisMin.value = minSis
            
        }

        if(pressoes.length > 1){
            
            mediaDia = (somaDia / pressoes.length).toFixed(2)
            valorDiaMed.value = mediaDia
            
            mediaSis = (somaSis / pressoes.length).toFixed(2)
            valorSisMed.value = mediaSis
            
        }

        somaDia = 0
        somaSis = 0

        DadosSis.value = ''
        DadosDia.value = ''

        alert('Dados de pressão cadastrados!')

    }

}



// SEÇÃO CÁLCULO DE BATIMENTOS

let batimentos = []

let batimento = {

    frequencia: 0,
    data: 0

}

let maxBat = 0
let minBat = 1000
let somaBat = 0
let mediaBat

let DadosBat = document.getElementById('inptBat')
let DadosDataDois = document.getElementById('inptDataDois')

let valorBatMin = document.getElementById('inptMinBat')
let valorBatMed = document.getElementById('inptMedBat')
let valorBatMax = document.getElementById('inptMaxBat')


function cadastrarBatimentos(){

    let batimento = {

        frequencia: Number(DadosBat.value),
        data: DadosDataDois.value

    }

    console.log(batimento)
    console.log(typeof(batimento.frequencia))

    if(batimento.frequencia != 0 && batimento.frequencia != ''){

        if(batimento.data != 0 && batimento.data != ''){
    
            batimentos.push(batimento)
             
            let tabBatimentos = document.getElementById('tabBatimentos')
            let linhaB = document.createElement('tr')
            let celulaB = document.createElement('td')

            if(batimento.frequencia >= 100 || batimento.frequencia <= 60){

                linhaB.setAttribute('class', 'frequenciaAlterada')

            }

            celulaB = document.createElement('td')
            celulaB.appendChild(document.createTextNode(batimento.frequencia))
            linhaB.appendChild(celulaB)

            celulaB = document.createElement('td')
            celulaB.appendChild(document.createTextNode(batimento.data))
            linhaB.appendChild(celulaB)

            tabBatimentos.appendChild(linhaB)

            for(i = 0; i < batimentos.length; i++){
                        
                if(batimentos[i].frequencia > maxBat){
        
                    maxBat = batimentos[i].frequencia                 
        
                }
        
                if(batimentos[i].frequencia < minBat){
   
                    minBat = batimentos[i].frequencia
        
                }

                somaBat += batimentos[i].frequencia   

            }
            
            valorBatMax.value = maxBat
            valorBatMin.value = minBat

        }

        if(batimentos.length > 1){
            
            mediaBat = (somaBat / batimentos.length).toFixed(2)
            valorBatMed.value = mediaBat
            
        }

        somaBat = 0

        DadosBat.value = ''

        alert("Dados de batimentos cadastrados!")

    }

}



// SEÇÃO INDISPOSIÇÕES

let indisposicoes = []
let indisposicoesCount = [0, 0, 0, 0]

let indisposicao = {

    sintomas: '',
    data: 0

}


let sintoma = ''
let maiorIndisposicao = 0
let posMaior = 0

let DadosSin = document.getElementById('inptSin')
let DadosDataTres = document.getElementById('inptDataTres')
let DadosIndRec = document.getElementById('inptIndRec')


function cadastrarIndisposicao(){

    let indisposicao = {

        sintoma: (document.getElementById('slct').value),
        data: document.getElementById('inptDataTres').value

    }

    if(indisposicao.sintoma != 0 && indisposicao.sintoma != ''){

        if(indisposicao.data != 0 && indisposicao.data != ''){

            indisposicoes.push(indisposicao)
            
            switch(indisposicao.sintoma){

                case 'Dor de Cabeça':

                    indisposicoesCount[0] += 1
                    break

                case 'Tontura':

                    indisposicoesCount[1] += 1
                    break

                case 'Cansaço':

                    indisposicoesCount[2] += 1
                    break

                case 'Dormência':

                    indisposicoesCount[3] += 1
                    break

            }

            console.log(indisposicoesCount)
                               
            let tabIndisposicao = document.getElementById('tabIndisposicao')

            let linhaC = document.createElement('tr')
            let celulaC = document.createElement('td')

            celulaC = document.createElement('td')
            celulaC.appendChild(document.createTextNode(indisposicao.sintoma))
            linhaC.appendChild(celulaC)

            celulaC = document.createElement('td')
            celulaC.appendChild(document.createTextNode(indisposicao.data))
            linhaC.appendChild(celulaC)

            tabIndisposicao.appendChild(linhaC)

            maiorIndisposicao = Math.max(...indisposicoesCount)

            for(i = 0; i < indisposicoesCount.length; i++){

                if(indisposicoesCount[i] == maiorIndisposicao){

                    posMaior = i

                }

            }

            if(posMaior == 0){

                DadosIndRec.value = 'Dor de Cabeça'

            }else if(posMaior == 1){

                DadosIndRec.value = 'Tontura'

            }else if(posMaior == 2){

                DadosIndRec.value = 'Cansaço'

            }else if(posMaior == 3){

                DadosIndRec.value = 'Dormência'

            }

            alert("Indisposição cadastrada!")

        }

    }

}





