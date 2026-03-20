
  "openapi": "3.0.1",
  "info": {
    "title": "BrokerSeguros.Api",
    "version": "1.0"
  },
  "paths": {
    "/api/Atm/cotizar": {
      "post": {
        "tags": [
          "Atm"
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/AtmCotizacionRequestDto"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/AtmCotizacionRequestDto"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/AtmCotizacionRequestDto"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "OK"
          }
        }
      }
    },
    "/api/Atm/buscar-vehiculo": {
      "get": {
        "tags": [
          "Atm"
        ],
        "parameters": [
          {
            "name": "descripcion",
            "in": "query",
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "OK"
          }
        }
      }
    },
    "/api/Cotizacion/sancristobal/test": {
      "post": {
        "tags": [
          "Cotizacion"
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/CotizacionRequestDto"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/CotizacionRequestDto"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/CotizacionRequestDto"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "OK"
          }
        }
      }
    },
    "/api/Cotizacion/mercantilandina/test": {
      "post": {
        "tags": [
          "Cotizacion"
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/MercantilAndinaRequestDto"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/MercantilAndinaRequestDto"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/MercantilAndinaRequestDto"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "OK"
          }
        }
      }
    },
    "/api/MA/marcas": {
      "get": {
        "tags": [
          "MA"
        ],
        "responses": {
          "200": {
            "description": "OK"
          }
        }
      }
    },
    "/api/MA/modelos": {
      "get": {
        "tags": [
          "MA"
        ],
        "parameters": [
          {
            "name": "marca",
            "in": "query",
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "OK"
          }
        }
      }
    },
    "/api/MA/versiones": {
      "get": {
        "tags": [
          "MA"
        ],
        "parameters": [
          {
            "name": "marca",
            "in": "query",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "modelo",
            "in": "query",
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "OK"
          }
        }
      }
    },
    "/api/Rus/marcas/unidad/{tipoUnidad}": {
      "get": {
        "tags": [
          "Rus"
        ],
        "parameters": [
          {
            "name": "tipoUnidad",
            "in": "path",
            "required": true,
            "schema": {
              "type": "integer",
              "format": "int32"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "OK"
          }
        }
      }
    },
    "/api/Rus/marcas/interes/{tipoInteres}": {
      "get": {
        "tags": [
          "Rus"
        ],
        "parameters": [
          {
            "name": "tipoInteres",
            "in": "path",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "OK"
          }
        }
      }
    },
    "/api/Rus/marcas/modelos": {
      "get": {
        "tags": [
          "Rus"
        ],
        "parameters": [
          {
            "name": "idMarca",
            "in": "query",
            "schema": {
              "type": "integer",
              "format": "int32"
            }
          },
          {
            "name": "anio",
            "in": "query",
            "schema": {
              "type": "integer",
              "format": "int32"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "OK"
          }
        }
      }
    },
    "/api/Rus/marcas/{idModelo}/versiones": {
      "get": {
        "tags": [
          "Rus"
        ],
        "parameters": [
          {
            "name": "idModelo",
            "in": "path",
            "required": true,
            "schema": {
              "type": "integer",
              "format": "int32"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "OK"
          }
        }
      }
    },
    "/api/Rus/localidades/{cp}": {
      "get": {
        "tags": [
          "Rus"
        ],
        "parameters": [
          {
            "name": "cp",
            "in": "path",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "OK"
          }
        }
      }
    },
    "/api/Rus/Vigencias": {
      "get": {
        "tags": [
          "Rus"
        ],
        "responses": {
          "200": {
            "description": "OK"
          }
        }
      }
    },
    "/api/Rus/VersionToCodia": {
      "get": {
        "tags": [
          "Rus"
        ],
        "parameters": [
          {
            "name": "version",
            "in": "query",
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "OK"
          }
        }
      }
    },
    "/api/Rus": {
      "put": {
        "tags": [
          "Rus"
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/RusCotizacionRequestDto"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/RusCotizacionRequestDto"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/RusCotizacionRequestDto"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "OK"
          }
        }
      }
    }
  },
  "components": {
    "schemas": {
      "AccesorioRequestDto": {
        "type": "object",
        "properties": {
          "codigo": {
            "type": "integer",
            "format": "int32"
          },
          "valor": {
            "type": "number",
            "format": "double"
          }
        },
        "additionalProperties": false
      },
      "AtmCotizacionRequestDto": {
        "type": "object",
        "properties": {
          "marca": {
            "type": "string",
            "nullable": true
          },
          "modelo": {
            "type": "string",
            "nullable": true
          },
          "anioFab": {
            "type": "string",
            "nullable": true
          },
          "codPostal": {
            "type": "string",
            "nullable": true
          },
          "ceroKm": {
            "type": "string",
            "nullable": true
          },
          "alarma": {
            "type": "string",
            "nullable": true
          },
          "gnc": {
            "type": "string",
            "nullable": true
          }
        },
        "additionalProperties": false
      },
      "CotizacionRequestDto": {
        "type": "object",
        "properties": {
          "tipoPersona": {
            "type": "string",
            "nullable": true
          },
          "condicionIva": {
            "type": "string",
            "nullable": true
          },
          "cuponDescuento": {
            "type": "string",
            "nullable": true
          },
          "bonificacion": {
            "type": "integer",
            "format": "int32"
          },
          "seccion": {
            "type": "integer",
            "format": "int32"
          },
          "marcaId": {
            "type": "integer",
            "format": "int32"
          },
          "modeloId": {
            "type": "integer",
            "format": "int32"
          },
          "codInfoauto": {
            "type": "string",
            "nullable": true
          },
          "anioFabricacion": {
            "type": "integer",
            "format": "int32"
          },
          "esCeroKm": {
            "type": "boolean"
          },
          "sumaAsegurada": {
            "type": "number",
            "format": "double"
          },
          "codigoPostal": {
            "type": "string",
            "nullable": true
          },
          "subCp": {
            "type": "integer",
            "format": "int32"
          },
          "ajuste": {
            "type": "integer",
            "format": "int32"
          },
          "usoId": {
            "type": "integer",
            "format": "int32"
          },
          "tipoUsoId": {
            "type": "integer",
            "format": "int32"
          },
          "gnc": {
            "type": "boolean"
          },
          "alarma": {
            "type": "boolean"
          },
          "rastreo": {
            "type": "string",
            "nullable": true
          },
          "accesorios": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/AccesorioRequestDto"
            },
            "nullable": true
          }
        },
        "additionalProperties": false
      },
      "MaLocalidad": {
        "type": "object",
        "properties": {
          "codigo_postal": {
            "type": "integer",
            "format": "int32"
          }
        },
        "additionalProperties": false
      },
      "MaPago": {
        "type": "object",
        "properties": {
          "tipo_pago": {
            "type": "string",
            "nullable": true
          }
        },
        "additionalProperties": false
      },
      "MaProductor": {
        "type": "object",
        "properties": {
          "id": {
            "type": "integer",
            "format": "int32"
          }
        },
        "additionalProperties": false
      },
      "MaVehiculo": {
        "type": "object",
        "properties": {
          "infoauto": {
            "type": "integer",
            "format": "int32"
          },
          "anio": {
            "type": "integer",
            "format": "int32"
          },
          "uso": {
            "type": "integer",
            "format": "int32"
          },
          "gnc": {
            "type": "boolean"
          },
          "rastreo": {
            "type": "integer",
            "format": "int32"
          }
        },
        "additionalProperties": false
      },
      "MercantilAndinaRequestDto": {
        "type": "object",
        "properties": {
          "localidad": {
            "$ref": "#/components/schemas/MaLocalidad"
          },
          "vehiculo": {
            "$ref": "#/components/schemas/MaVehiculo"
          },
          "comision": {
            "type": "integer",
            "format": "int32"
          },
          "bonificacion": {
            "type": "integer",
            "format": "int32"
          },
          "periodo": {
            "type": "integer",
            "format": "int32"
          },
          "cuotas": {
            "type": "integer",
            "format": "int32"
          },
          "pago": {
            "$ref": "#/components/schemas/MaPago"
          },
          "ajuste_suma": {
            "type": "integer",
            "format": "int32"
          },
          "iva": {
            "type": "integer",
            "format": "int32"
          },
          "desglose": {
            "type": "boolean"
          },
          "productor": {
            "$ref": "#/components/schemas/MaProductor"
          }
        },
        "additionalProperties": false
      },
      "RusCotizacionRequestDto": {
        "type": "object",
        "properties": {
          "codigoProductor": {
            "type": "integer",
            "format": "int32"
          },
          "codigoTipoInteres": {
            "type": "string",
            "nullable": true
          },
          "cuotas": {
            "type": "integer",
            "format": "int32"
          },
          "numeroSolicitud": {
            "type": "integer",
            "format": "int32"
          },
          "condicionFiscal": {
            "type": "string",
            "nullable": true
          },
          "tipoVigencia": {
            "type": "string",
            "nullable": true
          },
          "vehiculos": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/RusVehiculoCotizacionDto"
            },
            "nullable": true
          },
          "vigenciaDesde": {
            "type": "string",
            "nullable": true
          },
          "vigenciaHasta": {
            "type": "string",
            "nullable": true
          }
        },
        "additionalProperties": false
      },
      "RusVehiculoCotizacionDto": {
        "type": "object",
        "properties": {
          "anio": {
            "type": "string",
            "nullable": true
          },
          "controlSatelital": {
            "type": "string",
            "nullable": true
          },
          "cpLocalidadGuarda": {
            "type": "integer",
            "format": "int32"
          },
          "gnc": {
            "type": "string",
            "nullable": true
          },
          "codia": {
            "type": "integer",
            "format": "int32"
          },
          "rastreoACargoRUS": {
            "type": "string",
            "nullable": true
          },
          "uso": {
            "type": "string",
            "nullable": true
          }
        },
        "additionalProperties": false
      }
    }
  }
}