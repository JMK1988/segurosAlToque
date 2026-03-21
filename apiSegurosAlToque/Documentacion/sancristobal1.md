{
  "swagger": "2.0",
  "info": {
    "version": "v1",
    "title": "B2BApp"
  },
  "basePath": [
    "/b2b-gateway"
  ],
  "paths": {
    "/api/IssueSubmission/IssueCA7": {
      "post": {
        "tags": [
          "IssueSubmission"
        ],
        "summary": "Emitir Póliza",
        "operationId": "IssueSubmission_IssueCA7",
        "consumes": [
          "application/json",
          "text/json",
          "text/xml",
          "application/x-www-form-urlencoded"
        ],
        "produces": [
          "application/json",
          "text/json",
          "text/xml"
        ],
        "parameters": [
          {
            "name": "request",
            "in": "body",
            "description": "",
            "required": true,
            "schema": {
              "$ref": "#/definitions/B2BApp.Entities.Issue.IssueCA7Request"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "schema": {
              "$ref": "#/definitions/B2BApp.Entities.Issue.OperationResultIssueCA7"
            }
          }
        }
      }
    },
    "/api/IssueSubmission/IssueATM": {
      "post": {
        "tags": [
          "IssueSubmission"
        ],
        "summary": "Emitir Póliza",
        "operationId": "IssueSubmission_IssueATM",
        "consumes": [
          "application/json",
          "text/json",
          "text/xml",
          "application/x-www-form-urlencoded"
        ],
        "produces": [
          "application/json",
          "text/json",
          "text/xml"
        ],
        "parameters": [
          {
            "name": "request",
            "in": "body",
            "description": "",
            "required": true,
            "schema": {
              "$ref": "#/definitions/B2BApp.Entities.Issue.IssueAtm"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "schema": {
              "$ref": "#/definitions/B2BApp.Entities.Issue.OperationResultIssueCA7"
            }
          }
        }
      }
    },
    "/api/IssueSubmission/IssueLifeIndividual": {
      "post": {
        "tags": [
          "IssueSubmission"
        ],
        "summary": "Emitir Póliza",
        "operationId": "IssueSubmission_IssueLifeIndividual",
        "consumes": [
          "application/json",
          "text/json",
          "text/xml",
          "application/x-www-form-urlencoded"
        ],
        "produces": [
          "application/json",
          "text/json",
          "text/xml"
        ],
        "parameters": [
          {
            "name": "request",
            "in": "body",
            "description": "",
            "required": true,
            "schema": {
              "$ref": "#/definitions/B2BApp.Entities.Issue.IssueLifeIndividualRequest"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "schema": {
              "$ref": "#/definitions/B2BApp.Entities.Issue.OperationResultIssueCA7"
            }
          }
        }
      }
    },
    "/api/IssueSubmission/IssueSubmissionCP7": {
      "post": {
        "tags": [
          "IssueSubmission"
        ],
        "summary": "Emitir una cotizacion de CP7.",
        "operationId": "IssueSubmission_IssueSubmissionCP7",
        "consumes": [
          "application/json",
          "text/json",
          "text/xml",
          "application/x-www-form-urlencoded"
        ],
        "produces": [
          "application/json",
          "text/json",
          "text/xml"
        ],
        "parameters": [
          {
            "name": "issueSubmissionRequest",
            "in": "body",
            "description": "",
            "required": true,
            "schema": {
              "$ref": "#/definitions/B2BApp.Entities.Issue.IssueSubmissionRequest"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "schema": {
              "$ref": "#/definitions/B2BApp.Entities.Issue.OperationResultIssueSubmission"
            }
          }
        }
      }
    },
    "/api/IssueSubmission/IssueSubmissionVidaIndividual": {
      "post": {
        "tags": [
          "IssueSubmission"
        ],
        "summary": "Emitir una cotizacion de Vida Individual.",
        "operationId": "IssueSubmission_IssueSubmissionVidaIndividual",
        "consumes": [
          "application/json",
          "text/json",
          "text/xml",
          "application/x-www-form-urlencoded"
        ],
        "produces": [
          "application/json",
          "text/json",
          "text/xml"
        ],
        "parameters": [
          {
            "name": "issueSubmissionRequest",
            "in": "body",
            "description": "",
            "required": true,
            "schema": {
              "$ref": "#/definitions/B2BApp.Entities.Issue.IssueSubmissionRequest"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "schema": {
              "$ref": "#/definitions/B2BApp.Entities.Issue.OperationResultIssueSubmission"
            }
          }
        },
        "deprecated": true
      }
    },
    "/api/Padron/GetCuilsByDni": {
      "get": {
        "tags": [
          "Padron"
        ],
        "operationId": "Padron_GetCuilsByDni",
        "consumes": [],
        "produces": [
          "application/json",
          "text/json",
          "text/xml"
        ],
        "parameters": [
          {
            "name": "dni",
            "in": "query",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "schema": {
              "$ref": "#/definitions/B2BApp.Entities.Padron.GetCuilsByDniResponse"
            }
          }
        }
      }
    },
    "/api/Postal/ProvinciasArgentinas": {
      "get": {
        "tags": [
          "Postal"
        ],
        "summary": "Devuelve todas las provincias argentinas",
        "operationId": "Postal_ProvinciasArgentinas",
        "consumes": [],
        "produces": [
          "application/json",
          "text/json",
          "text/xml"
        ],
        "parameters": [],
        "responses": {
          "200": {
            "description": "OK",
            "schema": {
              "$ref": "#/definitions/B2BApp.Entities.OperationResultEstadosPorPais"
            }
          }
        }
      }
    },
    "/api/Postal/CiudadesPorCodigoProvincia": {
      "get": {
        "tags": [
          "Postal"
        ],
        "summary": "Consultar las ciudades de una provincia",
        "operationId": "Postal_CiudadesPorCodigoProvincia",
        "consumes": [],
        "produces": [
          "application/json",
          "text/json",
          "text/xml"
        ],
        "parameters": [
          {
            "name": "stateCode",
            "in": "query",
            "description": "",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "schema": {
              "$ref": "#/definitions/B2BApp.Entities.OperationResultCiudadesPorEstado"
            }
          }
        }
      }
    },
    "/api/Postal/GetCities": {
      "get": {
        "tags": [
          "Postal"
        ],
        "summary": "Consultar ciudades de provincia",
        "operationId": "Postal_GetCities",
        "consumes": [],
        "produces": [
          "application/json",
          "text/json",
          "text/xml"
        ],
        "parameters": [
          {
            "name": "state",
            "in": "query",
            "description": "",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "schema": {
              "$ref": "#/definitions/B2BApp.Entities.ServicioPostal.OperationResultCiudades"
            }
          }
        }
      }
    },
    "/api/ProductModel/GetQuestionVidaIndividual": {
      "get": {
        "tags": [
          "ProductModel"
        ],
        "summary": "Consultar cuestionario de Vida Individual",
        "operationId": "ProductModel_GetQuestionVidaIndividual",
        "consumes": [],
        "produces": [
          "application/json",
          "text/json",
          "text/xml"
        ],
        "parameters": [
          {
            "name": "tipoPoliza",
            "in": "query",
            "description": "Ej: Vida Plus ó SC Vida 01",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "schema": {
              "$ref": "#/definitions/B2BApp.Entities.ProductModel.OperationResultQuestionVida"
            }
          }
        }
      }
    },
    "/api/Quoted/QuoteCP7Template": {
      "post": {
        "tags": [
          "Quoted"
        ],
        "summary": "Permite cotizar Hogar o Integral de Comercio con Planes",
        "operationId": "Quoted_QuoteCP7Template",
        "consumes": [
          "application/json",
          "text/json",
          "text/xml",
          "application/x-www-form-urlencoded"
        ],
        "produces": [
          "application/json",
          "text/json",
          "text/xml"
        ],
        "parameters": [
          {
            "name": "requestCP7",
            "in": "body",
            "description": "- OfficialIDType: Ext_DNI96 / Ext_CUIT80\r\n- TaxID: 8 dígitos para DNI / xx-xxxxxxxx-x para CUIT\r\n- Genre: M/F para cuando el OfficialIDType es Ext_DNI96\r\n- ProducerCode: Código de Productor (00-000000)\r\n- PolicyTypeCode: CP7_CombinedCombinedFamily (Hogar) / CP7_CombinedIntegralTrade (Int. Comercio)\r\n- CP7CommercialActivity: Sólo para Int. Comercio. Codigo del typelist CP7BuildingActivity\r\n- BasicPlanCode: Nombre del plan básico\r\n- AdditionalPlanCode: Nombre del plan adicional (sólo Hogar)\r\n- Payment:\r\n    - Fees: Cantidad de coutas\r\n    - Method: responsive / creditcard / directDebit\r\n- CurrencyCode: Sólo \"ars\"\r\n- StartDate:  Fecha de inicio\r\n- EndDate:    Fecha de fin\r\n- PolicyTermCode: Duración de la póliza (Ej: Annual / HalfYear / Other)\r\n- CommercialAlternative: 10 / 20 / 30 / 40\r\n- PostalCodeRiskLocation: xxxx (Ej: 2000 para Rosario)\r\n- State: Prov. del Riesgo / AR_99 (Ej: AR_02 para Bs.As. / AR_19 para Santa Fe)\r\n- City: ciudad de la ubicación del Riesgo\r\n\u003Ca href=\"https://drive.google.com/open?id=1mDlZ_t6365UC48re4RHonuYlNJmUygBT\" target=\"_blank\"\u003EDocumentación de ejemplo\u003C/a\u003E",
            "required": true,
            "schema": {
              "$ref": "#/definitions/B2BApp.Entities.Quoted.CP7TemplateQuoteRequest"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "schema": {
              "$ref": "#/definitions/B2BApp.Entities.Quoted.OperationResultQuoteCP7Template"
            }
          }
        }
      }
    },
    "/api/Quoted/QuoteVidaIndividual": {
      "post": {
        "tags": [
          "Quoted"
        ],
        "summary": "Quote seguro vida individual.",
        "operationId": "Quoted_QuoteVidaIndividual",
        "consumes": [
          "application/json",
          "text/json",
          "text/xml",
          "application/x-www-form-urlencoded"
        ],
        "produces": [
          "application/json",
          "text/json",
          "text/xml"
        ],
        "parameters": [
          {
            "name": "request",
            "in": "body",
            "description": "",
            "required": true,
            "schema": {
              "$ref": "#/definitions/B2BApp.Entities.Quoted.QuoteRequest"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "schema": {
              "$ref": "#/definitions/B2BApp.Entities.Quoted.OperationResultSummaryDetail"
            }
          }
        },
        "deprecated": true
      }
    },
    "/api/Quoted/QuoteCA7": {
      "post": {
        "tags": [
          "Quoted"
        ],
        "summary": "Emitir Cotización",
        "operationId": "Quoted_QuoteCA7",
        "consumes": [
          "application/json",
          "text/json",
          "text/xml",
          "application/x-www-form-urlencoded"
        ],
        "produces": [
          "application/json",
          "text/json",
          "text/xml"
        ],
        "parameters": [
          {
            "name": "request",
            "in": "body",
            "description": "",
            "required": true,
            "schema": {
              "$ref": "#/definitions/B2BApp.Entities.Quoted.CA7Quote"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "schema": {
              "$ref": "#/definitions/B2BApp.Entities.Quoted.OperationResultSummaries"
            }
          }
        }
      }
    },
    "/api/Quoted/QuoteATM": {
      "post": {
        "tags": [
          "Quoted"
        ],
        "summary": "Quote ATM",
        "operationId": "Quoted_QuoteATM",
        "consumes": [
          "application/json",
          "text/json",
          "text/xml",
          "application/x-www-form-urlencoded"
        ],
        "produces": [
          "application/json",
          "text/json",
          "text/xml"
        ],
        "parameters": [
          {
            "name": "request",
            "in": "body",
            "description": "",
            "required": true,
            "schema": {
              "$ref": "#/definitions/B2BApp.Entities.Quoted.AtmQuote"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "schema": {
              "$ref": "#/definitions/PolicyCenter.Api.Submission.Dtos.Responses.QuotationSummaryResponse"
            }
          }
        }
      }
    },
    "/api/Quoted/QuoteLifeIndividual": {
      "post": {
        "tags": [
          "Quoted"
        ],
        "summary": "Quote Vida Individual - Asegurado es el propio socio.",
        "operationId": "Quoted_QuoteLifeIndividual",
        "consumes": [
          "application/json",
          "text/json",
          "text/xml",
          "application/x-www-form-urlencoded"
        ],
        "produces": [
          "application/json",
          "text/json",
          "text/xml"
        ],
        "parameters": [
          {
            "name": "request",
            "in": "body",
            "description": "",
            "required": true,
            "schema": {
              "$ref": "#/definitions/B2BApp.Entities.Quoted.LifeQuote"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "schema": {
              "$ref": "#/definitions/PolicyCenter.Api.Submission.Dtos.Responses.QuotationSummaryResponse"
            }
          }
        }
      }
    },
    "/api/Quoted/AgriRequoteAsync": {
      "post": {
        "tags": [
          "Quoted"
        ],
        "summary": "recotiza agro",
        "operationId": "Quoted_AgriRequoteAsync",
        "consumes": [
          "application/json",
          "text/json",
          "text/xml",
          "application/x-www-form-urlencoded"
        ],
        "produces": [
          "application/json",
          "text/json",
          "text/xml"
        ],
        "parameters": [
          {
            "name": "request",
            "in": "body",
            "description": "",
            "required": true,
            "schema": {
              "$ref": "#/definitions/B2BApp.Entities.Quoted.AgriRequoteRequest"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "schema": {
              "$ref": "#/definitions/B2BApp.Entities.Quoted.AgriQuoteResponse"
            }
          }
        }
      }
    },
    "/api/Reportes/TarjetaMercosur": {
      "get": {
        "tags": [
          "Reportes"
        ],
        "summary": "Obtiene la tarjeta Cobertura en el Exterior.",
        "operationId": "Reportes_TarjetaMercosur",
        "consumes": [],
        "produces": [
          "application/json",
          "text/json",
          "text/xml"
        ],
        "parameters": [
          {
            "name": "Casa",
            "in": "query",
            "description": "",
            "required": true,
            "type": "integer",
            "format": "int32"
          },
          {
            "name": "Ramo",
            "in": "query",
            "description": "",
            "required": true,
            "type": "integer",
            "format": "int32"
          },
          {
            "name": "PolizaNro",
            "in": "query",
            "description": "",
            "required": true,
            "type": "integer",
            "format": "int32"
          },
          {
            "name": "Endoso",
            "in": "query",
            "description": "",
            "required": true,
            "type": "integer",
            "format": "int32"
          },
          {
            "name": "Inciso",
            "in": "query",
            "description": "",
            "required": true,
            "type": "integer",
            "format": "int32"
          }
        ],
        "responses": {
          "400": {
            "description": "BadRequest. Error de negocio."
          },
          "200": {
            "description": "OK. Devuelve el objeto solicitado.",
            "schema": {
              "$ref": "#/definitions/B2BGateway.Entities.Reportes.OperationResultReportes"
            }
          },
          "500": {
            "description": "InternalServerError. Error en el servidor."
          }
        }
      }
    },
    "/api/Reportes/CertificadoDeCobertura": {
      "get": {
        "tags": [
          "Reportes"
        ],
        "summary": "Obtener certificado de cobertura. Método asincrónico.",
        "operationId": "Reportes_CertificadoDeCobertura",
        "consumes": [],
        "produces": [
          "application/json",
          "text/json",
          "text/xml"
        ],
        "parameters": [
          {
            "name": "NumeroCertificado",
            "in": "query",
            "description": "",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "400": {
            "description": "BadRequest. Error de negocio."
          },
          "200": {
            "description": "OK. Devuelve el objeto solicitado.",
            "schema": {
              "$ref": "#/definitions/B2BGateway.Entities.Reportes.OperationResultReportes"
            }
          },
          "500": {
            "description": "InternalServerError. Error en el servidor."
          }
        }
      }
    },
    "/api/Reportes/SeguroObligatorio": {
      "get": {
        "tags": [
          "Reportes"
        ],
        "summary": "Obtener Seguro Obligatorio. Método asincrónico",
        "operationId": "Reportes_SeguroObligatorio",
        "consumes": [],
        "produces": [
          "application/json",
          "text/json",
          "text/xml"
        ],
        "parameters": [
          {
            "name": "Casa",
            "in": "query",
            "description": "",
            "required": true,
            "type": "integer",
            "format": "int32"
          },
          {
            "name": "Ramo",
            "in": "query",
            "description": "",
            "required": true,
            "type": "integer",
            "format": "int32"
          },
          {
            "name": "PolizaNro",
            "in": "query",
            "description": "",
            "required": true,
            "type": "integer",
            "format": "int32"
          },
          {
            "name": "Endoso",
            "in": "query",
            "description": "",
            "required": true,
            "type": "integer",
            "format": "int32"
          },
          {
            "name": "Inciso",
            "in": "query",
            "description": "",
            "required": true,
            "type": "integer",
            "format": "int32"
          }
        ],
        "responses": {
          "400": {
            "description": "BadRequest. Error de negocio."
          },
          "200": {
            "description": "OK. Devuelve el objeto solicitado.",
            "schema": {
              "$ref": "#/definitions/B2BGateway.Entities.Reportes.OperationResultReportes"
            }
          },
          "500": {
            "description": "InternalServerError. Error en el servidor."
          }
        }
      }
    },
    "/api/Reportes/DenunciaSiniestro": {
      "get": {
        "tags": [
          "Reportes"
        ],
        "summary": "Obtiene el PDF con la denuncia del siniestro.",
        "operationId": "Reportes_DenunciaSiniestro",
        "consumes": [],
        "produces": [
          "application/json",
          "text/json",
          "text/xml"
        ],
        "parameters": [
          {
            "name": "casa",
            "in": "query",
            "description": "Casa referida al número del siniestro - Formato: 99",
            "required": true,
            "type": "string"
          },
          {
            "name": "ramo",
            "in": "query",
            "description": "Ramo referido al número del siniestro - Formato: 99",
            "required": true,
            "type": "string"
          },
          {
            "name": "siniestroNro",
            "in": "query",
            "description": "Número de siniestro - Formato: 99999999",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "schema": {
              "$ref": "#/definitions/B2BGateway.Entities.Reportes.OperationResultReportes"
            }
          }
        }
      }
    },
    "/api/Reportes/FrenteResumen": {
      "get": {
        "tags": [
          "Reportes"
        ],
        "summary": "Obtiene frende resumen.",
        "operationId": "Reportes_FrenteResumen",
        "consumes": [],
        "produces": [
          "application/json",
          "text/json",
          "text/xml"
        ],
        "parameters": [
          {
            "name": "Casa",
            "in": "query",
            "description": "",
            "required": true,
            "type": "integer",
            "format": "int32"
          },
          {
            "name": "Ramo",
            "in": "query",
            "description": "",
            "required": true,
            "type": "integer",
            "format": "int32"
          },
          {
            "name": "PolizaNro",
            "in": "query",
            "description": "",
            "required": true,
            "type": "integer",
            "format": "int32"
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "schema": {
              "$ref": "#/definitions/B2BGateway.Entities.Reportes.OperationResultReportes"
            }
          }
        }
      }
    },
    "/api/Reportes/TextoClausulas": {
      "get": {
        "tags": [
          "Reportes"
        ],
        "summary": "Obtiene texto clausulas.",
        "operationId": "Reportes_TextoClausulas",
        "consumes": [],
        "produces": [
          "application/json",
          "text/json",
          "text/xml"
        ],
        "parameters": [
          {
            "name": "Casa",
            "in": "query",
            "description": "",
            "required": true,
            "type": "integer",
            "format": "int32"
          },
          {
            "name": "Ramo",
            "in": "query",
            "description": "",
            "required": true,
            "type": "integer",
            "format": "int32"
          },
          {
            "name": "PolizaNro",
            "in": "query",
            "description": "",
            "required": true,
            "type": "integer",
            "format": "int32"
          },
          {
            "name": "Inciso",
            "in": "query",
            "description": "",
            "required": true,
            "type": "integer",
            "format": "int32"
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "schema": {
              "$ref": "#/definitions/B2BGateway.Entities.Reportes.OperationResultReportes"
            }
          }
        }
      }
    },
    "/api/Reportes/AssistanceByPolicy": {
      "get": {
        "tags": [
          "Reportes"
        ],
        "summary": "Seguro Automotor. Asistencia 24.",
        "operationId": "Reportes_AssistanceByPolicy",
        "consumes": [],
        "produces": [
          "application/json",
          "text/json",
          "text/xml"
        ],
        "parameters": [
          {
            "name": "casa",
            "in": "query",
            "description": "",
            "required": true,
            "type": "integer",
            "format": "int32"
          },
          {
            "name": "ramo",
            "in": "query",
            "description": "",
            "required": true,
            "type": "integer",
            "format": "int32"
          },
          {
            "name": "polizaNro",
            "in": "query",
            "description": "",
            "required": true,
            "type": "integer",
            "format": "int32"
          },
          {
            "name": "inciso",
            "in": "query",
            "description": "",
            "required": true,
            "type": "integer",
            "format": "int32"
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "schema": {
              "$ref": "#/definitions/B2BGateway.Entities.Reportes.OperationResultReportes"
            }
          }
        }
      }
    },
    "/api/Reportes/CotizacionSeguro": {
      "get": {
        "tags": [
          "Reportes"
        ],
        "summary": "Obtiene el reporte de cotizacion de seguro. Válido solo para sepelio individual y colectivo.",
        "operationId": "Reportes_CotizacionSeguro",
        "consumes": [],
        "produces": [
          "application/json",
          "text/json",
          "text/xml"
        ],
        "parameters": [
          {
            "name": "numeroCotizacion",
            "in": "query",
            "description": "número de la cotizacion a consulta.",
            "required": true,
            "type": "string"
          },
          {
            "name": "ramo",
            "in": "query",
            "description": "",
            "required": true,
            "type": "integer",
            "format": "int32"
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "schema": {
              "$ref": "#/definitions/B2BGateway.Entities.Reportes.OperationResultReportes"
            }
          }
        }
      }
    },
    "/api/Reportes/AnexoAdherentes": {
      "get": {
        "tags": [
          "Reportes"
        ],
        "summary": "Obtiene el reporte de anexo de adherentes. Válido solo para sepelio colectivo.",
        "operationId": "Reportes_AnexoAdherentes",
        "consumes": [],
        "produces": [
          "application/json",
          "text/json",
          "text/xml"
        ],
        "parameters": [
          {
            "name": "casa",
            "in": "query",
            "description": "",
            "required": true,
            "type": "integer",
            "format": "int32"
          },
          {
            "name": "ramo",
            "in": "query",
            "description": "",
            "required": true,
            "type": "integer",
            "format": "int32"
          },
          {
            "name": "polizaNro",
            "in": "query",
            "description": "",
            "required": true,
            "type": "integer",
            "format": "int32"
          },
          {
            "name": "endoso",
            "in": "query",
            "description": "",
            "required": true,
            "type": "integer",
            "format": "int32"
          },
          {
            "name": "inciso",
            "in": "query",
            "description": "",
            "required": true,
            "type": "integer",
            "format": "int32"
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "schema": {
              "$ref": "#/definitions/B2BGateway.Entities.Reportes.OperationResultReportes"
            }
          }
        }
      }
    },
    "/api/Reportes/PropuestaSepelio": {
      "get": {
        "tags": [
          "Reportes"
        ],
        "summary": "Propuesta de sepelio. Válido solo para sepelio individual y colectivo.",
        "operationId": "Reportes_PropuestaSepelio",
        "consumes": [],
        "produces": [
          "application/json",
          "text/json",
          "text/xml"
        ],
        "parameters": [
          {
            "name": "numeroCotizacion",
            "in": "query",
            "description": "número de la cotizacion a consulta.",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "schema": {
              "$ref": "#/definitions/B2BGateway.Entities.Reportes.OperationResultReportes"
            }
          }
        }
      }
    },
    "/api/Reportes/TextoClausulasSepelio": {
      "get": {
        "tags": [
          "Reportes"
        ],
        "summary": "Obtiene texto clausulas para sepelios. Válido solo para sepelio individual y colectivo.",
        "operationId": "Reportes_TextoClausulasSepelio",
        "consumes": [],
        "produces": [
          "application/json",
          "text/json",
          "text/xml"
        ],
        "parameters": [
          {
            "name": "casa",
            "in": "query",
            "description": "",
            "required": true,
            "type": "integer",
            "format": "int32"
          },
          {
            "name": "ramo",
            "in": "query",
            "description": "",
            "required": true,
            "type": "integer",
            "format": "int32"
          },
          {
            "name": "polizaNro",
            "in": "query",
            "description": "",
            "required": true,
            "type": "integer",
            "format": "int32"
          },
          {
            "name": "endoso",
            "in": "query",
            "description": "",
            "required": true,
            "type": "integer",
            "format": "int32"
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "schema": {
              "$ref": "#/definitions/B2BGateway.Entities.Reportes.OperationResultReportes"
            }
          }
        }
      }
    },
    "/api/Reportes/FrentePolizaSepelio": {
      "get": {
        "tags": [
          "Reportes"
        ],
        "summary": "Obtiene el frente de póliza para sepelio individual y colectivo.",
        "operationId": "Reportes_FrentePolizaSepelio",
        "consumes": [],
        "produces": [
          "application/json",
          "text/json",
          "text/xml"
        ],
        "parameters": [
          {
            "name": "casa",
            "in": "query",
            "description": "",
            "required": true,
            "type": "integer",
            "format": "int32"
          },
          {
            "name": "ramo",
            "in": "query",
            "description": "",
            "required": true,
            "type": "integer",
            "format": "int32"
          },
          {
            "name": "polizaNro",
            "in": "query",
            "description": "",
            "required": true,
            "type": "integer",
            "format": "int32"
          },
          {
            "name": "endoso",
            "in": "query",
            "description": "",
            "required": true,
            "type": "integer",
            "format": "int32"
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "schema": {
              "$ref": "#/definitions/B2BGateway.Entities.Reportes.OperationResultReportes"
            }
          }
        }
      }
    },
    "/api/Reportes/TextoClausulasEndososPatrimoniales": {
      "get": {
        "tags": [
          "Reportes"
        ],
        "summary": "Obtiene texto clausulas de endosos patrimoniales. Solo para ramo incendio.",
        "operationId": "Reportes_TextoClausulasEndososPatrimoniales",
        "consumes": [],
        "produces": [
          "application/json",
          "text/json",
          "text/xml"
        ],
        "parameters": [
          {
            "name": "casa",
            "in": "query",
            "description": "",
            "required": true,
            "type": "integer",
            "format": "int32"
          },
          {
            "name": "ramo",
            "in": "query",
            "description": "",
            "required": true,
            "type": "integer",
            "format": "int32"
          },
          {
            "name": "polizaNro",
            "in": "query",
            "description": "",
            "required": true,
            "type": "integer",
            "format": "int32"
          },
          {
            "name": "endoso",
            "in": "query",
            "description": "",
            "required": true,
            "type": "integer",
            "format": "int32"
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "schema": {
              "$ref": "#/definitions/B2BGateway.Entities.Reportes.OperationResultReportes"
            }
          }
        }
      }
    },
    "/api/Reportes/AccountStatement": {
      "get": {
        "tags": [
          "Reportes"
        ],
        "summary": "Estado de Cuenta por Póliza",
        "operationId": "Reportes_AccountStatement",
        "consumes": [],
        "produces": [
          "application/json",
          "text/json",
          "text/xml"
        ],
        "parameters": [
          {
            "name": "casa",
            "in": "query",
            "description": "",
            "required": true,
            "type": "integer",
            "format": "int32"
          },
          {
            "name": "ramo",
            "in": "query",
            "description": "",
            "required": true,
            "type": "integer",
            "format": "int32"
          },
          {
            "name": "polizaNro",
            "in": "query",
            "description": "",
            "required": true,
            "type": "integer",
            "format": "int32"
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "schema": {
              "$ref": "#/definitions/B2BGateway.Entities.Reportes.OperationResultReportes"
            }
          }
        }
      }
    },
    "/api/Reportes/ReceiveReceipt": {
      "get": {
        "tags": [
          "Reportes"
        ],
        "summary": "Constancia de recepción.",
        "operationId": "Reportes_ReceiveReceipt",
        "consumes": [],
        "produces": [
          "application/json",
          "text/json",
          "text/xml"
        ],
        "parameters": [
          {
            "name": "casa",
            "in": "query",
            "description": "",
            "required": true,
            "type": "integer",
            "format": "int32"
          },
          {
            "name": "ramo",
            "in": "query",
            "description": "",
            "required": true,
            "type": "integer",
            "format": "int32"
          },
          {
            "name": "polizaNro",
            "in": "query",
            "description": "",
            "required": true,
            "type": "integer",
            "format": "int32"
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "schema": {
              "$ref": "#/definitions/B2BGateway.Entities.Reportes.OperationResultReportes"
            }
          }
        }
      }
    },
    "/api/RiskAnalysis/GetUnderwrittingIssues": {
      "get": {
        "tags": [
          "RiskAnalysis"
        ],
        "summary": "Obtiene  las pautas de suscripció (underwriting issues) de un policy period.",
        "operationId": "RiskAnalysis_GetUnderwrittingIssues",
        "consumes": [],
        "produces": [
          "application/json",
          "text/json",
          "text/xml"
        ],
        "parameters": [
          {
            "name": "PolicyPeriodID",
            "in": "query",
            "description": "",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "schema": {
              "$ref": "#/definitions/B2BApp.Entities.RiskAnalysis.UnderwrittingIssuesResponse"
            }
          }
        }
      }
    },
    "/api/Vehicle/GetVehicles": {
      "get": {
        "tags": [
          "Vehicle"
        ],
        "summary": "Obtener los vehículos de una póliza",
        "operationId": "Vehicle_GetVehicles",
        "consumes": [],
        "produces": [
          "application/json",
          "text/json",
          "text/xml"
        ],
        "parameters": [
          {
            "name": "PolicyPeriodId",
            "in": "query",
            "description": "- PolicyPeriodId: Identificador de la cotización",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "schema": {
              "$ref": "#/definitions/B2BApp.Entities.Vehicle.OperationResultVehicle"
            }
          }
        }
      }
    },
    "/api/Vehicle/GetCertificateStatus": {
      "get": {
        "tags": [
          "Vehicle"
        ],
        "summary": "Obtener el status de un certificado",
        "operationId": "Vehicle_GetCertificateStatus",
        "consumes": [],
        "produces": [
          "application/json",
          "text/json",
          "text/xml"
        ],
        "parameters": [
          {
            "name": "CertificateNumber",
            "in": "query",
            "description": "Número del Certificado",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "schema": {
              "$ref": "#/definitions/B2BApp.Entities.Vehicle.OperationResultCertificateStatus"
            }
          }
        }
      }
    },
    "/api/Versiones/GetVersionByCodInfoAuto": {
      "get": {
        "tags": [
          "Versiones"
        ],
        "summary": "Obtiene la version por código de info auto y año.\r\nEndpoint deprecado. Utilizar en su lugar el endpoint /api/CatalogoVehiculos/AutosVersionPorCodigoInfoauto.",
        "operationId": "Versiones_GetVersionByCodInfoAuto",
        "consumes": [],
        "produces": [
          "application/json",
          "text/json",
          "text/xml"
        ],
        "parameters": [
          {
            "name": "codInfoAuto",
            "in": "query",
            "description": "",
            "required": true,
            "type": "integer",
            "format": "int32"
          },
          {
            "name": "anio",
            "in": "query",
            "description": "",
            "required": true,
            "type": "integer",
            "format": "int32"
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "schema": {
              "$ref": "#/definitions/B2BApp.Entities.InfoAuto.OperationResultVersiones"
            }
          }
        },
        "deprecated": true
      }
    }
  },
  "definitions": {
    "PortalPAS.BE.LIB.Common.Entities.Message": {
      "type": "object",
      "properties": {
        "NombreServicio": {
          "type": "string"
        },
        "VersionServicio": {
          "type": "string"
        },
        "Description": {
          "type": "string"
        },
        "MessageBeautiful": {
          "type": "string"
        },
        "StackTrace": {
          "type": "string"
        },
        "ErrorLevel": {
          "format": "int32",
          "enum": [0, 1, 2],
          "type": "integer"
        }
      }
    },
    "B2BApp.Entities.Account.Address": {
      "type": "object",
      "properties": {
        "policyPeriodID": {
          "type": "string"
        },
        "UpdateLinkedAddresses": {
          "type": "boolean"
        },
        "AddressLine1": {
          "type": "string"
        },
        "AddressLine2": {
          "type": "string"
        },
        "AddressLine3": {
          "type": "string"
        },
        "Block": {
          "type": "string"
        },
        "City": {
          "type": "string"
        },
        "County": {
          "type": "string"
        },
        "Description": {
          "type": "string"
        },
        "DisplayText": {
          "type": "string"
        },
        "PolicyAddress": {
          "type": "boolean"
        },
        "PostalCode": {
          "type": "string"
        },
        "PrimaryAddress": {
          "type": "boolean"
        },
        "PublicID": {
          "type": "string"
        },
        "State": {
          "type": "string"
        },
        "StreetNumber": {
          "type": "string"
        }
      }
    },
    "B2BApp.Entities.Account.Account": {
      "type": "object",
      "properties": {
        "AccountNumber": {
          "type": "string"
        },
        "AccountHolderContact": {
          "$ref": "#/definitions/B2BApp.Entities.Account.Contact"
        },
        "OriginationDate": {
          "format": "date-time",
          "type": "string"
        },
        "OriginationDateSpecified": {
          "type": "boolean"
        },
        "PreferredCoverageCurrency": {
          "type": "string"
        },
        "PreferredSettlementCurrency": {
          "type": "string"
        },
        "PrimaryLocation": {
          "$ref": "#/definitions/B2BApp.Entities.Account.Address"
        },
        "ProducerCode": {
          "type": "string"
        },
        "ProducerCodes": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/B2BApp.Entities.Account.AccountProducerCode"
          }
        },
        "Ext_Collector": {
          "type": "string"
        },
        "Ext_CountryIssue": {
          "type": "string"
        },
        "Ext_sendcouponby": {
          "type": "string"
        }
      }
    },
    "B2BApp.Entities.Account.Contact": {
      "type": "object",
      "properties": {
        "EntityPerson": {
          "$ref": "#/definitions/B2BApp.Entities.Account.ContactEntityPerson"
        },
        "EmailAddress1": {
          "type": "string"
        },
        "HomePhone": {
          "type": "string"
        },
        "Name": {
          "type": "string"
        },
        "OfficialIDType": {
          "type": "string"
        },
        "PreferredSettlementCurrency": {
          "type": "string"
        },
        "PrimaryAddress": {
          "$ref": "#/definitions/B2BApp.Entities.Account.Address"
        },
        "PrimaryPhone": {
          "type": "string"
        },
        "Subtype": {
          "type": "string"
        },
        "TaxID": {
          "type": "string"
        },
        "WorkPhone": {
          "type": "string"
        },
        "Ext_CUIL": {
          "type": "string"
        },
        "EntityCompany": {
          "$ref": "#/definitions/B2BApp.Entities.Account.ContactEntityCompany"
        },
        "ElectronicDocuments": {
          "type": "boolean"
        }
      }
    },
    "B2BApp.Entities.Account.AccountProducerCode": {
      "type": "object",
      "properties": {
        "ProducerCode": {
          "$ref": "#/definitions/B2BApp.Entities.Account.ProducerCode"
        }
      }
    },
    "B2BApp.Entities.Account.ContactEntityPerson": {
      "type": "object",
      "properties": {
        "CellPhone": {
          "type": "string"
        },
        "DateOfBirth": {
          "format": "date-time",
          "type": "string"
        },
        "DateOfBirthSpecified": {
          "type": "boolean"
        },
        "FirstName": {
          "type": "string"
        },
        "Gender": {
          "type": "string"
        },
        "LastName": {
          "type": "string"
        },
        "LicenseNumber": {
          "type": "string"
        },
        "LicenseState": {
          "type": "string"
        },
        "MaritalStatus": {
          "type": "string"
        },
        "MiddleName": {
          "type": "string"
        },
        "Occupation": {
          "type": "string"
        },
        "Prefix": {
          "type": "string"
        },
        "Suffix": {
          "type": "string"
        },
        "PrimaryPhone": {
          "type": "string"
        },
        "WorkPhone": {
          "type": "string"
        },
        "Ext_SchoolLevel": {
          "type": "string"
        },
        "Country": {
          "type": "string"
        },
        "Ext_PlaceOfBirth": {
          "type": "string"
        },
        "HomePhone": {
          "type": "string"
        }
      }
    },
    "B2BApp.Entities.Account.ContactEntityCompany": {
      "type": "object",
      "properties": {
        "Ext_CellPhone": {
          "type": "string"
        },
        "Ext_ActivityStartDate": {
          "format": "date-time",
          "type": "string"
        },
        "Ext_ActivityStartDateSpecified": {
          "type": "boolean"
        },
        "Ext_AfipActivity": {
          "type": "string"
        }
      }
    },
    "B2BApp.Entities.Account.ProducerCode": {
      "type": "object",
      "properties": {
        "Code": {
          "type": "string"
        }
      }
    },
    "B2BApp.Entities.Common.TypeKey": {
      "type": "object",
      "properties": {
        "Code": {
          "type": "string"
        },
        "Description": {
          "type": "string"
        }
      }
    },
    "B2BApp.Entities.InfoAuto.OperationResultVersiones": {
      "type": "object",
      "properties": {
        "Versiones": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/B2BApp.Entities.InfoAuto.Version"
          }
        },
        "HasError": {
          "type": "boolean"
        },
        "HasWarning": {
          "type": "boolean"
        },
        "HasInformation": {
          "type": "boolean"
        },
        "Messages": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/PortalPAS.BE.LIB.Common.Entities.Message"
          }
        }
      }
    },
    "B2BApp.Entities.InfoAuto.Version": {
      "type": "object",
      "properties": {
        "ID": {
          "format": "int64",
          "type": "integer"
        },
        "VersionNumero": {
          "format": "int32",
          "type": "integer"
        },
        "VersionDescripcion": {
          "type": "string"
        },
        "MarcaNumero": {
          "format": "int32",
          "type": "integer"
        },
        "MarcaDescripcion": {
          "type": "string"
        },
        "ModeloNumero": {
          "format": "int32",
          "type": "integer"
        },
        "ModeloDescripcion": {
          "type": "string"
        },
        "NombreCompleto": {
          "type": "string",
          "readOnly": true
        },
        "Categoria": {
          "type": "string"
        },
        "CodigoInfoAuto": {
          "format": "int32",
          "type": "integer"
        },
        "CodigoReasignado": {
          "format": "int32",
          "type": "integer"
        },
        "Critico": {
          "type": "boolean"
        },
        "CombustibleCodigo": {
          "type": "string"
        },
        "CombustibleDescripcion": {
          "type": "string"
        },
        "Precio": {
          "format": "int32",
          "type": "integer"
        },
        "PrecioReferencia0Km": {
          "format": "int32",
          "type": "integer"
        },
        "ImporteUsado": {
          "format": "double",
          "type": "number"
        },
        "Precio0KmUsado": {
          "format": "int32",
          "type": "integer"
        },
        "CoberturasCriticas": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/B2BApp.Entities.InfoAuto.CoberturaCritica"
          }
        },
        "Importado": {
          "type": "boolean"
        },
        "TechoPanoramico": {
          "type": "boolean"
        },
        "TechoCorredizo": {
          "type": "boolean"
        }
      }
    },
    "B2BApp.Entities.InfoAuto.CoberturaCritica": {
      "type": "object",
      "properties": {
        "CodigoInfoAuto": {
          "format": "int32",
          "type": "integer"
        },
        "Cobertura": {
          "type": "string"
        },
        "Calificacion": {
          "type": "string"
        },
        "FechaVigencia": {
          "format": "date-time",
          "type": "string"
        },
        "Estado": {
          "format": "int32",
          "type": "integer"
        }
      }
    },
    "B2BApp.Entities.Common.Contact": {
      "type": "object",
      "properties": {
        "Activitystartdate": {
          "format": "date-time",
          "type": "string"
        },
        "Addresses": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/B2BApp.Entities.Common.Address"
          }
        },
        "Attorney": {
          "$ref": "#/definitions/B2BApp.Entities.Common.Attorney"
        },
        "AvailablePhoneNumbers": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/B2BApp.Entities.Common.Phone"
          }
        },
        "CUIL": {
          "type": "string"
        },
        "ContactType": {
          "$ref": "#/definitions/B2BApp.Entities.Common.ContactType"
        },
        "DateOfBirth": {
          "format": "date-time",
          "type": "string"
        },
        "EmailAddress1": {
          "type": "string"
        },
        "EmailAddress2": {
          "type": "string"
        },
        "FirstName": {
          "type": "string"
        },
        "Gender": {
          "$ref": "#/definitions/B2BApp.Entities.Common.Gender"
        },
        "Industry": {
          "$ref": "#/definitions/B2BApp.Entities.Common.Industry"
        },
        "InsuredNumberFormated": {
          "type": "string"
        },
        "LastName": {
          "type": "string"
        },
        "MaritalStatus": {
          "$ref": "#/definitions/B2BApp.Entities.Common.MaritalStatus"
        },
        "Name": {
          "type": "string"
        },
        "Nationality": {
          "$ref": "#/definitions/B2BApp.Entities.Common.Country"
        },
        "Occupation": {
          "$ref": "#/definitions/B2BApp.Entities.Common.Occupation"
        },
        "OfficialIDType": {
          "$ref": "#/definitions/B2BApp.Entities.Common.OfficialIDType"
        },
        "PEP": {
          "type": "boolean"
        },
        "PreferredSettlementCurrency": {
          "$ref": "#/definitions/B2BApp.Entities.Common.Currency"
        },
        "PrimaryNamedInsured": {
          "type": "boolean"
        },
        "PrimaryPhoneType": {
          "$ref": "#/definitions/B2BApp.Entities.Common.PhoneType"
        },
        "PublicID": {
          "type": "string"
        },
        "Resident": {
          "type": "boolean"
        },
        "SchoolLevel": {
          "$ref": "#/definitions/B2BApp.Entities.Common.SchoolLevel"
        },
        "TaxID": {
          "type": "string"
        },
        "TaxStatuses": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/B2BApp.Entities.Common.TaxStatus"
          }
        },
        "UIFFormSubmitted": {
          "type": "boolean"
        },
        "UifRepresentative": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/B2BApp.Entities.Contact.UifRepresentativeDto"
          }
        }
      }
    },
    "B2BApp.Entities.Common.Address": {
      "type": "object",
      "properties": {
        "policyPeriodID": {
          "type": "string"
        },
        "updateLinkedAddresses": {
          "type": "boolean"
        },
        "AddressLine1": {
          "type": "string"
        },
        "AddressLine2": {
          "type": "string"
        },
        "AddressLine3": {
          "type": "string"
        },
        "AddressType": {
          "$ref": "#/definitions/B2BApp.Entities.Common.AddressType"
        },
        "Block": {
          "type": "string"
        },
        "City": {
          "type": "string"
        },
        "Country": {
          "$ref": "#/definitions/B2BApp.Entities.Common.Country"
        },
        "County": {
          "type": "string"
        },
        "Description": {
          "type": "string"
        },
        "DisplayText": {
          "type": "string"
        },
        "PolicyAddress": {
          "type": "boolean"
        },
        "PostalCode": {
          "type": "string"
        },
        "PrimaryAddress": {
          "type": "boolean"
        },
        "PublicID": {
          "type": "string"
        },
        "State": {
          "$ref": "#/definitions/B2BApp.Entities.Common.State"
        },
        "StreetNumber": {
          "type": "string"
        }
      }
    },
    "B2BApp.Entities.Common.Attorney": {
      "type": "object",
      "properties": {
        "DocumentNumber": {
          "type": "string"
        },
        "FirstName": {
          "type": "string"
        },
        "Gender": {
          "$ref": "#/definitions/B2BApp.Entities.Common.TypeKey"
        },
        "IDDocumentType": {
          "$ref": "#/definitions/B2BApp.Entities.Common.TypeKey"
        },
        "LastName": {
          "type": "string"
        }
      }
    },
    "B2BApp.Entities.Common.Phone": {
      "type": "object",
      "properties": {
        "PhoneCountry": {
          "$ref": "#/definitions/B2BApp.Entities.Common.TypeKey"
        },
        "PhoneNumber": {
          "type": "string"
        },
        "PhoneType": {
          "$ref": "#/definitions/B2BApp.Entities.Common.TypeKey"
        }
      }
    },
    "B2BApp.Entities.Common.ContactType": {
      "type": "object",
      "properties": {
        "Code": {
          "type": "string"
        },
        "Description": {
          "type": "string"
        }
      }
    },
    "B2BApp.Entities.Common.Gender": {
      "type": "object",
      "properties": {
        "Code": {
          "type": "string"
        },
        "Description": {
          "type": "string"
        }
      }
    },
    "B2BApp.Entities.Common.Industry": {
      "type": "object",
      "properties": {
        "Code": {
          "type": "string"
        },
        "Description": {
          "type": "string"
        }
      }
    },
    "B2BApp.Entities.Common.MaritalStatus": {
      "type": "object",
      "properties": {
        "Code": {
          "type": "string"
        },
        "DisplayName": {
          "type": "string"
        }
      }
    },
    "B2BApp.Entities.Common.Country": {
      "type": "object",
      "properties": {
        "Code": {
          "type": "string"
        },
        "Description": {
          "type": "string"
        }
      }
    },
    "B2BApp.Entities.Common.Occupation": {
      "type": "object",
      "properties": {
        "Code": {
          "type": "string"
        },
        "Description": {
          "type": "string"
        }
      }
    },
    "B2BApp.Entities.Common.OfficialIDType": {
      "type": "object",
      "properties": {
        "Code": {
          "type": "string"
        },
        "Description": {
          "type": "string"
        }
      }
    },
    "B2BApp.Entities.Common.Currency": {
      "type": "object",
      "properties": {
        "Code": {
          "type": "string"
        },
        "Description": {
          "type": "string"
        },
        "Selected": {
          "type": "boolean"
        }
      }
    },
    "B2BApp.Entities.Common.PhoneType": {
      "type": "object",
      "properties": {
        "Code": {
          "type": "string"
        },
        "Description": {
          "type": "string"
        }
      }
    },
    "B2BApp.Entities.Common.SchoolLevel": {
      "type": "object",
      "properties": {
        "Code": {
          "type": "string"
        },
        "Description": {
          "type": "string"
        }
      }
    },
    "B2BApp.Entities.Common.TaxStatus": {
      "type": "object",
      "properties": {
        "EnrollementStatus": {
          "$ref": "#/definitions/B2BApp.Entities.Common.TypeKey"
        },
        "PublicID": {
          "type": "string"
        },
        "RetentionAgent": {
          "$ref": "#/definitions/B2BApp.Entities.Common.TypeKey"
        },
        "StatusValue": {
          "type": "string"
        },
        "TaxPercentage": {
          "format": "double",
          "type": "number"
        }
      }
    },
    "B2BApp.Entities.Contact.UifRepresentativeDto": {
      "type": "object",
      "properties": {
        "Cuit": {
          "type": "string"
        },
        "DateOfBirth": {
          "format": "date-time",
          "type": "string"
        },
        "Email": {
          "type": "string"
        },
        "LastName": {
          "type": "string"
        },
        "Name": {
          "type": "string"
        },
        "Phone": {
          "type": "string"
        },
        "PublicId": {
          "type": "string"
        },
        "RepresentativeType": {
          "$ref": "#/definitions/B2BApp.Entities.Common.TypeKey"
        }
      }
    },
    "B2BApp.Entities.Common.AddressType": {
      "type": "object",
      "properties": {
        "Code": {
          "type": "string"
        },
        "Description": {
          "type": "string"
        }
      }
    },
    "B2BApp.Entities.Common.State": {
      "type": "object",
      "properties": {
        "Code": {
          "type": "string"
        },
        "Description": {
          "type": "string"
        }
      }
    },
    "PolicyCenter.Api.Account.Dtos.KeyValueDto": {
      "type": "object",
      "properties": {
        "Code": {
          "type": "string"
        },
        "Description": {
          "type": "string"
        }
      }
    },
    "B2BApp.Entities.Coverage.Coverage": {
      "type": "object",
      "properties": {
        "DisplayText": {
          "type": "string"
        },
        "PublicID": {
          "type": "string"
        },
        "ToggleValue": {
          "type": "boolean"
        },
        "VehiclePublicId": {
          "type": "string"
        },
        "CoverageTerms": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/B2BApp.Entities.Common.CoverageTerm"
          }
        },
        "ScheduleItems": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/B2BApp.Entities.Common.ScheduleItem"
          }
        },
        "VehicleNumber": {
          "format": "int32",
          "type": "integer"
        }
      }
    },
    "B2BApp.Entities.Common.CoverageTerm": {
      "type": "object",
      "properties": {
        "DisplayText": {
          "type": "string"
        },
        "Editable": {
          "type": "boolean"
        },
        "PublicID": {
          "type": "string"
        },
        "TermOptions": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/B2BApp.Entities.Common.TermOption"
          }
        },
        "Value": {
          "type": "string"
        },
        "ValueTypeName": {
          "type": "string"
        }
      }
    },
    "B2BApp.Entities.Common.ScheduleItem": {
      "type": "object",
      "properties": {
        "Coverages": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/B2BApp.Entities.Common.ScheduleItemCoverage"
          }
        },
        "Attributes": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/B2BApp.Entities.Common.Attribute"
          }
        },
        "PublicID": {
          "type": "string"
        }
      }
    },
    "B2BApp.Entities.Common.TermOption": {
      "type": "object",
      "properties": {
        "DisplayText": {
          "type": "string"
        },
        "PublicID": {
          "type": "string"
        },
        "SelectedValue": {
          "type": "boolean"
        }
      }
    },
    "B2BApp.Entities.Common.ScheduleItemCoverage": {
      "type": "object",
      "properties": {
        "DisplayText": {
          "type": "string"
        },
        "PublicID": {
          "type": "string"
        },
        "ToggleValue": {
          "type": "boolean"
        },
        "VehiclePublicId": {
          "type": "string"
        },
        "CoverageTerms": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/B2BApp.Entities.Common.ScheduleItemCoverageTerm"
          }
        },
        "VehicleNumber": {
          "format": "int32",
          "type": "integer"
        }
      }
    },
    "B2BApp.Entities.Common.Attribute": {
      "type": "object",
      "properties": {
        "ColumnName": {
          "type": "string"
        },
        "Editable": {
          "type": "boolean"
        },
        "Label": {
          "type": "string"
        },
        "Type": {
          "type": "string"
        },
        "Value": {
          "type": "string"
        }
      }
    },
    "B2BApp.Entities.Common.ScheduleItemCoverageTerm": {
      "type": "object",
      "properties": {
        "DisplayText": {
          "type": "string"
        },
        "Editable": {
          "type": "boolean"
        },
        "PublicID": {
          "type": "string"
        },
        "TermOptions": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/B2BApp.Entities.Common.TermOption"
          }
        },
        "Value": {
          "type": "string"
        },
        "ValueTypeName": {
          "type": "string"
        }
      }
    },
    "B2BApp.Entities.Issue.FotosTecnoredRequest": {
      "type": "object",
      "properties": {
        "nombre": {
          "type": "string"
        },
        "img": {
          "type": "string"
        }
      }
    },
    "B2BApp.Entities.Issue.PepData": {
      "type": "object",
      "properties": {
        "PepContactData": {
          "$ref": "#/definitions/PolicyCenter.Api.Account.Dtos.Requests.SetPepDataRequest"
        },
        "Representatives": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/PolicyCenter.Api.Account.Dtos.Requests.AddUifRepresentativeRequest"
          }
        }
      }
    },
    "PolicyCenter.Api.Account.Dtos.Requests.SetPepDataRequest": {
      "required": [
        "Pep"
      ],
      "type": "object",
      "properties": {
        "Pep": {
          "type": "boolean"
        },
        "PepInitialDate": {
          "format": "date-time",
          "type": "string"
        },
        "PepPosition": {
          "type": "string"
        }
      }
    },
    "PolicyCenter.Api.Account.Dtos.Requests.AddUifRepresentativeRequest": {
      "type": "object",
      "properties": {
        "Cuit": {
          "type": "string"
        },
        "DateOfBirth": {
          "format": "date-time",
          "type": "string"
        },
        "Email": {
          "type": "string"
        },
        "LastName": {
          "type": "string"
        },
        "Name": {
          "type": "string"
        },
        "Pep": {
          "type": "boolean"
        },
        "PepInitialDate": {
          "format": "date-time",
          "type": "string"
        },
        "PepPosition": {
          "type": "string"
        },
        "Phone": {
          "type": "string"
        },
        "PlaceOfBirthCode": {
          "type": "string"
        },
        "RepresentativeTypeCode": {
          "type": "string"
        }
      }
    },
    "B2BApp.Entities.Issue.OperationResultIssueSubmission": {
      "type": "object",
      "properties": {
        "Response": {
          "$ref": "#/definitions/B2BApp.Entities.Issue.IssueResult"
        },
        "HasError": {
          "type": "boolean"
        },
        "HasWarning": {
          "type": "boolean"
        },
        "HasInformation": {
          "type": "boolean"
        },
        "Messages": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/PortalPAS.BE.LIB.Common.Entities.Message"
          }
        }
      }
    },
    "B2BApp.Entities.Issue.IssueResult": {
      "type": "object",
      "properties": {
        "Issue": {
          "type": "string"
        }
      }
    },
    "B2BApp.Entities.Issue.IssueCA7Request": {
      "description": "Request para generar la cotización y emisión en un único paso",
      "type": "object",
      "properties": {
        "QuoteId": {
          "type": "string"
        },
        "PaymentInfo": {
          "$ref": "#/definitions/B2BApp.Entities.Issue.PaymentInfo"
        },
        "VehicleInfo": {
          "$ref": "#/definitions/B2BApp.Entities.Issue.VehicleInfo"
        },
        "InsuredData": {
          "$ref": "#/definitions/B2BApp.Entities.Issue.InsuredData"
        },
        "IssueData": {
          "$ref": "#/definitions/B2BApp.Entities.Issue.IssueData"
        },
        "PepData": {
          "$ref": "#/definitions/B2BApp.Entities.Issue.PepData"
        },
        "LoanData": {
          "$ref": "#/definitions/B2BApp.Entities.Issue.LoanData"
        },
        "TruckData": {
          "$ref": "#/definitions/B2BApp.Entities.Issue.TruckData"
        }
      }
    },
    "B2BApp.Entities.Issue.PaymentInfo": {
      "type": "object",
      "properties": {
        "PaymentMethodCode": {
          "type": "string"
        },
        "CollectorCode": {
          "type": "string"
        },
        "Token": {
          "type": "string"
        },
        "PaymentEntityCode": {
          "type": "string"
        },
        "SendCouponsByCode": {
          "type": "string"
        },
        "AdditionalDataBank": {
          "$ref": "#/definitions/B2BApp.Entities.Vehicle.AdditionalDataBank"
        }
      }
    },
    "B2BApp.Entities.Issue.VehicleInfo": {
      "type": "object",
      "properties": {
        "EngineNumber": {
          "type": "string"
        },
        "LicensePlate": {
          "type": "string"
        },
        "VIN": {
          "type": "string"
        },
        "VTVExpirationDate": {
          "format": "date-time",
          "type": "string"
        },
        "Accesories": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/PolicyCenter.Api.Policy.Dtos.UpdateVehicleAccesoryDto"
          }
        },
        "Address": {
          "$ref": "#/definitions/B2BApp.Entities.Job.Address",
          "description": "Address del Vehiculo. Se usa como dirección de riesgo"
        },
        "GpsProviderCode": {
          "type": "string"
        }
      }
    },
    "B2BApp.Entities.Issue.InsuredData": {
      "type": "object",
      "properties": {
        "CellPhone": {
          "type": "string"
        },
        "Email": {
          "type": "string"
        },
        "Address": {
          "$ref": "#/definitions/B2BApp.Entities.Job.Address",
          "description": "Address del asegurado. Se usa como dirección de papelería"
        },
        "ElectronicDocuments": {
          "type": "boolean"
        },
        "UIfObligated": {
          "type": "boolean"
        }
      }
    },
    "B2BApp.Entities.Issue.IssueData": {
      "type": "object",
      "properties": {
        "Documents": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/B2BApp.Entities.Issue.FotosTecnoredRequest"
          }
        },
        "TrackingPAS": {
          "type": "string"
        },
        "WarningsThrowException": {
          "type": "boolean"
        },
        "StartDate": {
          "format": "date-time",
          "type": "string"
        },
        "DetailResponse": {
          "type": "boolean"
        }
      }
    },
    "B2BApp.Entities.Issue.LoanData": {
      "type": "object",
      "properties": {
        "BankCode": {
          "type": "string"
        },
        "CurrencyCode": {
          "type": "string"
        },
        "DueDateFirstInstallment": {
          "format": "date-time",
          "type": "string"
        },
        "ExpirationDate": {
          "format": "date-time",
          "type": "string"
        },
        "Number": {
          "type": "string"
        },
        "OfficeCode": {
          "type": "string"
        },
        "Product": {
          "type": "string"
        },
        "Subproduct": {
          "type": "string"
        }
      }
    },
    "B2BApp.Entities.Issue.TruckData": {
      "type": "object",
      "properties": {
        "Route": {
          "type": "string"
        },
        "LoadCorrosiveExpense": {
          "type": "boolean"
        },
        "EnvironmentalDamage": {
          "type": "boolean"
        },
        "FuelCarried": {
          "type": "string"
        },
        "AdditionalInsured": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/B2BApp.Entities.Issue.AdditionalInsured"
          }
        }
      }
    },
    "B2BApp.Entities.Vehicle.AdditionalDataBank": {
      "type": "object",
      "properties": {
        "ApplicationNumber": {
          "type": "string"
        },
        "BranchCodeAccount": {
          "type": "string"
        },
        "BranchCodeAssigned": {
          "type": "string"
        },
        "CBU": {
          "type": "string"
        },
        "DebitAccountNumber": {
          "type": "string"
        },
        "DueDate": {
          "format": "date-time",
          "type": "string"
        },
        "GarmentLoanLeasingNumber": {
          "type": "string"
        },
        "PaymentCode": {
          "$ref": "#/definitions/B2BApp.Entities.Common.TypeKey"
        },
        "PlanCode": {
          "type": "string"
        },
        "ProductCode": {
          "type": "string"
        },
        "PublicId": {
          "type": "string"
        },
        "RiskAreaCode": {
          "type": "string"
        },
        "SaleBranchCode": {
          "type": "string"
        }
      }
    },
    "PolicyCenter.Api.Policy.Dtos.UpdateVehicleAccesoryDto": {
      "type": "object",
      "properties": {
        "AccesoryTypeCode": {
          "type": "string"
        },
        "Description": {
          "type": "string"
        },
        "InsuredAmount": {
          "format": "double",
          "type": "number"
        },
        "InsuredAmountCurrencyCode": {
          "type": "string"
        },
        "Make": {
          "type": "string"
        },
        "Model": {
          "type": "string"
        },
        "SerialNumber": {
          "type": "string"
        }
      }
    },
    "B2BApp.Entities.Job.Address": {
      "type": "object",
      "properties": {
        "PostalCode": {
          "type": "string"
        },
        "Street": {
          "type": "string"
        },
        "StreetNumber": {
          "type": "string"
        },
        "Floor": {
          "type": "string"
        },
        "Block": {
          "type": "string"
        },
        "City": {
          "type": "string"
        },
        "StateCode": {
          "type": "string"
        },
        "Phone": {
          "type": "string"
        }
      }
    },
    "B2BApp.Entities.Issue.AdditionalInsured": {
      "type": "object",
      "properties": {
        "OfficialIdTypeCode": {
          "type": "string"
        },
        "TaxId": {
          "type": "string"
        }
      }
    },
    "B2BApp.Entities.Issue.OperationResultIssueCA7": {
      "description": "DTO del IssueCA7",
      "type": "object",
      "properties": {
        "PolicyNumber": {
          "description": "Número de la póliza emitida",
          "type": "string"
        },
        "TotalCost": {
          "format": "double",
          "description": "Premio de la póliza emitida",
          "type": "number"
        },
        "TotalPremium": {
          "format": "double",
          "description": "Prima de la póliza emitida",
          "type": "number"
        },
        "PolicyPeriodId": {
          "description": "PublicId de la póliza",
          "type": "string"
        },
        "Details": {
          "$ref": "#/definitions/B2BApp.Entities.Issue.Details",
          "description": "Detalle de Comisiones y Premio"
        },
        "HasError": {
          "type": "boolean"
        },
        "HasWarning": {
          "type": "boolean"
        },
        "HasInformation": {
          "type": "boolean"
        },
        "Messages": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/PortalPAS.BE.LIB.Common.Entities.Message"
          }
        }
      }
    },
    "B2BApp.Entities.Issue.Details": {
      "type": "object",
      "properties": {
        "DetailedCommissions": {
          "$ref": "#/definitions/B2BApp.Entities.Issue.DetailedCommission"
        },
        "DetailedCost": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/B2BApp.Entities.PolicySearch.PremiumDetail"
          }
        }
      }
    },
    "B2BApp.Entities.Issue.DetailedCommission": {
      "type": "object",
      "properties": {
        "BrokerCommission": {
          "format": "double",
          "type": "number"
        },
        "ProducerCommission": {
          "format": "double",
          "type": "number"
        },
        "OrganizerCommission": {
          "format": "double",
          "type": "number"
        }
      }
    },
    "B2BApp.Entities.PolicySearch.PremiumDetail": {
      "type": "object",
      "properties": {
        "ActualAmount": {
          "format": "double",
          "type": "number"
        },
        "Basis": {
          "format": "double",
          "type": "number"
        },
        "Ext_TaxType": {
          "type": "string"
        },
        "TaxTypeName": {
          "type": "string"
        }
      }
    },
    "B2BApp.Entities.Issue.Beneficiaries": {
      "type": "object",
      "properties": {
        "DateOfBirth": {
          "format": "date-time",
          "type": "string"
        },
        "FirstName": {
          "type": "string"
        },
        "LastName": {
          "type": "string"
        },
        "Observations": {
          "type": "string"
        },
        "Percentage": {
          "format": "int32",
          "type": "integer"
        },
        "Relationship": {
          "$ref": "#/definitions/PolicyCenter.Api.Insured.Dtos.KeyValueDto"
        },
        "TaxId": {
          "type": "string"
        },
        "InsuredTaxId": {
          "type": "string"
        },
        "BeneficiaryType": {
          "type": "string"
        }
      }
    },
    "PolicyCenter.Api.Insured.Dtos.KeyValueDto": {
      "type": "object",
      "properties": {
        "Code": {
          "type": "string"
        },
        "Description": {
          "type": "string"
        }
      }
    },
    "B2BApp.Entities.Issue.IssueAtm": {
      "type": "object",
      "properties": {
        "QuoteId": {
          "type": "string"
        },
        "PaymentInfo": {
          "$ref": "#/definitions/B2BApp.Entities.Issue.PaymentInfo"
        },
        "ATMRiskInfo": {
          "$ref": "#/definitions/B2BApp.Entities.Issue.AtmRiskInfo"
        },
        "InsuredData": {
          "$ref": "#/definitions/B2BApp.Entities.Issue.InsuredData"
        },
        "IssueData": {
          "$ref": "#/definitions/B2BApp.Entities.Issue.IssueData"
        },
        "PepData": {
          "$ref": "#/definitions/B2BApp.Entities.Issue.PepData"
        }
      }
    },
    "B2BApp.Entities.Issue.AtmRiskInfo": {
      "type": "object",
      "properties": {
        "Address": {
          "$ref": "#/definitions/B2BApp.Entities.Job.Address"
        }
      }
    },
    "B2BApp.Entities.Issue.IssueLifeIndividualRequest": {
      "type": "object",
      "properties": {
        "QuoteId": {
          "type": "string"
        },
        "PaymentInfo": {
          "$ref": "#/definitions/B2BApp.Entities.Issue.PaymentInfo"
        },
        "LifeRiskInfo": {
          "$ref": "#/definitions/B2BApp.Entities.Issue.LifeIndividualRiskInfo"
        },
        "InsuredData": {
          "$ref": "#/definitions/B2BApp.Entities.Issue.InsuredData"
        },
        "IssueData": {
          "$ref": "#/definitions/B2BApp.Entities.Issue.IssueData"
        },
        "PepData": {
          "$ref": "#/definitions/B2BApp.Entities.Issue.PepData"
        }
      }
    },
    "B2BApp.Entities.Issue.LifeIndividualRiskInfo": {
      "type": "object",
      "properties": {
        "Beneficiaries": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/B2BApp.Entities.Issue.Beneficiaries"
          }
        }
      }
    },
    "B2BApp.Entities.Issue.IssueSubmissionRequest": {
      "type": "object",
      "properties": {
        "PolicyPeriodId": {
          "type": "string"
        },
        "CBU": {
          "type": "string"
        },
        "CreditCardNumber": {
          "type": "string"
        },
        "PaymentEntity": {
          "$ref": "#/definitions/B2BApp.Entities.Payment.PaymentEntity"
        },
        "AdditionalDataBankRequest": {
          "$ref": "#/definitions/B2BApp.Entities.Vehicle.AdditionalDataBankRequest"
        },
        "PreSubmissionRequest": {
          "$ref": "#/definitions/B2BApp.Entities.Issue.PreSubmissionRequest"
        },
        "Address": {
          "$ref": "#/definitions/B2BApp.Entities.Common.Address"
        },
        "Bulk": {
          "type": "boolean"
        },
        "TrackingPAS": {
          "type": "string"
        },
        "Beneficiaries": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/B2BApp.Entities.Quoted.BeneficiaryDto"
          }
        },
        "BeneficiaryType": {
          "type": "string"
        },
        "Email": {
          "type": "string"
        },
        "IsInDraft": {
          "description": "Propiedad utilizada para el proceso de emision y verificar si la póliza está en \r\nestado borrador.",
          "type": "boolean"
        },
        "JobNumber": {
          "type": "string",
          "readOnly": true
        },
        "BranchNumber": {
          "format": "int32",
          "type": "integer",
          "readOnly": true
        },
        "WarningsThrowException": {
          "type": "boolean",
          "readOnly": true
        },
        "FotosTecnored": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/B2BApp.Entities.Issue.FotosTecnoredRequest"
          },
          "readOnly": true
        },
        "PepData": {
          "$ref": "#/definitions/B2BApp.Entities.Issue.PepData"
        },
        "UIfObligated": {
          "type": "boolean"
        }
      }
    },
    "B2BApp.Entities.Payment.PaymentEntity": {
      "type": "object",
      "properties": {
        "Code": {
          "type": "string"
        },
        "Description": {
          "type": "string"
        }
      }
    },
    "B2BApp.Entities.Vehicle.AdditionalDataBankRequest": {
      "type": "object",
      "properties": {
        "PolicyPeriodId": {
          "type": "string"
        },
        "VehiclePublicId": {
          "type": "string"
        },
        "AdditionalDataBank": {
          "$ref": "#/definitions/B2BApp.Entities.Vehicle.AdditionalDataBank"
        }
      }
    },
    "B2BApp.Entities.Issue.PreSubmissionRequest": {
      "type": "object",
      "properties": {
        "Location": {
          "$ref": "#/definitions/B2BApp.Entities.Location.Location"
        },
        "PolicyPeriodId": {
          "type": "string"
        }
      }
    },
    "B2BApp.Entities.Quoted.BeneficiaryDto": {
      "type": "object",
      "properties": {
        "DateOfBirth": {
          "format": "date-time",
          "type": "string"
        },
        "FirstName": {
          "type": "string"
        },
        "LastName": {
          "type": "string"
        },
        "Observations": {
          "type": "string"
        },
        "Percentage": {
          "format": "int32",
          "type": "integer"
        },
        "PublicId": {
          "type": "string"
        },
        "Relationship": {
          "$ref": "#/definitions/B2BApp.Entities.Common.TypeKey"
        },
        "TaxId": {
          "type": "string"
        }
      }
    },
    "B2BApp.Entities.Location.Location": {
      "type": "object",
      "properties": {
        "AdditionalInterestContacts": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/B2BApp.Entities.Location.AdditionalInterestContact"
          }
        },
        "Address": {
          "$ref": "#/definitions/B2BApp.Entities.Common.Address"
        },
        "Buildings": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/B2BApp.Entities.Building.Building"
          }
        },
        "Coverages": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/B2BApp.Entities.Coverage.Coverage"
          }
        },
        "Crops": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/B2BApp.Entities.Location.Crop"
          }
        },
        "LocationNote": {
          "type": "string"
        },
        "PublicId": {
          "type": "string"
        },
        "SpecificRisks": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/B2BApp.Entities.SpecifictRisk.SpecificRisk"
          }
        }
      }
    },
    "B2BApp.Entities.Location.AdditionalInterestContact": {
      "type": "object",
      "properties": {
        "AditionalInterestType": {
          "$ref": "#/definitions/B2BApp.Entities.Common.AditionalInterestType"
        },
        "Contact": {
          "$ref": "#/definitions/B2BApp.Entities.Common.Contact"
        },
        "ContractNumber": {
          "type": "string"
        },
        "IsCertRequired": {
          "type": "boolean"
        },
        "Name": {
          "type": "string"
        },
        "PublicID": {
          "type": "string"
        }
      }
    },
    "B2BApp.Entities.Building.Building": {
      "type": "object",
      "properties": {
        "Actividad": {
          "$ref": "#/definitions/B2BApp.Entities.Common.TypeKey"
        },
        "AdditionalCoverages": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/B2BApp.Entities.Coverage.Coverage"
          }
        },
        "AlarmaConMonitoreo": {
          "type": "boolean"
        },
        "AñoConstruccion": {
          "format": "int32",
          "type": "integer"
        },
        "BuildingNumber": {
          "format": "int32",
          "type": "integer"
        },
        "BusinessIncomes": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/B2BApp.Entities.Common.BusinessIncome"
          }
        },
        "CantidadAscensores": {
          "format": "int32",
          "type": "integer"
        },
        "CantidadPlantas": {
          "format": "int32",
          "type": "integer"
        },
        "CerradurasDoblePaleta": {
          "type": "boolean"
        },
        "Conditions": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/B2BApp.Entities.Coverage.Coverage"
          }
        },
        "Coverages": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/B2BApp.Entities.Coverage.Coverage"
          }
        },
        "Description": {
          "type": "string"
        },
        "DeteccionHumoCalor": {
          "type": "boolean"
        },
        "Exclusions": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/B2BApp.Entities.Coverage.Coverage"
          }
        },
        "FechaInspeccion": {
          "format": "date-time",
          "type": "string"
        },
        "Inspector": {
          "type": "string"
        },
        "InstalacionElectrica": {
          "$ref": "#/definitions/B2BApp.Entities.Common.TypeKey"
        },
        "LinderosBaldios": {
          "type": "boolean"
        },
        "MatrizRiesgo": {
          "type": "string"
        },
        "MetrosCuadrados": {
          "format": "double",
          "type": "number"
        },
        "NegocioEnComunicacionConLaVivienda": {
          "type": "boolean"
        },
        "Observaciones": {
          "type": "string"
        },
        "Occupancies": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/B2BApp.Entities.Occupancy.Occupancy"
          }
        },
        "PorcenPML": {
          "format": "double",
          "type": "number"
        },
        "PublicID": {
          "type": "string"
        },
        "RedHidrantes": {
          "type": "boolean"
        },
        "RejasEnAberturas": {
          "type": "boolean"
        },
        "Rociadores": {
          "type": "boolean"
        },
        "TipoConstruccion": {
          "$ref": "#/definitions/B2BApp.Entities.Common.TypeKey"
        },
        "TipoVivienda": {
          "$ref": "#/definitions/B2BApp.Entities.Common.TypeKey"
        },
        "UsoDelEdificio": {
          "$ref": "#/definitions/B2BApp.Entities.Common.TypeKey"
        }
      }
    },
    "B2BApp.Entities.Location.Crop": {
      "type": "object",
      "properties": {
        "ActivationThreshold": {
          "$ref": "#/definitions/B2BApp.Entities.Common.TypeKey"
        },
        "AdditionalCoverages": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/B2BApp.Entities.Coverage.Coverage"
          }
        },
        "AdditionalInterestContacts": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/B2BApp.Entities.Location.AdditionalInterestContact"
          }
        },
        "Address": {
          "$ref": "#/definitions/B2BApp.Entities.Common.Address"
        },
        "AverageWeight": {
          "format": "double",
          "type": "number"
        },
        "ClassCode": {
          "$ref": "#/definitions/B2BApp.Entities.Common.TypeKey"
        },
        "ClientInvestmentHa": {
          "format": "double",
          "type": "number"
        },
        "ClientInvestmentTotal": {
          "format": "double",
          "type": "number"
        },
        "ComplementaryIrrigation": {
          "type": "boolean"
        },
        "Coordinates": {
          "$ref": "#/definitions/B2BApp.Entities.Location.Coordinates"
        },
        "Coverages": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/B2BApp.Entities.Coverage.Coverage"
          }
        },
        "CropQuote": {
          "format": "double",
          "type": "number"
        },
        "CropQuoteFinal": {
          "format": "double",
          "type": "number"
        },
        "CropType": {
          "type": "string"
        },
        "Description": {
          "type": "string"
        },
        "ExpectedPerformance": {
          "format": "double",
          "type": "number"
        },
        "FinalWeight": {
          "format": "double",
          "type": "number"
        },
        "GenderType": {
          "$ref": "#/definitions/B2BApp.Entities.Common.TypeKey"
        },
        "Head": {
          "format": "int32",
          "type": "integer"
        },
        "InsuredAmount": {
          "format": "double",
          "type": "number"
        },
        "InsuredAmountLoteQQ": {
          "format": "double",
          "type": "number"
        },
        "InsuredSuface": {
          "format": "double",
          "type": "number"
        },
        "InsuredSurface": {
          "format": "double",
          "type": "number"
        },
        "InvestmentHa": {
          "format": "double",
          "type": "number"
        },
        "InvestmentLote": {
          "format": "double",
          "type": "number"
        },
        "LivestockActivity": {
          "$ref": "#/definitions/B2BApp.Entities.Common.TypeKey"
        },
        "LivestockAge": {
          "format": "int32",
          "type": "integer"
        },
        "LivestockCategory": {
          "$ref": "#/definitions/B2BApp.Entities.Common.TypeKey"
        },
        "LivestockName": {
          "type": "string"
        },
        "LotName": {
          "type": "string"
        },
        "Observations": {
          "type": "string"
        },
        "OutputRate": {
          "$ref": "#/definitions/B2BApp.Entities.Common.TypeKey"
        },
        "Participation": {
          "format": "double",
          "type": "number"
        },
        "Pedigree": {
          "type": "boolean"
        },
        "Performance": {
          "format": "double",
          "type": "number"
        },
        "PeriodEnd": {
          "format": "date-time",
          "type": "string"
        },
        "PublicId": {
          "type": "string"
        },
        "QQHa": {
          "format": "double",
          "type": "number"
        },
        "RatingEffDate": {
          "format": "date-time",
          "type": "string"
        },
        "RatingEndDate": {
          "format": "date-time",
          "type": "string"
        },
        "Raza": {
          "type": "string"
        },
        "RiskArea": {
          "$ref": "#/definitions/B2BApp.Entities.Common.TypeKey"
        },
        "RiskZone": {
          "type": "string"
        },
        "RodeoCategory": {
          "type": "string"
        },
        "Seedtime": {
          "format": "date-time",
          "type": "string"
        },
        "SpecialClassNumber": {
          "format": "int32",
          "type": "integer"
        },
        "StartingWeight": {
          "format": "double",
          "type": "number"
        },
        "TillageType": {
          "$ref": "#/definitions/B2BApp.Entities.Common.TypeKey"
        },
        "VarietyHybrid": {
          "type": "string"
        }
      }
    },
    "B2BApp.Entities.SpecifictRisk.SpecificRisk": {
      "type": "object",
      "properties": {
        "AdditionalCoverages": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/B2BApp.Entities.Coverage.Coverage"
          }
        },
        "BusinessIncomes": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/B2BApp.Entities.Common.BusinessIncome"
          }
        },
        "AssociatedBlanket": {
          "$ref": "#/definitions/B2BApp.Entities.Common.Blanket"
        },
        "ClassCode": {
          "$ref": "#/definitions/B2BApp.Entities.Common.TypeKey"
        },
        "Conditions": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/B2BApp.Entities.Coverage.Coverage"
          }
        },
        "Coverages": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/B2BApp.Entities.Coverage.Coverage"
          }
        },
        "Description": {
          "type": "string"
        },
        "ElecInst": {
          "$ref": "#/definitions/B2BApp.Entities.Common.TypeKey"
        },
        "Exclusions": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/B2BApp.Entities.Coverage.Coverage"
          }
        },
        "ExplProofElectInst": {
          "type": "boolean"
        },
        "Ext_CP7SpecClassCodeType": {
          "$ref": "#/definitions/B2BApp.Entities.Common.TypeKey"
        },
        "HydrantNetwork": {
          "type": "boolean"
        },
        "IncludedInBlkt": {
          "type": "string"
        },
        "PreferredCoverageCurrency": {
          "type": "string"
        },
        "PublicID": {
          "type": "string"
        },
        "ScheduleCoverages": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/B2BApp.Entities.Coverage.Coverage"
          }
        },
        "SmokeHeatDetection": {
          "type": "boolean"
        },
        "SpecialClassLocation": {
          "type": "string"
        },
        "SpecialClassNumber": {
          "format": "int32",
          "type": "integer"
        },
        "Sprayers": {
          "type": "boolean"
        }
      }
    },
    "B2BApp.Entities.Common.AditionalInterestType": {
      "type": "object",
      "properties": {
        "Code": {
          "type": "string"
        },
        "Description": {
          "type": "string"
        }
      }
    },
    "B2BApp.Entities.Common.BusinessIncome": {
      "type": "object",
      "properties": {
        "AdditionalCoverages": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/B2BApp.Entities.Coverage.Coverage"
          }
        },
        "AdditionalInterestContacts": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/B2BApp.Entities.Common.Contact"
          }
        },
        "AnyWaterfrontProperty": {
          "type": "boolean"
        },
        "Conditions": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/B2BApp.Entities.Coverage.Coverage"
          }
        },
        "CoverageFrom": {
          "$ref": "#/definitions/B2BApp.Entities.Common.TypeKey"
        },
        "Coverages": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/B2BApp.Entities.Coverage.Coverage"
          }
        },
        "Exclusions": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/B2BApp.Entities.Coverage.Coverage"
          }
        },
        "PublicID": {
          "type": "string"
        },
        "TypeOfRisk": {
          "type": "string"
        },
        "WatercraftExclBuybackConstr": {
          "$ref": "#/definitions/B2BApp.Entities.Common.TypeKey"
        },
        "CombinedTypeOfRiskEducation": {
          "type": "string"
        },
        "CombinedTypeOfRiskManufactu": {
          "type": "string"
        },
        "CombinedTypeOfRiskMercantil": {
          "type": "string"
        },
        "CombinedTypeOfRiskRentalPct": {
          "type": "string"
        }
      }
    },
    "B2BApp.Entities.Occupancy.Occupancy": {
      "type": "object",
      "properties": {
        "Description": {
          "type": "string"
        },
        "Number": {
          "format": "int32",
          "type": "integer"
        },
        "PersonalProperties": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/B2BApp.Entities.PersonalProperty.PersonalProperty"
          }
        },
        "PublicID": {
          "type": "string"
        }
      }
    },
    "B2BApp.Entities.Location.Coordinates": {
      "type": "object",
      "properties": {
        "Latitude": {
          "format": "double",
          "type": "number"
        },
        "Longitude": {
          "format": "double",
          "type": "number"
        }
      }
    },
    "B2BApp.Entities.Common.Blanket": {
      "type": "object",
      "properties": {
        "BlanketCovType": {
          "$ref": "#/definitions/B2BApp.Entities.Common.TypeKey"
        },
        "Description": {
          "type": "string"
        },
        "PublicID": {
          "type": "string"
        },
        "BlanketNumber": {
          "format": "int32",
          "type": "integer"
        },
        "CoverageType": {
          "type": "string"
        },
        "Coverages": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/B2BApp.Entities.Coverage.Coverage"
          }
        },
        "Risks": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/B2BApp.Entities.Common.Risk"
          }
        }
      }
    },
    "B2BApp.Entities.PersonalProperty.PersonalProperty": {
      "type": "object",
      "properties": {
        "AssociatedBlanket": {
          "$ref": "#/definitions/B2BApp.Entities.Common.Blanket"
        },
        "AdditionalCoverages": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/B2BApp.Entities.Coverage.Coverage"
          }
        },
        "CoverageType": {
          "$ref": "#/definitions/B2BApp.Entities.Common.TypeKey"
        },
        "Coverages": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/B2BApp.Entities.Coverage.Coverage"
          }
        },
        "DecGoodsSupplies": {
          "type": "boolean"
        },
        "Limit": {
          "format": "double",
          "type": "number"
        },
        "PublicID": {
          "type": "string"
        },
        "ScheduledCoverages": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/B2BApp.Entities.Coverage.Coverage"
          }
        }
      }
    },
    "B2BApp.Entities.Common.Risk": {
      "type": "object",
      "properties": {
        "AverageWeightAmount": {
          "format": "double",
          "type": "number"
        },
        "AverageWeightAmountSpecified": {
          "type": "boolean"
        },
        "Building": {
          "type": "string"
        },
        "Coverage": {
          "type": "string"
        },
        "CoverageType": {
          "type": "string"
        },
        "FullValue": {
          "format": "double",
          "type": "number"
        },
        "FullValueSpecified": {
          "type": "boolean"
        },
        "Location": {
          "type": "string"
        },
        "OccupancyClass": {
          "type": "string"
        }
      }
    },
    "B2BApp.Entities.Padron.GetCuilsByDniResponse": {
      "type": "object",
      "properties": {
        "Personas": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/B2BApp.Entities.Padron.PersonaSummaryDto"
          }
        }
      }
    },
    "B2BApp.Entities.Padron.PersonaSummaryDto": {
      "type": "object",
      "properties": {
        "Nombre": {
          "type": "string"
        },
        "Apellido": {
          "type": "string"
        },
        "Genero": {
          "type": "string"
        },
        "CUIT": {
          "type": "string"
        },
        "RazonSocial": {
          "type": "string"
        }
      }
    },
    "B2BApp.Entities.Common.MonetaryAmount": {
      "type": "object",
      "properties": {
        "Amount": {
          "format": "double",
          "type": "number"
        },
        "Currency": {
          "type": "string"
        },
        "Description": {
          "type": "string"
        }
      }
    },
    "B2BApp.Entities.Vehicle.Vehicle": {
      "type": "object",
      "properties": {
        "Accesories": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/B2BApp.Entities.Vehicle.Accesory"
          }
        },
        "AdditionalFuelType": {
          "$ref": "#/definitions/B2BApp.Entities.Vehicle.FuelType"
        },
        "AdditionalInterestContacts": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/B2BApp.Entities.Vehicle.AdditionalInterestContact"
          }
        },
        "AutomaticAdjust": {
          "$ref": "#/definitions/B2BApp.Entities.Vehicle.AutomaticAdjust"
        },
        "BonusMalus": {
          "$ref": "#/definitions/B2BApp.Entities.Vehicle.BonusMalus"
        },
        "BrandCode": {
          "format": "int32",
          "type": "integer"
        },
        "BrandName": {
          "type": "string"
        },
        "CNRT": {
          "type": "string"
        },
        "Category": {
          "$ref": "#/definitions/B2BApp.Entities.Common.Category"
        },
        "Census": {
          "type": "string"
        },
        "CertificateDateGeneration": {
          "type": "string"
        },
        "CertificateNumber": {
          "type": "string"
        },
        "Color": {
          "$ref": "#/definitions/B2BApp.Entities.Vehicle.Color"
        },
        "DeductibleValueDescription": {
          "type": "string"
        },
        "EngineNumber": {
          "type": "string"
        },
        "FuelType": {
          "$ref": "#/definitions/B2BApp.Entities.Vehicle.FuelType"
        },
        "GPSProvider": {
          "$ref": "#/definitions/B2BApp.Entities.Vehicle.GPSProvider"
        },
        "HasClaimComputableForBonusMalus": {
          "type": "boolean"
        },
        "HasGPS": {
          "type": "boolean"
        },
        "HasInspections": {
          "type": "boolean"
        },
        "InfoAutoCode": {
          "type": "string"
        },
        "Is0Km": {
          "type": "boolean"
        },
        "IsPatentedAtArg": {
          "type": "boolean"
        },
        "IsTruck10TT100KM": {
          "type": "boolean"
        },
        "Jurisdiction": {
          "$ref": "#/definitions/B2BApp.Entities.Vehicle.Jurisdiction"
        },
        "LessorName": {
          "type": "string"
        },
        "LicensePlate": {
          "type": "string"
        },
        "LienName": {
          "type": "string"
        },
        "ModelCode": {
          "format": "int32",
          "type": "integer"
        },
        "ModelName": {
          "type": "string"
        },
        "OriginCountry": {
          "$ref": "#/definitions/B2BApp.Entities.Vehicle.OriginCountry"
        },
        "OriginalCostNew": {
          "format": "double",
          "type": "number"
        },
        "OtherBrandName": {
          "type": "string"
        },
        "OtherModelName": {
          "type": "string"
        },
        "OtherVersionName": {
          "type": "string"
        },
        "PolicyOwnerIsInsured": {
          "type": "boolean"
        },
        "PrimaryNamedInsured": {
          "type": "string"
        },
        "ProductOffering": {
          "$ref": "#/definitions/B2BApp.Entities.Common.ProductOffering"
        },
        "PublicId": {
          "type": "string"
        },
        "ROUTE": {
          "type": "string"
        },
        "RiskLocation": {
          "$ref": "#/definitions/B2BApp.Entities.Vehicle.Location"
        },
        "ServiceType": {
          "$ref": "#/definitions/B2BApp.Entities.Vehicle.ServiceType"
        },
        "StatedAmount": {
          "format": "double",
          "type": "number"
        },
        "TargetPremium": {
          "format": "double",
          "type": "number"
        },
        "TargetPremiumAfterTax": {
          "format": "double",
          "type": "number"
        },
        "Usage": {
          "$ref": "#/definitions/B2BApp.Entities.Vehicle.Usage"
        },
        "VIN": {
          "type": "string"
        },
        "VTVExpirationDate": {
          "format": "date-time",
          "type": "string"
        },
        "VehicleNumber": {
          "format": "int32",
          "type": "integer"
        },
        "VersionCode": {
          "format": "int32",
          "type": "integer"
        },
        "VersionName": {
          "type": "string"
        },
        "Year": {
          "format": "int32",
          "type": "integer"
        },
        "CodigoInfoAuto": {
          "format": "int32",
          "type": "integer"
        }
      }
    },
    "B2BApp.Entities.Vehicle.Accesory": {
      "type": "object",
      "properties": {
        "AccesoryType": {
          "$ref": "#/definitions/B2BApp.Entities.Vehicle.AccesoryType"
        },
        "Brand": {
          "type": "string"
        },
        "InsuredAmountCost": {
          "$ref": "#/definitions/B2BApp.Entities.Common.MonetaryAmount"
        },
        "Model": {
          "type": "string"
        },
        "OtherAccesoryTypeName": {
          "type": "string"
        },
        "PublicID": {
          "type": "string"
        },
        "SerieNumber": {
          "type": "string"
        }
      }
    },
    "B2BApp.Entities.Vehicle.FuelType": {
      "type": "object",
      "properties": {
        "Code": {
          "type": "string"
        },
        "Description": {
          "type": "string"
        }
      }
    },
    "B2BApp.Entities.Vehicle.AdditionalInterestContact": {
      "type": "object",
      "properties": {
        "AdditionalInterestType": {
          "$ref": "#/definitions/B2BApp.Entities.Vehicle.AdditionalInterestType"
        },
        "Contact": {
          "$ref": "#/definitions/B2BApp.Entities.Common.Contact"
        },
        "ContractNumber": {
          "type": "string"
        },
        "IsCertRequired": {
          "type": "boolean"
        },
        "Name": {
          "type": "string"
        },
        "PublicID": {
          "type": "string"
        }
      }
    },
    "B2BApp.Entities.Vehicle.AutomaticAdjust": {
      "type": "object",
      "properties": {
        "Code": {
          "type": "string"
        },
        "Description": {
          "type": "string"
        }
      }
    },
    "B2BApp.Entities.Vehicle.BonusMalus": {
      "type": "object",
      "properties": {
        "Code": {
          "type": "string"
        },
        "Description": {
          "type": "string"
        }
      }
    },
    "B2BApp.Entities.Common.Category": {
      "type": "object",
      "properties": {
        "Code": {
          "type": "string"
        },
        "Description": {
          "type": "string"
        }
      }
    },
    "B2BApp.Entities.Vehicle.Color": {
      "type": "object",
      "properties": {
        "Code": {
          "type": "string"
        },
        "Description": {
          "type": "string"
        }
      }
    },
    "B2BApp.Entities.Vehicle.GPSProvider": {
      "type": "object",
      "properties": {
        "Code": {
          "type": "string"
        },
        "Description": {
          "type": "string"
        }
      }
    },
    "B2BApp.Entities.Vehicle.Jurisdiction": {
      "type": "object",
      "properties": {
        "Code": {
          "type": "string"
        },
        "Description": {
          "type": "string"
        }
      }
    },
    "B2BApp.Entities.Vehicle.OriginCountry": {
      "type": "object",
      "properties": {
        "Code": {
          "type": "string"
        },
        "Description": {
          "type": "string"
        }
      }
    },
    "B2BApp.Entities.Common.ProductOffering": {
      "type": "object",
      "properties": {
        "Code": {
          "type": "string"
        },
        "Description": {
          "type": "string"
        }
      }
    },
    "B2BApp.Entities.Vehicle.Location": {
      "type": "object",
      "properties": {
        "Block": {
          "type": "string"
        },
        "City": {
          "type": "string"
        },
        "Country": {
          "$ref": "#/definitions/B2BApp.Entities.Common.Country"
        },
        "Department": {
          "type": "string"
        },
        "DisplayName": {
          "type": "string"
        },
        "Floor": {
          "type": "string"
        },
        "LocationCode": {
          "type": "string"
        },
        "LocationName": {
          "type": "string"
        },
        "Phone": {
          "type": "string"
        },
        "PhoneCountry": {
          "$ref": "#/definitions/B2BApp.Entities.Vehicle.PhoneCountry"
        },
        "PostalCode": {
          "type": "string"
        },
        "PublicID": {
          "type": "string"
        },
        "State": {
          "$ref": "#/definitions/B2BApp.Entities.Common.State"
        },
        "Street": {
          "type": "string"
        },
        "StreetNumber": {
          "type": "string"
        },
        "Type": {
          "$ref": "#/definitions/B2BApp.Entities.Vehicle.LocationType"
        },
        "policyPeriodID": {
          "type": "string"
        },
        "vehiclePublicID": {
          "type": "string"
        }
      }
    },
    "B2BApp.Entities.Vehicle.ServiceType": {
      "type": "object",
      "properties": {
        "Code": {
          "type": "string"
        },
        "Description": {
          "type": "string"
        }
      }
    },
    "B2BApp.Entities.Vehicle.Usage": {
      "type": "object",
      "properties": {
        "Code": {
          "type": "string"
        },
        "Description": {
          "type": "string"
        }
      }
    },
    "B2BApp.Entities.Vehicle.AccesoryType": {
      "type": "object",
      "properties": {
        "Code": {
          "type": "string"
        },
        "Description": {
          "type": "string"
        }
      }
    },
    "B2BApp.Entities.Vehicle.AdditionalInterestType": {
      "type": "object",
      "properties": {
        "Code": {
          "type": "string"
        },
        "Description": {
          "type": "string"
        }
      }
    },
    "B2BApp.Entities.Vehicle.PhoneCountry": {
      "type": "object",
      "properties": {
        "Code": {
          "type": "string"
        },
        "Description": {
          "type": "string"
        }
      }
    },
    "B2BApp.Entities.Vehicle.LocationType": {
      "type": "object",
      "properties": {
        "Code": {
          "type": "string"
        },
        "Description": {
          "type": "string"
        }
      }
    },
    "B2BApp.Entities.PolicyInfo.PolicyTerm": {
      "type": "object",
      "properties": {
        "Description": {
          "type": "string"
        },
        "IdentificationCode": {
          "type": "string"
        },
        "Selected": {
          "type": "boolean"
        }
      }
    },
    "B2BApp.Entities.OperationResultEstadosPorPais": {
      "type": "object",
      "properties": {
        "CodigoValorDTO": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/B2BApp.Entities.CodigoValorDTO"
          }
        },
        "HasError": {
          "type": "boolean"
        },
        "HasWarning": {
          "type": "boolean"
        },
        "HasInformation": {
          "type": "boolean"
        },
        "Messages": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/PortalPAS.BE.LIB.Common.Entities.Message"
          }
        }
      }
    },
    "B2BApp.Entities.CodigoValorDTO": {
      "type": "object",
      "properties": {
        "Codigo": {
          "type": "string"
        },
        "Valor": {
          "type": "string"
        }
      }
    },
    "B2BApp.Entities.OperationResultCiudadesPorEstado": {
      "type": "object",
      "properties": {
        "Ciudades": {
          "type": "array",
          "items": {
            "type": "string"
          }
        },
        "HasError": {
          "type": "boolean"
        },
        "HasWarning": {
          "type": "boolean"
        },
        "HasInformation": {
          "type": "boolean"
        },
        "Messages": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/PortalPAS.BE.LIB.Common.Entities.Message"
          }
        }
      }
    },
    "B2BApp.Entities.ServicioPostal.OperationResultCiudades": {
      "type": "object",
      "properties": {
        "CodigoValorDTO": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/B2BApp.Entities.CodigoValorDTO"
          }
        },
        "HasError": {
          "type": "boolean"
        },
        "HasWarning": {
          "type": "boolean"
        },
        "HasInformation": {
          "type": "boolean"
        },
        "Messages": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/PortalPAS.BE.LIB.Common.Entities.Message"
          }
        }
      }
    },
    "B2BApp.Entities.ProductModel.OperationResultQuestionVida": {
      "type": "object",
      "properties": {
        "Questions": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/B2BApp.Entities.ProductModel.Question"
          }
        },
        "HasError": {
          "type": "boolean"
        },
        "HasWarning": {
          "type": "boolean"
        },
        "HasInformation": {
          "type": "boolean"
        },
        "Messages": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/PortalPAS.BE.LIB.Common.Entities.Message"
          }
        }
      }
    },
    "B2BApp.Entities.ProductModel.Question": {
      "type": "object",
      "properties": {
        "CodeIdentifier": {
          "type": "string"
        },
        "QuestionAnswer": {
          "type": "string"
        },
        "QuestionType": {
          "type": "string"
        },
        "Text": {
          "type": "string"
        },
        "Required": {
          "type": "boolean"
        },
        "Choices": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/B2BApp.Entities.ProductModel.QuestionChoice"
          }
        },
        "Filters": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/B2BApp.Entities.ProductModel.QuestionFilter"
          }
        }
      }
    },
    "B2BApp.Entities.ProductModel.QuestionChoice": {
      "type": "object",
      "properties": {
        "CodeIdentifier": {
          "type": "string"
        },
        "DisplayName": {
          "type": "string"
        },
        "SelectedAsAnswer": {
          "type": "boolean"
        }
      }
    },
    "B2BApp.Entities.ProductModel.QuestionFilter": {
      "type": "object",
      "properties": {
        "Answer": {
          "type": "string"
        },
        "CodeIdentifier": {
          "type": "string"
        },
        "FilterQuestion": {
          "type": "string"
        }
      }
    },
    "B2BApp.Entities.Quoted.OperationResultSummaryDetail": {
      "type": "object",
      "properties": {
        "SummaryDetail": {
          "$ref": "#/definitions/B2BApp.Entities.Quoted.SummaryDetail"
        },
        "HasError": {
          "type": "boolean"
        },
        "HasWarning": {
          "type": "boolean"
        },
        "HasInformation": {
          "type": "boolean"
        },
        "Messages": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/PortalPAS.BE.LIB.Common.Entities.Message"
          }
        }
      }
    },
    "B2BApp.Entities.Quoted.SummaryDetail": {
      "type": "object",
      "properties": {
        "AddressDescription": {
          "type": "string"
        },
        "AddressType": {
          "$ref": "#/definitions/B2BApp.Entities.Common.AddressType"
        },
        "ChangeInCost": {
          "$ref": "#/definitions/B2BApp.Entities.Common.MonetaryAmount"
        },
        "CommissionBroker": {
          "$ref": "#/definitions/B2BApp.Entities.Common.MonetaryAmount"
        },
        "CommissionOrg": {
          "$ref": "#/definitions/B2BApp.Entities.Common.MonetaryAmount"
        },
        "CommissionProd": {
          "$ref": "#/definitions/B2BApp.Entities.Common.MonetaryAmount"
        },
        "EffectiveDate": {
          "format": "date-time",
          "type": "string"
        },
        "Error": {
          "type": "string"
        },
        "Insured": {
          "type": "string"
        },
        "JobNumberLabel": {
          "type": "string"
        },
        "JobRenewalNumber": {
          "type": "string"
        },
        "NetPremium": {
          "$ref": "#/definitions/B2BApp.Entities.Common.MonetaryAmount"
        },
        "OverrideCommissionBroker": {
          "$ref": "#/definitions/B2BApp.Entities.Common.MonetaryAmount"
        },
        "OverrideCommissionOrg": {
          "$ref": "#/definitions/B2BApp.Entities.Common.MonetaryAmount"
        },
        "OverrideCommissionProd": {
          "$ref": "#/definitions/B2BApp.Entities.Common.MonetaryAmount"
        },
        "PaymentDate": {
          "format": "date-time",
          "type": "string"
        },
        "PaymentFees": {
          "format": "int32",
          "type": "integer"
        },
        "PaymentMethod": {
          "$ref": "#/definitions/B2BApp.Entities.Common.TypeKey"
        },
        "PeriodEnd": {
          "format": "date-time",
          "type": "string"
        },
        "PeriodStart": {
          "format": "date-time",
          "type": "string"
        },
        "PolicyPeriodId": {
          "type": "string"
        },
        "PolicyTerm": {
          "$ref": "#/definitions/B2BApp.Entities.PolicyInfo.PolicyTerm"
        },
        "Taxes": {
          "$ref": "#/definitions/B2BApp.Entities.Common.MonetaryAmount"
        },
        "TotalCommission": {
          "$ref": "#/definitions/B2BApp.Entities.Common.MonetaryAmount"
        },
        "TotalCommissionOrg": {
          "$ref": "#/definitions/B2BApp.Entities.Common.MonetaryAmount"
        },
        "TotalCost": {
          "$ref": "#/definitions/B2BApp.Entities.Common.MonetaryAmount"
        },
        "TotalPremium": {
          "$ref": "#/definitions/B2BApp.Entities.Common.MonetaryAmount"
        },
        "TransactionDescription": {
          "type": "string"
        },
        "UWCompany": {
          "type": "string"
        },
        "Validity": {
          "type": "string"
        },
        "BranchNumber": {
          "format": "int32",
          "type": "integer"
        },
        "ProductOfferingCALine": {
          "type": "string"
        },
        "DeductibleType": {
          "type": "string"
        },
        "DirectDeductible": {
          "type": "string"
        },
        "DeductiblePercentage": {
          "type": "string"
        },
        "TelefonoFijo": {
          "type": "string"
        },
        "TelefonoCelular": {
          "type": "string"
        },
        "Email": {
          "type": "string"
        },
        "DireccionPapeleria": {
          "type": "string"
        },
        "InstallmentPlan": {
          "$ref": "#/definitions/PolicyCenter.Api.Payment.Dtos.InstallmentPlanDto"
        }
      }
    },
    "PolicyCenter.Api.Payment.Dtos.InstallmentPlanDto": {
      "type": "object",
      "properties": {
        "InstallmentPlanData": {
          "$ref": "#/definitions/PolicyCenter.Api.Payment.Dtos.InstallmentPlanDataDto"
        },
        "PaymentMethod": {
          "$ref": "#/definitions/PolicyCenter.Api.Payment.Dtos.PaymentMethodDto"
        },
        "Premium": {
          "$ref": "#/definitions/PolicyCenter.Api.Payment.Dtos.PremiumDto"
        }
      }
    },
    "PolicyCenter.Api.Payment.Dtos.InstallmentPlanDataDto": {
      "type": "object",
      "properties": {
        "Plans": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/PolicyCenter.Api.Payment.Dtos.PlanDto"
          }
        }
      }
    },
    "PolicyCenter.Api.Payment.Dtos.PaymentMethodDto": {
      "type": "object",
      "properties": {
        "Cbu": {
          "type": "string"
        },
        "CreditCardNumber": {
          "type": "string"
        },
        "PaymentMethod": {
          "$ref": "#/definitions/PolicyCenter.Api.Payment.Dtos.KeyValueDto"
        },
        "PaymentType": {
          "$ref": "#/definitions/PolicyCenter.Api.Payment.Dtos.KeyValueDto"
        },
        "PaymentEntity": {
          "$ref": "#/definitions/PolicyCenter.Api.Payment.Dtos.KeyValueDto"
        },
        "Collector": {
          "$ref": "#/definitions/PolicyCenter.Api.Payment.Dtos.KeyValueDto"
        },
        "SendCouponsBy": {
          "$ref": "#/definitions/PolicyCenter.Api.Payment.Dtos.KeyValueDto"
        }
      }
    },
    "PolicyCenter.Api.Payment.Dtos.PremiumDto": {
      "type": "object",
      "properties": {
        "ChangeInCost": {
          "$ref": "#/definitions/PolicyCenter.Api.Payment.Dtos.MonetaryAmountDto"
        },
        "InstallmentFees": {
          "$ref": "#/definitions/PolicyCenter.Api.Payment.Dtos.MonetaryAmountDto"
        },
        "TotalCost": {
          "$ref": "#/definitions/PolicyCenter.Api.Payment.Dtos.MonetaryAmountDto"
        },
        "TotalPremium": {
          "$ref": "#/definitions/PolicyCenter.Api.Payment.Dtos.MonetaryAmountDto"
        },
        "TotalTaxesSurcharges": {
          "$ref": "#/definitions/PolicyCenter.Api.Payment.Dtos.MonetaryAmountDto"
        }
      }
    },
    "PolicyCenter.Api.Payment.Dtos.PlanDto": {
      "type": "object",
      "properties": {
        "Active": {
          "type": "boolean"
        },
        "DownPayment": {
          "$ref": "#/definitions/PolicyCenter.Api.Payment.Dtos.MonetaryAmountDto"
        },
        "Id": {
          "type": "string"
        },
        "Installment": {
          "$ref": "#/definitions/PolicyCenter.Api.Payment.Dtos.MonetaryAmountDto"
        },
        "Name": {
          "type": "string"
        },
        "Note": {
          "type": "string"
        },
        "Total": {
          "$ref": "#/definitions/PolicyCenter.Api.Payment.Dtos.MonetaryAmountDto"
        }
      }
    },
    "PolicyCenter.Api.Payment.Dtos.KeyValueDto": {
      "type": "object",
      "properties": {
        "Code": {
          "type": "string"
        },
        "Description": {
          "type": "string"
        }
      }
    },
    "PolicyCenter.Api.Payment.Dtos.MonetaryAmountDto": {
      "type": "object",
      "properties": {
        "Amount": {
          "format": "double",
          "type": "number"
        },
        "Currency": {
          "type": "string"
        },
        "Description": {
          "type": "string"
        }
      }
    },
    "B2BApp.Entities.Quoted.CP7TemplateQuoteRequest": {
      "type": "object",
      "properties": {
        "OfficialIDType": {
          "type": "string"
        },
        "TaxID": {
          "type": "string"
        },
        "Genre": {
          "type": "string"
        },
        "ProducerCode": {
          "type": "string"
        },
        "PolicyTypeCode": {
          "type": "string"
        },
        "BasicPlanCode": {
          "type": "string"
        },
        "AdditionalPlanCode": {
          "type": "string"
        },
        "CP7CommercialActivity": {
          "type": "string"
        },
        "Payment": {
          "$ref": "#/definitions/B2BApp.Entities.Quoted.PaymentMethod"
        },
        "CurrencyCode": {
          "type": "string"
        },
        "StartDate": {
          "format": "date-time",
          "type": "string"
        },
        "EndDate": {
          "format": "date-time",
          "type": "string"
        },
        "PolicyTermCode": {
          "type": "string"
        },
        "CommercialAlternative": {
          "type": "string"
        },
        "PostalCodeRiskLocation": {
          "type": "string"
        },
        "State": {
          "type": "string"
        },
        "City": {
          "type": "string"
        },
        "Email": {
          "type": "string"
        },
        "PrimaryPhone": {
          "type": "string"
        },
        "HomePhone": {
          "type": "string"
        },
        "Address": {
          "$ref": "#/definitions/B2BApp.Entities.Account.Address"
        }
      }
    },
    "B2BApp.Entities.Quoted.PaymentMethod": {
      "type": "object",
      "properties": {
        "Fees": {
          "format": "int32",
          "type": "integer"
        },
        "Method": {
          "type": "string"
        }
      }
    },
    "B2BApp.Entities.Quoted.OperationResultQuoteCP7Template": {
      "type": "object",
      "properties": {
        "Cotizo": {
          "type": "boolean"
        },
        "PolicyPeriodId": {
          "type": "string"
        },
        "JobNumber": {
          "type": "string"
        },
        "Taxes": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/B2BApp.Entities.Quoted.Tax"
          }
        },
        "TotalCommission": {
          "$ref": "#/definitions/B2BApp.Entities.Common.MonetaryAmount"
        },
        "TotalCommissionOrg": {
          "$ref": "#/definitions/B2BApp.Entities.Common.MonetaryAmount"
        },
        "TotalCost": {
          "$ref": "#/definitions/B2BApp.Entities.Common.MonetaryAmount"
        },
        "TotalPremium": {
          "$ref": "#/definitions/B2BApp.Entities.Common.MonetaryAmount"
        },
        "HasError": {
          "type": "boolean"
        },
        "HasWarning": {
          "type": "boolean"
        },
        "HasInformation": {
          "type": "boolean"
        },
        "Messages": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/PortalPAS.BE.LIB.Common.Entities.Message"
          }
        }
      }
    },
    "B2BApp.Entities.Quoted.Tax": {
      "type": "object",
      "properties": {
        "Amount": {
          "$ref": "#/definitions/B2BApp.Entities.Common.MonetaryAmount"
        },
        "Basis": {
          "$ref": "#/definitions/B2BApp.Entities.Common.MonetaryAmount"
        },
        "Description": {
          "type": "string"
        }
      }
    },
    "B2BApp.Entities.Quoted.QuoteRequest": {
      "type": "object",
      "properties": {
        "Account": {
          "$ref": "#/definitions/B2BApp.Entities.Account.Account"
        },
        "StartDate": {
          "format": "date-time",
          "type": "string"
        },
        "PolicyTermCode": {
          "type": "string"
        },
        "PaymentFees": {
          "format": "int32",
          "type": "integer"
        },
        "PaymentMethodCode": {
          "type": "string"
        },
        "CurrencyCode": {
          "type": "string"
        },
        "Paquete": {
          "type": "string"
        },
        "OfferingCode": {
          "type": "string"
        },
        "ScopeCoverageCode": {
          "type": "string"
        },
        "OfferingPlanCode": {
          "type": "string"
        },
        "OccupationCode": {
          "type": "string"
        },
        "Questions": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/B2BApp.Entities.ProductModel.QuestionSet"
          }
        },
        "CapitalAsegurado": {
          "type": "string"
        },
        "Coverages": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/B2BApp.Entities.Coverage.Coverage"
          }
        }
      }
    },
    "B2BApp.Entities.ProductModel.QuestionSet": {
      "type": "object",
      "properties": {
        "PolicyPeriodId": {
          "type": "string"
        },
        "CodeIdentifier": {
          "type": "string"
        },
        "Name": {
          "type": "string"
        },
        "Questions": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/B2BApp.Entities.ProductModel.Question"
          }
        }
      }
    },
    "B2BApp.Entities.Quoted.CA7Quote": {
      "type": "object",
      "properties": {
        "InsuredData": {
          "$ref": "#/definitions/B2BApp.Entities.Quoted.InsuredData"
        },
        "PolicyData": {
          "$ref": "#/definitions/B2BApp.Entities.Quoted.PolicyData"
        },
        "VehicleData": {
          "$ref": "#/definitions/B2BApp.Entities.Quoted.VehicleData"
        }
      }
    },
    "B2BApp.Entities.Quoted.InsuredData": {
      "type": "object",
      "properties": {
        "AccountNumber": {
          "type": "string"
        },
        "OfficialIDType": {
          "type": "string"
        },
        "TaxID": {
          "type": "string"
        },
        "Gender": {
          "type": "string"
        },
        "Subtype": {
          "type": "string"
        },
        "ProducerCode": {
          "type": "string"
        },
        "Age": {
          "format": "int32",
          "type": "integer"
        },
        "UIFObligated": {
          "type": "boolean"
        }
      }
    },
    "B2BApp.Entities.Quoted.PolicyData": {
      "type": "object",
      "properties": {
        "StartDate": {
          "format": "date-time",
          "type": "string"
        },
        "PolicyTermCode": {
          "type": "string"
        },
        "PaymentMethodCode": {
          "type": "string"
        },
        "CurrencyCode": {
          "type": "string"
        },
        "PaymentFees": {
          "type": "string"
        },
        "CommercialAlternative": {
          "type": "string"
        },
        "AffinityGroupPublicId": {
          "type": "string"
        },
        "TypeOfContracting": {
          "type": "string"
        },
        "Product": {
          "type": "string"
        },
        "PolicyType": {
          "type": "string"
        },
        "LocationPostalCode": {
          "format": "int32",
          "type": "integer"
        },
        "LocationState": {
          "type": "string"
        }
      }
    },
    "B2BApp.Entities.Quoted.VehicleData": {
      "type": "object",
      "properties": {
        "Vehicle": {
          "$ref": "#/definitions/B2BApp.Entities.Quoted.VehicleInfo"
        },
        "Product": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/B2BApp.Entities.Quoted.Product"
          }
        }
      }
    },
    "B2BApp.Entities.Quoted.VehicleInfo": {
      "type": "object",
      "properties": {
        "AccesoryAmount": {
          "format": "double",
          "type": "number"
        },
        "AdditionalInterestTaxId": {
          "type": "string"
        },
        "AutomaticAdjust": {
          "format": "int32",
          "type": "integer"
        },
        "Category": {
          "type": "string"
        },
        "Color": {
          "type": "string"
        },
        "FuelType": {
          "type": "string"
        },
        "HasGNC": {
          "type": "boolean"
        },
        "HasGPS": {
          "type": "boolean"
        },
        "IdVehicle": {
          "format": "int32",
          "type": "integer"
        },
        "InfoautoCode": {
          "type": "string"
        },
        "Is0Km": {
          "type": "boolean"
        },
        "StatedAmount": {
          "format": "double",
          "type": "number"
        },
        "Usage": {
          "type": "string"
        },
        "Year": {
          "format": "int32",
          "type": "integer"
        },
        "IsNational": {
          "type": "boolean"
        },
        "RiskLocationPostalCode": {
          "format": "int32",
          "type": "integer"
        },
        "RiskLocationState": {
          "type": "string"
        }
      }
    },
    "B2BApp.Entities.Quoted.Product": {
      "type": "object",
      "properties": {
        "ProductCode": {
          "type": "string"
        }
      }
    },
    "B2BApp.Entities.Quoted.OperationResultSummaries": {
      "type": "object",
      "properties": {
        "Summaries": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/B2BApp.Entities.Quoted.SummaryResponse"
          }
        },
        "HasError": {
          "type": "boolean"
        },
        "HasWarning": {
          "type": "boolean"
        },
        "HasInformation": {
          "type": "boolean"
        },
        "Messages": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/PortalPAS.BE.LIB.Common.Entities.Message"
          }
        }
      }
    },
    "B2BApp.Entities.Quoted.SummaryResponse": {
      "type": "object",
      "properties": {
        "QuoteId": {
          "type": "string"
        },
        "TotalPremium": {
          "$ref": "#/definitions/B2BApp.Entities.Common.MonetaryAmount"
        },
        "TotalCost": {
          "$ref": "#/definitions/B2BApp.Entities.Common.MonetaryAmount"
        },
        "Taxes": {
          "$ref": "#/definitions/B2BApp.Entities.Common.MonetaryAmount"
        },
        "ProductOffering": {
          "type": "string"
        },
        "ProductCode": {
          "type": "string",
          "readOnly": true
        },
        "ProductCodeExtra": {
          "type": "string",
          "readOnly": true
        },
        "ReferenceCode": {
          "type": "string"
        },
        "DeductibleType": {
          "type": "string",
          "readOnly": true
        },
        "DeductibleValue": {
          "type": "string",
          "readOnly": true
        },
        "DeductibleTypeDescription": {
          "type": "string"
        },
        "DeductiblePercentage": {
          "type": "string"
        },
        "DirectDeductible": {
          "type": "string"
        },
        "DeductibleTypeFullDescription": {
          "type": "string",
          "readOnly": true
        }
      }
    },
    "PolicyCenter.Api.Submission.Dtos.Responses.QuotationSummaryResponse": {
      "type": "object",
      "properties": {
        "QuotationSummary": {
          "$ref": "#/definitions/PolicyCenter.Api.Submission.Dtos.QuotationSummaryDto"
        }
      }
    },
    "PolicyCenter.Api.Submission.Dtos.QuotationSummaryDto": {
      "type": "object",
      "properties": {
        "AddressDescription": {
          "type": "string"
        },
        "AddressType": {
          "$ref": "#/definitions/PolicyCenter.Api.Submission.Dtos.KeyValueDto"
        },
        "BranchNumber": {
          "format": "int32",
          "type": "integer"
        },
        "ChangeInCost": {
          "$ref": "#/definitions/PolicyCenter.Api.Submission.Dtos.MonetaryAmountDto"
        },
        "CommissionBroker": {
          "$ref": "#/definitions/PolicyCenter.Api.Submission.Dtos.MonetaryAmountDto"
        },
        "CommissionOrganizer": {
          "$ref": "#/definitions/PolicyCenter.Api.Submission.Dtos.MonetaryAmountDto"
        },
        "CommissionProducer": {
          "$ref": "#/definitions/PolicyCenter.Api.Submission.Dtos.MonetaryAmountDto"
        },
        "DeductiblePercentage": {
          "type": "string"
        },
        "DeductibleType": {
          "type": "string"
        },
        "DirectDeductible": {
          "type": "string"
        },
        "EffectiveDate": {
          "format": "date-time",
          "type": "string"
        },
        "Error": {
          "type": "string"
        },
        "Insured": {
          "type": "string"
        },
        "JobNumber": {
          "type": "string"
        },
        "PolicyNumber": {
          "type": "string"
        },
        "NetPremium": {
          "$ref": "#/definitions/PolicyCenter.Api.Submission.Dtos.MonetaryAmountDto"
        },
        "PolicyPeriodId": {
          "type": "string"
        },
        "ProductOfferingCALine": {
          "type": "string"
        },
        "ReferenceCode": {
          "type": "string"
        },
        "Taxes": {
          "$ref": "#/definitions/PolicyCenter.Api.Submission.Dtos.MonetaryAmountDto"
        },
        "TotalCommission": {
          "$ref": "#/definitions/PolicyCenter.Api.Submission.Dtos.MonetaryAmountDto"
        },
        "TotalCommissionOrganizer": {
          "$ref": "#/definitions/PolicyCenter.Api.Submission.Dtos.MonetaryAmountDto"
        },
        "TotalCost": {
          "$ref": "#/definitions/PolicyCenter.Api.Submission.Dtos.MonetaryAmountDto"
        },
        "TotalPremium": {
          "$ref": "#/definitions/PolicyCenter.Api.Submission.Dtos.MonetaryAmountDto"
        },
        "TransactionDescription": {
          "type": "string"
        },
        "UwCompany": {
          "type": "string"
        },
        "Validity": {
          "type": "string"
        }
      }
    },
    "PolicyCenter.Api.Submission.Dtos.KeyValueDto": {
      "type": "object",
      "properties": {
        "Code": {
          "type": "string"
        },
        "Description": {
          "type": "string"
        }
      }
    },
    "PolicyCenter.Api.Submission.Dtos.MonetaryAmountDto": {
      "type": "object",
      "properties": {
        "Amount": {
          "format": "double",
          "type": "number"
        },
        "Currency": {
          "type": "string"
        },
        "Description": {
          "type": "string"
        }
      }
    },
    "B2BApp.Entities.Quoted.AtmQuote": {
      "type": "object",
      "properties": {
        "InsuredData": {
          "$ref": "#/definitions/B2BApp.Entities.Quoted.InsuredData"
        },
        "PolicyData": {
          "$ref": "#/definitions/B2BApp.Entities.Quoted.PolicyData"
        },
        "AtmRiskData": {
          "$ref": "#/definitions/B2BApp.Entities.Quoted.AtmRiskData"
        }
      }
    },
    "B2BApp.Entities.Quoted.AtmRiskData": {
      "type": "object",
      "properties": {
        "Package": {
          "type": "string"
        },
        "RiskLocationPostalCode": {
          "type": "string"
        },
        "RiskLocationState": {
          "type": "string"
        }
      }
    },
    "B2BApp.Entities.Quoted.LifeQuote": {
      "type": "object",
      "properties": {
        "InsuredData": {
          "$ref": "#/definitions/B2BApp.Entities.Quoted.InsuredData"
        },
        "PolicyData": {
          "$ref": "#/definitions/B2BApp.Entities.Quoted.PolicyData"
        },
        "LifeRiskData": {
          "$ref": "#/definitions/B2BApp.Entities.Quoted.LifeRiskData"
        }
      }
    },
    "B2BApp.Entities.Quoted.LifeRiskData": {
      "type": "object",
      "properties": {
        "OfferingCode": {
          "type": "string"
        },
        "OccupationTypeCode": {
          "type": "string"
        },
        "BeneficiaryTypeCode": {
          "type": "string"
        },
        "LifeVICoverageData": {
          "$ref": "#/definitions/B2BApp.Entities.Quoted.LifeVICoverageData"
        }
      }
    },
    "B2BApp.Entities.Quoted.LifeVICoverageData": {
      "type": "object",
      "properties": {
        "Amount": {
          "type": "string"
        },
        "AHAdvanceCapitalInsuredByTerminalIllness1": {
          "type": "boolean"
        },
        "AHOrganTransplant1": {
          "type": "boolean"
        },
        "AHAdditionalCompensationByAccidentVI": {
          "type": "boolean"
        },
        "AHTotalPermanentDisability1": {
          "type": "boolean"
        },
        "AHDeathIllnessAccident1": {
          "type": "boolean"
        },
        "Questions": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/PolicyCenter.Api.Policy.Dtos.QuestionDto"
          }
        }
      }
    },
    "PolicyCenter.Api.Policy.Dtos.QuestionDto": {
      "type": "object",
      "properties": {
        "CodeIdentifier": {
          "type": "string"
        },
        "QuestionAnswer": {
          "type": "string"
        },
        "QuestionChoices": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/PolicyCenter.Api.Policy.Dtos.QuestionChoiceDto"
          }
        },
        "QuestionFilters": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/PolicyCenter.Api.Policy.Dtos.QuestionFilterDto"
          }
        },
        "QuestionType": {
          "type": "string"
        },
        "Required": {
          "type": "boolean"
        },
        "SupplementalTexts": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/PolicyCenter.Api.Policy.Dtos.SupplementalTextDto"
          }
        },
        "Text": {
          "type": "string"
        }
      }
    },
    "PolicyCenter.Api.Policy.Dtos.QuestionChoiceDto": {
      "type": "object",
      "properties": {
        "CodeIdentifier": {
          "type": "string"
        },
        "DisplayName": {
          "type": "string"
        },
        "SelectedAsAnswer": {
          "type": "boolean"
        }
      }
    },
    "PolicyCenter.Api.Policy.Dtos.QuestionFilterDto": {
      "type": "object",
      "properties": {
        "Answer": {
          "type": "string"
        },
        "CodeIdentifier": {
          "type": "string"
        },
        "FilterQuestion": {
          "type": "string"
        }
      }
    },
    "PolicyCenter.Api.Policy.Dtos.SupplementalTextDto": {
      "type": "object",
      "properties": {
        "Priority": {
          "format": "int32",
          "type": "integer"
        },
        "PublicId": {
          "type": "string"
        },
        "Text": {
          "type": "string"
        }
      }
    },
    "B2BApp.Entities.Quoted.AgriQuoteResponse": {
      "type": "object",
      "properties": {
        "PolicyPeriodId": {
          "type": "string"
        },
        "JobNumber": {
          "type": "string"
        },
        "TotalCost": {
          "$ref": "#/definitions/B2BApp.Entities.Common.MonetaryAmount"
        },
        "TotalPremium": {
          "$ref": "#/definitions/B2BApp.Entities.Common.MonetaryAmount"
        }
      }
    },
    "B2BApp.Entities.Quoted.AgriRequoteRequest": {
      "type": "object",
      "properties": {
        "PolicyPeriodId": {
          "type": "string"
        },
        "CommercialAlternative": {
          "format": "double",
          "type": "number"
        }
      }
    },
    "B2BGateway.Entities.Reportes.OperationResultReportes": {
      "description": "Operation Result para todos los reportes",
      "type": "object",
      "properties": {
        "Reporte": {
          "format": "byte",
          "description": "Contenido del OperationResult",
          "type": "string"
        },
        "HasError": {
          "type": "boolean"
        },
        "HasWarning": {
          "type": "boolean"
        },
        "HasInformation": {
          "type": "boolean"
        },
        "Messages": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/PortalPAS.BE.LIB.Common.Entities.Message"
          }
        }
      }
    },
    "B2BApp.Entities.RiskAnalysis.UnderwrittingIssuesResponse": {
      "type": "object",
      "properties": {
        "UnderwrittingIssues": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/B2BApp.Entities.RiskAnalysis.UnderwrittingIssueResponse"
          }
        }
      }
    },
    "B2BApp.Entities.RiskAnalysis.UnderwrittingIssueResponse": {
      "type": "object",
      "properties": {
        "BlockingPoint": {
          "$ref": "#/definitions/PolicyCenter.Api.Account.Dtos.KeyValueDto"
        },
        "Classification": {
          "$ref": "#/definitions/PolicyCenter.Api.Account.Dtos.KeyValueDto"
        },
        "Documentation": {
          "type": "string"
        },
        "IssueTypeCode": {
          "type": "string"
        },
        "LongDescription": {
          "type": "string"
        },
        "ShortDescription": {
          "type": "string"
        },
        "Status": {
          "$ref": "#/definitions/PolicyCenter.Api.Account.Dtos.KeyValueDto"
        }
      }
    },
    "B2BApp.Entities.Vehicle.OperationResultVehicle": {
      "type": "object",
      "properties": {
        "Vehicles": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/B2BApp.Entities.Vehicle.Vehicle"
          }
        },
        "HasError": {
          "type": "boolean"
        },
        "HasWarning": {
          "type": "boolean"
        },
        "HasInformation": {
          "type": "boolean"
        },
        "Messages": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/PortalPAS.BE.LIB.Common.Entities.Message"
          }
        }
      }
    },
    "B2BApp.Entities.Vehicle.OperationResultCertificateStatus": {
      "type": "object",
      "properties": {
        "CertificateStatus": {
          "$ref": "#/definitions/B2BApp.Entities.Vehicle.CertificateStatus"
        },
        "PolicyNumber": {
          "type": "string"
        },
        "HasError": {
          "type": "boolean"
        },
        "HasWarning": {
          "type": "boolean"
        },
        "HasInformation": {
          "type": "boolean"
        },
        "Messages": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/PortalPAS.BE.LIB.Common.Entities.Message"
          }
        }
      }
    },
    "B2BApp.Entities.Vehicle.CertificateStatus": {
      "type": "object",
      "properties": {
        "Code": {
          "type": "string"
        },
        "Description": {
          "type": "string"
        }
      }
    }
  },
  "securityDefinitions": {
    "Bearer": {
      "name": "Authorization",
      "in": "header",
      "type": "apiKey",
      "description": "Please, enter the word 'Bearer' in the field followed by a blank space and the JWT"
    }
  },
  "security": [
    {
      "Bearer": []
    }
  ]
}
