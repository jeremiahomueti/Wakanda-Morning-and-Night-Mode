document.getElementById('dmbutton').addEventListener('click', function()
{
    const css = document.getElementById('cssfile')
    const dmb = document.getElementById('dmbutton')
    const imgWakanda = document.getElementById('imageOfWakanda')

 
    if (dmb.innerHTML == 'Activate Night Mode')

    {
        css.setAttribute('href', 'darkmode.css')
        dmb.innerHTML = 'Activate Morning Mode';
        imgWakanda.setAttribute('href', 'images/Wakanda_Night.jpg')
    }

    else
    {
        css.setAttribute('href', 'lightmode.css')
        dmb.innerHTML = 'Activate Night Mode';
    }
})