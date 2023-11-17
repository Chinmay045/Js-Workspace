let balajiBath = function () {
    console.log(`\n Balaji Woke Up`);
    console.log(`Balaji is Bathing`);
    console.log(`Balaji is ready`);
}

let kishanBath = function (signalHim) {
    setTimeout(() => {
        console.log(`\n Kishan Woke Up`);
    }, 2000);
    setTimeout(() => {
        console.log("Kishan is Bathing");
    }, 3000);
    setTimeout(() => {
        console.log("Kishan is ready");
    }, 5000)

    setTimeout(balajiBath,7000);
}

kishanBath(balajiBath);