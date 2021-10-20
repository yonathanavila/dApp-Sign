(function () {
  calcularConversion("BTC");
  calcularConversion("ETH");
  calcularConversion("LTC");
  setInterval(function () {
    calcularConversion("BTC");
    calcularConversion("ETH");
    calcularConversion("LTC");
  }, 60000);
})();

function calcularConversion(criptomoneda) {
	var oReq = new XMLHttpRequest();
	oReq.responseType = "json";
	oReq.open("GET", "https://bitpay.com/api/rates/" + criptomoneda, true);
	oReq.send(null);

	oReq.onreadystatechange = function (aEvt) {
		if (oReq.readyState == 4) {
			if(oReq.status == 200) {
				let lps = calculo(oReq.response[68].rate);
				document.getElementById(criptomoneda.toLowerCase()).getElementsByClassName("conversion")[0].innerHTML = lps;
			}
		}
	};
}

function calculo(valor) {
  let resultado = valor + valor * 0.1;
  resultado = resultado.toLocaleString('de-DE', { style: 'currency', currency: 'HNL', minimumFractionDigits: 4});
  return resultado;
}