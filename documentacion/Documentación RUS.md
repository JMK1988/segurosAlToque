GET Marcas de vehículos  
Devuelve un listado de marcas disponibles. Si se desea se puede filtrar los resultados por uno u otro parámetro (no ambos a la vez)

* Por número  
  Variable: TipoUnidad (integer)  
  Datos:  
  1 : AUTO  
  2 : PICK-UP "A"  
  3 : PICK-UP "B"  
  4 : CAMION HASTA 5 TN  
  5 : CAMION HASTA 10 TN  
  6 : CAMION MAS 10 TN  
  25 : MOTORHOME  
  26 : M3 OMNIBUS  
* Por palabra  
  **Variable**: CodigoTipoInteres (string)  
  **Dato**:  
  MAQUINARIA  
  MOTOVEHICULO  
  MOVILIDAD\_ELECTRICA  
  SIN\_PROP\_P  
  VEHICULO

Get Modelos  
Retorna una lista de modelos disponibles para una marca y año de fabricación.

Variables  
**Marca**: int   
**A%C3%B1o** (año de fabricación): int

Get Versiones  
Retorna una lista de versiones de un modelo de vehículo indicado.

Parámetros:

IdGrupoModelo : número de modelo de vehículo (ver servicio de modelos)  
Año: año de fabricación del vehículo.  
TipoUnidad: tipo de unidad vehicular (ver servicio de marcas de vehículos)  
IdMarca: número de marca del vehículo (ver servicio de marcas de vehículos)

Combinaciones posibles que permiten consultar una lista de versiones vehiculares:

1- idGrupoModelo  
2- idGrupoModelo+TipoUnidad  
3 \- idGrupoModelo+año  
4- idGrupoModelo+año+TipoUnidad  
5- IdMarca+año  
6- IdMarca+año+TipoUnidad

Get Localidades  
Devuelve el listado de localidades para un código postal. En ocasiones puede retornar más de un resultado, y en esos casos el primer elemento de la lista es el más representativo.

PUT Cotización

Permite obtener cotizaciones de seguros para un vehículo, en función de las características indicadas.

