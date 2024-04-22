//  Em variável ficará visivel mesmo fora dos blocos
{
    {
        {
            {
                var sera = 'Será???'
            }
        }
    }
}
console.log(sera);

// Em função a variável só fica visivel dentro da função

function teste() {
    var local = 123;
    console.log(local);
}
teste()
//console.log(local);  #Ele apresentará que o local não foi definido.