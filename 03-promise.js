function prepararPedido(){
    return new Promise((resolve, reject)=>{
        console.log("Preparando pedido.....");

        setTimeout(()=>{
            const deuBom = false;
            if(deuBom){
            resolve("Hamburguer pronto!");
            }else{
                reject("Deu erro ao preparar o hamburguer");
            }
           
        }, 3000);
    })

}
 prepararPedido().then((resultado)=> {
 console.log(resultado)
 })
 