{
  "openapi": "3.0.1",
  "info": {
    "title": "B2B.Api.Ca7",
    "version": "v1.0"
  },
  "paths": {
    "/b2b-api-ca7/api/PolicyChange/generate-change-engine-number-vin": {
      "post": {
        "tags": [
          "PolicyChange"
        ],
        "parameters": [
          {
            "name": "X-Client-App",
            "in": "header",
            "required": true,
            "example": "myClientApp"
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/B2B.Api.Ca7.Dtos.Request.GenerateChangeEngineNumberAndVinRequest"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/B2B.Api.Ca7.Dtos.Request.GenerateChangeEngineNumberAndVinRequest"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/B2B.Api.Ca7.Dtos.Request.GenerateChangeEngineNumberAndVinRequest"
              }
            }
          },
          "required": true
        },
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/B2B.Api.Ca7.Dtos.Response.GenerateChangeVehicleRegistrationInfoResponse"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/B2B.Api.Ca7.Dtos.Response.GenerateChangeVehicleRegistrationInfoResponse"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/B2B.Api.Ca7.Dtos.Response.GenerateChangeVehicleRegistrationInfoResponse"
                }
              }
            }
          }
        }
      }
    },
    "/b2b-api-ca7/api/PolicyChange/generate-change-license-plate": {
      "post": {
        "tags": [
          "PolicyChange"
        ],
        "parameters": [
          {
            "name": "X-Client-App",
            "in": "header",
            "required": true,
            "example": "myClientApp"
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/B2B.Api.Ca7.Dtos.Request.GenerateChangeLicensePlateRequest"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/B2B.Api.Ca7.Dtos.Request.GenerateChangeLicensePlateRequest"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/B2B.Api.Ca7.Dtos.Request.GenerateChangeLicensePlateRequest"
              }
            }
          },
          "required": true
        },
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/B2B.Api.Ca7.Dtos.Response.GenerateChangeVehicleRegistrationInfoResponse"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/B2B.Api.Ca7.Dtos.Response.GenerateChangeVehicleRegistrationInfoResponse"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/B2B.Api.Ca7.Dtos.Response.GenerateChangeVehicleRegistrationInfoResponse"
                }
              }
            }
          }
        }
      }
    },
    "/b2b-api-ca7/api/PolicyChange/generate-change-stated-amount": {
      "post": {
        "tags": [
          "PolicyChange"
        ],
        "parameters": [
          {
            "name": "X-Client-App",
            "in": "header",
            "required": true,
            "example": "myClientApp"
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/B2B.Api.Ca7.Dtos.Request.GenerateChangeStatedAmountRequest"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/B2B.Api.Ca7.Dtos.Request.GenerateChangeStatedAmountRequest"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/B2B.Api.Ca7.Dtos.Request.GenerateChangeStatedAmountRequest"
              }
            }
          },
          "required": true
        },
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/B2B.Api.Ca7.Dtos.Response.GenerareChangeStatedAmountResponse"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/B2B.Api.Ca7.Dtos.Response.GenerareChangeStatedAmountResponse"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/B2B.Api.Ca7.Dtos.Response.GenerareChangeStatedAmountResponse"
                }
              }
            }
          }
        }
      }
    },
    "/api/IssueSubmission/Issue": {
      "post": {
        "tags": [
          "Sumission"
        ],
        "parameters": [
          {
            "name": "X-Client-App",
            "in": "header",
            "required": true,
            "example": "myClientApp"
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/B2B.Api.Ca7.Dtos.Request.IssueGeneratedChangeRequest"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/B2B.Api.Ca7.Dtos.Request.IssueGeneratedChangeRequest"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/B2B.Api.Ca7.Dtos.Request.IssueGeneratedChangeRequest"
              }
            }
          },
          "required": true
        },
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/B2B.Api.Ca7.Dtos.Response.IssueGeneratedChangeResponse"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/B2B.Api.Ca7.Dtos.Response.IssueGeneratedChangeResponse"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/B2B.Api.Ca7.Dtos.Response.IssueGeneratedChangeResponse"
                }
              }
            }
          }
        }
      }
    },
    "/api/Vehicle/GetVehicleDetailByPolicyPeriodIdAndVehiclePublicId": {
      "get": {
        "tags": [
          "Vehicle"
        ],
        "parameters": [
          {
            "name": "policyPeriodId",
            "in": "query",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "vehiclePublicId",
            "in": "query",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "X-Client-App",
            "in": "header",
            "required": true,
            "example": "myClientApp"
          }
        ],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/B2B.Api.Ca7.Dtos.Response.GetVehicleDetailByPolicyPeriodIdAndVehiclePublicIdResponse"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/B2B.Api.Ca7.Dtos.Response.GetVehicleDetailByPolicyPeriodIdAndVehiclePublicIdResponse"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/B2B.Api.Ca7.Dtos.Response.GetVehicleDetailByPolicyPeriodIdAndVehiclePublicIdResponse"
                }
              }
            }
          }
        }
      }
    },
    "/api/CatalogoVehiculos/AutosVersionPorCodigoInfoauto": {
      "get": {
        "tags": [
          "VehicleInfo"
        ],
        "parameters": [
          {
            "name": "anio",
            "in": "query",
            "schema": {
              "type": "integer",
              "format": "int32"
            }
          },
          {
            "name": "codigoInfoauto",
            "in": "query",
            "schema": {
              "type": "integer",
              "format": "int32"
            }
          },
          {
            "name": "X-Client-App",
            "in": "header",
            "required": true,
            "example": "myClientApp"
          }
        ],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/B2B.Api.Ca7.Dtos.Response.VehicleInfoResponse"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/B2B.Api.Ca7.Dtos.Response.VehicleInfoResponse"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/B2B.Api.Ca7.Dtos.Response.VehicleInfoResponse"
                }
              }
            }
          }
        }
      }
    },
    "/api/CatalogoVehiculos/MotoVersionByCodigoInfomoto": {
      "get": {
        "tags": [
          "VehicleInfo"
        ],
        "parameters": [
          {
            "name": "anio",
            "in": "query",
            "schema": {
              "type": "integer",
              "format": "int32"
            }
          },
          {
            "name": "codigoInfomoto",
            "in": "query",
            "schema": {
              "type": "integer",
              "format": "int32"
            }
          },
          {
            "name": "X-Client-App",
            "in": "header",
            "required": true,
            "example": "myClientApp"
          }
        ],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/B2B.Api.Ca7.Dtos.Response.MotorcycleVersionPriceResponse"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/B2B.Api.Ca7.Dtos.Response.MotorcycleVersionPriceResponse"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/B2B.Api.Ca7.Dtos.Response.MotorcycleVersionPriceResponse"
                }
              }
            }
          }
        }
      }
    }
  },
  "components": {
    "schemas": {
      "B2B.Api.Ca7.Dtos.Dto.AdditionalInterestContactDto": {
        "type": "object",
        "properties": {
          "AdditionalInterestType": {
            "$ref": "#/components/schemas/B2B.Api.Ca7.Dtos.Dto.B2bKeyValue"
          },
          "Contact": {
            "$ref": "#/components/schemas/B2B.Api.Ca7.Dtos.Dto.ContactDto"
          },
          "ContractNumber": {
            "type": "string",
            "nullable": true
          },
          "IsCertRequired": {
            "type": "boolean"
          },
          "Name": {
            "type": "string",
            "nullable": true
          },
          "PublicID": {
            "type": "string",
            "nullable": true
          }
        },
        "additionalProperties": false
      },
      "B2B.Api.Ca7.Dtos.Dto.AddressDto": {
        "type": "object",
        "properties": {
          "policyPeriodID": {
            "type": "string",
            "nullable": true
          },
          "updateLinkedAddresses": {
            "type": "boolean"
          },
          "AddressLine1": {
            "type": "string",
            "nullable": true
          },
          "AddressLine2": {
            "type": "string",
            "nullable": true
          },
          "AddressLine3": {
            "type": "string",
            "nullable": true
          },
          "AddressType": {
            "$ref": "#/components/schemas/B2B.Api.Ca7.Dtos.Dto.B2bKeyValue"
          },
          "Block": {
            "type": "string",
            "nullable": true
          },
          "City": {
            "type": "string",
            "nullable": true
          },
          "Country": {
            "$ref": "#/components/schemas/B2B.Api.Ca7.Dtos.Dto.B2bKeyValue"
          },
          "County": {
            "type": "string",
            "nullable": true
          },
          "Description": {
            "type": "string",
            "nullable": true
          },
          "DisplayText": {
            "type": "string",
            "nullable": true
          },
          "PolicyAddress": {
            "type": "boolean"
          },
          "PostalCode": {
            "type": "string",
            "nullable": true
          },
          "PrimaryAddress": {
            "type": "boolean"
          },
          "PublicID": {
            "type": "string",
            "nullable": true
          },
          "State": {
            "$ref": "#/components/schemas/B2B.Api.Ca7.Dtos.Dto.B2bKeyValue"
          },
          "StreetNumber": {
            "type": "string",
            "nullable": true
          }
        },
        "additionalProperties": false
      },
      "B2B.Api.Ca7.Dtos.Dto.AmountDto": {
        "type": "object",
        "properties": {
          "Amount": {
            "type": "number",
            "format": "double"
          },
          "Currency": {
            "type": "string",
            "nullable": true
          },
          "Description": {
            "type": "string",
            "nullable": true
          }
        },
        "additionalProperties": false
      },
      "B2B.Api.Ca7.Dtos.Dto.AttorneyDto": {
        "type": "object",
        "properties": {
          "DocumentNumber": {
            "type": "string",
            "nullable": true
          },
          "FirstName": {
            "type": "string",
            "nullable": true
          },
          "Gender": {
            "$ref": "#/components/schemas/B2B.Api.Ca7.Dtos.Dto.B2bKeyValue"
          },
          "IDDocumentType": {
            "$ref": "#/components/schemas/B2B.Api.Ca7.Dtos.Dto.B2bKeyValue"
          },
          "LastName": {
            "type": "string",
            "nullable": true
          }
        },
        "additionalProperties": false
      },
      "B2B.Api.Ca7.Dtos.Dto.B2bKeyValue": {
        "type": "object",
        "properties": {
          "Code": {
            "type": "string",
            "nullable": true
          },
          "Description": {
            "type": "string",
            "nullable": true
          }
        },
        "additionalProperties": false
      },
      "B2B.Api.Ca7.Dtos.Dto.B2bMonetaryAmount": {
        "type": "object",
        "properties": {
          "Amount": {
            "type": "number",
            "format": "double"
          },
          "Currency": {
            "type": "string",
            "nullable": true
          },
          "Description": {
            "type": "string",
            "nullable": true
          }
        },
        "additionalProperties": false
      },
      "B2B.Api.Ca7.Dtos.Dto.B2bQuotattionSummary": {
        "type": "object",
        "properties": {
          "AddressDescription": {
            "type": "string",
            "nullable": true
          },
          "AddressType": {
            "$ref": "#/components/schemas/B2B.Api.Ca7.Dtos.Dto.B2bKeyValue"
          },
          "DeductiblePercentage": {
            "type": "string",
            "nullable": true
          },
          "DeductibleType": {
            "type": "string",
            "nullable": true
          },
          "DirectDeductible": {
            "type": "string",
            "nullable": true
          },
          "EffectiveDate": {
            "type": "string",
            "format": "date-time",
            "nullable": true,
            "example": "2026-03-21T00:00:00-03:00"
          },
          "Insured": {
            "type": "string",
            "nullable": true
          },
          "PolicyNumber": {
            "type": "string",
            "nullable": true
          },
          "NetPremium": {
            "$ref": "#/components/schemas/B2B.Api.Ca7.Dtos.Dto.B2bMonetaryAmount"
          },
          "PolicyPeriodId": {
            "type": "string",
            "nullable": true
          },
          "ProductOfferingCALine": {
            "type": "string",
            "nullable": true
          },
          "ReferenceCode": {
            "type": "string",
            "nullable": true
          },
          "Taxes": {
            "$ref": "#/components/schemas/B2B.Api.Ca7.Dtos.Dto.B2bMonetaryAmount"
          },
          "TotalCommission": {
            "$ref": "#/components/schemas/B2B.Api.Ca7.Dtos.Dto.B2bMonetaryAmount"
          },
          "TotalCommissionOrganizer": {
            "$ref": "#/components/schemas/B2B.Api.Ca7.Dtos.Dto.B2bMonetaryAmount"
          },
          "TotalCost": {
            "$ref": "#/components/schemas/B2B.Api.Ca7.Dtos.Dto.B2bMonetaryAmount"
          },
          "TotalPremium": {
            "$ref": "#/components/schemas/B2B.Api.Ca7.Dtos.Dto.B2bMonetaryAmount"
          },
          "Validity": {
            "type": "string",
            "nullable": true
          }
        },
        "additionalProperties": false
      },
      "B2B.Api.Ca7.Dtos.Dto.ContactDto": {
        "type": "object",
        "properties": {
          "Activitystartdate": {
            "type": "string",
            "format": "date-time",
            "example": "2026-03-21T00:00:00-03:00"
          },
          "Addresses": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/B2B.Api.Ca7.Dtos.Dto.AddressDto"
            },
            "nullable": true
          },
          "Attorney": {
            "$ref": "#/components/schemas/B2B.Api.Ca7.Dtos.Dto.AttorneyDto"
          },
          "AvailablePhoneNumbers": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/B2B.Api.Ca7.Dtos.Dto.PhoneDto"
            },
            "nullable": true
          },
          "CUIL": {
            "type": "string",
            "nullable": true
          },
          "ContactType": {
            "$ref": "#/components/schemas/B2B.Api.Ca7.Dtos.Dto.B2bKeyValue"
          },
          "DateOfBirth": {
            "type": "string",
            "format": "date-time",
            "example": "2026-03-21T00:00:00-03:00"
          },
          "EmailAddress1": {
            "type": "string",
            "nullable": true
          },
          "EmailAddress2": {
            "type": "string",
            "nullable": true
          },
          "FirstName": {
            "type": "string",
            "nullable": true
          },
          "Gender": {
            "$ref": "#/components/schemas/B2B.Api.Ca7.Dtos.Dto.B2bKeyValue"
          },
          "Industry": {
            "$ref": "#/components/schemas/B2B.Api.Ca7.Dtos.Dto.B2bKeyValue"
          },
          "InsuredNumberFormated": {
            "type": "string",
            "nullable": true
          },
          "LastName": {
            "type": "string",
            "nullable": true
          },
          "MaritalStatus": {
            "$ref": "#/components/schemas/B2B.Api.Ca7.Dtos.Dto.KeyDisplayDto"
          },
          "Name": {
            "type": "string",
            "nullable": true
          },
          "Nationality": {
            "$ref": "#/components/schemas/B2B.Api.Ca7.Dtos.Dto.B2bKeyValue"
          },
          "Occupation": {
            "$ref": "#/components/schemas/B2B.Api.Ca7.Dtos.Dto.B2bKeyValue"
          },
          "OfficialIDType": {
            "$ref": "#/components/schemas/B2B.Api.Ca7.Dtos.Dto.B2bKeyValue"
          },
          "PEP": {
            "type": "boolean"
          },
          "PreferredSettlementCurrency": {
            "$ref": "#/components/schemas/B2B.Api.Ca7.Dtos.Dto.KeyValueSelectedDto"
          },
          "PrimaryNamedInsured": {
            "type": "boolean"
          },
          "PrimaryPhoneType": {
            "$ref": "#/components/schemas/B2B.Api.Ca7.Dtos.Dto.B2bKeyValue"
          },
          "PublicID": {
            "type": "string",
            "nullable": true
          },
          "Resident": {
            "type": "boolean"
          },
          "SchoolLevel": {
            "$ref": "#/components/schemas/B2B.Api.Ca7.Dtos.Dto.B2bKeyValue"
          },
          "TaxID": {
            "type": "string",
            "nullable": true
          },
          "TaxStatuses": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/B2B.Api.Ca7.Dtos.Dto.TaxStatusDto"
            },
            "nullable": true
          },
          "UIFFormSubmitted": {
            "type": "boolean"
          },
          "UifRepresentative": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/B2B.Api.Ca7.Dtos.Dto.UifRepresentativeDto"
            },
            "nullable": true
          }
        },
        "additionalProperties": false
      },
      "B2B.Api.Ca7.Dtos.Dto.CriticalCoverage": {
        "type": "object",
        "properties": {
          "CodigoInfoAuto": {
            "type": "integer",
            "format": "int32",
            "nullable": true
          },
          "Cobertura": {
            "type": "string",
            "nullable": true
          },
          "Calificacion": {
            "type": "string",
            "nullable": true
          },
          "FechaVigencia": {
            "type": "string",
            "format": "date-time",
            "nullable": true,
            "example": "2026-03-21T00:00:00-03:00"
          },
          "Estado": {
            "type": "integer",
            "format": "int32",
            "nullable": true
          }
        },
        "additionalProperties": false
      },
      "B2B.Api.Ca7.Dtos.Dto.KeyDisplayDto": {
        "type": "object",
        "properties": {
          "Code": {
            "type": "string",
            "nullable": true
          },
          "DisplayName": {
            "type": "string",
            "nullable": true
          }
        },
        "additionalProperties": false
      },
      "B2B.Api.Ca7.Dtos.Dto.KeyValueSelectedDto": {
        "type": "object",
        "properties": {
          "Code": {
            "type": "string",
            "nullable": true
          },
          "Description": {
            "type": "string",
            "nullable": true
          },
          "Selected": {
            "type": "boolean"
          }
        },
        "additionalProperties": false
      },
      "B2B.Api.Ca7.Dtos.Dto.LocationDto": {
        "type": "object",
        "properties": {
          "Block": {
            "type": "string",
            "nullable": true
          },
          "City": {
            "type": "string",
            "nullable": true
          },
          "Country": {
            "$ref": "#/components/schemas/B2B.Api.Ca7.Dtos.Dto.B2bKeyValue"
          },
          "Department": {
            "type": "string",
            "nullable": true
          },
          "DisplayName": {
            "type": "string",
            "nullable": true
          },
          "Floor": {
            "type": "string",
            "nullable": true
          },
          "LocationCode": {
            "type": "string",
            "nullable": true
          },
          "LocationName": {
            "type": "string",
            "nullable": true
          },
          "Phone": {
            "type": "string",
            "nullable": true
          },
          "PhoneCountry": {
            "$ref": "#/components/schemas/B2B.Api.Ca7.Dtos.Dto.B2bKeyValue"
          },
          "PostalCode": {
            "type": "string",
            "nullable": true
          },
          "PublicID": {
            "type": "string",
            "nullable": true
          },
          "State": {
            "$ref": "#/components/schemas/B2B.Api.Ca7.Dtos.Dto.B2bKeyValue"
          },
          "Street": {
            "type": "string",
            "nullable": true
          },
          "StreetNumber": {
            "type": "string",
            "nullable": true
          },
          "Type": {
            "$ref": "#/components/schemas/B2B.Api.Ca7.Dtos.Dto.B2bKeyValue"
          },
          "policyPeriodID": {
            "type": "string",
            "nullable": true
          },
          "vehiclePublicID": {
            "type": "string",
            "nullable": true
          }
        },
        "additionalProperties": false
      },
      "B2B.Api.Ca7.Dtos.Dto.PhoneDto": {
        "type": "object",
        "properties": {
          "PhoneCountry": {
            "$ref": "#/components/schemas/B2B.Api.Ca7.Dtos.Dto.B2bKeyValue"
          },
          "PhoneNumber": {
            "type": "string",
            "nullable": true
          },
          "PhoneType": {
            "$ref": "#/components/schemas/B2B.Api.Ca7.Dtos.Dto.B2bKeyValue"
          }
        },
        "additionalProperties": false
      },
      "B2B.Api.Ca7.Dtos.Dto.TaxStatusDto": {
        "type": "object",
        "properties": {
          "EnrollementStatus": {
            "$ref": "#/components/schemas/B2B.Api.Ca7.Dtos.Dto.B2bKeyValue"
          },
          "PublicID": {
            "type": "string",
            "nullable": true
          },
          "RetentionAgent": {
            "$ref": "#/components/schemas/B2B.Api.Ca7.Dtos.Dto.B2bKeyValue"
          },
          "StatusValue": {
            "type": "string",
            "nullable": true
          },
          "TaxPercentage": {
            "type": "number",
            "format": "double"
          }
        },
        "additionalProperties": false
      },
      "B2B.Api.Ca7.Dtos.Dto.UifRepresentativeDto": {
        "type": "object",
        "properties": {
          "Cuit": {
            "type": "string",
            "nullable": true
          },
          "DateOfBirth": {
            "type": "string",
            "format": "date-time",
            "nullable": true,
            "example": "2026-03-21T00:00:00-03:00"
          },
          "Email": {
            "type": "string",
            "nullable": true
          },
          "LastName": {
            "type": "string",
            "nullable": true
          },
          "Name": {
            "type": "string",
            "nullable": true
          },
          "Phone": {
            "type": "string",
            "nullable": true
          },
          "PublicId": {
            "type": "string",
            "nullable": true
          },
          "RepresentativeType": {
            "$ref": "#/components/schemas/B2B.Api.Ca7.Dtos.Dto.B2bKeyValue"
          }
        },
        "additionalProperties": false
      },
      "B2B.Api.Ca7.Dtos.Dto.Vehicle.AccesoryDto": {
        "type": "object",
        "properties": {
          "AccesoryType": {
            "$ref": "#/components/schemas/B2B.Api.Ca7.Dtos.Dto.B2bKeyValue"
          },
          "Brand": {
            "type": "string",
            "nullable": true
          },
          "InsuredAmountCost": {
            "$ref": "#/components/schemas/B2B.Api.Ca7.Dtos.Dto.AmountDto"
          },
          "Model": {
            "type": "string",
            "nullable": true
          },
          "OtherAccesoryTypeName": {
            "type": "string",
            "nullable": true
          },
          "PublicID": {
            "type": "string",
            "nullable": true
          },
          "SerieNumber": {
            "type": "string",
            "nullable": true
          }
        },
        "additionalProperties": false
      },
      "B2B.Api.Ca7.Dtos.Dto.Vehicle.VehicleDetailDto": {
        "type": "object",
        "properties": {
          "Accesories": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/B2B.Api.Ca7.Dtos.Dto.Vehicle.AccesoryDto"
            },
            "nullable": true
          },
          "AdditionalFuelType": {
            "$ref": "#/components/schemas/B2B.Api.Ca7.Dtos.Dto.B2bKeyValue"
          },
          "AdditionalInterestContacts": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/B2B.Api.Ca7.Dtos.Dto.AdditionalInterestContactDto"
            },
            "nullable": true
          },
          "AutomaticAdjust": {
            "$ref": "#/components/schemas/B2B.Api.Ca7.Dtos.Dto.B2bKeyValue"
          },
          "BonusMalus": {
            "$ref": "#/components/schemas/B2B.Api.Ca7.Dtos.Dto.B2bKeyValue"
          },
          "BrandCode": {
            "type": "integer",
            "format": "int32"
          },
          "BrandName": {
            "type": "string",
            "nullable": true
          },
          "CNRT": {
            "type": "string",
            "nullable": true
          },
          "Category": {
            "$ref": "#/components/schemas/B2B.Api.Ca7.Dtos.Dto.B2bKeyValue"
          },
          "Census": {
            "type": "string",
            "nullable": true
          },
          "CertificateDateGeneration": {
            "type": "string",
            "nullable": true
          },
          "CertificateNumber": {
            "type": "string",
            "nullable": true
          },
          "Color": {
            "$ref": "#/components/schemas/B2B.Api.Ca7.Dtos.Dto.B2bKeyValue"
          },
          "DeductibleValueDescription": {
            "type": "string",
            "nullable": true
          },
          "EngineNumber": {
            "type": "string",
            "nullable": true
          },
          "FuelType": {
            "$ref": "#/components/schemas/B2B.Api.Ca7.Dtos.Dto.B2bKeyValue"
          },
          "GPSProvider": {
            "$ref": "#/components/schemas/B2B.Api.Ca7.Dtos.Dto.B2bKeyValue"
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
            "type": "string",
            "nullable": true
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
            "$ref": "#/components/schemas/B2B.Api.Ca7.Dtos.Dto.B2bKeyValue"
          },
          "LessorName": {
            "type": "string",
            "nullable": true
          },
          "LicensePlate": {
            "type": "string",
            "nullable": true
          },
          "LienName": {
            "type": "string",
            "nullable": true
          },
          "ModelCode": {
            "type": "integer",
            "format": "int32"
          },
          "ModelName": {
            "type": "string",
            "nullable": true
          },
          "OriginCountry": {
            "$ref": "#/components/schemas/B2B.Api.Ca7.Dtos.Dto.B2bKeyValue"
          },
          "OriginalCostNew": {
            "type": "number",
            "format": "double"
          },
          "OtherBrandName": {
            "type": "string",
            "nullable": true
          },
          "OtherModelName": {
            "type": "string",
            "nullable": true
          },
          "OtherVersionName": {
            "type": "string",
            "nullable": true
          },
          "PolicyOwnerIsInsured": {
            "type": "boolean",
            "nullable": true
          },
          "PrimaryNamedInsured": {
            "type": "string",
            "nullable": true
          },
          "ProductOffering": {
            "$ref": "#/components/schemas/B2B.Api.Ca7.Dtos.Dto.B2bKeyValue"
          },
          "PublicId": {
            "type": "string",
            "nullable": true
          },
          "ROUTE": {
            "type": "string",
            "nullable": true
          },
          "RiskLocation": {
            "$ref": "#/components/schemas/B2B.Api.Ca7.Dtos.Dto.LocationDto"
          },
          "ServiceType": {
            "$ref": "#/components/schemas/B2B.Api.Ca7.Dtos.Dto.B2bKeyValue"
          },
          "StatedAmount": {
            "type": "number",
            "format": "double"
          },
          "TargetPremium": {
            "type": "number",
            "format": "double"
          },
          "TargetPremiumAfterTax": {
            "type": "number",
            "format": "double"
          },
          "Usage": {
            "$ref": "#/components/schemas/B2B.Api.Ca7.Dtos.Dto.B2bKeyValue"
          },
          "VIN": {
            "type": "string",
            "nullable": true
          },
          "VTVExpirationDate": {
            "type": "string",
            "format": "date-time",
            "example": "2026-03-21T00:00:00-03:00"
          },
          "VehicleNumber": {
            "type": "integer",
            "format": "int32"
          },
          "VersionCode": {
            "type": "integer",
            "format": "int32"
          },
          "VersionName": {
            "type": "string",
            "nullable": true
          },
          "Year": {
            "type": "integer",
            "format": "int32"
          },
          "CodigoInfoAuto": {
            "type": "integer",
            "format": "int32"
          }
        },
        "additionalProperties": false
      },
      "B2B.Api.Ca7.Dtos.Dto.VehicleInfoDto": {
        "type": "object",
        "properties": {
          "ID": {
            "type": "integer",
            "format": "int64"
          },
          "VersionNumero": {
            "type": "integer",
            "format": "int32"
          },
          "VersionDescripcion": {
            "type": "string",
            "nullable": true
          },
          "MarcaNumero": {
            "type": "integer",
            "format": "int32"
          },
          "MarcaDescripcion": {
            "type": "string",
            "nullable": true
          },
          "ModeloNumero": {
            "type": "integer",
            "format": "int32"
          },
          "ModeloDescripcion": {
            "type": "string",
            "nullable": true
          },
          "NombreCompleto": {
            "type": "string",
            "nullable": true,
            "readOnly": true
          },
          "Categoria": {
            "type": "string",
            "nullable": true
          },
          "CodigoInfoAuto": {
            "type": "integer",
            "format": "int32"
          },
          "CodigoReasignado": {
            "type": "integer",
            "format": "int32"
          },
          "Critico": {
            "type": "boolean"
          },
          "CombustibleCodigo": {
            "type": "string",
            "nullable": true
          },
          "CombustibleDescripcion": {
            "type": "string",
            "nullable": true
          },
          "Precio": {
            "type": "integer",
            "format": "int32"
          },
          "PrecioReferencia0Km": {
            "type": "integer",
            "format": "int32"
          },
          "ImporteUsado": {
            "type": "number",
            "format": "double"
          },
          "Precio0KmUsado": {
            "type": "integer",
            "format": "int32"
          },
          "CoberturasCriticas": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/B2B.Api.Ca7.Dtos.Dto.CriticalCoverage"
            },
            "nullable": true
          },
          "Importado": {
            "type": "boolean",
            "nullable": true
          },
          "TechoPanoramico": {
            "type": "boolean"
          },
          "TechoCorredizo": {
            "type": "boolean"
          }
        },
        "additionalProperties": false
      },
      "B2B.Api.Ca7.Dtos.Request.GenerateChangeEngineNumberAndVinRequest": {
        "type": "object",
        "properties": {
          "PolicyNumber": {
            "type": "string",
            "nullable": true
          },
          "EngineNumber": {
            "type": "string",
            "nullable": true
          },
          "Vin": {
            "type": "string",
            "nullable": true
          }
        },
        "additionalProperties": false
      },
      "B2B.Api.Ca7.Dtos.Request.GenerateChangeLicensePlateRequest": {
        "type": "object",
        "properties": {
          "PolicyNumber": {
            "type": "string",
            "nullable": true
          },
          "LicensePlate": {
            "type": "string",
            "nullable": true
          },
          "TrackingPas": {
            "type": "string",
            "nullable": true
          }
        },
        "additionalProperties": false
      },
      "B2B.Api.Ca7.Dtos.Request.GenerateChangeStatedAmountRequest": {
        "type": "object",
        "properties": {
          "PolicyNumber": {
            "type": "string",
            "nullable": true
          },
          "StatedAmount": {
            "type": "number",
            "format": "double"
          }
        },
        "additionalProperties": false
      },
      "B2B.Api.Ca7.Dtos.Request.IssueGeneratedChangeRequest": {
        "type": "object",
        "properties": {
          "PolicyPeriodId": {
            "type": "string",
            "nullable": true
          }
        },
        "additionalProperties": false
      },
      "B2B.Api.Ca7.Dtos.Response.GenerareChangeStatedAmountResponse": {
        "type": "object",
        "properties": {
          "QuotationSummary": {
            "$ref": "#/components/schemas/B2B.Api.Ca7.Dtos.Dto.B2bQuotattionSummary"
          }
        },
        "additionalProperties": false
      },
      "B2B.Api.Ca7.Dtos.Response.GenerateChangeVehicleRegistrationInfoResponse": {
        "type": "object",
        "properties": {
          "QuotationSummary": {
            "$ref": "#/components/schemas/B2B.Api.Ca7.Dtos.Dto.B2bQuotattionSummary"
          }
        },
        "additionalProperties": false
      },
      "B2B.Api.Ca7.Dtos.Response.GetVehicleDetailByPolicyPeriodIdAndVehiclePublicIdResponse": {
        "type": "object",
        "properties": {
          "Vehicle": {
            "$ref": "#/components/schemas/B2B.Api.Ca7.Dtos.Dto.Vehicle.VehicleDetailDto"
          }
        },
        "additionalProperties": false
      },
      "B2B.Api.Ca7.Dtos.Response.IssueGeneratedChangeResponse": {
        "type": "object",
        "properties": {
          "PolicyNumber": {
            "type": "string",
            "nullable": true
          },
          "TotalCost": {
            "type": "number",
            "format": "double",
            "nullable": true
          },
          "TotalPremium": {
            "type": "number",
            "format": "double",
            "nullable": true
          }
        },
        "additionalProperties": false
      },
      "B2B.Api.Ca7.Dtos.Response.MotorcycleVersionPriceResponse": {
        "type": "object",
        "properties": {
          "IdMoto": {
            "type": "integer",
            "format": "int32"
          },
          "CodigoInfoAuto": {
            "type": "integer",
            "format": "int32"
          },
          "IdMarca": {
            "type": "integer",
            "format": "int32"
          },
          "MarcaDescripcion": {
            "type": "string",
            "nullable": true
          },
          "IdModelo": {
            "type": "integer",
            "format": "int32"
          },
          "ModeloDescripcion": {
            "type": "string",
            "nullable": true
          },
          "IdVersion": {
            "type": "integer",
            "format": "int32"
          },
          "VersionDescripcion": {
            "type": "string",
            "nullable": true
          },
          "Precio": {
            "type": "number",
            "format": "double"
          },
          "CategoriaCodigoIA": {
            "type": "string",
            "nullable": true
          },
          "CategoriaDescripcion": {
            "type": "string",
            "nullable": true
          },
          "Combustible": {
            "type": "string",
            "nullable": true
          },
          "TipoVehiculo": {
            "type": "string",
            "nullable": true
          },
          "Importado": {
            "type": "boolean"
          }
        },
        "additionalProperties": false
      },
      "B2B.Api.Ca7.Dtos.Response.VehicleInfoResponse": {
        "type": "object",
        "properties": {
          "Versiones": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/B2B.Api.Ca7.Dtos.Dto.VehicleInfoDto"
            },
            "nullable": true
          }
        },
        "additionalProperties": false
      }
    },
    "securitySchemes": {
      "Bearer": {
        "type": "apiKey",
        "description": "JWT Authorization header using the Bearer scheme. Example: \"Authorization: Bearer {token}\"",
        "name": "Authorization",
        "in": "header"
      }
    }
  },
  "security": [
    {
      "Bearer": []
    }
  ],
  "servers": [
    {
      "url": "/b2b-gateway"
    }
  ]
}
