provincia:  
Servicio de Cotización de Provincia Seguros.  
ConsultaPS-Cotizacion  
Servicio de cotización multiramo

POST  
https://apimprod.provinciaseguros.com.ar/PS/PS-COTIZACION/2.2/cotizar?apikey=84630d93-d8c2-40b3-ad3d-b82773c092b5  
Selecciona el ramo para ajustar los parametros del body

### Header

**Authorization***stringrequerido*

Token de autenticación obtenido mediante el [servicio de autenticación.](https://ps2.provinciaseguros.com.ar/Service04)

**Content-Type***stringrequerido*

application/json

### Query Params

**apikey***stringrequerido*

Parametro estático '84630d93-d8c2-40b3-ad3d-b82773c092b5'

### Body Params

**contacto***objectrequerido*

Objeto que contiene los datos de contacto del usuario

**dni***stringrequerido*

**cuit***stringrequerido*

**nombre***stringrequerido*

**celular***stringrequerido*

**email***stringrequerido*

**canal***stringrequerido*

**ramoProducto***objectrequerido*

Objeto que contiene los datos del ramo a cotizar

**ramo***stringrequerido*

Podés consultar los códigos de ramo disponibles en la sección de [preguntas frecuentes.](https://ps2.provinciaseguros.com.ar/Service05#faq)

**producto***stringrequerido*

Podés consultar los códigos de producto disponibles en la sección de [preguntas frecuentes.](https://ps2.provinciaseguros.com.ar/Service05#faq)

**datosGenerales***objectrequerido*

Objeto que contiene datos generales de la cotización

**provincia***stringrequerido*

Recibe un código de provincia, los mismos se pueden consultar en el [servicio de provincias.](https://ps2.provinciaseguros.com.ar/Service13)

**tipoPersona***stringrequerido*

Recibe un código de tipo de persona, los mismos se pueden consultar en el [servicio de tipos de persona.](https://ps2.provinciaseguros.com.ar/Service23)

**medioDePago***stringrequerido*

Recibe un código de medio de pago, los mismos se pueden consultar en el [servicio de medios de pago.](https://ps2.provinciaseguros.com.ar/Service11)

**origenDePago***stringrequerido*

Recibe un código de origen de pago, los mismos se pueden consultar en el [servicio de origen de pagos.](https://ps2.provinciaseguros.com.ar/Service12)

**condicionIva***stringrequerido*

Recibe un código de condición frente al IVA, los mismos se pueden consultar en el [servicio de condición frente al IVA.](https://ps2.provinciaseguros.com.ar/Service24)

**cuit***stringrequerido*

CUIT del cliente

**vigencia***stringrequerido*

Recibe un código de vigencia, los mismos se pueden consultar en el [servicio de vigencias.](https://ps2.provinciaseguros.com.ar/Service25)

**vigenciaTecnica***stringrequerido*

Recibe un código de vigencia técnica, los mismos se pueden consultar en el [servicio de vigencias técnicas.](https://ps2.provinciaseguros.com.ar/Service26)

**tipoFacturacion***stringrequerido*

Recibe un código de tipo de facturación, los mismos se pueden consultar en el [servicio de tipo de facturación.](https://ps2.provinciaseguros.com.ar/Service27)

**moneda***stringrequerido*

Recibe un código de moneda, los mismos se pueden consultar en el [servicio de monedas.](https://ps2.provinciaseguros.com.ar/Service28)

**planDePago***stringrequerido*

Recibe un código de plan de pago, los mismos se pueden consultar en el [servicio de planes de pago.](https://ps2.provinciaseguros.com.ar/Service30)

**modoDeCalculo***stringrequerido*

Recibe un código de modo de cálculo, los mismos se pueden consultar en el [servicio de modos de cálculo.](https://ps2.provinciaseguros.com.ar/Service30)

**bien***objectrequerido*

Objeto que contiene los datos del ramo a cotizar los mismos se pueden consultar en el [servicio de datos parametricos.](https://ps2.provinciaseguros.com.ar/Service57)

**40007\_tipo***stringrequerido*

**40012\_anio***stringrequerido*

**40013\_esOkm***stringrequerido*

**40020\_marca***stringrequerido*

**40021\_modelo***stringrequerido*

**40008\_uso***stringrequerido*

**40220\_ValorDelVehiculo***number*

Valor del vehículo a cotizar.

**900008\_codPostal***numberrequerido*

Código postal del asegurado.

**40086\_genero***stringrequerido*

Recibe un código de tipo de persona, los mismos se pueden consultar en el [servicio de tipos de persona.](https://ps2.provinciaseguros.com.ar/Service23)

**40550\_clausulaAjuste***number*

Valor porcentual

**40088\_bonifAdicional***number*

Valor porcentual

**40102\_limiteResponsabilidadCivil***number*

Limite de responsabilidad civil

**40090\_limiteMercosur***number*

Los datos validos son: 2|3|0|1|4. Los mismos corresponden a los siguientes valores: 2(240000), 3(480000), 1(120000), 4(960000), 0(USOS PARTIC. \= GRATIS // OTROS USOS....)

**40082\_roboContenido***string*

Recibe 2 posibles parametros: 'S' (Sí) o 'N' (No)

**40101\_cobAdicComerciales***string*

Recibe 2 posibles parametros: 'S' (Sí) o 'N' (No)

**montoAccesorios***numberrequerido*

Costo total de los accesorios adicionales del vehículo

**datosAdicionales***object*

Objeto que contiene datos adicionales y opcionales de la cotización

**porcentajeComision***number*

Valor porcentual

**mantieneComisionEnRenovacion***string*

### Ejemplo

**CURL**  
Click derecho para copiar el comando

curl \--location \--request POST 'https://apimprod.provinciaseguros.com.ar/PS/PS-COTIZACION/2.2/cotizar?apikey=84630d93-d8c2-40b3-ad3d-b82773c092b5' \\  
\--header 'Content-Type: application/json' \\  
\--data-raw '{  
  "contacto": {  
    "dni": "88955598",  
    "nombre": "TEST",  
    "email": "test@pseguros.com.ar",  
    "telefono": "011-1234-5678"  
  },  
  "ramoProducto": {  
    "ramo": "4",  
    "producto": "04100"  
  },  
  "datosGenerales": {  
    "provincia": "1",  
    "tipoPersona": "F",  
    "medioDePago": "2",  
    "origenDePago": "VISO",  
    "condicionIva": "CF",  
    "cuit": "",  
    "vigencia": "E",  
    "vigenciaTecnica": "A",  
    "tipoFacturacion": "F",  
    "moneda": "01",  
    "planDePago": "1",  
    "modoDeCalculo": "N"  
  },  
  "bien": {  
    "40007\_tipo": "1",  
    "40012\_anio": "2018",  
    "40013\_esOkm": "N",  
    "40020\_marca": "TOY",  
    "40021\_modelo": "045307",  
    "40008\_uso": "1",  
    "40220\_ValorDelVehiculo": "19470000",  
    "900008\_codPostal": "1414",  
    "40086\_genero": "M",  
    "40550\_clausulaAjuste": "10",  
    "40088\_bonifAdicional": "1",  
    "40102\_limiteResponsabilidadCivil": "1",  
    "montoAccesorios": "0",  
    "40090\_limiteMercosur": "4",  
    "40082\_roboContenido": "S",  
    "40101\_cobAdicComerciales": "N"  
  }  
}'  
             

### Response

**EJEMPLO RESPONSE**  
{  
    "fechaCotizacion": "21/03/2025",  
    "numeroCotizacion": "95055516",  
    "bienesCotizados": \[  
        {  
            "bien": " FORD S-MAX 2.3  TITANIUM AUT 2011  IMPORTADO",  
            "sumaAsegurada": "14839000"  
        }  
    \],  
    "planes": \[  
        {  
            "plan": "22",  
            "descripcion": "TERCEROS COMPLETOS FULL",  
            "descripcionAdicional": "HAOLA QUE TAL COMO TE VA",  
            "promocionesPorPlan": \[  
                {  
                    "codigoPromocion": "PSTOTAL",  
                    "descripcion": "PSTOTAL \- Vehículos de 0 a 20 años",  
                    "premio": "146442",  
                    "vigencia": "MENSUAL REF.ANUAL",  
                    "primaComisionable": "115896.1",  
                    "comision": ""  
                }  
            \]  
        },  
        {  
            "plan": "1",  
            "descripcion": "RC, ROB/HURTO, INC, DEST TOTAL",  
            "descripcionAdicional": "",  
            "promocionesPorPlan": \[  
                {  
                    "codigoPromocion": "PSTOTAL",  
                    "descripcion": "PSTOTAL \- Vehículos de 0 a 20 años",  
                    "premio": "100021",  
                    "vigencia": "MENSUAL REF.ANUAL",  
                    "primaComisionable": "78216.64",  
                    "comision": ""  
                }  
            \]  
        },  
        {  
            "plan": "2",  
            "descripcion": " TERCEROS COMPLETOS",  
            "descripcionAdicional": "",  
            "promocionesPorPlan": \[  
                {  
                    "codigoPromocion": "PSTOTAL",  
                    "descripcion": "PSTOTAL \- Vehículos de 0 a 20 años",  
                    "premio": "122268",  
                    "vigencia": "MENSUAL REF.ANUAL",  
                    "primaComisionable": "96274.47",  
                    "comision": ""  
                }  
            \]  
        },  
        {  
            "plan": "4",  
            "descripcion": "RESPONSABILIDAD CIVIL LIMITADA",  
            "descripcionAdicional": "",  
            "promocionesPorPlan": \[  
                {  
                    "codigoPromocion": "PSTOTAL",  
                    "descripcion": "PSTOTAL \- Vehículos de 0 a 20 años",  
                    "premio": "40775",  
                    "vigencia": "MENSUAL REF.ANUAL",  
                    "primaComisionable": "30816.76",  
                    "comision": ""  
                }  
            \]  
        },  
        {  
            "plan": "7",  
            "descripcion": "RC, INCENDIO Y ROBO/HURTO TOTAL",  
            "descripcionAdicional": "",  
            "promocionesPorPlan": \[  
                {  
                    "codigoPromocion": "PSTOTAL",  
                    "descripcion": "PSTOTAL \- Vehículos de 0 a 20 años",  
                    "premio": "74640",  
                    "vigencia": "MENSUAL REF.ANUAL",  
                    "primaComisionable": "57615.53",  
                    "comision": ""  
                }  
            \]  
        },  
        {  
            "plan": "8",  
            "descripcion": "RC, INC/ ROB/HURTO TOTAL Y PARCIAL",  
            "descripcionAdicional": "",  
            "promocionesPorPlan": \[  
                {  
                    "codigoPromocion": "PSTOTAL",  
                    "descripcion": "PSTOTAL \- Vehículos de 0 a 20 años",  
                    "premio": "96888",  
                    "vigencia": "MENSUAL REF.ANUAL",  
                    "primaComisionable": "75673.36",  
                    "comision": ""  
                }  
            \]  
        }  
    \]  
}

## **Preguntas frecuentes**

En el diccionario de datos se informa con la palabra 'requerido' aquellos datos los cuales son obligatorios, Aquellos que no poseen la anotación 'requerido' en rojo, se pueden omitir.

La lista de valores para completar este campo son:

0 \- No aplica limite adicional

1 \- Limite de RC adicional I

2 \- Limite de RC adicional II

(Si viene null, el servicio lo envia como 1\)

Promociones disponibles para las cotizaciones:

             \[  
                {  
                  "codigo": "COTFIN1",  
                  "contenido": "COTFIN1

contenido promoción",  
                  "CRTB\_INDEX": "COTFIN1",  
                  "CRTB\_DE\_DATO": "Cotizador final versión 1",  
                  "CRTB\_IN\_ORDEN": "Z",  
                  "seleccionada": "N",  
                  "nombre": "Cotizador final versión 1",  
                },  
                {  
                  "codigo": "COTFIN2",  
                  "contenido": "COTFIN2

\* Autos \- Planes de terceros",  
                  "CRTB\_INDEX": "COTFIN2",  
                  "CRTB\_DE\_DATO": "Cotizador final versión 2",  
                  "CRTB\_IN\_ORDEN": "Z",  
                  "seleccionada": "N",  
                  "nombre": "Cotizador final versión 2",  
                },  
                {  
                  "codigo": "NOAP",  
                  "contenido": "NOAP

\* No se aplican descuentos.",  
                  "CRTB\_INDEX": "NOAP",  
                  "CRTB\_DE\_DATO": "No aplica promocion",  
                  "CRTB\_IN\_ORDEN": "z",  
                  "seleccionada": "N",  
                  "nombre": "Sin promoción",  
                },  
                {  
                  "codigo": "PROVNA3",  
                  "contenido": "PROVNA3

En desarrollo.",  
                  "CRTB\_INDEX": "PROVNA3",  
                  "CRTB\_DE\_DATO": "Grupo de afinidad  35% call",  
                  "CRTB\_IN\_ORDEN": "Z",  
                  "seleccionada": "N",  
                  "nombre": "Grupo de afinidad  35% call",  
                },  
                {  
                  "codigo": "PROVNA4",  
                  "contenido": "PROVNA4

En desarrollo.",  
                  "CRTB\_INDEX": "PROVNA4",  
                  "CRTB\_DE\_DATO": "Grupo de afinidad  10% call",  
                  "CRTB\_IN\_ORDEN": "Z",  
                  "seleccionada": "N",  
                  "nombre": "Grupo de afinidad  10% call",  
                },  
                {  
                  "codigo": "PSEMPL",  
                  "contenido": "PSEMPL

contenido promoción",  
                  "CRTB\_INDEX": "PSEMPL",  
                  "CRTB\_DE\_DATO": "Provincia seguros empleados",  
                  "CRTB\_IN\_ORDEN": "Z",  
                  "seleccionada": "N",  
                  "nombre": "Prov. seg. empleados",  
                },  
                {  
                  "codigo": "PSFULL",  
                  "contenido": "PSFULL

\* TR FIJA (Plan 43\)

\* TR VARIABLE (Planes 40 \- 50\)

\* TERCEROS  FULL (Plan 22\)

\* Bonif Adicional de 5 a 25%",  
                  "CRTB\_INDEX": "PSFULL",  
                  "CRTB\_DE\_DATO": "0km y gama nueva",  
                  "CRTB\_IN\_ORDEN": "z",  
                  "seleccionada": "N",  
                  "nombre": "Psfull \-  vehículos de 0 a 5 años",  
                },  
                {  
                  "codigo": "PSPLUS",  
                  "contenido": "PSPLUS

\* TR FIJA (Planes 41-42- 43\)

\* TR VARIABLE (Planes 40 \- 50\)

\* TERCEROS  FULL (Plan 22\)

\* Bonif Adicional de 5 a 25%",  
                  "CRTB\_INDEX": "PSPLUS",  
                  "CRTB\_DE\_DATO": "Vehiculos cartera media",  
                  "CRTB\_IN\_ORDEN": "Z",  
                  "seleccionada": "N",  
                  "nombre": "Psplus \- vehículos de 0 a 10 años",  
                },  
                {  
                  "codigo": "PSTOTAL",  
                  "contenido": "PSTOTAL

\* TERCEROS FULL (Plan 22\) hasta 15 años

\* TERCEROS (Planes 2-8) hasta 15 años

\* TERCEROS  TOTALES (Planes 1-7) hasta 20 años

\* RC Solamente (Plan 4\) hasta 20 años

\* Bonif Adicional de 5 a 20%",  
                  "CRTB\_INDEX": "PSTOTAL",  
                  "CRTB\_DE\_DATO": "Provincia total",  
                  "CRTB\_IN\_ORDEN": "z",  
                  "seleccionada": "N",  
                  "nombre": "Pstotal \- vehículos de 0 a 20 años",  
                },  
                {  
                  "codigo": "VIDA",  
                  "contenido": "VIDA

En desarrollo.",  
                  "CRTB\_INDEX": "VIDA",  
                  "CRTB\_DE\_DATO": "Captación clientes de provincia vida",  
                  "CRTB\_IN\_ORDEN": "z",  
                  "seleccionada": "N",  
                  "nombre": "Captación clientes de provincia vida",  
                },  
                {  
                  "codigo": "VTDDEB",  
                  "contenido": "VTDDEB

En desarrollo.",  
                  "CRTB\_INDEX": "VTDDEB",  
                  "CRTB\_DE\_DATO": "Pase de cartera en boleta a medios automáticos",  
                  "CRTB\_IN\_ORDEN": "Z",  
                  "seleccionada": "N",  
                  "nombre": "Pase de cartera en boleta a medios autom",  
                }  
              \]  
           

# **Servicio de Autenticación**

---

Servicio para la obtención del token de seguridad.

ConsultaPS-MDW  
Servcio por el cual se obtiene el token para consultar el resto de los servicios de PS2

POST  
https://authp.provinciaseguros.com.ar/auth/realms/ps/protocol/openid-connect/token

### Header

**Content-Type***stringrequerido*

application/x-www-form-urlencoded

### Body Params

**username***stringrequerido*

**password***stringrequerido*

**client\_secret***stringrequerido*

Parametro fijo, siempre debe decir 'a0ab7e18-baea-4d38-b22e-f61184960745'

**grant\_type***stringrequerido*

Parametro fijo, siempre debe decir 'password'

**client\_id***stringrequerido*

Parametro fijo, siempre debe decir 'ps2'

### Ejemplo

**CURL**  
Click derecho para copiar el comando

           curl \--location \--request POST 'https://authp.provinciaseguros.com.ar/auth/realms/ps/protocol/openid-connect/token' \\  
            \--header 'Content-Type: application/x-www-form-urlencoded' \\  
            \--data-urlencode 'client\_id=ps2' \\  
            \--data-urlencode 'client\_secret=a0ab7e18-baea-4d38-b22e-f61184960745' \\  
            \--data-urlencode 'username=ps@pseguros.com.ar' \\  
            \--data-urlencode 'password=xxx' \\  
            \--data-urlencode 'grant\_type=password'    
         

### Response

**EJEMPLO RESPONSE**  
       {  
            "access\_token": "eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwwia2lkIiA6ICqwefsJGSjg2R2NGM2pUYk5MT2  
                    NvNE52WmtVQ0lVbWZZQ3FvcXRPUWVNZmJoTmxFIn0.eyJleHAiOjE3MTIdyODkwNTMsImlhdgttyyCI6MTcxMjI1MzA1M  
                    ywianRpIjoiZTQ3OWI1NDYtZjZlZS00ZGFiLTgyNzEtNmExYTdjNzc32YzRlIiwiaXNzI23ff4joiaHR0cHM6Ly9hdXRod  
                    C5wcm92aW5jaWFzZWd1cm9zLmNvbS5hci9hdXRoL3JlYWxtcy9wcyIsImF1ZCI6W3reweyJwb3J0YWwtcGFzIiwiZ28tb  
                    EVudSIsImFjY291bnQiXSwic3ViIjoiYTNmMmFmMTQtNmM3MC00N21WU3LWJmNjwqeeeUtYjVmYTY5NGU1NDQ4IiwidHlw  
                    IjoiQmVhcmVyIiwiYXpwIjoicHMyIiwic2Vzc2lvbl9zdGF0ZSI6IjA1ODdhMfsefTNlLWQ4M2EtNGNjNC04NDU5LWQ1",  
            "expires\_in": 36000,  
            "refresh\_expires\_in": 600,  
            "refresh\_token": "eyJhbGciOiJIUzI1NiIersInR5cCIgOiAiSldUIiwia2lkIiA6ICI4YzZiYmQ3Ny1kYWY5LTQ0  
                    ZjgtODlhNi00ZWI0NmJmMDg3ZDUifQ.eyJleHAiOjE3MTIyNTM2NT34fMsImlhdCI6MTcxMjI1MzA1MywianRpIjoiMmQ  
                    zZTc1ODQtMDRjMi00MzEzLWJlYjQtOTMzZDMzZjAyY2ZhIiwiaX32NzIjoiaHR0cHM6Ly9hdXRodC5wcm92aW5jaWFzZ",  
            "token\_type": "Bearer",  
            "not-before-policy": 1570563059,  
            "session\_state": "0587a13e-d83a-4cc4-8459-d5d8f35d049d",  
            "scope": "profile email"  
        }          
     

