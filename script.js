let equacao = "0"; 
ObterID();

function ObterID()
{
    document.getElementById('equacao').innerHTML = equacao;
}

function Adicionar(valor)
{
    let countPontos = equacao.indexOf(".");

    if(equacao == "0")
    {
        if(!(isNaN(valor)))
        {
            equacao = valor;
            ObterID();

        }else
        {
            equacao += valor;
            ObterID(); 
        }

    }else
    {
        if((isNaN(valor)))
        {
            if(valor == ".")
            {
                if(countPontos == -1) // verificar se já tem ponto na equação
                {
                    equacao += valor;
                    ObterID();
    
                }else
                {
                    ObterID();
                }

            }else
            {
                if(isNaN(equacao.substr(-1)))
                {
                    equacao = equacao.slice(0,-1) + valor;
                    ObterID();

                }else
                {
                    equacao += valor;
                    ObterID();
                }
            }

        }else
        {
            equacao += valor;
            ObterID(); 
        }
    }
}

function LimparEquacao()
{
    equacao = "0";
    ObterID();
}

function CalcularResultado()
{
    let CountExponecial = equacao.indexOf("^");

    if(CountExponecial != -1)
    {
        equacao.replace("^","**");
        CountExponecial = 0;
    }

    if(isNaN(equacao.substr(-1)))
    {
        equacao = equacao.slice(0,-1);

    }    

    equacao = eval(equacao);
    equacao = equacao.toString();
    ObterID();
}

function CalcularRaiz()
{
    if(isNaN(equacao.substr(-1)))
    {
        equacao = equacao.slice(0,-1);
    }

    equacao = Math.sqrt(eval(equacao));
    equacao = equacao.toString();
    ObterID();
}