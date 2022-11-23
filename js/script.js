var items = []

document.querySelector('#enviar').addEventListener('click', () =>{
    var nomeProduto = document.querySelector("#nome_produto")
    var quantidadeProduto = document.querySelector('#quantidade_produto')
    if(quantidadeProduto.value == ""){
        quantidadeProduto.value = 0
    }
    var precoProduto = document.querySelector("#preco_produto")

    if(precoProduto.value == ""){
        precoProduto.value = 0
        
    }


    items.push(
    {
        nome:nomeProduto.value,
        quantidade:quantidadeProduto.value,
        valor:precoProduto.value
    }
    )

    var listaProdutos = document.querySelector('.lista-produtos')
    listaProdutos.innerHTML = ``
    let somaTotal = 0

    items.map((val) =>{
        var valor = val.valor*val.quantidade
        somaTotal += parseFloat(valor)
        if(items.length == 1){

            listaProdutos.innerHTML+=`
            <div class="lista-produto-single card-principal">
                <h3>Produto:`+val.nome+`</h3>
                <h3>Quantidade:`+val.quantidade+`</h3>
                <h3 class="price-produto"><span>Preço:R$`+valor+`</span></h3>
            </div>
    
            `
        }else{
            
            listaProdutos.innerHTML+=`
            <div class="lista-produto-single ">
                <h3>Produto:`+val.nome+`</h3>
                <h3>Quantidade:`+val.quantidade+`</h3>
                <h3 class="price-produto"><span>Preço:R$`+valor+`</span></h3>
            </div>
    
            `

        }
    })
    somaTotal = somaTotal.toFixed(2)
    nomeProduto.value = ''
    quantidadeProduto.value = ''
    precoProduto.value = ''
    

    var somaFinal = document.querySelector('.soma-produto h4')
    somaFinal.innerHTML = 'Total: R$'+somaTotal
})


document.querySelector('#btn-limpar').addEventListener('click', ()=>{
    items = []
    document.querySelector('.lista-produtos').innerHTML = ''
    document.querySelector('.soma-produto h4').innerHTML = 'Total: R$0,00'
})

/* Carrosel */

const botoes = document.querySelectorAll('.botoes')

let cardPrincipal = 0

botoes.forEach((botao) =>{
    botao.addEventListener('click',() =>{
        const cards = document.querySelectorAll('.lista-produto-single')
        let maxCards = cards.length

        
        let cima = botao.classList.contains('cima')
        let baixo = botao.classList.contains('baixo')
        if(baixo){
            if(cardPrincipal >= maxCards - 1){
                cardPrincipal = 0
            }else{
                cardPrincipal+=1
                
            }
        }

        if(cima){
            if(cardPrincipal == 0){
                cardPrincipal = maxCards - 1
            }else{
                cardPrincipal -= 1
            }
        }
        
        cards.forEach((card) =>{
            card.classList.remove('card-principal')
        })

        cards[cardPrincipal].scrollIntoView(
            {
                inline:'center',
                behavior: 'smooth'
            }
        )

        cards[cardPrincipal].classList.add('card-principal')
        
    })
})

