let f= prompt("Enter Fahrenheit temperature");
    f=parseInt(f);
    let c= (f-32)* 5/9;
    c= parseInt(c);
    alert("Fahrenheit temperature is \n" + f
                +"\n\nCelsius temperature is \n" +c);