\* **codigoProductor** (integer): Codigo Productor RUS que se asigna al productor u organizador (es un número de entre 4 y 5 números; no es el usuario con el que se autentica al uso de las APIs.  
*\** **aumentoRCPaisesLimitrofes**: (string, optional): Aumento RC Paises Limitrofes  \= \['SI', 'NO'\],\_  
\*\_ ***codigoSolicitante*** *(integer, optional): Codigo Solicitante (idem código productor),*  
\* **codigoCobrador** *(string(4), optional): Código Cobrador ,*  
*\** ***codigoTipoInteres*** *(string): Codigo Tipo Interés \= \['VEHICULO', 'MAQUINARIA', 'ACOPLADOS \- TRAILERS \- IMPLEMENTOS'\],*  
*\** ***ajusteAutomatico*** *(integer, optional): Ajuste Automático \= \['0', '10', '20', '30'\],*\_  
\*\_ ***condicionFiscal*** *(string): Condicion Fiscal \= \['CF' , 'EX', 'FM', 'GC', 'RI', 'RMT', 'RNI', 'SSF', 'CDE'\],*  
*\*\*\* 'CF' : Consumidor Final, 'EX': Exento, 'FM' Resp. Insc. Fact M., 'GC': Gran Contribuyente, 'RI': Resp. Inscripto, 'RMT': Respons. Monotributo, 'RNI': No Inscripto, 'SSF': Sin situación fiscal, 'CDE': Cliente del exterior,*  
*\*\*\*\*\*\_ cuotas (integer, optional): cantidad de Cuotas,*  
*\* **numeroSolicitud** (integer, optional): Numero de Solicitud interno del PAS,\_\_\* tipoVigencia (string, optional): Tipo de Vigencia \= \['TRIMESTRAL', 'SEMESTRAL', 'ANUAL'\],*  
*\* **vigenciaDesde** (string): Vigencia Desde,*  
*\* **vigenciaHasta** (string; campo optional en caso de utilizar vigenciaPolizaId ): Vigencia Hasta,*  
*\* **vigenciaPolizaId** (integer, optional): Id de la vigencia poliza, (ver servicio Vigencias del ramo).*  
*\* **vehiculos\_\_***\*: \[{\_

\* *anio* *(string): Año de fabricación del Vehículo (ej: 2021)\*\_ uso \_(string): Uso del Vehículo: PARTICULAR, COMERCIAL, etc*

*\** ***modeloVehiculo*** \_(integer, optional): id del Modelo del Vehículo (se obtiene del servicio *Versiones de vehículos*  
\* **codia** (string, optional): Código Infoauto, se puede utilizar en lugar de modeloVehiculo,  
\* **cpLocalidadGuarda** (integer, optional): Código Postal Localidad de Guarda,  
\* **localidadGuarda** (integer, optional): Id Localidad de Guarda,  
\* **gnc** (string): Tiene GNC \= \['SI', 'NO'\],  
\* **sumaAseguradaVehiculo** (number, optional): Suma Asegurada Vehículo, si no se informa se considera valuación RUS.  
\* **sumaAseguradaGnc** (number, optional): Suma Asegurada GNC,  
\* **sumaAseguradaAccesorios** (number, optional): Suma Asegurada Accesorios,  
\* **controlSatelital** (string, optional): Control Satelital \= \['SI', 'NO'\],  
\* **rastreadorSatelital** (string, optional): Nombre del Rastreador Satelital,  
\* **rastreoACargoRUS** (string, optional): Rastreo a cargo de RUS \= \['SI', 'NO'\],  
\* **excluirVida** (string, opcional): SI/NO. (Solo operatorias internas)  
\* }\]

Body Request  
{  
    "**codigoProductor**": 12456,  
    "**codigoTipoInteres**": "VEHICULO",  
    "**cuotas**": 3,     
    "**numeroSolicitud**": 2,  
    "**condicionFiscal**": "CF",  
    "**tipoVigencia**": "SEMESTRAL",  
    "**vehiculos**": \[  
        {  
            "**anio**": "2022",  
            "**controlSatelital**": "NO",  
            "**cpLocalidadGuarda**": 5000,  
            "**gnc**": "NO",  
            "**codia**": 170838,  
            "**rastreoACargoRUS**": "NO",  
            "**uso**": "PARTICULAR"   
        }  
    \],  
    "**vigenciaDesde**": "2026-02-25",  
    "**vigenciaHasta**": "2026-08-25"  
}

Body Response

"**cantidadTotal**": 14,  
    "**dtoList**": \[  
        {  
            "**id**": null,  
            "**responsabilidadCivil**": null,  
            "**descripcionComercial**": "T34 2% de la SA (T34)",  
            "**numeroSolicitud**": "2",  
            "**codigoRC**": "RCA",  
            "**descripcionRC**": "\<p\>\\n\\tRCA Auto: Responsabilidad Civil limitada (Resoluci\&oacute;n S.S.N. N\&ordm; 589/2025) Lesiones y/o Muerte de Terceras Personas Transportadas y No Transportadas y Da\&ntilde;os a Cosas de Terceros No Transportados: $208.000.000, por acontecimiento.\</p\>\\n",  
            "**detalleCoberturaRC**": "Responsabilidad Civil limitada (Resolución S.S.N. Nº 589/2025) Lesiones y/o Muerte de Terceras Personas Transportadas y No Transportadas y Daños a Cosas de Terceros No Transportados: $208.000.000, por acontecimiento.Incluye Seguro Obligatorio Artículo 68 de la Ley Nº 24.449 (Resolución S.S.N. Nº 36.100)",  
            "**codigoCasco**": "T34",  
            "**descripcionCasco**": "\\n\\tT34 Fcia.2% de la SA:P\&eacute;rd.Total y Parcial por Da\&ntilde;os/P\&eacute;rd. Total y Parcial por Incendio/P\&eacute;rd. Total y Parcial por Robo o Hurto.Da\&ntilde;os parciales con franquicia fija del 2% de la SA . Incendio Parcial s/fcia..Robo \&oacute; Hurto parcial s/fcia.Granizo s/fcia. l\&iacute;mite max.hasta la SA.2 x vig. anual.Cristales Lat., parabrisas, luneta, cristales techo reposic. a nuevo s/fcia. 3 x vig. anual. Rotura de cerradura hasta $300000 3 x vig. anual. Reposic.de rueda",  
            "**detalleCoberturaCasco**": "Pérdida Total y Parcial por Daños/Pérdida Total y Parcial por  Incendio/Pérdida Total y Parcial por Robo o Hurto.Daños parciales con franquicia fija del 2% de la SA del vehículo .  Incendio Parcial sin franquicia.Robo ó Hurto parcial sin franquicia.Daños parciales a consecuencia de Granizo límite máximo de reparación hasta la suma asegurada, sin franquicia; cubriendo dos acontecimientos por vigencia anual.El Asegurador indemnizará al Asegurado sin aplicación de franquicias los Daños Parciales que sufra el vehículo objeto del seguro dentro de los límites indicados en la presente cláusula y que consistan en:Rotura de cristales laterales del vehículo por cualquier causa, reposición a nuevo sin franquicia cubriendo tres acontecimientos por  vigencia anual.Rotura del parabrisas del vehículo por cualquier causa, reposición a nuevo sin franquicia cubriendo tres acontecimientos por  vigencia anual.Rotura de la  luneta del vehículo por cualquier causa, reposición a nuevo sin franquicia cubriendo tres acontecimientos por vigencia anual.Rotura de cristales de techo del vehículo por cualquier causa, reposición a nuevo sin franquicia cubriendo tres acontecimientos por  vigencia anual.Rotura de cerraduras exteriores (excluyendo manijas de apertura),por hechos de robo o tentativas de robo, sin franquicia hasta la suma de $ 300.000.- (pesos trescientos mil); cubriendo tres acontecimiento por  vigencia anual.Reposición de ruedas: En caso de robo o hurto de una o más ruedas al vehículo automotor cubierto, el Asegurador se obliga a reponer como máximo hasta cuatro (4) ruedas por vigencia anual, de similares características a la original de fábrica sin aplicar descuento alguno por depreciación.En pólizas con vigencia menor a un año, el límite se computará desde la fecha de emisión de la póliza original más las sucesivas renovaciones, hasta completar el año de vigencia.Las sumas estipuladas en la presente Póliza se incrementarán automáticamente hasta un  \[AjusteAutomatico\], en la medida que ello resulte necesario para alcanzar, al momento del siniestro, el valor a riesgo existente.-Daños Parciales por Acc. al Amparo del Robo Total hasta el 10 % de la suma asegurada declarada en póliza, (con un límite máximo de $2.000.000)efectivo solo ante la verificación del siniestro de Robo o Hurto Total.-Extensión de las Coberturas de Daños Incendio y Robo o Hurto a Países de Sudamérica.Queda entendido y convenido que el asegurador extiende la cobertura de Daños, Incendio y Robo o Hurto indicada en el Frente de la Póliza exclusivamente durante el viaje de ida y vuelta por vía terrestre o fluvial y la permanencia del vehículo asegurado en los distintos países de Sudamérica (Argentina, Bolivia, Brasil, Chile, Paraguay, Perú y Uruguay).",  
            "**prima**": 395206.0,  
            "**premio**": 844764.0,  
            "**iva**": 90690.0,  
            "**sumaAsegurada**": 21369000.0,  
            "**ajusteAutomatico**": "20,00",  
            "**ajustesAutomaticosPosibles**": \[  
                "20,00",  
                "40,00",  
                "30,00"  
            \],  
            "**franquicia**": 427380.0,  
            "**auxilioMecanico**": "SI",  
            "**paisesLimitrofes**": "SI",  
            "**coberturaVida**": "SI"  
        },