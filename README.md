# ESERCIZIO
**Carosello Mono Array**

## Descrizione:
Dato un array contenente una lista di cinque immagini, creare un carosello come nello screenshot.
In allegato troverete markup con il codice html e css già fatti.
**MILESTONE 1**
Rimuoviamo tutto il markup statico e inseriamo tutte le immagini dinamicamente servendoci dell'array fornito e un semplice ciclo for che concatena un template literal.Tutte le immagini saranno nascoste, tranne la prima, che avrà una classe specifica che la renderà visibile.
Al termine di questa fase ci ritroveremo con lo stesso slider stilato nella milestone 1, ma costruito dinamicamente attraverso JavaScript.
**MILESTONE 2**
Al click dell'utente sulle frecce, il programma cambierà l’immagine attiva, che quindi verrà visualizzata al posto della precedente.
**BONUS:**
Aggiungere il **ciclo infinito** del carosello. Ovvero se è attiva la prima immagine e l'utente clicca la freccia per andare all’immagine precedente, dovrà comparire l’ultima immagine dell’array e viceversa.
**EXTRA**
Al carousel fatto precedentemente aggiungere funzionalità di autoplay: dopo un certo periodo di tempo (3 secondi) l'immagine attiva dovrà cambiare alla successiva.

Bonus:
All'hover del mouse autoplay si ferma, quando il mouse si sposta fuori dal carousel, l'autoplay riparte.

## Raccolota dati
 Creare un array contenente le immagini da inserire nel carosello
 creare la costante img
 e il contatore imgActive

## Logica del programma:
1. aprire un ciclo for per visualizzare tutti gli elementi dell'array. 
    - quando i = 0 all'interno di HTML dovremo visualizzare il primo elemento dell'array
2. inserire un event listener che si attiva cliccando su .next
    - per prima cosa rimuovere .active (che mostra in pagina l'elemento 0 dell'array)
    -creare un contatore che parte da 0 e aumenta a ogni click cosi da poter associare al contatore gli elementi presenti nell'array così da poter visualiuzzare le diverse immagini
    - creare un loop infinito ponendo il contatore = 0 quando è maggiore del numero degli elementi presenti nell'array
3. inserire un event listener che si attiva cliccando su .prev
    - per prima cosa rimuovere .active (che mostra in pagina l'elemento 0 dell'array)
    - creare una condizione per cui se il contatore diventa un numero negativo il suo valore diventa uguale al numero di elementi presenti nell'array -1
    - associare al contatore gli elementi presenti nell'array così da poter visualiuzzare le diverse immagini

## Output
aggiungere al div con classe item e il riferimento all'elemento dell'array la classe active