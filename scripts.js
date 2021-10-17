

let c = Number(prompt("Digite quantos casos você quer fazer: "))
function Personagens(nome,força){
    this.nome = nome,
    this.força = força
}

function Mjonir(casos){

    let pessoa = new Personagens();
    
    

    for(let i = 0; i < casos;i++){
        pessoa.nome = prompt("Digite o nome do Personagem: ")
        pessoa.força = prompt("Digite a força aplicada: ")
            forNumber = Number(pessoa.força)

        newtonExists = ((forNumber >= 1) && (forNumber <= 25000))

            if(newtonExists){
                let toUpperName = pessoa.nome.toUpperCase()
                    if(toUpperName == "THOR"){
                    console.log(toUpperName + " Y")
                    } else {
                        console.log(toUpperName + " N")
                    }
            } else {
               throw "Não é um numero"
            }
            
        
              
           
    }   

    

}

Mjonir(c)



