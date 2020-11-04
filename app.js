 //estos campos estaban a 1
 var sumaadquisicion=1;
 var sumadiscusion=1;
 var sumainvestigacion=1;
 var sumapractica=1;
 var sumaproduccion=1;
	var ctx = document.getElementById('miGrafico').getContext('2d');
	
	var chart = new Chart(ctx, {
		// The type of chart we want to create
		type: 'doughnut',

		// The data for our dataset
		data: {
			labels: ['Adquisición', 'Discusión', 'Investigación', 'Práctica', 'Producción',],
			datasets: [{
				label: 'My First dataset',
			backgroundColor: [
			'#FFF014',
			'#12DE69',
			'#204EF5',
			'#DE12AA',
			'#FA8914'
			],
				// borderColor: 'rgb(255, 99, 132)',
				//data: [1, 1, 1, 1, 1]
			data: [
					sumaadquisicion,
					sumadiscusion,
					sumainvestigacion, 
					sumapractica,
					sumaproduccion]				
			}] 
		},

		// Configuration options go here
		options: {}
	});
	

var campos = ["adquisicion", "discusion", "investigacion", "practica", "produccion"];

// Función que suma todos los campos y añade el valor al total.
function sumatotales(){
	sumaadquisicion=0;
	sumadiscusion=0;
	sumainvestigacion=0;
	sumapractica=0;
	sumaproduccion=0;

	for (let index = 0; index <	document.querySelectorAll(".adquisicion").length; index++) {
		if((document.querySelectorAll(".adquisicion")[index].value)<0){
			(document.querySelectorAll(".adquisicion")[index].value)=0;
		}
		sumaadquisicion=sumaadquisicion + eval(document.querySelectorAll(".adquisicion")[index].value);
	}
	for (let index = 0; index < document.querySelectorAll(".discusion").length; index++) {
		if((document.querySelectorAll(".discusion")[index].value)<0){
			(document.querySelectorAll(".discusion")[index].value)=0;
		}
		sumadiscusion=sumadiscusion + eval(document.querySelectorAll(".discusion")[index].value);
	}
	for (let index = 0; index < document.querySelectorAll(".investigacion").length; index++) {
		if((document.querySelectorAll(".investigacion")[index].value)<0){
			(document.querySelectorAll(".investigacion")[index].value)=0;
		}
		sumainvestigacion=sumainvestigacion + eval(document.querySelectorAll(".investigacion")[index].value);
	}
	for (let index = 0; index < document.querySelectorAll(".practica").length; index++) {
		if((document.querySelectorAll(".practica")[index].value)<0){
			(document.querySelectorAll(".practica")[index].value)=0;
		}
		sumapractica=sumapractica + eval(document.querySelectorAll(".practica")[index].value);
	}
	for (let index = 0; index < document.querySelectorAll(".produccion").length; index++) {
		if((document.querySelectorAll(".produccion")[index].value)<0){
			(document.querySelectorAll(".produccion")[index].value)=0;
		}
		sumaproduccion=sumaproduccion+ eval(document.querySelectorAll(".produccion")[index].value);
	}
	$("#total_adquisicion").val(sumaadquisicion);
	$("#total_discusion").val(sumadiscusion);
	$("#total_investigacion").val(sumainvestigacion);
	$("#total_practica").val(sumapractica);
	$("#total_produccion").val(sumaproduccion);

	chart.data.datasets[0].data[0]=sumaadquisicion;
	chart.data.datasets[0].data[1]=sumadiscusion;
	chart.data.datasets[0].data[2]=sumainvestigacion;
	chart.data.datasets[0].data[3]=sumapractica;
	chart.data.datasets[0].data[4]=sumaproduccion;

	chart.update();
}

$('#formulario_datos').on('change', function () {
sumatotales();
  });


function anadir(){
	clone= document.querySelectorAll(".filaformulario")[document.querySelectorAll(".filaformulario").length-1].cloneNode(true);
	clone.querySelector(".adquisicion").value=0;
	clone.querySelector(".discusion").value=0;
	clone.querySelector(".investigacion").value=0;
	clone.querySelector(".practica").value=0;
	clone.querySelector(".produccion").value=0;
	//var copia=$("#fila_formulario").clone();
    $("#formulario_datos").append(clone);
}

//Función para eliminar.
function quitar(){
	if((document.querySelectorAll(".filaformulario").length)>1){
		document.querySelectorAll(".filaformulario")[document.querySelectorAll(".filaformulario").length-1].remove();
		sumatotales();
	}
	
	//$(".filaformulario").remove(); así borra todos de un golpe.
	
}