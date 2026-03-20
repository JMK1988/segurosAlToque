Servicio de Datos Paramétricos de Cotización
Servicio de datos paramétricos necesarios para cotizar.

ConsultaPS-COTIZACION
Servicio que obtiene información sobre los datos paramétricos necesarios para cotizar que seran utilizados en el endpoint de cotización.

GET
https://apimprod.provinciaseguros.com.ar/PS/PS-COTIZACION/1.0/datosGenerales/parametricos/{ramo}/{producto}?apikey=84630d93-d8c2-40b3-ad3d-b82773c092b5
Selecciona el ramo para ver ejemplos de respuesta

Header
Authorization
string
requerido
Token de autenticación obtenido mediante el servicio de autenticación.
Content-Type
string
requerido
application/json
Query Params
ramo
string
requerido
Número de Ramo
producto
string
requerido
Número de producto
apiKey
string
requerido
Parametro estático, siempre debe ser: '84630d93-d8c2-40b3-ad3d-b82773c092b5'
Ejemplo
CURL
Click derecho para copiar el comando
curl --location --request POST 'https://apimprod.provinciaseguros.com.ar/PS/PS-COTIZACION/1.0/datosGenerales/parametricos/{ramo}/{producto}?apikey=84630d93-d8c2-40b3-ad3d-b82773c092b5' \
--header 'Content-Type: application/json' \
--data-raw '{}'
              
