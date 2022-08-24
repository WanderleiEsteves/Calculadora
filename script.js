let equacao = "0";
//adicionar algo após o cadastro 
//Num pós (
//Operador pós num != 0
ObterID();

function ObterID()
{
    document.getElementById('equacao').innerHTML = equacao;
}

function LimparEquacao()
{
    equacao = "0";
    ObterID();
}

function CalcularRaiz()
{

}

function Adicionar(valor)
{
    if(equacao == "0")
    {
        if(!(isNaN(valor)))
        {
            equacao = valor;

        }else if(valor == ".")
        {
            equacao += valor;
        }else 
        {
            equacao += " " + valor;
        }
    }else
    {
        if(!(isNaN(valor)))
        {
            if(equacao.substr(-1) == ")")
            {
                equacao += " * " + valor;

            }else if(isNaN(equacao.substr(-1)) && equacao.substr(-1) != "(" && equacao.substr(-1) != ".")
            {
                equacao += " " + valor;

            }else
            {
                equacao += valor
            }

        }else if(valor == ".")
        {
            if(isNaN(equacao.substr(-1))) 
            {
                if(isNaN(equacao.substr(-2)) && equacao.substr(-2) != ".")
                {
                    equacao += "0.";
                }
            }else
            {
                equacao += "."
            }
        }else
        {

        }

    }

    ObterID()
}

function AdicionarParenAberto()
{
    if(equacao == "0")
    {
        equacao = "(";

    }else if (equacao.substr(-1) == ")" || !isNaN(equacao.substr(-1)))
    {
        equacao += " * (";
    }else
    {
        equacao += "(";
    } 
        ObterID();
}

function AdicionarParenFechado()
{ 
    const CountParenAberto = (equacao.match(/\(/g) || []).length;
    const CountParenFechado = (equacao.match(/\)/g) || []).length;

    if(CountParenFechado < CountParenAberto)
    {
        if(equacao.substr(-1) == "(")
        {
            equacao += "0)";
        }else
        {
            equacao += ")";
        }
        ObterID();
    }
}

function RetirarUltimoElemento() // (50 < 0
{
    if(isNaN(equacao.substr(-1)) && equacao.substr(-1) != ".")
    {       
        if(equacao.substr(-1) != "(" && equacao.substr(-1) != ")")
        {
            equacao = equacao.slice(0,-2);
        }
    
    }else
    {
        equacao = equacao.slice(0,-1);
    }

    if(equacao == "") 
    {
        equacao = "0";
    }
    ObterID();
}