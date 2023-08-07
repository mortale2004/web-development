function myfunc()
{
    var s = document.getElementsByName('parameters-1')[0];
    var s2 = document.getElementsByName('parameters-2')[0];
    var text1 = s.options[s.selectedIndex].text;
    let text2 = s2.options[s2.selectedIndex].text;
    // document.write(text1+'/'+text2);
    let final = text1 + '/' + text2;
    document.getElementById('txt').innerHTML = final;

}