Response
EJEMPLO RESPONSE
              [
    {
        "parametricCode": "40007",
        "description": "TIPOS DE VEHICULO - TABLA",
        "parametricValues": [
            {
                "codigo": "3",
                "descripcion": "JEEP"
            },
            {
                "codigo": "86",
                "descripcion": "FURGON \"B\""
            },
            {
                "codigo": "6",
                "descripcion": "CAMION"
            },
            {
                "codigo": "5",
                "descripcion": "OMNIBUS"
            },
            {
                "codigo": "7",
                "descripcion": "CASA RODANTE"
            },
            {
                "codigo": "8",
                "descripcion": "TRACTOR"
            },
            {
                "codigo": "9",
                "descripcion": "SEMITRACCION"
            },
            {
                "codigo": "10",
                "descripcion": "ACOPLADO"
            },
            {
                "codigo": "11",
                "descripcion": "SEMI REMOLQUE"
            },
            {
                "codigo": "12",
                "descripcion": "BANTAM"
            },
            {
                "codigo": "13",
                "descripcion": "TRAILER"
            },
            {
                "codigo": "14",
                "descripcion": "MAQUINA"
            },
            {
                "codigo": "15",
                "descripcion": "MICRO OMNIBUS"
            },
            {
                "codigo": "16",
                "descripcion": "COLECTIVO"
            },
            {
                "codigo": "18",
                "descripcion": "IMPLEMENTO"
            },
            {
                "codigo": "19",
                "descripcion": "CICLOMOTOR"
            },
            {
                "codigo": "20",
                "descripcion": "MOTOCICLETA"
            },
            {
                "codigo": "21",
                "descripcion": "CUATRICICLO"
            },
            {
                "codigo": "25",
                "descripcion": "TRICICLO"
            },
            {
                "codigo": "26",
                "descripcion": "VAN"
            },
            {
                "codigo": "28",
                "descripcion": "TODO TERRENO"
            },
            {
                "codigo": "29",
                "descripcion": "MINI BUS"
            },
            {
                "codigo": "99",
                "descripcion": "NO APLICA"
            },
            {
                "codigo": "44",
                "descripcion": "PICK-UP \"A\""
            },
            {
                "codigo": "46",
                "descripcion": "PICK-UP \"B\""
            },
            {
                "codigo": "2",
                "descripcion": "AUTOMOVIL RURAL/BREAK"
            },
            {
                "codigo": "41",
                "descripcion": "WAGON"
            },
            {
                "codigo": "84",
                "descripcion": "FURGON \"A\""
            },
            {
                "codigo": "1",
                "descripcion": "AUTOMOVIL"
            }
        ]
    },
    {
        "parametricCode": "40008",
        "description": "USOS POR TIPO DE VEHICULO",
        "parametricValues": [
            {
                "codigo": "1",
                "descripcion": "PARTICULAR"
            },
            {
                "codigo": "10",
                "descripcion": "TRABAJO RURAL"
            },
            {
                "codigo": "11",
                "descripcion": "TRABAJO NO RURAL"
            },
            {
                "codigo": "12",
                "descripcion": "AUXILIO MECANICO"
            },
            {
                "codigo": "14",
                "descripcion": "CASA RODANTE CON PROPULSION PROPIA"
            },
            {
                "codigo": "17",
                "descripcion": "PORTAVOLQUETE"
            },
            {
                "codigo": "18",
                "descripcion": "GRUA"
            },
            {
                "codigo": "21",
                "descripcion": "COMERCIAL - TRANSPORTE DE CARGA GENERAL"
            },
            {
                "codigo": "22",
                "descripcion": "COMERCIAL-TRANSPORTE DE CARGA PELIGROSA"
            },
            {
                "codigo": "23",
                "descripcion": "SIN PROPULSION PROPIA"
            },
            {
                "codigo": "29",
                "descripcion": "USO OFICIAL"
            },
            {
                "codigo": "30",
                "descripcion": "RADIO DE ACCION 100 KM"
            },
            {
                "codigo": "40",
                "descripcion": "COMPACTADOR"
            },
            {
                "codigo": "42",
                "descripcion": "COMERCIAL"
            },
            {
                "codigo": "44",
                "descripcion": "TANQUE ATMOSFERICO"
            },
            {
                "codigo": "45",
                "descripcion": "BARREDOR"
            },
            {
                "codigo": "46",
                "descripcion": "AUTOBOMBA"
            },
            {
                "codigo": "47",
                "descripcion": "MOTOHOMIGONERA"
            },
            {
                "codigo": "48",
                "descripcion": "REGADOR"
            },
            {
                "codigo": "49",
                "descripcion": "VOLCADOR"
            },
            {
                "codigo": "51",
                "descripcion": "HIDROELEVADOR"
            },
            {
                "codigo": "52",
                "descripcion": "TRABAJO VIAL"
            },
            {
                "codigo": "67",
                "descripcion": "DESOBSTRUCTOR"
            },
            {
                "codigo": "69",
                "descripcion": "UNIDAD SANITARIA"
            },
            {
                "codigo": "79",
                "descripcion": "PARTICULAR EXCLUSIVAMENTE"
            },
            {
                "codigo": "9",
                "descripcion": "USO OFICIAL"
            }
        ]
    },
    {
        "parametricCode": "40012",
        "description": "AÑOS DE VEHICULOS - Consultar Valores Disponibles en S16 - Anexo de Años",
        "parametricValues": []
    },
    {
        "parametricCode": "40013",
        "description": "ES CERO KILOMETRO?",
        "parametricValues": [
            {
                "codigo": "N",
                "descripcion": "NO"
            },
            {
                "codigo": "S",
                "descripcion": "SI"
            }
        ]
    },
    {
        "parametricCode": "40020",
        "description": "MARCAS DE AUTOS - TABLAS - Consultar Valores Disponibles en S14 - Anexo de Marcas",
        "parametricValues": []
    },
    {
        "parametricCode": "40021",
        "description": "MODELOS DE AUTOS - TABLA - Consultar Valores Disponibles en S15 - Anexo de Modelos",
        "parametricValues": []
    },
    {
        "parametricCode": "40086",
        "description": "GENERO",
        "parametricValues": [
            {
                "codigo": "M",
                "descripcion": "MASCULINO"
            },
            {
                "codigo": "F",
                "descripcion": "FEMENINO"
            }
        ]
    },
    {
        "parametricCode": "40088",
        "description": "AJUSTE DE PRIMA",
        "parametricValues": [
            {
                "codigo": "1",
                "descripcion": "SIN AJUSTE"
            },
            {
                "codigo": "2",
                "descripcion": "5% ADICIONAL"
            },
            {
                "codigo": "3",
                "descripcion": "10% ADICIONAL"
            },
            {
                "codigo": "4",
                "descripcion": "15% ADICIONAL"
            },
            {
                "codigo": "5",
                "descripcion": "20% ADICIONAL"
            },
            {
                "codigo": "6",
                "descripcion": "25% ADICIONAL"
            }
        ]
    },
    {
        "parametricCode": "40090",
        "description": "LIMITES DE RESPONSABILIDAD CIVIL MERCOSUR",
        "parametricValues": [
            {
                "codigo": "2",
                "descripcion": "240000"
            },
            {
                "codigo": "3",
                "descripcion": "480000"
            },
            {
                "codigo": "0",
                "descripcion": "USOS PARTIC. = GRATIS // OTROS USOS =  NO SE CUBRE MERCOSUR"
            },
            {
                "codigo": "1",
                "descripcion": "120000"
            },
            {
                "codigo": "4",
                "descripcion": "960000"
            }
        ]
    },
    {
        "parametricCode": "40550",
        "description": "CLAUSULA DE AJUSTE",
        "parametricValues": [
            {
                "codigo": "0",
                "descripcion": "SIN AJUSTE"
            },
            {
                "codigo": "10",
                "descripcion": "10%"
            },
            {
                "codigo": "15",
                "descripcion": "15%"
            },
            {
                "codigo": "20",
                "descripcion": "20%"
            },
            {
                "codigo": "25",
                "descripcion": "25%"
            },
            {
                "codigo": "30",
                "descripcion": "30%"
            },
            {
                "codigo": "35",
                "descripcion": "35%"
            },
            {
                "codigo": "40",
                "descripcion": "40%"
            },
            {
                "codigo": "50",
                "descripcion": "50%"
            },
            {
                "codigo": "41",
                "descripcion": "SIN TASA"
            }
        ]
    },
    {
        "parametricCode": "900008",
        "description": "CODIGOS POSTAL Y ZONA AUTOMOTORES - Indicar Código Postal",
        "parametricValues": []
    }
]
            