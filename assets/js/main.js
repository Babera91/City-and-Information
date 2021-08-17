function check(){
    let Bundesland = document.getElementById('bundeslandInfo').value
    let div = document.getElementById('bundeslandInfoErgebnis')
    switch (Bundesland) {
        case 'Baden-Württemberg':
            div.innerHTML='Baden-Württemberg hat 10,880 Mio Einwohner und Stuttgart ist die Hauptstadt'
            break;
        case 'Bayern':
            div.innerHTML='Bayern hat 12,844 Mio Einwohner und München ist die Hauptstadt'
            break;
        case 'Berlin':
            div.innerHTML='Berlin hat 3,520 Mio Einwohner und Berlin ist die Hauptstadt'
            break;
        case 'Brandenburg':
            div.innerHTML='Brandenburg hat 2,485 Mio Einwohner und Potsdam ist die Hauptstadt'
            break;
        case 'Bremen':
            div.innerHTML='Bremen hat 0,671 Mio Einwohner und Bremen ist die Hauptstadt'
            break;
        case 'Hamburg':
            div.innerHTML='Hamburg hat 1,787 Mio Einwohner und Hamburg ist die Hauptstadt'
            break;
        case 'Hessen':
            div.innerHTML='Hessen hat 6,176 Mio Einwohner und Wiesbaden ist die Hauptstadt'
            break;
        case 'Mecklenburg-Vorpommern':
            div.innerHTML='Mecklenburg-Vorpommern hat 1,612 Mio Einwohner und Schwerin ist die Hauptstadt'
            break;
        case 'Niedersachsen':
            div.innerHTML='Niedersachsen hat 7,927 Mio Einwohner und Hannover ist die Hauptstadt'
            break;
        case 'Nordrhein-Westfalen':
            div.innerHTML='Nordrhein-Westfalen hat 17,865 Mio Einwohner und Düsseldorf ist die Hauptstadt'
            break;
        case 'Rheinland-Pfalz':
            div.innerHTML='Rheinland-Pfalz hat 4,053 Mio Einwohner und Mainz ist die Hauptstadt'
            break;
        case 'Saarland':
            div.innerHTML='Saarland hat 0,996 Mio Einwohner und Saarbrücken ist die Hauptstadt'
            break;
        case 'Sachsen':
            div.innerHTML='Sachsen hat 4,085 Mio Einwohner und Dresden ist die Hauptstadt'
            break;
        case 'Sachsen-Anhalt':
            div.innerHTML='Sachsen-Anhalt hat 2,245 Mio Einwohner und Magdeburg ist die Hauptstadt'
            break;
        case 'Thüringen':
            div.innerHTML='Thüringen hat 2,171 Mio Einwohner und Erfurt ist die Hauptstadt'
            break;
            
        default:
            div.innerHTML='Ein solches Bundesland gibt es in Deutschland nicht.'
            break;
    }
}
