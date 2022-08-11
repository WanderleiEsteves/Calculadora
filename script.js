let equacao = "";

function ObterID()
{
    document.getElementById('equacao').innerHTML = equacao;
}

function Adicionar(valor)
{
    equacao += valor;
    ObterID();
}

function LimparEquacao()
{
    equacao = "";
    ObterID();
}

function CalcularResultado()
{
    if(equacao === "")
    {
        return "";
    }
    equacao = eval(equacao.replace("^","**"));
    ObterID();
}

function CalcularRaiz()
{
    if(equacao === "")
    {
        return "";
    }
    equacao = Math.sqrt(eval(equacao));
    ObterID();
}