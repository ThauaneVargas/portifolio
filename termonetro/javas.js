function converterParaFahrenheit() {
    var temperaturaCelsius = document.getElementById("inputCelsius").value;
    var temperaturaFahrenheit = (temperaturaCelsius * 9/5) + 32;
    document.getElementById("inputFahrenheit").value = temperaturaFahrenheit;
}
