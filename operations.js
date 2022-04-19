/* Función par */
var par = function par (a) {
	var num;
	if ((a % 2) == 0)
	{
		num = true;
	}
	else
	{
		num = false;
	}
	return num;	
};

/* Exportación de funciones */
module.exports = {
	par
}
