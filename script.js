let equacao = "0";
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

function Adicionar(valor)
{
    let contPonto = 0;
    if(equacao === "0")
    {
        if(!(isNaN(valor)))
        {
            equacao = valor;

        }else if(valor == ".")
        {
            equacao += valor;
        }else 
        {
            equacao += " " + valor + " ";
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
            if(equacao.substr(-2,1) == "^" || equacao.substr(-2,1) == "-" || equacao.substr(-2,1) == "+" || equacao.substr(-2,1) == "*" || equacao.substr(-2,1) == "/")
            {
                equacao += "0.";
            }else
            {
                if(isNaN(equacao.substr(-1)))
                {
                    switch(equacao.substr(-1))
                    {
                        case "(":
                            equacao += "0.";
                            break;
    
                        case ")":
                            equacao += " * 0.";
                            break;
    
                        case ".":
                            break;
    
    
                        default:
                            equacao += " 0.";
                            break;
                    }
                }else
                {
                    let i = -1;
                    let contPonto = 0;
                    
                    while(i >= equacao.length - (equacao.length * 2) && equacao.substr(i,1) != " ")
                    {
                        if(equacao.substr(i,1) == ".")
                        {
                            contPonto++;
                        }
                        i--;
                    }
    
                    if(contPonto != 0)
                    {
                        contPonto = 0;
    
                    }else
                    {
                        equacao += ".";
                    }
                }
            }

        }else
        {
            if((equacao.substr(-2,1) == "^" || equacao.substr(-2,1) == "/" || equacao.substr(-2,1) == "*" || equacao.substr(-2,1) == "-" || equacao.substr(-2,1) == "+") && equacao.length != 2)
            {
                equacao = equacao.slice(0,-3);
                equacao += " " + valor + " ";

            }else if(equacao.substr(-1) == ".")
            {
                equacao = equacao.slice(0,-1);
                equacao += " " + valor + " ";

            }else if(equacao.substr(-1) == "(")
            {
                equacao += "0 " + valor + " ";

            }else
            {
                equacao += " " + valor + " ";
            }
        }
    }
    ObterID()
}

function AdicionarParenAberto()
{
    if(equacao == "0")
    {
        equacao = "(";

    }else if(equacao.substr(-2,1) == "^" || equacao.substr(-2,1) == "-" || equacao.substr(-2,1) == "+" || equacao.substr(-2,1) == "*" || equacao.substr(-2,1) == "/")
    {
        equacao += "(";

    }else if (equacao.substr(-1) == ")" || !isNaN(equacao.substr(-1)))
    {
        equacao += " * (";

    }else if(equacao.substr(-1) == ".")
    {
        equacao = equacao.slice(0,-1);
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
        if(equacao.substr(-1) == "(" || equacao.substr(-2,1) == "^" || equacao.substr(-2,1) == "-" || equacao.substr(-2,1) == "+" || equacao.substr(-2,1) == "*" || equacao.substr(-2,1) == "/")
        {
            equacao += "0)";

        }else if(equacao.substr(-1) == ".")
        {
            equacao = equacao.slice(0,-1);
            equacao += ")";
        }else
        {
            equacao += ")";
        }
        ObterID();
    }
}

function RetirarUltimoElemento() // ^(
{
    if(equacao.substr(-1) == " ")
    {
        if(equacao.substr(-2,1) == "^" || equacao.substr(-2,1) == "-" || equacao.substr(-2,1) == "+" || equacao.substr(-2,1) == "*" || equacao.substr(-2,1) == "/")
        {
            equacao = equacao.slice(0,-3);

        }else
        {
            equacao = equacao.slice(0,-1);
        }

    }else
    {
        equacao = equacao.slice(0,-1);
    }


    if(equacao == "" || equacao == "-")
    {
        equacao = "0";
    }

    ObterID();
}

function CalcularResultado()
{
    const CountParenAberto = (equacao.match(/\(/g) || []).length;
    const CountParenFechado = (equacao.match(/\)/g) || []).length;
    const Diferenca = CountParenAberto - CountParenFechado;

    if(equacao.substr(-1) == ".")
    {
        equacao = equacao.slice(0,-1);
    }

    if(equacao.substr(-2) == "^ " || equacao.substr(-2) == "- " || equacao.substr(-2) == "+ " || equacao.substr(-2) == "* " || equacao.substr(-2) == "/ ")
    {
        equacao = equacao.slice(0,-3);
    }

    if(Diferenca > 0)
    {
        for(let i = 0; i < Diferenca; i++)
        {
            AdicionarParenFechado();
        }
    }

    equacao = equacao.replace("^","**");
    equacao = String(eval(equacao));

    if(equacao == "NaN")
    {
        equacao = "Resultado indefinido";
    }

    ObterID();

        equacao = "0";
}


function ExcluirNum()
{
    let i = -1;
    let PosicaoInicialNum;

    if(!isNaN(equacao.substr(-1)) && equacao.substr(-1) != " " || equacao.substr(-1) == ".")
    {
        PosicaoInicialNum = -1;
        i = -2;

        while(i >= (equacao.length * -1) && equacao.substr(i,1) != " ")
        {
            PosicaoInicialNum = i;
            i--;
        }

        equacao = equacao.slice(0,PosicaoInicialNum);

        if(equacao == "")
        {
            equacao = "0";
        }
        console.log(equacao.length);
        ObterID();
    }
}

function CalcularRaiz()
{
    CalcularResultado();
    equacao = String(Math.sqrt(eval(equacao)));
    ObterID();
}