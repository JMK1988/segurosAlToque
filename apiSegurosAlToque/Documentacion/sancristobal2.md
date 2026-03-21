{
  "openapi": "3.0.1",
  "info": {
    "title": "B2B.Api",
    "version": "v1.0"
  },
  "paths": {
    "/api/Auth/LoginAsync": {
      "post": {
        "tags": [
          "Auth"
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/B2B.Api.Dtos.Requests.LoginRequest"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/B2B.Api.Dtos.Requests.LoginRequest"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/B2B.Api.Dtos.Requests.LoginRequest"
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
                  "$ref": "#/components/schemas/B2B.Api.Dtos.Responses.LoginResponse"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/B2B.Api.Dtos.Responses.LoginResponse"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/B2B.Api.Dtos.Responses.LoginResponse"
                }
              }
            }
          }
        }
      }
    },
    "/api/Claims/ClaimNumber": {
      "get": {
        "tags": [
          "Claim"
        ],
        "parameters": [
          {
            "name": "claimNumber",
            "in": "query",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/B2B.Api.Dtos.Responses.Claim.ClaimByClaimNumberResponse"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/B2B.Api.Dtos.Responses.Claim.ClaimByClaimNumberResponse"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/B2B.Api.Dtos.Responses.Claim.ClaimByClaimNumberResponse"
                }
              }
            }
          }
        }
      }
    },
    "/api/Claims/Producer": {
      "get": {
        "tags": [
          "Claim"
        ],
        "parameters": [
          {
            "name": "createDateStart",
            "in": "query",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "createDateEnd",
            "in": "query",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "producer",
            "in": "query",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/B2B.Api.Dtos.Responses.Claim.ClaimByProducerCodeResponse"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/B2B.Api.Dtos.Responses.Claim.ClaimByProducerCodeResponse"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/B2B.Api.Dtos.Responses.Claim.ClaimByProducerCodeResponse"
                }
              }
            }
          }
        }
      }
    },
    "/api/Claims/News": {
      "get": {
        "tags": [
          "Claim"
        ],
        "parameters": [
          {
            "name": "producerCode",
            "in": "query",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "newsDate",
            "in": "query",
            "required": true,
            "schema": {
              "type": "string",
              "format": "date-time",
              "example": "2026-03-21T00:00:00-03:00"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "type": "array",
                  "items": {
                    "type": "string"
                  }
                }
              },
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "type": "string"
                  }
                }
              },
              "text/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "type": "string"
                  }
                }
              }
            }
          }
        }
      }
    },
    "/api/Inspection/deferred-inspection": {
      "post": {
        "tags": [
          "Inspection"
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/B2B.Api.Dtos.Requests.Inspection.DeferredInspectionRequest"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/B2B.Api.Dtos.Requests.Inspection.DeferredInspectionRequest"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/B2B.Api.Dtos.Requests.Inspection.DeferredInspectionRequest"
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
                  "$ref": "#/components/schemas/B2B.Api.Dtos.Requests.Inspection.DeferredInspectionRequest"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/B2B.Api.Dtos.Requests.Inspection.DeferredInspectionRequest"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/B2B.Api.Dtos.Requests.Inspection.DeferredInspectionRequest"
                }
              }
            }
          }
        }
      }
    },
    "/api/Postal/CiudadesPorCodigoPostal": {
      "get": {
        "tags": [
          "Location"
        ],
        "parameters": [
          {
            "name": "codigo",
            "in": "query",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/B2B.Api.Dtos.OperationResult.OperationResultCiudadesPorCodPostal"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/B2B.Api.Dtos.OperationResult.OperationResultCiudadesPorCodPostal"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/B2B.Api.Dtos.OperationResult.OperationResultCiudadesPorCodPostal"
                }
              }
            }
          }
        }
      }
    },
    "/api/Payment/GetAvailableCreditCars": {
      "get": {
        "tags": [
          "Payments"
        ],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/B2B.Api.Dtos.OperationResult.AvailableCreditCardsResponse"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/B2B.Api.Dtos.OperationResult.AvailableCreditCardsResponse"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/B2B.Api.Dtos.OperationResult.AvailableCreditCardsResponse"
                }
              }
            }
          }
        }
      }
    },
    "/api/Payment/GetHistoryByPolicyNumber": {
      "get": {
        "tags": [
          "Payments"
        ],
        "parameters": [
          {
            "name": "policyNumber",
            "in": "query",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bPaymentHistory"
                  }
                }
              },
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bPaymentHistory"
                  }
                }
              },
              "text/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bPaymentHistory"
                  }
                }
              }
            }
          }
        }
      }
    },
    "/api/Payment/ConsultaOperacionesRechazadasPorDebitoAutomatico": {
      "get": {
        "tags": [
          "Payments"
        ],
        "parameters": [
          {
            "name": "cuit",
            "in": "query",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "lastDays",
            "in": "query",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "methodPayment",
            "in": "query",
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/B2B.Api.Dtos.Responses.Payments.B2bRejectedPaymentRequestsByProducerCodesResponse"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/B2B.Api.Dtos.Responses.Payments.B2bRejectedPaymentRequestsByProducerCodesResponse"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/B2B.Api.Dtos.Responses.Payments.B2bRejectedPaymentRequestsByProducerCodesResponse"
                }
              }
            }
          }
        }
      }
    },
    "/api/Cancellation/PolicyCancellation": {
      "post": {
        "tags": [
          "Policy"
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/B2B.Api.Dtos.Requests.Policy.PolicyCancellationRequest"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/B2B.Api.Dtos.Requests.Policy.PolicyCancellationRequest"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/B2B.Api.Dtos.Requests.Policy.PolicyCancellationRequest"
              }
            }
          },
          "required": true
        },
        "responses": {
          "200": {
            "description": "Success"
          }
        }
      }
    },
    "/api/PolicyDetail/GetPolicyDetailByPolicyNumber": {
      "get": {
        "tags": [
          "Policy"
        ],
        "parameters": [
          {
            "name": "policyNumber",
            "in": "query",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/B2B.Api.Dtos.OperationResult.OperationResultGetPolicyDetailByPolicyNumber"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/B2B.Api.Dtos.OperationResult.OperationResultGetPolicyDetailByPolicyNumber"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/B2B.Api.Dtos.OperationResult.OperationResultGetPolicyDetailByPolicyNumber"
                }
              }
            }
          }
        }
      }
    },
    "/api/Cancellation/GetCancellationReasonsByPolicyPeriodId": {
      "get": {
        "tags": [
          "Policy"
        ],
        "parameters": [
          {
            "name": "policyPeriodId",
            "in": "query",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
                  }
                }
              },
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
                  }
                }
              },
              "text/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
                  }
                }
              }
            }
          }
        }
      }
    },
    "/api/Cancellation/PolicyWithdraw": {
      "post": {
        "tags": [
          "Policy"
        ],
        "parameters": [
          {
            "name": "policyNumber",
            "in": "query",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Success"
          }
        }
      }
    },
    "/api/PolicyDetail/agriculture": {
      "get": {
        "tags": [
          "PolicyDetail"
        ],
        "parameters": [
          {
            "name": "policyNumber",
            "in": "query",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/B2B.Api.Dtos.Responses.Policy.PolicyAgricultureDetailResponse"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/B2B.Api.Dtos.Responses.Policy.PolicyAgricultureDetailResponse"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/B2B.Api.Dtos.Responses.Policy.PolicyAgricultureDetailResponse"
                }
              }
            }
          }
        }
      }
    },
    "/api/PolicyDetail/burial": {
      "get": {
        "tags": [
          "PolicyDetail"
        ],
        "parameters": [
          {
            "name": "policyNumber",
            "in": "query",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/B2B.Api.Dtos.Responses.Policy.PolicyBurialDetailResponse"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/B2B.Api.Dtos.Responses.Policy.PolicyBurialDetailResponse"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/B2B.Api.Dtos.Responses.Policy.PolicyBurialDetailResponse"
                }
              }
            }
          }
        }
      }
    },
    "/api/PolicyDetail/caution": {
      "get": {
        "tags": [
          "PolicyDetail"
        ],
        "parameters": [
          {
            "name": "policyNumber",
            "in": "query",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/B2B.Api.Dtos.Responses.Policy.PolicyCautionDetailResponse"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/B2B.Api.Dtos.Responses.Policy.PolicyCautionDetailResponse"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/B2B.Api.Dtos.Responses.Policy.PolicyCautionDetailResponse"
                }
              }
            }
          }
        }
      }
    },
    "/api/PolicyDetail/combined": {
      "get": {
        "tags": [
          "PolicyDetail"
        ],
        "parameters": [
          {
            "name": "policyNumber",
            "in": "query",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/B2B.Api.Dtos.Responses.Policy.PolicyCombinedDetailResponse"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/B2B.Api.Dtos.Responses.Policy.PolicyCombinedDetailResponse"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/B2B.Api.Dtos.Responses.Policy.PolicyCombinedDetailResponse"
                }
              }
            }
          }
        }
      }
    },
    "/api/PolicyDetail/fire": {
      "get": {
        "tags": [
          "PolicyDetail"
        ],
        "parameters": [
          {
            "name": "policyNumber",
            "in": "query",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/B2B.Api.Dtos.Responses.Policy.PolicyFireDetailResponse"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/B2B.Api.Dtos.Responses.Policy.PolicyFireDetailResponse"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/B2B.Api.Dtos.Responses.Policy.PolicyFireDetailResponse"
                }
              }
            }
          }
        }
      }
    },
    "/api/PolicyDetail/general-liability": {
      "get": {
        "tags": [
          "PolicyDetail"
        ],
        "parameters": [
          {
            "name": "policyNumber",
            "in": "query",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/B2B.Api.Dtos.Responses.Policy.PolicyGeneralLiabilityDetailResponse"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/B2B.Api.Dtos.Responses.Policy.PolicyGeneralLiabilityDetailResponse"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/B2B.Api.Dtos.Responses.Policy.PolicyGeneralLiabilityDetailResponse"
                }
              }
            }
          }
        }
      }
    },
    "/api/PolicyDetail/hull-and-aircraft": {
      "get": {
        "tags": [
          "PolicyDetail"
        ],
        "parameters": [
          {
            "name": "policyNumber",
            "in": "query",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/B2B.Api.Dtos.Responses.Policy.PolicyHullAircraftDetailResponse"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/B2B.Api.Dtos.Responses.Policy.PolicyHullAircraftDetailResponse"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/B2B.Api.Dtos.Responses.Policy.PolicyHullAircraftDetailResponse"
                }
              }
            }
          }
        }
      }
    },
    "/api/PolicyDetail/life": {
      "get": {
        "tags": [
          "PolicyDetail"
        ],
        "parameters": [
          {
            "name": "policyNumber",
            "in": "query",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/B2B.Api.Dtos.Responses.Policy.PolicyLifeDetailResponse"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/B2B.Api.Dtos.Responses.Policy.PolicyLifeDetailResponse"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/B2B.Api.Dtos.Responses.Policy.PolicyLifeDetailResponse"
                }
              }
            }
          }
        }
      }
    },
    "/api/PolicyDetail/other-risk": {
      "get": {
        "tags": [
          "PolicyDetail"
        ],
        "parameters": [
          {
            "name": "policyNumber",
            "in": "query",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/B2B.Api.Dtos.Responses.Policy.PolicyOtherRiskDetailResponse"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/B2B.Api.Dtos.Responses.Policy.PolicyOtherRiskDetailResponse"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/B2B.Api.Dtos.Responses.Policy.PolicyOtherRiskDetailResponse"
                }
              }
            }
          }
        }
      }
    },
    "/api/PolicyDetail/personal-accidents": {
      "get": {
        "tags": [
          "PolicyDetail"
        ],
        "parameters": [
          {
            "name": "policyNumber",
            "in": "query",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/B2B.Api.Dtos.Responses.Policy.PolicyPersonalAccidentsDetailResponse"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/B2B.Api.Dtos.Responses.Policy.PolicyPersonalAccidentsDetailResponse"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/B2B.Api.Dtos.Responses.Policy.PolicyPersonalAccidentsDetailResponse"
                }
              }
            }
          }
        }
      }
    },
    "/api/SearchPolicyDetails/SearchPolicyDetails": {
      "get": {
        "tags": [
          "PolicyDetail"
        ],
        "parameters": [
          {
            "name": "policyNumber",
            "in": "query",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "type": "string"
                }
              },
              "application/json": {
                "schema": {
                  "type": "string"
                }
              },
              "text/json": {
                "schema": {
                  "type": "string"
                }
              }
            }
          }
        }
      }
    },
    "/api/PolicyDetail/technical": {
      "get": {
        "tags": [
          "PolicyDetail"
        ],
        "parameters": [
          {
            "name": "policyNumber",
            "in": "query",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/B2B.Api.Dtos.Responses.Policy.PolicyTechnicalDetailResponse"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/B2B.Api.Dtos.Responses.Policy.PolicyTechnicalDetailResponse"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/B2B.Api.Dtos.Responses.Policy.PolicyTechnicalDetailResponse"
                }
              }
            }
          }
        }
      }
    },
    "/api/PolicyDetail/theft": {
      "get": {
        "tags": [
          "PolicyDetail"
        ],
        "parameters": [
          {
            "name": "policyNumber",
            "in": "query",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/B2B.Api.Dtos.Responses.Policy.PolicyTheftDetailResponse"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/B2B.Api.Dtos.Responses.Policy.PolicyTheftDetailResponse"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/B2B.Api.Dtos.Responses.Policy.PolicyTheftDetailResponse"
                }
              }
            }
          }
        }
      }
    },
    "/api/PolicyDetail/transport": {
      "get": {
        "tags": [
          "PolicyDetail"
        ],
        "parameters": [
          {
            "name": "policyNumber",
            "in": "query",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/B2B.Api.Dtos.Responses.Policy.PolicyTransportDetailResponse"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/B2B.Api.Dtos.Responses.Policy.PolicyTransportDetailResponse"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/B2B.Api.Dtos.Responses.Policy.PolicyTransportDetailResponse"
                }
              }
            }
          }
        }
      }
    },
    "/api/Location/GetLocations": {
      "get": {
        "tags": [
          "PolicyLocation"
        ],
        "parameters": [
          {
            "name": "policyPeriodId",
            "in": "query",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/B2B.Api.Dtos.Responses.PolicyLocation.LocationsByPolicyPeriodIdResponse"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/B2B.Api.Dtos.Responses.PolicyLocation.LocationsByPolicyPeriodIdResponse"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/B2B.Api.Dtos.Responses.PolicyLocation.LocationsByPolicyPeriodIdResponse"
                }
              }
            }
          }
        }
      }
    },
    "/api/Producer/GetAffinityGroupsByProducerCode": {
      "get": {
        "tags": [
          "Producer"
        ],
        "parameters": [
          {
            "name": "producerCode",
            "in": "query",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "productCode",
            "in": "query",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "policyTypeCode",
            "in": "query",
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/B2B.Api.Dtos.Responses.Producer.AffinityGroupsByProducerCodeResponse"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/B2B.Api.Dtos.Responses.Producer.AffinityGroupsByProducerCodeResponse"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/B2B.Api.Dtos.Responses.Producer.AffinityGroupsByProducerCodeResponse"
                }
              }
            }
          }
        }
      }
    },
    "/api/Producer/ObtenerRegistrosOperacionesXML": {
      "get": {
        "tags": [
          "Producer"
        ],
        "parameters": [
          {
            "name": "fechaDesde",
            "in": "query",
            "required": true,
            "schema": {
              "type": "string",
              "format": "date-time",
              "example": "2026-03-21T00:00:00-03:00"
            }
          },
          {
            "name": "fechaHasta",
            "in": "query",
            "required": true,
            "schema": {
              "type": "string",
              "format": "date-time",
              "example": "2026-03-21T00:00:00-03:00"
            }
          },
          {
            "name": "cuitProductor",
            "in": "query",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "type": "string"
                }
              },
              "application/json": {
                "schema": {
                  "type": "string"
                }
              },
              "text/json": {
                "schema": {
                  "type": "string"
                }
              }
            }
          }
        },
        "deprecated": true
      }
    },
    "/api/Producer/earned-commissions-paginated": {
      "get": {
        "tags": [
          "Producer"
        ],
        "parameters": [
          {
            "name": "taxId",
            "in": "query",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "yearMonth",
            "in": "query",
            "description": "Mes en Formato yyyyMM",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "currencyCode",
            "in": "query",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "policyTypeCodes",
            "in": "query",
            "schema": {
              "type": "array",
              "items": {
                "type": "string"
              }
            }
          },
          {
            "name": "currentPage",
            "in": "query",
            "schema": {
              "type": "integer",
              "format": "int32"
            }
          },
          {
            "name": "pageSize",
            "in": "query",
            "schema": {
              "type": "integer",
              "format": "int32"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/B2B.Api.Dtos.Responses.Commission.EarnedCommissionsPaginatedResponse"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/B2B.Api.Dtos.Responses.Commission.EarnedCommissionsPaginatedResponse"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/B2B.Api.Dtos.Responses.Commission.EarnedCommissionsPaginatedResponse"
                }
              }
            }
          }
        }
      }
    },
    "/api/Payment/ConsultaMovimientosCobranzaPorDia": {
      "get": {
        "tags": [
          "Producer"
        ],
        "parameters": [
          {
            "name": "cuit",
            "in": "query",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "dia",
            "in": "query",
            "required": true,
            "schema": {
              "type": "string",
              "format": "date-time",
              "example": "2026-03-21T00:00:00-03:00"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/B2B.Api.Dtos.Responses.Producer.MovementsPaymentsByTaxIdPerDayResponse"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/B2B.Api.Dtos.Responses.Producer.MovementsPaymentsByTaxIdPerDayResponse"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/B2B.Api.Dtos.Responses.Producer.MovementsPaymentsByTaxIdPerDayResponse"
                }
              }
            }
          }
        }
      }
    },
    "/api/Job/GetMovements": {
      "post": {
        "tags": [
          "Producer"
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/B2B.Api.Dtos.Requests.Producer.B2BMovementByOrganizationRequest"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/B2B.Api.Dtos.Requests.Producer.B2BMovementByOrganizationRequest"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/B2B.Api.Dtos.Requests.Producer.B2BMovementByOrganizationRequest"
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
                  "$ref": "#/components/schemas/B2B.Api.Dtos.OperationResult.B2BMovementByOrganizationResponse"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/B2B.Api.Dtos.OperationResult.B2BMovementByOrganizationResponse"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/B2B.Api.Dtos.OperationResult.B2BMovementByOrganizationResponse"
                }
              }
            }
          }
        }
      }
    },
    "/api/Producer/portfolio-by-producer-code": {
      "get": {
        "tags": [
          "Producer"
        ],
        "parameters": [
          {
            "name": "producerCode",
            "in": "query",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/B2B.Api.Dtos.Responses.Policy.PortfolioProducerResponse"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/B2B.Api.Dtos.Responses.Policy.PortfolioProducerResponse"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/B2B.Api.Dtos.Responses.Policy.PortfolioProducerResponse"
                }
              }
            }
          }
        }
      }
    },
    "/api/Producer/producer-promises": {
      "get": {
        "tags": [
          "Producer"
        ],
        "parameters": [
          {
            "name": "producerCode",
            "in": "query",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "dateFrom",
            "in": "query",
            "required": true,
            "schema": {
              "type": "string",
              "format": "date-time",
              "example": "2026-03-21T00:00:00-03:00"
            }
          },
          {
            "name": "dateTo",
            "in": "query",
            "required": true,
            "schema": {
              "type": "string",
              "format": "date-time",
              "example": "2026-03-21T00:00:00-03:00"
            }
          },
          {
            "name": "statusCode",
            "in": "query",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/B2B.Api.Dtos.Responses.Producer.B2bProducerPromiseResponse"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/B2B.Api.Dtos.Responses.Producer.B2bProducerPromiseResponse"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/B2B.Api.Dtos.Responses.Producer.B2bProducerPromiseResponse"
                }
              }
            }
          }
        }
      }
    },
    "/api/Producer/producer-promises-item": {
      "get": {
        "tags": [
          "Producer"
        ],
        "parameters": [
          {
            "name": "producerPromisePublicId",
            "in": "query",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/B2B.Api.Dtos.Responses.Producer.B2bProducerPromiseItemsByPublicIdResponse"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/B2B.Api.Dtos.Responses.Producer.B2bProducerPromiseItemsByPublicIdResponse"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/B2B.Api.Dtos.Responses.Producer.B2bProducerPromiseItemsByPublicIdResponse"
                }
              }
            }
          }
        }
      }
    },
    "/api/Producer/GetInfo": {
      "get": {
        "tags": [
          "Producer"
        ],
        "parameters": [
          {
            "name": "producerCode",
            "in": "query",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/B2B.Api.Dtos.OperationResult.Producer.ProducerByProducerCodeResponse"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/B2B.Api.Dtos.OperationResult.Producer.ProducerByProducerCodeResponse"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/B2B.Api.Dtos.OperationResult.Producer.ProducerByProducerCodeResponse"
                }
              }
            }
          }
        }
      }
    },
    "/api/Producer/GetInfoByTaxID": {
      "get": {
        "tags": [
          "Producer"
        ],
        "parameters": [
          {
            "name": "taxId",
            "in": "query",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/B2B.Api.Dtos.Responses.Producer.ProducersInfoByTaxIdResponse"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/B2B.Api.Dtos.Responses.Producer.ProducersInfoByTaxIdResponse"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/B2B.Api.Dtos.Responses.Producer.ProducersInfoByTaxIdResponse"
                }
              }
            }
          }
        }
      }
    },
    "/api/Reportes/FrenteEndoso": {
      "get": {
        "tags": [
          "Report"
        ],
        "parameters": [
          {
            "name": "casa",
            "in": "query",
            "schema": {
              "type": "integer",
              "format": "int32"
            }
          },
          {
            "name": "ramo",
            "in": "query",
            "schema": {
              "type": "integer",
              "format": "int32"
            }
          },
          {
            "name": "polizaNro",
            "in": "query",
            "schema": {
              "type": "integer",
              "format": "int32"
            }
          },
          {
            "name": "endoso",
            "in": "query",
            "schema": {
              "type": "integer",
              "format": "int32"
            }
          },
          {
            "name": "inciso",
            "in": "query",
            "schema": {
              "type": "integer",
              "format": "int32"
            }
          },
          {
            "name": "incluyeClausulas",
            "in": "query",
            "schema": {
              "type": "boolean"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/B2B.Api.Dtos.Responses.Report.B2bReportResponse"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/B2B.Api.Dtos.Responses.Report.B2bReportResponse"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/B2B.Api.Dtos.Responses.Report.B2bReportResponse"
                }
              }
            }
          }
        }
      }
    },
    "/api/Reportes/FrentePoliza": {
      "get": {
        "tags": [
          "Report"
        ],
        "parameters": [
          {
            "name": "casa",
            "in": "query",
            "schema": {
              "type": "integer",
              "format": "int32"
            }
          },
          {
            "name": "ramo",
            "in": "query",
            "schema": {
              "type": "integer",
              "format": "int32"
            }
          },
          {
            "name": "polizaNro",
            "in": "query",
            "schema": {
              "type": "integer",
              "format": "int32"
            }
          },
          {
            "name": "inciso",
            "in": "query",
            "schema": {
              "type": "integer",
              "format": "int32"
            }
          },
          {
            "name": "incluyeClausulas",
            "in": "query",
            "schema": {
              "type": "boolean"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/B2B.Api.Dtos.Responses.Report.B2bReportResponse"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/B2B.Api.Dtos.Responses.Report.B2bReportResponse"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/B2B.Api.Dtos.Responses.Report.B2bReportResponse"
                }
              }
            }
          }
        }
      }
    },
    "/api/Reportes/CuponesDePoliza": {
      "get": {
        "tags": [
          "Report"
        ],
        "parameters": [
          {
            "name": "casa",
            "in": "query",
            "schema": {
              "type": "integer",
              "format": "int32"
            }
          },
          {
            "name": "ramo",
            "in": "query",
            "schema": {
              "type": "integer",
              "format": "int32"
            }
          },
          {
            "name": "polizaNro",
            "in": "query",
            "schema": {
              "type": "integer",
              "format": "int32"
            }
          },
          {
            "name": "inciso",
            "in": "query",
            "schema": {
              "type": "integer",
              "format": "int32"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/B2B.Api.Dtos.Responses.Report.B2bReportResponse"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/B2B.Api.Dtos.Responses.Report.B2bReportResponse"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/B2B.Api.Dtos.Responses.Report.B2bReportResponse"
                }
              }
            }
          }
        }
      }
    },
    "/api/Reportes/CotizacionSeguroPersonas": {
      "get": {
        "tags": [
          "Report"
        ],
        "parameters": [
          {
            "name": "cotizacion",
            "in": "query",
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/B2B.Api.Dtos.Responses.Report.B2bReportResponse"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/B2B.Api.Dtos.Responses.Report.B2bReportResponse"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/B2B.Api.Dtos.Responses.Report.B2bReportResponse"
                }
              }
            }
          }
        }
      }
    },
    "/api/Report/policy-front-fleet": {
      "get": {
        "tags": [
          "Report"
        ],
        "parameters": [
          {
            "name": "policyNumber",
            "in": "query",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "endorsment",
            "in": "query",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "inciso",
            "in": "query",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "clauses",
            "in": "query",
            "schema": {
              "type": "boolean"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/B2B.Api.Dtos.Responses.Report.B2bReportResponse"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/B2B.Api.Dtos.Responses.Report.B2bReportResponse"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/B2B.Api.Dtos.Responses.Report.B2bReportResponse"
                }
              }
            }
          }
        }
      }
    },
    "/api/Reportes/ConstanciaDeCobertura": {
      "get": {
        "tags": [
          "Report"
        ],
        "parameters": [
          {
            "name": "casa",
            "in": "query",
            "schema": {
              "type": "integer",
              "format": "int32"
            }
          },
          {
            "name": "ramo",
            "in": "query",
            "schema": {
              "type": "integer",
              "format": "int32"
            }
          },
          {
            "name": "polizaNro",
            "in": "query",
            "schema": {
              "type": "integer",
              "format": "int32"
            }
          },
          {
            "name": "inciso",
            "in": "query",
            "schema": {
              "type": "integer",
              "format": "int32"
            }
          },
          {
            "name": "fechaEvento",
            "in": "query",
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/B2B.Api.Dtos.Responses.Report.B2bReportResponse"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/B2B.Api.Dtos.Responses.Report.B2bReportResponse"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/B2B.Api.Dtos.Responses.Report.B2bReportResponse"
                }
              }
            }
          }
        }
      }
    },
    "/api/Reportes/ComprobanteDePago": {
      "get": {
        "tags": [
          "Report"
        ],
        "parameters": [
          {
            "name": "casa",
            "in": "query",
            "schema": {
              "type": "integer",
              "format": "int32"
            }
          },
          {
            "name": "ramo",
            "in": "query",
            "schema": {
              "type": "integer",
              "format": "int32"
            }
          },
          {
            "name": "polizaNro",
            "in": "query",
            "schema": {
              "type": "integer",
              "format": "int32"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/B2B.Api.Dtos.Responses.Report.B2bReportResponse"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/B2B.Api.Dtos.Responses.Report.B2bReportResponse"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/B2B.Api.Dtos.Responses.Report.B2bReportResponse"
                }
              }
            }
          }
        }
      }
    },
    "/api/Typelist/BeneficiaryTypes": {
      "get": {
        "tags": [
          "TypeList"
        ],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/B2B.Api.Dtos.Responses.Typelist.B2bTypeListValuesByNameResponse"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/B2B.Api.Dtos.Responses.Typelist.B2bTypeListValuesByNameResponse"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/B2B.Api.Dtos.Responses.Typelist.B2bTypeListValuesByNameResponse"
                }
              }
            }
          }
        }
      }
    },
    "/api/TypeList/AAHRelationship": {
      "get": {
        "tags": [
          "TypeList"
        ],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/B2B.Api.Dtos.Responses.Typelist.B2bTypeListValuesByNameResponse"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/B2B.Api.Dtos.Responses.Typelist.B2bTypeListValuesByNameResponse"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/B2B.Api.Dtos.Responses.Typelist.B2bTypeListValuesByNameResponse"
                }
              }
            }
          }
        }
      }
    },
    "/api/TypeList/AccountContactRole": {
      "get": {
        "tags": [
          "TypeList"
        ],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/B2B.Api.Dtos.Responses.Typelist.B2bTypeListValuesByNameResponse"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/B2B.Api.Dtos.Responses.Typelist.B2bTypeListValuesByNameResponse"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/B2B.Api.Dtos.Responses.Typelist.B2bTypeListValuesByNameResponse"
                }
              }
            }
          }
        }
      }
    },
    "/api/TypeList/AccountPaymentMethod": {
      "get": {
        "tags": [
          "TypeList"
        ],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/B2B.Api.Dtos.Responses.Typelist.B2bTypeListValuesByFilterResponse"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/B2B.Api.Dtos.Responses.Typelist.B2bTypeListValuesByFilterResponse"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/B2B.Api.Dtos.Responses.Typelist.B2bTypeListValuesByFilterResponse"
                }
              }
            }
          }
        }
      }
    },
    "/api/TypeList/AdditionalInterestType": {
      "get": {
        "tags": [
          "TypeList"
        ],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/B2B.Api.Dtos.Responses.Typelist.B2bTypeListValuesByCategoryResponse"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/B2B.Api.Dtos.Responses.Typelist.B2bTypeListValuesByCategoryResponse"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/B2B.Api.Dtos.Responses.Typelist.B2bTypeListValuesByCategoryResponse"
                }
              }
            }
          }
        }
      }
    },
    "/api/TypeList/Address": {
      "get": {
        "tags": [
          "TypeList"
        ],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/B2B.Api.Dtos.Responses.Typelist.B2bTypeListValuesByNameResponse"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/B2B.Api.Dtos.Responses.Typelist.B2bTypeListValuesByNameResponse"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/B2B.Api.Dtos.Responses.Typelist.B2bTypeListValuesByNameResponse"
                }
              }
            }
          }
        }
      }
    },
    "/api/TypeList/AddressType": {
      "get": {
        "tags": [
          "TypeList"
        ],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/B2B.Api.Dtos.Responses.Typelist.B2bTypeListValuesByNameResponse"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/B2B.Api.Dtos.Responses.Typelist.B2bTypeListValuesByNameResponse"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/B2B.Api.Dtos.Responses.Typelist.B2bTypeListValuesByNameResponse"
                }
              }
            }
          }
        }
      }
    },
    "/api/TypeList/AutomaticAdjustSum": {
      "get": {
        "tags": [
          "TypeList"
        ],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/B2B.Api.Dtos.Responses.Typelist.B2bTypeListValuesByNameResponse"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/B2B.Api.Dtos.Responses.Typelist.B2bTypeListValuesByNameResponse"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/B2B.Api.Dtos.Responses.Typelist.B2bTypeListValuesByNameResponse"
                }
              }
            }
          }
        }
      }
    },
    "/api/TypeList/BankPaymentCodes": {
      "get": {
        "tags": [
          "TypeList"
        ],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/B2B.Api.Dtos.Responses.Typelist.B2bTypeListValuesByNameResponse"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/B2B.Api.Dtos.Responses.Typelist.B2bTypeListValuesByNameResponse"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/B2B.Api.Dtos.Responses.Typelist.B2bTypeListValuesByNameResponse"
                }
              }
            }
          }
        }
      }
    },
    "/api/TypeList/BranchOffice": {
      "get": {
        "tags": [
          "TypeList"
        ],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/B2B.Api.Dtos.Responses.Typelist.B2bTypeListValuesByFilterResponse"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/B2B.Api.Dtos.Responses.Typelist.B2bTypeListValuesByFilterResponse"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/B2B.Api.Dtos.Responses.Typelist.B2bTypeListValuesByFilterResponse"
                }
              }
            }
          }
        }
      }
    },
    "/api/TypeList/VehicleAccesories": {
      "get": {
        "tags": [
          "TypeList"
        ],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/B2B.Api.Dtos.Responses.Typelist.B2bTypeListValuesByNameResponse"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/B2B.Api.Dtos.Responses.Typelist.B2bTypeListValuesByNameResponse"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/B2B.Api.Dtos.Responses.Typelist.B2bTypeListValuesByNameResponse"
                }
              }
            }
          }
        }
      }
    },
    "/api/TypeList/AdditionalFuelType": {
      "get": {
        "tags": [
          "TypeList"
        ],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/B2B.Api.Dtos.Responses.Typelist.B2bTypeListValuesByFilterResponse"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/B2B.Api.Dtos.Responses.Typelist.B2bTypeListValuesByFilterResponse"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/B2B.Api.Dtos.Responses.Typelist.B2bTypeListValuesByFilterResponse"
                }
              }
            }
          }
        }
      }
    },
    "/api/TypeList/AutomaticAdjustVehicles": {
      "get": {
        "tags": [
          "TypeList"
        ],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/B2B.Api.Dtos.Responses.Typelist.B2bTypeListValuesByNameResponse"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/B2B.Api.Dtos.Responses.Typelist.B2bTypeListValuesByNameResponse"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/B2B.Api.Dtos.Responses.Typelist.B2bTypeListValuesByNameResponse"
                }
              }
            }
          }
        }
      }
    },
    "/api/TypeList/Categories": {
      "get": {
        "tags": [
          "TypeList"
        ],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/B2B.Api.Dtos.Responses.Typelist.B2bTypeListValuesByNameResponse"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/B2B.Api.Dtos.Responses.Typelist.B2bTypeListValuesByNameResponse"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/B2B.Api.Dtos.Responses.Typelist.B2bTypeListValuesByNameResponse"
                }
              }
            }
          }
        }
      }
    },
    "/api/TypeList/Colors": {
      "get": {
        "tags": [
          "TypeList"
        ],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/B2B.Api.Dtos.Responses.Typelist.B2bTypeListValuesByNameResponse"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/B2B.Api.Dtos.Responses.Typelist.B2bTypeListValuesByNameResponse"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/B2B.Api.Dtos.Responses.Typelist.B2bTypeListValuesByNameResponse"
                }
              }
            }
          }
        }
      }
    },
    "/api/TypeList/FuelTypes": {
      "get": {
        "tags": [
          "TypeList"
        ],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/B2B.Api.Dtos.Responses.Typelist.B2bTypeListValuesByFilterResponse"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/B2B.Api.Dtos.Responses.Typelist.B2bTypeListValuesByFilterResponse"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/B2B.Api.Dtos.Responses.Typelist.B2bTypeListValuesByFilterResponse"
                }
              }
            }
          }
        }
      }
    },
    "/api/TypeList/GPSProvider": {
      "get": {
        "tags": [
          "TypeList"
        ],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/B2B.Api.Dtos.Responses.Typelist.B2bTypeListValuesByNameResponse"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/B2B.Api.Dtos.Responses.Typelist.B2bTypeListValuesByNameResponse"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/B2B.Api.Dtos.Responses.Typelist.B2bTypeListValuesByNameResponse"
                }
              }
            }
          }
        }
      }
    },
    "/api/TypeList/Jurisdiction": {
      "get": {
        "tags": [
          "TypeList"
        ],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/B2B.Api.Dtos.Responses.Typelist.B2bTypeListValuesByNameResponse"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/B2B.Api.Dtos.Responses.Typelist.B2bTypeListValuesByNameResponse"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/B2B.Api.Dtos.Responses.Typelist.B2bTypeListValuesByNameResponse"
                }
              }
            }
          }
        }
      }
    },
    "/api/TypeList/CA7ProductOffering": {
      "get": {
        "tags": [
          "TypeList"
        ],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/B2B.Api.Dtos.Responses.Typelist.B2bTypeListValuesByNameResponse"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/B2B.Api.Dtos.Responses.Typelist.B2bTypeListValuesByNameResponse"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/B2B.Api.Dtos.Responses.Typelist.B2bTypeListValuesByNameResponse"
                }
              }
            }
          }
        }
      }
    },
    "/api/TypeList/Usage": {
      "get": {
        "tags": [
          "TypeList"
        ],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/B2B.Api.Dtos.Responses.Typelist.B2bTypeListValuesByNameResponse"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/B2B.Api.Dtos.Responses.Typelist.B2bTypeListValuesByNameResponse"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/B2B.Api.Dtos.Responses.Typelist.B2bTypeListValuesByNameResponse"
                }
              }
            }
          }
        }
      }
    },
    "/api/TypeList/ChannelEntry": {
      "get": {
        "tags": [
          "TypeList"
        ],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/B2B.Api.Dtos.Responses.Typelist.B2bTypeListValuesByNameResponse"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/B2B.Api.Dtos.Responses.Typelist.B2bTypeListValuesByNameResponse"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/B2B.Api.Dtos.Responses.Typelist.B2bTypeListValuesByNameResponse"
                }
              }
            }
          }
        }
      }
    },
    "/api/TypeList/ContactType": {
      "get": {
        "tags": [
          "TypeList"
        ],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/B2B.Api.Dtos.Responses.Typelist.B2bTypeListValuesByNameResponse"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/B2B.Api.Dtos.Responses.Typelist.B2bTypeListValuesByNameResponse"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/B2B.Api.Dtos.Responses.Typelist.B2bTypeListValuesByNameResponse"
                }
              }
            }
          }
        }
      }
    },
    "/api/TypeList/Country": {
      "get": {
        "tags": [
          "TypeList"
        ],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/B2B.Api.Dtos.Responses.Typelist.B2bTypeListValuesByFilterResponse"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/B2B.Api.Dtos.Responses.Typelist.B2bTypeListValuesByFilterResponse"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/B2B.Api.Dtos.Responses.Typelist.B2bTypeListValuesByFilterResponse"
                }
              }
            }
          }
        }
      }
    },
    "/api/TypeList/CP7BuildingActivity": {
      "get": {
        "tags": [
          "TypeList"
        ],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/B2B.Api.Dtos.Responses.Typelist.B2bTypeListValuesByFilterResponse"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/B2B.Api.Dtos.Responses.Typelist.B2bTypeListValuesByFilterResponse"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/B2B.Api.Dtos.Responses.Typelist.B2bTypeListValuesByFilterResponse"
                }
              }
            }
          }
        }
      }
    },
    "/api/TypeList/IVA": {
      "get": {
        "tags": [
          "TypeList"
        ],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/B2B.Api.Dtos.Responses.Typelist.B2bTypeListValuesByCategoryResponse"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/B2B.Api.Dtos.Responses.Typelist.B2bTypeListValuesByCategoryResponse"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/B2B.Api.Dtos.Responses.Typelist.B2bTypeListValuesByCategoryResponse"
                }
              }
            }
          }
        }
      }
    },
    "/api/TypeList/freight-transported": {
      "get": {
        "tags": [
          "TypeList"
        ],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/B2B.Api.Dtos.Responses.Typelist.B2bTypeListFreightTransportedResponse"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/B2B.Api.Dtos.Responses.Typelist.B2bTypeListFreightTransportedResponse"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/B2B.Api.Dtos.Responses.Typelist.B2bTypeListFreightTransportedResponse"
                }
              }
            }
          }
        }
      }
    },
    "/api/TypeList/GenderType": {
      "get": {
        "tags": [
          "TypeList"
        ],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/B2B.Api.Dtos.Responses.Typelist.B2bTypeListValuesByNameResponse"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/B2B.Api.Dtos.Responses.Typelist.B2bTypeListValuesByNameResponse"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/B2B.Api.Dtos.Responses.Typelist.B2bTypeListValuesByNameResponse"
                }
              }
            }
          }
        }
      }
    },
    "/api/TypeList/JobTypes": {
      "get": {
        "tags": [
          "TypeList"
        ],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/B2B.Api.Dtos.Responses.Typelist.B2bTypeListValuesByNameResponse"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/B2B.Api.Dtos.Responses.Typelist.B2bTypeListValuesByNameResponse"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/B2B.Api.Dtos.Responses.Typelist.B2bTypeListValuesByNameResponse"
                }
              }
            }
          }
        }
      }
    },
    "/api/TypeList/GetLossCause": {
      "get": {
        "tags": [
          "TypeList"
        ],
        "parameters": [
          {
            "name": "countryCode",
            "in": "query",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "filter",
            "in": "query",
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/B2B.Api.Dtos.Responses.Typelist.B2bTypeListValuesByFilterResponse"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/B2B.Api.Dtos.Responses.Typelist.B2bTypeListValuesByFilterResponse"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/B2B.Api.Dtos.Responses.Typelist.B2bTypeListValuesByFilterResponse"
                }
              }
            }
          }
        }
      }
    },
    "/api/TypeList/MaritalStatus": {
      "get": {
        "tags": [
          "TypeList"
        ],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/B2B.Api.Dtos.Responses.Typelist.B2bTypeListValuesByNameResponse"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/B2B.Api.Dtos.Responses.Typelist.B2bTypeListValuesByNameResponse"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/B2B.Api.Dtos.Responses.Typelist.B2bTypeListValuesByNameResponse"
                }
              }
            }
          }
        }
      }
    },
    "/api/TypeList/OfficialIDType": {
      "get": {
        "tags": [
          "TypeList"
        ],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/B2B.Api.Dtos.Responses.Typelist.B2bTypeListValuesByFilterResponse"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/B2B.Api.Dtos.Responses.Typelist.B2bTypeListValuesByFilterResponse"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/B2B.Api.Dtos.Responses.Typelist.B2bTypeListValuesByFilterResponse"
                }
              }
            }
          }
        }
      }
    },
    "/api/TypeList/PaymentType": {
      "get": {
        "tags": [
          "TypeList"
        ],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/B2B.Api.Dtos.Responses.Typelist.B2bTypeListValuesByNameResponse"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/B2B.Api.Dtos.Responses.Typelist.B2bTypeListValuesByNameResponse"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/B2B.Api.Dtos.Responses.Typelist.B2bTypeListValuesByNameResponse"
                }
              }
            }
          }
        }
      }
    },
    "/api/TypeList/PersonOccupation": {
      "get": {
        "tags": [
          "TypeList"
        ],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/B2B.Api.Dtos.Responses.Typelist.B2bTypeListValuesByNameResponse"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/B2B.Api.Dtos.Responses.Typelist.B2bTypeListValuesByNameResponse"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/B2B.Api.Dtos.Responses.Typelist.B2bTypeListValuesByNameResponse"
                }
              }
            }
          }
        }
      }
    },
    "/api/TypeList/PersonOccupationVidaIndividual": {
      "get": {
        "tags": [
          "TypeList"
        ],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/B2B.Api.Dtos.Responses.Typelist.B2bTypeListValuesByFilterResponse"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/B2B.Api.Dtos.Responses.Typelist.B2bTypeListValuesByFilterResponse"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/B2B.Api.Dtos.Responses.Typelist.B2bTypeListValuesByFilterResponse"
                }
              }
            }
          }
        }
      }
    },
    "/api/TypeList/PolicyPeriodStatus": {
      "get": {
        "tags": [
          "TypeList"
        ],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/B2B.Api.Dtos.Responses.Typelist.B2bTypeListValuesByNameResponse"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/B2B.Api.Dtos.Responses.Typelist.B2bTypeListValuesByNameResponse"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/B2B.Api.Dtos.Responses.Typelist.B2bTypeListValuesByNameResponse"
                }
              }
            }
          }
        }
      }
    },
    "/api/TypeList/PolicyType": {
      "get": {
        "tags": [
          "TypeList"
        ],
        "parameters": [
          {
            "name": "product",
            "in": "query",
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/B2B.Api.Dtos.Responses.Typelist.B2bTypeListValuesByFilterResponse"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/B2B.Api.Dtos.Responses.Typelist.B2bTypeListValuesByFilterResponse"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/B2B.Api.Dtos.Responses.Typelist.B2bTypeListValuesByFilterResponse"
                }
              }
            }
          }
        }
      }
    },
    "/api/TypeList/PrimaryPhoneType": {
      "get": {
        "tags": [
          "TypeList"
        ],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/B2B.Api.Dtos.Responses.Typelist.B2bTypeListValuesByNameResponse"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/B2B.Api.Dtos.Responses.Typelist.B2bTypeListValuesByNameResponse"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/B2B.Api.Dtos.Responses.Typelist.B2bTypeListValuesByNameResponse"
                }
              }
            }
          }
        }
      }
    },
    "/api/TypeList/Product": {
      "get": {
        "tags": [
          "TypeList"
        ],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/B2B.Api.Dtos.Responses.Typelist.B2bTypeListValuesByNameResponse"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/B2B.Api.Dtos.Responses.Typelist.B2bTypeListValuesByNameResponse"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/B2B.Api.Dtos.Responses.Typelist.B2bTypeListValuesByNameResponse"
                }
              }
            }
          }
        }
      }
    },
    "/api/TypeList/RepresentativeType": {
      "get": {
        "tags": [
          "TypeList"
        ],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/B2B.Api.Dtos.Responses.Typelist.B2bTypeListValuesByNameResponse"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/B2B.Api.Dtos.Responses.Typelist.B2bTypeListValuesByNameResponse"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/B2B.Api.Dtos.Responses.Typelist.B2bTypeListValuesByNameResponse"
                }
              }
            }
          }
        }
      }
    },
    "/api/TypeList/SendCuponBy": {
      "get": {
        "tags": [
          "TypeList"
        ],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/B2B.Api.Dtos.Responses.Typelist.B2bTypeListValuesByNameResponse"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/B2B.Api.Dtos.Responses.Typelist.B2bTypeListValuesByNameResponse"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/B2B.Api.Dtos.Responses.Typelist.B2bTypeListValuesByNameResponse"
                }
              }
            }
          }
        }
      }
    },
    "/api/TypeList/Term": {
      "get": {
        "tags": [
          "TypeList"
        ],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/B2B.Api.Dtos.Responses.Typelist.B2bTypeListValuesByNameResponse"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/B2B.Api.Dtos.Responses.Typelist.B2bTypeListValuesByNameResponse"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/B2B.Api.Dtos.Responses.Typelist.B2bTypeListValuesByNameResponse"
                }
              }
            }
          }
        }
      }
    },
    "/api/User/producers-current-user": {
      "get": {
        "tags": [
          "User"
        ],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/B2B.Api.Dtos.Responses.Producer.ProducerInfoResponse"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/B2B.Api.Dtos.Responses.Producer.ProducerInfoResponse"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/B2B.Api.Dtos.Responses.Producer.ProducerInfoResponse"
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
      "B2B.Api.Dtos.Dtos.B2BMovement": {
        "type": "object",
        "properties": {
          "Offering": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "OfferingPlan": {
            "type": "string",
            "nullable": true
          },
          "PolicyPeriodID": {
            "type": "string",
            "nullable": true
          },
          "PolicyType": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "Product": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "ScopeCoverage": {
            "type": "string",
            "nullable": true
          },
          "StartDate": {
            "type": "string",
            "format": "date-time",
            "example": "2026-03-21T00:00:00-03:00"
          },
          "Status": {
            "type": "string",
            "nullable": true
          },
          "TransactionJob": {
            "type": "string",
            "nullable": true
          },
          "Subtype": {
            "type": "string",
            "nullable": true
          },
          "EffectiveDate": {
            "type": "string",
            "format": "date-time",
            "example": "2026-03-21T00:00:00-03:00"
          },
          "PeriodEnd": {
            "type": "string",
            "format": "date-time",
            "example": "2026-03-21T00:00:00-03:00"
          },
          "PolicyStartDate": {
            "type": "string",
            "format": "date-time",
            "example": "2026-03-21T00:00:00-03:00"
          },
          "PolicyNumber": {
            "type": "string",
            "nullable": true
          },
          "CloseDate": {
            "type": "string",
            "format": "date-time",
            "nullable": true,
            "example": "2026-03-21T00:00:00-03:00"
          }
        },
        "additionalProperties": false
      },
      "B2B.Api.Dtos.Dtos.B2bAccesory": {
        "type": "object",
        "properties": {
          "AccesoryType": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "Brand": {
            "type": "string",
            "nullable": true
          },
          "InsuredAmountCost": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bMonetaryAmount"
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
      "B2B.Api.Dtos.Dtos.B2bAdditionalDataBank": {
        "type": "object",
        "properties": {
          "ApplicationNumber": {
            "type": "string",
            "nullable": true
          },
          "BranchCodeAccount": {
            "type": "string",
            "nullable": true
          },
          "BranchCodeAssigned": {
            "type": "string",
            "nullable": true
          },
          "Cbu": {
            "type": "string",
            "nullable": true
          },
          "DebitAccountNumber": {
            "type": "string",
            "nullable": true
          },
          "DueDate": {
            "type": "string",
            "format": "date-time",
            "nullable": true,
            "example": "2026-03-21T00:00:00-03:00"
          },
          "GarmentLoanLeasingNumber": {
            "type": "string",
            "nullable": true
          },
          "PaymentCode": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "PlanCode": {
            "type": "string",
            "nullable": true
          },
          "ProductCode": {
            "type": "string",
            "nullable": true
          },
          "RiskAreaCode": {
            "type": "string",
            "nullable": true
          },
          "SaleBranchCode": {
            "type": "string",
            "nullable": true
          }
        },
        "additionalProperties": false
      },
      "B2B.Api.Dtos.Dtos.B2bAdditionalInterestContact": {
        "type": "object",
        "properties": {
          "AdditionalInterestType": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "Contact": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bContactDetail"
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
      "B2B.Api.Dtos.Dtos.B2bAddress": {
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
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
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
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
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
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "StreetNumber": {
            "type": "string",
            "nullable": true
          }
        },
        "additionalProperties": false
      },
      "B2B.Api.Dtos.Dtos.B2bAddressSummary": {
        "type": "object",
        "properties": {
          "PostalCode": {
            "type": "string",
            "nullable": true
          },
          "Country": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "City": {
            "type": "string",
            "nullable": true
          },
          "Block": {
            "type": "string",
            "nullable": true
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
          "StreetNumber": {
            "type": "string",
            "nullable": true
          },
          "State": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "Description": {
            "type": "string",
            "nullable": true
          },
          "AddressType": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          }
        },
        "additionalProperties": false
      },
      "B2B.Api.Dtos.Dtos.B2bAffinityGroup": {
        "type": "object",
        "properties": {
          "AffinityGroupType": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "DisplayName": {
            "type": "string",
            "nullable": true
          },
          "EndDate": {
            "type": "string",
            "format": "date-time",
            "nullable": true,
            "example": "2026-03-21T00:00:00-03:00"
          },
          "Organization": {
            "type": "string",
            "nullable": true
          },
          "Origins": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
            },
            "nullable": true
          },
          "PublicId": {
            "type": "string",
            "nullable": true
          },
          "StartDate": {
            "type": "string",
            "format": "date-time",
            "nullable": true,
            "example": "2026-03-21T00:00:00-03:00"
          }
        },
        "additionalProperties": false
      },
      "B2B.Api.Dtos.Dtos.B2bAttorney": {
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
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "IDDocumentType": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "LastName": {
            "type": "string",
            "nullable": true
          }
        },
        "additionalProperties": false
      },
      "B2B.Api.Dtos.Dtos.B2bAttribute": {
        "type": "object",
        "properties": {
          "ColumnName": {
            "type": "string",
            "nullable": true
          },
          "Label": {
            "type": "string",
            "nullable": true
          },
          "Type": {
            "type": "string",
            "nullable": true
          },
          "Value": {
            "type": "string",
            "nullable": true
          }
        },
        "additionalProperties": false
      },
      "B2B.Api.Dtos.Dtos.B2bCancellationInfo": {
        "type": "object",
        "properties": {
          "CancellationDate": {
            "type": "string",
            "format": "date-time",
            "nullable": true,
            "example": "2026-03-21T00:00:00-03:00"
          },
          "CancellationComments": {
            "type": "string",
            "nullable": true
          },
          "ReasonCode": {
            "type": "string",
            "nullable": true
          },
          "ReasonDescription": {
            "type": "string",
            "nullable": true
          }
        },
        "additionalProperties": false
      },
      "B2B.Api.Dtos.Dtos.B2bCityDto": {
        "type": "object",
        "properties": {
          "Estado": {
            "type": "string",
            "nullable": true
          },
          "Nombre": {
            "type": "string",
            "nullable": true
          },
          "Sinonimo": {
            "type": "string",
            "nullable": true
          },
          "EstadoDescripcion": {
            "type": "string",
            "nullable": true
          }
        },
        "additionalProperties": false
      },
      "B2B.Api.Dtos.Dtos.B2bContactDetail": {
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
              "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bAddress"
            },
            "nullable": true
          },
          "Attorney": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bAttorney"
          },
          "AvailablePhoneNumbers": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bPhone"
            },
            "nullable": true
          },
          "CUIL": {
            "type": "string",
            "nullable": true
          },
          "ContactType": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
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
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "Industry": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
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
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bMaritalStatus"
          },
          "Name": {
            "type": "string",
            "nullable": true
          },
          "Nationality": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "Occupation": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "OfficialIDType": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "PEP": {
            "type": "boolean"
          },
          "PrimaryNamedInsured": {
            "type": "boolean"
          },
          "PrimaryPhoneType": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "PreferredSettlementCurrency": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "PublicID": {
            "type": "string",
            "nullable": true
          },
          "Resident": {
            "type": "boolean"
          },
          "SchoolLevel": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "TaxID": {
            "type": "string",
            "nullable": true
          },
          "TaxStatuses": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bTaxStatus"
            },
            "nullable": true
          },
          "UIFFormSubmitted": {
            "type": "boolean"
          },
          "UifRepresentative": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bUifRepresentative"
            },
            "nullable": true
          }
        },
        "additionalProperties": false
      },
      "B2B.Api.Dtos.Dtos.B2bEarnedCommission": {
        "type": "object",
        "properties": {
          "Amount": {
            "type": "number",
            "format": "double",
            "nullable": true
          },
          "Basis": {
            "type": "number",
            "format": "double",
            "nullable": true
          },
          "CommissionProducerCode": {
            "type": "string",
            "nullable": true
          },
          "CommissionProducerCodeType": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "Currency": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "EffectiveDate": {
            "type": "string",
            "format": "date-time",
            "nullable": true,
            "example": "2026-03-21T00:00:00-03:00"
          },
          "OverrideCommission": {
            "type": "boolean",
            "nullable": true
          },
          "PolicyNumber": {
            "type": "string",
            "nullable": true
          },
          "PolicyProducerCode": {
            "type": "string",
            "nullable": true
          },
          "PolicyProduct": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "PolicyType": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "Premium": {
            "type": "number",
            "format": "double",
            "nullable": true
          },
          "PrimaryInsured": {
            "type": "string",
            "nullable": true
          }
        },
        "additionalProperties": false
      },
      "B2B.Api.Dtos.Dtos.B2bFreightTransported": {
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
          "CodeSC": {
            "type": "string",
            "nullable": true
          }
        },
        "additionalProperties": false
      },
      "B2B.Api.Dtos.Dtos.B2bInspectionFiles": {
        "type": "object",
        "properties": {
          "Name": {
            "type": "string",
            "nullable": true
          },
          "Content": {
            "type": "string",
            "nullable": true
          }
        },
        "additionalProperties": false
      },
      "B2B.Api.Dtos.Dtos.B2bInvoice": {
        "type": "object",
        "properties": {
          "Amount": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bMonetaryAmount"
          },
          "AmountDue": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bMonetaryAmount"
          },
          "InstallmentNumber": {
            "type": "string",
            "nullable": true
          },
          "InvoiceDate": {
            "type": "string",
            "format": "date-time",
            "nullable": true,
            "example": "2026-03-21T00:00:00-03:00"
          },
          "InvoiceDueDate": {
            "type": "string",
            "format": "date-time",
            "nullable": true,
            "example": "2026-03-21T00:00:00-03:00"
          },
          "PaidStatus": {
            "type": "string",
            "nullable": true
          },
          "PaidStatusDescription": {
            "type": "string",
            "nullable": true
          },
          "InvoiceNumber": {
            "type": "string",
            "nullable": true
          }
        },
        "additionalProperties": false
      },
      "B2B.Api.Dtos.Dtos.B2bInvoiceSummary": {
        "type": "object",
        "properties": {
          "Invoices": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bInvoice"
            },
            "nullable": true
          },
          "PaidAmount": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bMonetaryAmount"
          },
          "TotalCharges": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bMonetaryAmount"
          },
          "UnappliedFundsBalance": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bMonetaryAmount"
          },
          "WrittenOffBalance": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bMonetaryAmount"
          }
        },
        "additionalProperties": false
      },
      "B2B.Api.Dtos.Dtos.B2bKeyValue": {
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
      "B2B.Api.Dtos.Dtos.B2bLoanInfo": {
        "type": "object",
        "properties": {
          "LoanNumber": {
            "type": "string",
            "nullable": true
          },
          "LoanExpirationDate": {
            "type": "string",
            "format": "date-time",
            "nullable": true,
            "example": "2026-03-21T00:00:00-03:00"
          },
          "LoanCompanyName": {
            "type": "string",
            "nullable": true
          }
        },
        "additionalProperties": false
      },
      "B2B.Api.Dtos.Dtos.B2bLocation": {
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
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
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
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
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
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
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
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
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
      "B2B.Api.Dtos.Dtos.B2bMaritalStatus": {
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
      "B2B.Api.Dtos.Dtos.B2bMonetaryAmount": {
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
      "B2B.Api.Dtos.Dtos.B2bPaymentHistory": {
        "type": "object",
        "properties": {
          "ApplicationDate": {
            "type": "string",
            "format": "date-time",
            "nullable": true,
            "example": "2026-03-21T00:00:00-03:00"
          },
          "InvoiceDueDate": {
            "type": "string",
            "format": "date-time",
            "nullable": true,
            "example": "2026-03-21T00:00:00-03:00"
          },
          "OperationNumber": {
            "type": "string",
            "nullable": true
          },
          "Origin": {
            "type": "string",
            "nullable": true
          },
          "PaymentAmount": {
            "type": "string",
            "nullable": true
          },
          "PaymentAppliedAmount": {
            "type": "string",
            "nullable": true
          },
          "ProducerPromiseNumber": {
            "type": "string",
            "nullable": true
          },
          "ReceivedDate": {
            "type": "string",
            "format": "date-time",
            "nullable": true,
            "example": "2026-03-21T00:00:00-03:00"
          },
          "ReversedDate": {
            "type": "string",
            "format": "date-time",
            "nullable": true,
            "example": "2026-03-21T00:00:00-03:00"
          },
          "Charge": {
            "type": "string",
            "nullable": true
          },
          "Currency": {
            "type": "string",
            "nullable": true
          },
          "DistributedDate": {
            "type": "string",
            "format": "date-time",
            "nullable": true,
            "example": "2026-03-21T00:00:00-03:00"
          }
        },
        "additionalProperties": false
      },
      "B2B.Api.Dtos.Dtos.B2bPhone": {
        "type": "object",
        "properties": {
          "PhoneCountry": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "PhoneNumber": {
            "type": "string",
            "nullable": true
          },
          "PhoneType": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          }
        },
        "additionalProperties": false
      },
      "B2B.Api.Dtos.Dtos.B2bPolicyDetailAuto": {
        "type": "object",
        "properties": {
          "Subtype": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "OrganizerAgents": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
            },
            "nullable": true
          },
          "PaymentFees": {
            "type": "integer",
            "format": "int32",
            "nullable": true
          },
          "PaymentMethod": {
            "type": "string",
            "nullable": true
          },
          "PaymentMethodCbu": {
            "type": "string",
            "nullable": true
          },
          "PaymentEntity": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "PeriodEnd": {
            "type": "string",
            "format": "date-time",
            "nullable": true,
            "example": "2026-03-21T00:00:00-03:00"
          },
          "PeriodStart": {
            "type": "string",
            "format": "date-time",
            "nullable": true,
            "example": "2026-03-21T00:00:00-03:00"
          },
          "PolicyPeriodId": {
            "type": "string",
            "nullable": true
          },
          "PolicyTerm": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "ProducerOfService": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "RamoDescripcion": {
            "type": "string",
            "nullable": true
          },
          "PreviousPolicy": {
            "type": "string",
            "nullable": true
          },
          "NextPolicy": {
            "type": "string",
            "nullable": true
          },
          "ServiceOrganizer": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "Status": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "ProducerAgent": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "AccountNumber": {
            "type": "string",
            "nullable": true
          },
          "AffinityGroup": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bAffinityGroup"
          },
          "AutomaticAdjustSum": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "Contacts": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bContactDetail"
            },
            "nullable": true
          },
          "Country": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "Ext_PolicyType": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "Ext_RamoSSN": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "JobNumber": {
            "type": "string",
            "nullable": true
          },
          "MaillingAddress": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bAddressSummary"
          },
          "TypeOfContractings": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "Ext_TrackingPAS": {
            "type": "string",
            "nullable": true
          },
          "CommercialAternative": {
            "type": "string",
            "nullable": true
          },
          "Transactions": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bTransactionAuto"
            },
            "nullable": true
          },
          "Vehicle": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bVehicle"
          },
          "FleetOfVehicles": {
            "type": "array",
            "items": {
              "type": "string"
            },
            "nullable": true
          },
          "Invoice": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bInvoiceSummary"
          },
          "ReasonsCancellation": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bCancellationInfo"
          },
          "AdditionalDataBank": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bAdditionalDataBank"
          },
          "Payments": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bPaymentHistory"
            },
            "nullable": true
          },
          "LoanInfo": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bLoanInfo"
          },
          "PolicyStatus": {
            "type": "string",
            "nullable": true
          },
          "PledgeLoanInfo": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.PledgeLoanDto"
          }
        },
        "additionalProperties": false
      },
      "B2B.Api.Dtos.Dtos.B2bPremiumDetail": {
        "type": "object",
        "properties": {
          "Ext_TaxType": {
            "type": "string",
            "nullable": true
          },
          "TaxTypeName": {
            "type": "string",
            "nullable": true
          },
          "TaxDescription": {
            "type": "string",
            "nullable": true
          },
          "ActualAmount": {
            "type": "number",
            "format": "double"
          },
          "Basis": {
            "type": "number",
            "format": "double"
          }
        },
        "additionalProperties": false
      },
      "B2B.Api.Dtos.Dtos.B2bProducerPromise": {
        "type": "object",
        "properties": {
          "Alias": {
            "type": "string",
            "nullable": true
          },
          "ProducerCode": {
            "type": "string",
            "nullable": true
          },
          "ProducerPromiseNumber": {
            "type": "string",
            "nullable": true
          },
          "PromiseDate": {
            "type": "string",
            "format": "date-time",
            "nullable": true,
            "example": "2026-03-21T00:00:00-03:00"
          },
          "PublicId": {
            "type": "string",
            "nullable": true
          }
        },
        "additionalProperties": false
      },
      "B2B.Api.Dtos.Dtos.B2bProducerPromiseItem": {
        "type": "object",
        "properties": {
          "Amount": {
            "type": "number",
            "format": "double",
            "nullable": true
          },
          "InsuredName": {
            "type": "string",
            "nullable": true
          },
          "InvoicePaymentDueDate": {
            "type": "string",
            "format": "date-time",
            "nullable": true,
            "example": "2026-03-21T00:00:00-03:00"
          },
          "PolicyNumber": {
            "type": "string",
            "nullable": true
          },
          "InvoiceNumber": {
            "type": "string",
            "nullable": true
          },
          "PublicId": {
            "type": "string",
            "nullable": true
          },
          "AccountNumber": {
            "type": "string",
            "nullable": true
          },
          "ChargeConcept": {
            "type": "string",
            "nullable": true
          },
          "Status": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          }
        },
        "additionalProperties": false
      },
      "B2B.Api.Dtos.Dtos.B2bRejectedPaymentRequestDto": {
        "type": "object",
        "properties": {
          "Poliza": {
            "type": "string",
            "nullable": true
          },
          "FechaProceso": {
            "type": "string",
            "format": "date-time",
            "example": "2026-03-21T00:00:00-03:00"
          },
          "Socio": {
            "type": "string",
            "nullable": true
          },
          "DescripcionTarjeta": {
            "type": "string",
            "nullable": true
          },
          "Saldo": {
            "type": "number",
            "format": "double"
          },
          "CausaRechazo": {
            "type": "string",
            "nullable": true
          },
          "TipoRechazo": {
            "type": "string",
            "nullable": true
          }
        },
        "additionalProperties": false
      },
      "B2B.Api.Dtos.Dtos.B2bTaxStatus": {
        "type": "object",
        "properties": {
          "EnrollementStatus": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "PublicID": {
            "type": "string",
            "nullable": true
          },
          "RetentionAgent": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "StatusValue": {
            "type": "string",
            "nullable": true
          },
          "TaxPercentage": {
            "type": "number",
            "format": "double",
            "nullable": true
          }
        },
        "additionalProperties": false
      },
      "B2B.Api.Dtos.Dtos.B2bTransaction": {
        "type": "object",
        "properties": {
          "PeriodEnd": {
            "type": "string",
            "format": "date-time",
            "nullable": true,
            "example": "2026-03-21T00:00:00-03:00"
          },
          "EditEffectiveDate": {
            "type": "string",
            "format": "date-time",
            "nullable": true,
            "example": "2026-03-21T00:00:00-03:00"
          },
          "PeriodStart": {
            "type": "string",
            "format": "date-time",
            "nullable": true,
            "example": "2026-03-21T00:00:00-03:00"
          },
          "Subtype": {
            "type": "string",
            "nullable": true
          },
          "SubtypeDescription": {
            "type": "string",
            "nullable": true
          },
          "JobNumber": {
            "type": "string",
            "nullable": true
          },
          "TotalPremiumRPT": {
            "type": "number",
            "format": "double"
          },
          "TotalCostRPT": {
            "type": "number",
            "format": "double"
          },
          "Status": {
            "type": "string",
            "nullable": true
          },
          "PremiumSummary": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bPremiumDetail"
            },
            "nullable": true
          },
          "TransactionCostRpt": {
            "type": "number",
            "format": "double",
            "nullable": true
          },
          "TransactionPremiumRpt": {
            "type": "number",
            "format": "double",
            "nullable": true
          },
          "AuditPeriodEndDate": {
            "type": "string",
            "format": "date-time",
            "nullable": true,
            "example": "2026-03-21T00:00:00-03:00"
          },
          "AuditPeriodStartDate": {
            "type": "string",
            "format": "date-time",
            "nullable": true,
            "example": "2026-03-21T00:00:00-03:00"
          },
          "CreateDate": {
            "type": "string",
            "format": "date-time",
            "nullable": true,
            "example": "2026-03-21T00:00:00-03:00"
          },
          "OrganizerCommission": {
            "type": "number",
            "format": "double",
            "nullable": true
          },
          "ProducerCommission": {
            "type": "number",
            "format": "double",
            "nullable": true
          },
          "PolicyPeriodPublicId": {
            "type": "string",
            "nullable": true
          },
          "CloseDate": {
            "type": "string",
            "format": "date-time",
            "nullable": true,
            "example": "2026-03-21T00:00:00-03:00"
          },
          "JobCreateTime": {
            "type": "string",
            "format": "date-time",
            "nullable": true,
            "example": "2026-03-21T00:00:00-03:00"
          }
        },
        "additionalProperties": false
      },
      "B2B.Api.Dtos.Dtos.B2bTransactionAuto": {
        "type": "object",
        "properties": {
          "PeriodEnd": {
            "type": "string",
            "format": "date-time",
            "nullable": true,
            "example": "2026-03-21T00:00:00-03:00"
          },
          "EditEffectiveDate": {
            "type": "string",
            "format": "date-time",
            "nullable": true,
            "example": "2026-03-21T00:00:00-03:00"
          },
          "PeriodStart": {
            "type": "string",
            "format": "date-time",
            "nullable": true,
            "example": "2026-03-21T00:00:00-03:00"
          },
          "Subtype": {
            "type": "string",
            "nullable": true
          },
          "SubtypeDescription": {
            "type": "string",
            "nullable": true
          },
          "JobDescription": {
            "type": "string",
            "nullable": true
          },
          "JobNumber": {
            "type": "string",
            "nullable": true
          },
          "TotalPremiumRPT": {
            "type": "number",
            "format": "double"
          },
          "TotalCostRPT": {
            "type": "number",
            "format": "double"
          },
          "Status": {
            "type": "string",
            "nullable": true
          },
          "PremiumSummary": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bPremiumDetail"
            },
            "nullable": true
          },
          "TransactionCostRpt": {
            "type": "number",
            "format": "double",
            "nullable": true
          },
          "TransactionPremiumRpt": {
            "type": "number",
            "format": "double",
            "nullable": true
          },
          "AuditPeriodEndDate": {
            "type": "string",
            "format": "date-time",
            "nullable": true,
            "example": "2026-03-21T00:00:00-03:00"
          },
          "AuditPeriodStartDate": {
            "type": "string",
            "format": "date-time",
            "nullable": true,
            "example": "2026-03-21T00:00:00-03:00"
          },
          "CreateDate": {
            "type": "string",
            "format": "date-time",
            "nullable": true,
            "example": "2026-03-21T00:00:00-03:00"
          },
          "Vehicle": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bVehicle"
          },
          "FleetOfVehicles": {
            "type": "array",
            "items": {
              "type": "string"
            },
            "nullable": true
          },
          "OrganizerCommission": {
            "type": "number",
            "format": "double",
            "nullable": true
          },
          "ProducerCommission": {
            "type": "number",
            "format": "double",
            "nullable": true
          },
          "PolicyPeriodPublicId": {
            "type": "string",
            "nullable": true
          },
          "CloseDate": {
            "type": "string",
            "format": "date-time",
            "nullable": true,
            "example": "2026-03-21T00:00:00-03:00"
          }
        },
        "additionalProperties": false
      },
      "B2B.Api.Dtos.Dtos.B2bUifRepresentative": {
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
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          }
        },
        "additionalProperties": false
      },
      "B2B.Api.Dtos.Dtos.B2bVehicle": {
        "type": "object",
        "properties": {
          "Accesories": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bAccesory"
            },
            "nullable": true
          },
          "AdditionalFuelType": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "AdditionalInterestContacts": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bAdditionalInterestContact"
            },
            "nullable": true
          },
          "AutomaticAdjust": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "BonusMalus": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
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
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
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
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "DeductibleValue": {
            "type": "number",
            "format": "double"
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
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "GPSProvider": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
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
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
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
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
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
            "type": "boolean"
          },
          "PrimaryNamedInsured": {
            "type": "string",
            "nullable": true
          },
          "ProductOffering": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
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
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bLocation"
          },
          "ServiceType": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
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
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
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
      "B2B.Api.Dtos.Dtos.Claim.Address": {
        "type": "object",
        "properties": {
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
          "City": {
            "type": "string",
            "nullable": true
          },
          "Country": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "PostalCode": {
            "type": "string",
            "nullable": true
          },
          "State": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          }
        },
        "additionalProperties": false
      },
      "B2B.Api.Dtos.Dtos.Claim.ClaimSummary": {
        "type": "object",
        "properties": {
          "ClaimNumber": {
            "type": "string",
            "nullable": true
          },
          "CloseDate": {
            "type": "string",
            "format": "date-time",
            "example": "2026-03-21T00:00:00-03:00"
          },
          "Description": {
            "type": "string",
            "nullable": true
          },
          "Exposures": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.Claim.Exposure"
            },
            "nullable": true
          },
          "Insured": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.Claim.Contact"
          },
          "LossDate": {
            "type": "string",
            "format": "date-time",
            "example": "2026-03-21T00:00:00-03:00"
          },
          "LossLocation": {
            "type": "string",
            "nullable": true
          },
          "ReportedDate": {
            "type": "string",
            "format": "date-time",
            "example": "2026-03-21T00:00:00-03:00"
          },
          "HowReported": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "State": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "RepairId": {
            "type": "string",
            "nullable": true
          },
          "ReportedBy": {
            "type": "string",
            "nullable": true
          },
          "AssignedUser": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.Claim.User"
          },
          "PolicyNumber": {
            "type": "string",
            "nullable": true
          },
          "PolicyVerified": {
            "type": "boolean",
            "nullable": true
          },
          "UpdateTime": {
            "type": "string",
            "format": "date-time",
            "example": "2026-03-21T00:00:00-03:00"
          },
          "InsuredVehicle": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.Claim.Vehicle"
          },
          "StartDate": {
            "type": "string",
            "format": "date-time",
            "nullable": true,
            "example": "2026-03-21T00:00:00-03:00"
          },
          "EndDate": {
            "type": "string",
            "format": "date-time",
            "nullable": true,
            "example": "2026-03-21T00:00:00-03:00"
          }
        },
        "additionalProperties": false
      },
      "B2B.Api.Dtos.Dtos.Claim.Contact": {
        "type": "object",
        "properties": {
          "Addresses": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.Claim.Address"
            },
            "nullable": true
          },
          "CellPhone": {
            "type": "string",
            "nullable": true
          },
          "ContactType": {
            "type": "string",
            "nullable": true
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
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "HomePhone": {
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
          "OfficialIdType": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "TaxId": {
            "type": "string",
            "nullable": true
          },
          "WorkPhone": {
            "type": "string",
            "nullable": true
          }
        },
        "additionalProperties": false
      },
      "B2B.Api.Dtos.Dtos.Claim.Coverage": {
        "type": "object",
        "properties": {
          "Deductible": {
            "type": "number",
            "format": "double",
            "nullable": true
          },
          "DisplayName": {
            "type": "string",
            "nullable": true
          }
        },
        "additionalProperties": false
      },
      "B2B.Api.Dtos.Dtos.Claim.Exposure": {
        "type": "object",
        "properties": {
          "AssignedUser": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.Claim.User"
          },
          "ClaimOrder": {
            "type": "integer",
            "format": "int32",
            "nullable": true
          },
          "Coverage": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.Claim.Coverage"
          },
          "CoverageSubType": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "DisplayName": {
            "type": "string",
            "nullable": true
          },
          "ExposureType": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "ExposureStage": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "Id": {
            "type": "string",
            "nullable": true
          },
          "State": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          }
        },
        "additionalProperties": false
      },
      "B2B.Api.Dtos.Dtos.Claim.User": {
        "type": "object",
        "properties": {
          "DisplayName": {
            "type": "string",
            "nullable": true
          },
          "Contact": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.Claim.UserContact"
          }
        },
        "additionalProperties": false
      },
      "B2B.Api.Dtos.Dtos.Claim.UserContact": {
        "type": "object",
        "properties": {
          "DisplayName": {
            "type": "string",
            "nullable": true
          },
          "EmailAddress1": {
            "type": "string",
            "nullable": true
          },
          "EmailAddress2": {
            "type": "string",
            "nullable": true
          }
        },
        "additionalProperties": false
      },
      "B2B.Api.Dtos.Dtos.Claim.Vehicle": {
        "type": "object",
        "properties": {
          "LicensePlate": {
            "type": "string",
            "nullable": true
          },
          "Make": {
            "type": "string",
            "nullable": true
          },
          "Model": {
            "type": "string",
            "nullable": true
          },
          "Version": {
            "type": "string",
            "nullable": true
          },
          "Year": {
            "type": "integer",
            "format": "int32",
            "nullable": true
          }
        },
        "additionalProperties": false
      },
      "B2B.Api.Dtos.Dtos.KeyValueSelected": {
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
            "type": "boolean",
            "nullable": true
          }
        },
        "additionalProperties": false
      },
      "B2B.Api.Dtos.Dtos.Payment.Payment.CreditCardDto": {
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
          "Mask": {
            "type": "string",
            "nullable": true
          }
        },
        "additionalProperties": false
      },
      "B2B.Api.Dtos.Dtos.PledgeLoanDto": {
        "type": "object",
        "properties": {
          "Bank": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "Currency": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "DueDateFirstInstallment": {
            "type": "string",
            "format": "date-time",
            "nullable": true,
            "example": "2026-03-21T00:00:00-03:00"
          },
          "ExpirationDate": {
            "type": "string",
            "format": "date-time",
            "nullable": true,
            "example": "2026-03-21T00:00:00-03:00"
          },
          "Number": {
            "type": "string",
            "nullable": true
          },
          "OfficeCode": {
            "type": "string",
            "nullable": true
          },
          "Product": {
            "type": "string",
            "nullable": true
          },
          "Subproduct": {
            "type": "string",
            "nullable": true
          }
        },
        "additionalProperties": false
      },
      "B2B.Api.Dtos.Dtos.Policy.Detail.AahCoverageCost": {
        "type": "object",
        "properties": {
          "CoverageName": {
            "type": "string",
            "nullable": true
          },
          "AdjRate": {
            "type": "number",
            "format": "double"
          },
          "CostAmount": {
            "type": "number",
            "format": "double"
          },
          "InsuredAmount": {
            "type": "number",
            "format": "double"
          }
        },
        "additionalProperties": false
      },
      "B2B.Api.Dtos.Dtos.Policy.Detail.AahTransaction": {
        "type": "object",
        "properties": {
          "PeriodEnd": {
            "type": "string",
            "format": "date-time",
            "nullable": true,
            "example": "2026-03-21T00:00:00-03:00"
          },
          "EditEffectiveDate": {
            "type": "string",
            "format": "date-time",
            "nullable": true,
            "example": "2026-03-21T00:00:00-03:00"
          },
          "PeriodStart": {
            "type": "string",
            "format": "date-time",
            "nullable": true,
            "example": "2026-03-21T00:00:00-03:00"
          },
          "Subtype": {
            "type": "string",
            "nullable": true
          },
          "SubtypeDescription": {
            "type": "string",
            "nullable": true
          },
          "JobNumber": {
            "type": "string",
            "nullable": true
          },
          "TotalPremiumRPT": {
            "type": "number",
            "format": "double"
          },
          "TotalCostRPT": {
            "type": "number",
            "format": "double"
          },
          "Status": {
            "type": "string",
            "nullable": true
          },
          "PremiumSummary": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bPremiumDetail"
            },
            "nullable": true
          },
          "TransactionCostRpt": {
            "type": "number",
            "format": "double",
            "nullable": true
          },
          "TransactionPremiumRpt": {
            "type": "number",
            "format": "double",
            "nullable": true
          },
          "AuditPeriodEndDate": {
            "type": "string",
            "format": "date-time",
            "nullable": true,
            "example": "2026-03-21T00:00:00-03:00"
          },
          "AuditPeriodStartDate": {
            "type": "string",
            "format": "date-time",
            "nullable": true,
            "example": "2026-03-21T00:00:00-03:00"
          },
          "CreateDate": {
            "type": "string",
            "format": "date-time",
            "nullable": true,
            "example": "2026-03-21T00:00:00-03:00"
          },
          "OrganizerCommission": {
            "type": "number",
            "format": "double",
            "nullable": true
          },
          "ProducerCommission": {
            "type": "number",
            "format": "double",
            "nullable": true
          },
          "PolicyPeriodPublicId": {
            "type": "string",
            "nullable": true
          },
          "CloseDate": {
            "type": "string",
            "format": "date-time",
            "nullable": true,
            "example": "2026-03-21T00:00:00-03:00"
          },
          "JobCreateTime": {
            "type": "string",
            "format": "date-time",
            "nullable": true,
            "example": "2026-03-21T00:00:00-03:00"
          },
          "AahCoveragesCost": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.Policy.Detail.AahCoverageCost"
            },
            "nullable": true
          }
        },
        "additionalProperties": false
      },
      "B2B.Api.Dtos.Dtos.Policy.Detail.AdditionalInterestContact": {
        "type": "object",
        "properties": {
          "AditionalInterestType": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "Contact": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bContactDetail"
          }
        },
        "additionalProperties": false
      },
      "B2B.Api.Dtos.Dtos.Policy.Detail.Address": {
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
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "Flat": {
            "type": "string",
            "nullable": true
          },
          "Floor": {
            "type": "string",
            "nullable": true
          },
          "Latitude": {
            "type": "number",
            "format": "double",
            "nullable": true
          },
          "Longitude": {
            "type": "number",
            "format": "double",
            "nullable": true
          },
          "PostalCode": {
            "type": "string",
            "nullable": true
          },
          "State": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "Street": {
            "type": "string",
            "nullable": true
          },
          "StreetNumber": {
            "type": "string",
            "nullable": true
          }
        },
        "additionalProperties": false
      },
      "B2B.Api.Dtos.Dtos.Policy.Detail.AgricultureLocationRisk": {
        "type": "object",
        "properties": {
          "PublicId": {
            "type": "string",
            "nullable": true
          },
          "Address": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.Policy.Detail.Address"
          },
          "AdditionalInterestContacts": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bAdditionalInterestContact"
            },
            "nullable": true
          },
          "SpecificRisks": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.Policy.Detail.SpecificRiskWithCoverages"
            },
            "nullable": true
          },
          "Coverages": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.Policy.Detail.CoverageBase"
            },
            "nullable": true
          },
          "Crops": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.Policy.Detail.Crops"
            },
            "nullable": true
          }
        },
        "additionalProperties": false
      },
      "B2B.Api.Dtos.Dtos.Policy.Detail.B2BPaymentMethod": {
        "type": "object",
        "properties": {
          "CreditCardCBU": {
            "type": "string",
            "nullable": true
          },
          "PaymentMethod": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "PaymentType": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "PaymentEntity": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          }
        },
        "additionalProperties": false
      },
      "B2B.Api.Dtos.Dtos.Policy.Detail.BuildingRiskWithCoverages": {
        "type": "object",
        "properties": {
          "BoundariesWastAbandBuild": {
            "type": "boolean",
            "nullable": true
          },
          "BuildingActivity": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "BuildingDescription": {
            "type": "string",
            "nullable": true
          },
          "BuildingNumber": {
            "type": "integer",
            "format": "int32",
            "nullable": true
          },
          "BuildingTotalArea": {
            "type": "integer",
            "format": "int32",
            "nullable": true
          },
          "BuildingYearBuilt": {
            "type": "integer",
            "format": "int32",
            "nullable": true
          },
          "BurglAlarmSysType": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "BussinessInComWHousing": {
            "type": "boolean",
            "nullable": true
          },
          "Cp7LocationPublicId": {
            "type": "string",
            "nullable": true
          },
          "ConstructionType": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "CovType": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "DoorDoubleLockType": {
            "type": "boolean",
            "nullable": true
          },
          "ElectricInstallation": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "HydrantNetwork": {
            "type": "boolean",
            "nullable": true
          },
          "InspectionDate": {
            "type": "string",
            "format": "date-time",
            "nullable": true,
            "example": "2026-03-21T00:00:00-03:00"
          },
          "Inspector": {
            "type": "string",
            "nullable": true
          },
          "IsEmpty": {
            "type": "boolean",
            "nullable": true
          },
          "IsUnderConstruction": {
            "type": "boolean",
            "nullable": true
          },
          "NumStories": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "NumberOfFloors": {
            "type": "integer",
            "format": "int32",
            "nullable": true
          },
          "NumberOfLifts": {
            "type": "integer",
            "format": "int32",
            "nullable": true
          },
          "Observations": {
            "type": "string",
            "nullable": true
          },
          "OccupancyType": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "Pml": {
            "type": "number",
            "format": "double",
            "nullable": true
          },
          "ProtectionGridsInOpenings": {
            "type": "boolean",
            "nullable": true
          },
          "PublicId": {
            "type": "string",
            "nullable": true
          },
          "RiskMatrix": {
            "type": "string",
            "nullable": true
          },
          "SmokeHeatDetection": {
            "type": "boolean",
            "nullable": true
          },
          "Sprayers": {
            "type": "boolean",
            "nullable": true
          },
          "Coverages": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.Policy.Detail.CoverageBase"
            },
            "nullable": true
          },
          "Conditions": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.Policy.Detail.CoverageBase"
            },
            "nullable": true
          },
          "Exclusions": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.Policy.Detail.CoverageBase"
            },
            "nullable": true
          },
          "PersonalProperties": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.Policy.Detail.PersonalProperty"
            },
            "nullable": true
          }
        },
        "additionalProperties": false
      },
      "B2B.Api.Dtos.Dtos.Policy.Detail.ClaimCoverage": {
        "type": "object",
        "properties": {
          "Deductible": {
            "type": "number",
            "format": "double",
            "nullable": true
          },
          "Description": {
            "type": "string",
            "nullable": true
          }
        },
        "additionalProperties": false
      },
      "B2B.Api.Dtos.Dtos.Policy.Detail.ClaimDetail": {
        "type": "object",
        "properties": {
          "ClaimNumber": {
            "type": "string",
            "nullable": true
          },
          "Description": {
            "type": "string",
            "nullable": true
          },
          "AssignedUser": {
            "type": "string",
            "nullable": true
          },
          "Exposures": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.Policy.Detail.ClaimExposure"
            },
            "nullable": true
          },
          "AssignedUserEmail": {
            "type": "string",
            "nullable": true
          },
          "LossDate": {
            "type": "string",
            "format": "date-time",
            "example": "2026-03-21T00:00:00-03:00"
          },
          "ReportedDate": {
            "type": "string",
            "format": "date-time",
            "example": "2026-03-21T00:00:00-03:00"
          },
          "State": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          }
        },
        "additionalProperties": false
      },
      "B2B.Api.Dtos.Dtos.Policy.Detail.ClaimExposure": {
        "type": "object",
        "properties": {
          "Id": {
            "type": "string",
            "nullable": true
          },
          "ExposureType": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "Coverage": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.Policy.Detail.ClaimCoverage"
          },
          "ExposureStage": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "State": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          }
        },
        "additionalProperties": false
      },
      "B2B.Api.Dtos.Dtos.Policy.Detail.Coordinates": {
        "type": "object",
        "properties": {
          "Latitude": {
            "type": "number",
            "format": "double",
            "nullable": true
          },
          "Longitude": {
            "type": "number",
            "format": "double",
            "nullable": true
          }
        },
        "additionalProperties": false
      },
      "B2B.Api.Dtos.Dtos.Policy.Detail.CoverageBase": {
        "type": "object",
        "properties": {
          "Description": {
            "type": "string",
            "nullable": true
          },
          "CoverageTerms": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.Policy.Detail.CoverageTerm"
            },
            "nullable": true
          },
          "ScheduleItems": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.Policy.Detail.ScheduleItem"
            },
            "nullable": true
          }
        },
        "additionalProperties": false
      },
      "B2B.Api.Dtos.Dtos.Policy.Detail.CoverageTerm": {
        "type": "object",
        "properties": {
          "Description": {
            "type": "string",
            "nullable": true
          },
          "TermOptions": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.Policy.Detail.TermOption"
            },
            "nullable": true
          },
          "Value": {
            "type": "string",
            "nullable": true
          },
          "ValueTypeName": {
            "type": "string",
            "nullable": true
          },
          "PublicId": {
            "type": "string",
            "nullable": true
          }
        },
        "additionalProperties": false
      },
      "B2B.Api.Dtos.Dtos.Policy.Detail.CoverageTransport": {
        "type": "object",
        "properties": {
          "Description": {
            "type": "string",
            "nullable": true
          },
          "CoverageTerms": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.Policy.Detail.CoverageTerm"
            },
            "nullable": true
          },
          "ScheduleItems": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.Policy.Detail.ScheduleItem"
            },
            "nullable": true
          },
          "VehicleNumber": {
            "type": "integer",
            "format": "int32"
          }
        },
        "additionalProperties": false
      },
      "B2B.Api.Dtos.Dtos.Policy.Detail.Crops": {
        "type": "object",
        "properties": {
          "ClassCode": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "ComplementaryIrrigation": {
            "type": "boolean",
            "nullable": true
          },
          "Coordinates": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.Policy.Detail.Coordinates"
          },
          "CropQuote": {
            "type": "number",
            "format": "double",
            "nullable": true
          },
          "CropQuoteFinal": {
            "type": "number",
            "format": "double",
            "nullable": true
          },
          "CropQuoteMax": {
            "type": "number",
            "format": "double",
            "nullable": true
          },
          "CropQuoteMin": {
            "type": "number",
            "format": "double",
            "nullable": true
          },
          "CropType": {
            "type": "string",
            "nullable": true
          },
          "Description": {
            "type": "string",
            "nullable": true
          },
          "ExpectedPerformance": {
            "type": "number",
            "format": "double",
            "nullable": true
          },
          "GenderType": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "InsuredAmountHa": {
            "type": "number",
            "format": "double",
            "nullable": true
          },
          "InsuredAmountLote": {
            "type": "number",
            "format": "double",
            "nullable": true
          },
          "InsuredAmountLoteQQ": {
            "type": "number",
            "format": "double",
            "nullable": true
          },
          "InsuredSurface": {
            "type": "number",
            "format": "double",
            "nullable": true
          },
          "LotName": {
            "type": "string",
            "nullable": true
          },
          "Observations": {
            "type": "string",
            "nullable": true
          },
          "OutputRate": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "PublicId": {
            "type": "string",
            "nullable": true
          },
          "QQHa": {
            "type": "number",
            "format": "double",
            "nullable": true
          },
          "RatingEffDate": {
            "type": "string",
            "format": "date-time",
            "nullable": true,
            "example": "2026-03-21T00:00:00-03:00"
          },
          "RatingEndDate": {
            "type": "string",
            "format": "date-time",
            "nullable": true,
            "example": "2026-03-21T00:00:00-03:00"
          },
          "RiskArea": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "RiskZone": {
            "type": "string",
            "nullable": true
          },
          "Seedtime": {
            "type": "string",
            "format": "date-time",
            "nullable": true,
            "example": "2026-03-21T00:00:00-03:00"
          },
          "SpecialClassNumber": {
            "type": "integer",
            "format": "int32",
            "nullable": true
          },
          "TillageType": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "VarietyHybrid": {
            "type": "string",
            "nullable": true
          }
        },
        "additionalProperties": false
      },
      "B2B.Api.Dtos.Dtos.Policy.Detail.GL7ExposDataCoverage": {
        "type": "object",
        "properties": {
          "Activity": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "AnnualBilling": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bMonetaryAmount"
          },
          "AnnualBillingRange": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "Boats": {
            "type": "boolean"
          },
          "BuildingOccupation": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "ConsortiumtManagementType": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "ContractAmount": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bMonetaryAmount"
          },
          "DesciptionContract": {
            "type": "string",
            "nullable": true
          },
          "EmployeesNumbers": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "GarageCapacity": {
            "type": "string",
            "nullable": true
          },
          "LocationFactor": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "MotorBike": {
            "type": "boolean"
          },
          "NumberBoilers": {
            "type": "string",
            "nullable": true
          },
          "NumberFloors": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "NumberLifts": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "NumberPosSingObj": {
            "type": "string",
            "nullable": true
          },
          "NumberVehicles": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "ObjectContract": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "PercentageAvance": {
            "type": "number",
            "format": "double"
          },
          "Place": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "ProductType": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "Registered": {
            "type": "string",
            "nullable": true
          },
          "SmokeDetectors": {
            "type": "boolean"
          },
          "StartDateWork": {
            "type": "string",
            "format": "date-time",
            "example": "2026-03-21T00:00:00-03:00"
          },
          "TipoPosterSingObj": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "TypeCleaning": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "TypeEvent": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "TypeGarage": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "TypeLiftsForklifts": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "TypeWork": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          }
        },
        "additionalProperties": false
      },
      "B2B.Api.Dtos.Dtos.Policy.Detail.GL7MedicalSpeciality": {
        "type": "object",
        "properties": {
          "EnrollmentNumberText": {
            "type": "string",
            "nullable": true
          },
          "Speciality": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "SpecialityCategory": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          }
        },
        "additionalProperties": false
      },
      "B2B.Api.Dtos.Dtos.Policy.Detail.GLActivityExposure": {
        "type": "object",
        "properties": {
          "CertifiedClerk": {
            "type": "number",
            "format": "double",
            "nullable": true
          },
          "CertifiedSchool": {
            "type": "number",
            "format": "double",
            "nullable": true
          },
          "ChangeJurisdiction": {
            "type": "boolean",
            "nullable": true
          },
          "DataCourtChange": {
            "type": "string",
            "nullable": true
          },
          "DataCourtWaiver": {
            "type": "string",
            "nullable": true
          },
          "NotarialCharges": {
            "type": "boolean",
            "nullable": true
          },
          "WaiverJurisdiction": {
            "type": "boolean",
            "nullable": true
          },
          "CertificateNumber": {
            "type": "string",
            "nullable": true
          },
          "CommercialAddress": {
            "type": "string",
            "nullable": true
          },
          "CommercialName": {
            "type": "string",
            "nullable": true
          },
          "LegalRegulation": {
            "type": "string",
            "nullable": true
          },
          "OtherActivity": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "RiskLocation": {
            "type": "string",
            "nullable": true
          },
          "TechnicalRepEnrollment": {
            "type": "string",
            "nullable": true
          },
          "TechnicalRepFullName": {
            "type": "string",
            "nullable": true
          }
        },
        "additionalProperties": false
      },
      "B2B.Api.Dtos.Dtos.Policy.Detail.GLContractualExposure": {
        "type": "object",
        "properties": {
          "CertifiedClerk": {
            "type": "number",
            "format": "double",
            "nullable": true
          },
          "CertifiedSchool": {
            "type": "number",
            "format": "double",
            "nullable": true
          },
          "ChangeJurisdiction": {
            "type": "boolean",
            "nullable": true
          },
          "DataCourtChange": {
            "type": "string",
            "nullable": true
          },
          "DataCourtWaiver": {
            "type": "string",
            "nullable": true
          },
          "NotarialCharges": {
            "type": "boolean",
            "nullable": true
          },
          "WaiverJurisdiction": {
            "type": "boolean",
            "nullable": true
          },
          "DataLocation": {
            "type": "string",
            "nullable": true
          },
          "DurationOfService": {
            "type": "integer",
            "format": "int32",
            "nullable": true
          },
          "EndDate": {
            "type": "string",
            "format": "date-time",
            "nullable": true,
            "example": "2026-03-21T00:00:00-03:00"
          },
          "OperationType": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "StartDate": {
            "type": "string",
            "format": "date-time",
            "nullable": true,
            "example": "2026-03-21T00:00:00-03:00"
          },
          "SubjectOfContract": {
            "type": "string",
            "nullable": true
          },
          "TotalAmount": {
            "type": "number",
            "format": "double",
            "nullable": true
          }
        },
        "additionalProperties": false
      },
      "B2B.Api.Dtos.Dtos.Policy.Detail.GLCoverage": {
        "type": "object",
        "properties": {
          "Activity": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.Policy.Detail.GLActivityExposure"
          },
          "AdditionalCoverages": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.Policy.Detail.CoverageBase"
            },
            "nullable": true
          },
          "AdditionalInterestContacts": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bAdditionalInterestContact"
            },
            "nullable": true
          },
          "Contract": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.Policy.Detail.GLContractualExposure"
          },
          "CoveragePartType": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "Coverages": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.Policy.Detail.CoverageBase"
            },
            "nullable": true
          },
          "CustomsOperation": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.Policy.Detail.GLCustomExposure"
          },
          "GLCoverageForm": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "Judicial": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.Policy.Detail.GLJudicialExposure"
          },
          "RetroactivityDate": {
            "type": "string",
            "format": "date-time",
            "nullable": true,
            "example": "2026-03-21T00:00:00-03:00"
          }
        },
        "additionalProperties": false
      },
      "B2B.Api.Dtos.Dtos.Policy.Detail.GLCustomExposure": {
        "type": "object",
        "properties": {
          "Cuit": {
            "type": "string",
            "nullable": true
          },
          "ChapterNumber": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "CustomBrokerName": {
            "type": "string",
            "nullable": true
          },
          "CustomsCode": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "Goods": {
            "type": "string",
            "nullable": true
          },
          "Invoice": {
            "type": "string",
            "nullable": true
          },
          "StorageLocation": {
            "type": "string",
            "nullable": true
          }
        },
        "additionalProperties": false
      },
      "B2B.Api.Dtos.Dtos.Policy.Detail.GLExposure": {
        "type": "object",
        "properties": {
          "AdditionalCoverages": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.Policy.Detail.CoverageBase"
            },
            "nullable": true
          },
          "Conditions": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.Policy.Detail.CoverageBase"
            },
            "nullable": true
          },
          "Coverages": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.Policy.Detail.CoverageBase"
            },
            "nullable": true
          },
          "Exclusions": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.Policy.Detail.CoverageBase"
            },
            "nullable": true
          },
          "ClassCode": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "Cuit": {
            "type": "string",
            "nullable": true
          },
          "EffectiveDate": {
            "type": "string",
            "format": "date-time",
            "example": "2026-03-21T00:00:00-03:00"
          },
          "ExpirationDate": {
            "type": "string",
            "format": "date-time",
            "example": "2026-03-21T00:00:00-03:00"
          },
          "GL7ExposDataCoverage": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.Policy.Detail.GL7ExposDataCoverage"
          },
          "Name": {
            "type": "string",
            "nullable": true
          },
          "PolicyLocation": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.Policy.Detail.Location"
          },
          "Street": {
            "type": "string",
            "nullable": true
          },
          "GL7MedicalSpeciality": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.Policy.Detail.GL7MedicalSpeciality"
            },
            "nullable": true
          }
        },
        "additionalProperties": false
      },
      "B2B.Api.Dtos.Dtos.Policy.Detail.GLJudicialExposure": {
        "type": "object",
        "properties": {
          "CertifiedClerk": {
            "type": "number",
            "format": "double",
            "nullable": true
          },
          "CertifiedSchool": {
            "type": "number",
            "format": "double",
            "nullable": true
          },
          "ChangeJurisdiction": {
            "type": "boolean",
            "nullable": true
          },
          "DataCourtChange": {
            "type": "string",
            "nullable": true
          },
          "DataCourtWaiver": {
            "type": "string",
            "nullable": true
          },
          "NotarialCharges": {
            "type": "boolean",
            "nullable": true
          },
          "WaiverJurisdiction": {
            "type": "boolean",
            "nullable": true
          },
          "CautionOrderApply": {
            "type": "string",
            "nullable": true
          },
          "Cover": {
            "type": "string",
            "nullable": true
          },
          "DrInCharge": {
            "type": "string",
            "nullable": true
          },
          "JudgeFullName": {
            "type": "string",
            "nullable": true
          },
          "JudgeJurisdiction": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "JudgeResolution": {
            "type": "boolean",
            "nullable": true
          },
          "PageNumber": {
            "type": "integer",
            "format": "int32",
            "nullable": true
          },
          "Secretary": {
            "type": "string",
            "nullable": true
          },
          "TribunalAddress": {
            "type": "string",
            "nullable": true
          },
          "TribunalName": {
            "type": "string",
            "nullable": true
          }
        },
        "additionalProperties": false
      },
      "B2B.Api.Dtos.Dtos.Policy.Detail.IMContractorsEquipment": {
        "type": "object",
        "properties": {
          "Activity": {
            "type": "string",
            "nullable": true
          },
          "AdditionalCoverages": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.Policy.Detail.CoverageBase"
            },
            "nullable": true
          },
          "AdditionalInterestContacts": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bAdditionalInterestContact"
            },
            "nullable": true
          },
          "BuildingUse": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "ConstructionMachinery": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "Coverages": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.Policy.Detail.CoverageBase"
            },
            "nullable": true
          },
          "Exclusions": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.Policy.Detail.CoverageBase"
            },
            "nullable": true
          },
          "KindOfEquipment": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "MachineName": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "Manufacturer": {
            "type": "string",
            "nullable": true
          },
          "Model": {
            "type": "string",
            "nullable": true
          },
          "ModelYear": {
            "type": "integer",
            "format": "int32"
          },
          "MotorNumber": {
            "type": "string",
            "nullable": true
          },
          "PublicId": {
            "type": "string",
            "nullable": true
          },
          "SerialNumber": {
            "type": "string",
            "nullable": true
          },
          "SumAssuredMonetaryAmount": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bMonetaryAmount"
          }
        },
        "additionalProperties": false
      },
      "B2B.Api.Dtos.Dtos.Policy.Detail.IMContractorsEquipmentPart": {
        "type": "object",
        "properties": {
          "AdditionalCoverages": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.Policy.Detail.CoverageBase"
            },
            "nullable": true
          },
          "Conditions": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.Policy.Detail.CoverageBase"
            },
            "nullable": true
          },
          "Contractortype": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "Coverages": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.Policy.Detail.CoverageBase"
            },
            "nullable": true
          },
          "Exclusions": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.Policy.Detail.CoverageBase"
            },
            "nullable": true
          },
          "PublicId": {
            "type": "string",
            "nullable": true
          },
          "AdditionalInterestContacts": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bAdditionalInterestContact"
            },
            "nullable": true
          }
        },
        "additionalProperties": false
      },
      "B2B.Api.Dtos.Dtos.Policy.Detail.IMGoodsTransportPart": {
        "type": "object",
        "properties": {
          "AdditionalCoverages": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.Policy.Detail.CoverageTransport"
            },
            "nullable": true
          },
          "AdditionalInterestContacts": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bAdditionalInterestContact"
            },
            "nullable": true
          },
          "Coverages": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.Policy.Detail.CoverageTransport"
            },
            "nullable": true
          },
          "Holder": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "IMVehicles": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.Policy.Detail.IMVehicle"
            },
            "nullable": true
          },
          "InsuresMerchandise": {
            "type": "boolean"
          },
          "ScopeCoverage": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "TranspMode": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "TripMadeBy": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "TripType": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          }
        },
        "additionalProperties": false
      },
      "B2B.Api.Dtos.Dtos.Policy.Detail.IMHullAircrafts": {
        "type": "object",
        "properties": {
          "AdditionalCoverages": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.Policy.Detail.CoverageTransport"
            },
            "nullable": true
          },
          "AircraftUse": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "Beam": {
            "type": "number",
            "format": "double"
          },
          "BoatType": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "Boatyard": {
            "type": "string",
            "nullable": true
          },
          "ConstructionSite": {
            "type": "string",
            "nullable": true
          },
          "Coverages": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.Policy.Detail.CoverageTransport"
            },
            "nullable": true
          },
          "Engine": {
            "type": "string",
            "nullable": true
          },
          "Flag": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "Height": {
            "type": "number",
            "format": "double"
          },
          "HullMaterial": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "Length": {
            "type": "number",
            "format": "double"
          },
          "Make": {
            "type": "string",
            "nullable": true
          },
          "Model": {
            "type": "string",
            "nullable": true
          },
          "ModelYear": {
            "type": "integer",
            "format": "int32"
          },
          "MoorageTaxId": {
            "type": "string",
            "nullable": true
          },
          "Name": {
            "type": "string",
            "nullable": true
          },
          "NavigationZone": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "OtherMaterial": {
            "type": "string",
            "nullable": true
          },
          "OtherUse": {
            "type": "string",
            "nullable": true
          },
          "Power": {
            "type": "string",
            "nullable": true
          },
          "PublicId": {
            "type": "string",
            "nullable": true
          },
          "PurchaseDate": {
            "type": "string",
            "format": "date-time",
            "example": "2026-03-21T00:00:00-03:00"
          },
          "Registration": {
            "type": "string",
            "nullable": true
          },
          "Seats": {
            "type": "integer",
            "format": "int32"
          },
          "SerialNumber": {
            "type": "string",
            "nullable": true
          }
        },
        "additionalProperties": false
      },
      "B2B.Api.Dtos.Dtos.Policy.Detail.IMVehicle": {
        "type": "object",
        "properties": {
          "AirLine": {
            "type": "string",
            "nullable": true
          },
          "AirWaybillNumber": {
            "type": "string",
            "nullable": true
          },
          "ArmedCustodyByFollowUp": {
            "type": "boolean"
          },
          "BillOfLadingNumber": {
            "type": "string",
            "nullable": true
          },
          "Brand": {
            "type": "string",
            "nullable": true
          },
          "CouplingVIN": {
            "type": "string",
            "nullable": true
          },
          "DepartureDate": {
            "type": "string",
            "format": "date-time",
            "example": "2026-03-21T00:00:00-03:00"
          },
          "Destination": {
            "type": "string",
            "nullable": true
          },
          "Distance": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "Goods": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "GroundDistance": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "Route": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "InterestedRole": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "Maxliapertrip": {
            "type": "integer",
            "format": "int32"
          },
          "Model": {
            "type": "string",
            "nullable": true
          },
          "NumberVehicles": {
            "type": "integer",
            "format": "int32"
          },
          "Origin": {
            "type": "string",
            "nullable": true
          },
          "OriginAsiaOrOceania": {
            "type": "boolean"
          },
          "PanamaCanal": {
            "type": "boolean"
          },
          "RailwayDetails": {
            "type": "string",
            "nullable": true
          },
          "SatelliteTrackingOfTheTruck": {
            "type": "boolean"
          },
          "SatelliteTrackingWithReport": {
            "type": "boolean"
          },
          "SteamboatName": {
            "type": "string",
            "nullable": true
          },
          "SumAssured": {
            "type": "integer",
            "format": "int32"
          },
          "TrackingOnTheLoad": {
            "type": "boolean"
          },
          "TripMadeBy": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "TruckVIN": {
            "type": "string",
            "nullable": true
          },
          "TypeOfTransport": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "VehicleClass": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          }
        },
        "additionalProperties": false
      },
      "B2B.Api.Dtos.Dtos.Policy.Detail.Location": {
        "type": "object",
        "properties": {
          "Active": {
            "type": "boolean",
            "nullable": true
          },
          "AddressDescription": {
            "type": "string",
            "nullable": true
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
          "AddressName": {
            "type": "string",
            "nullable": true
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
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "CountryCodePhone": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "County": {
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
          "LocationNum": {
            "type": "integer",
            "format": "int32",
            "nullable": true
          },
          "NonSpecific": {
            "type": "boolean",
            "nullable": true
          },
          "PhoneExtension": {
            "type": "string",
            "nullable": true
          },
          "PhoneNationalSubscriberNumber": {
            "type": "string",
            "nullable": true
          },
          "PhoneNumber": {
            "type": "string",
            "nullable": true
          },
          "PostalCode": {
            "type": "string",
            "nullable": true
          },
          "PrimaryLoc": {
            "type": "boolean",
            "nullable": true
          },
          "State": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "StreetNumber": {
            "type": "string",
            "nullable": true
          }
        },
        "additionalProperties": false
      },
      "B2B.Api.Dtos.Dtos.Policy.Detail.LocationRisk": {
        "type": "object",
        "properties": {
          "PublicId": {
            "type": "string",
            "nullable": true
          },
          "Address": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.Policy.Detail.Address"
          },
          "AdditionalInterestContacts": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bAdditionalInterestContact"
            },
            "nullable": true
          },
          "SpecificRisks": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.Policy.Detail.SpecificRiskWithCoverages"
            },
            "nullable": true
          },
          "Coverages": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.Policy.Detail.CoverageBase"
            },
            "nullable": true
          },
          "BuildingRisks": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.Policy.Detail.BuildingRiskWithCoverages"
            },
            "nullable": true
          }
        },
        "additionalProperties": false
      },
      "B2B.Api.Dtos.Dtos.Policy.Detail.PersonalProperty": {
        "type": "object",
        "properties": {
          "AdditionalCoverages": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.Policy.Detail.CoverageBase"
            },
            "nullable": true
          },
          "CoverageType": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "Coverages": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.Policy.Detail.CoverageBase"
            },
            "nullable": true
          },
          "DecGoodsSupplies": {
            "type": "boolean"
          },
          "Limit": {
            "type": "number",
            "format": "double"
          },
          "PublicId": {
            "type": "string",
            "nullable": true
          }
        },
        "additionalProperties": false
      },
      "B2B.Api.Dtos.Dtos.Policy.Detail.PolicyAgricultureDetail": {
        "type": "object",
        "properties": {
          "AccountNumber": {
            "type": "string",
            "nullable": true
          },
          "AdditionalDataBank": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bAdditionalDataBank"
          },
          "AffinityGroup": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bAffinityGroup"
          },
          "AffinityGroupSub": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bAffinityGroup"
          },
          "AutomaticAdjustSum": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "BillingFrecuencies": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.KeyValueSelected"
            },
            "nullable": true
          },
          "BranchDescription": {
            "type": "string",
            "nullable": true
          },
          "BranchSSN": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "ChannelEntry": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "Contacts": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bContactDetail"
            },
            "nullable": true
          },
          "Claims": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.Policy.Detail.ClaimDetail"
            },
            "nullable": true
          },
          "CommercialAternative": {
            "type": "string",
            "nullable": true
          },
          "Country": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "Invoice": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bInvoiceSummary"
          },
          "IssueDate": {
            "type": "string",
            "format": "date-time",
            "nullable": true,
            "example": "2026-03-21T00:00:00-03:00"
          },
          "JobNumber": {
            "type": "string",
            "nullable": true
          },
          "MaillingAddress": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bAddressSummary"
          },
          "OrganizerAgents": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
            },
            "nullable": true
          },
          "OrganizerCommission": {
            "type": "number",
            "format": "double",
            "nullable": true
          },
          "Payments": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bPaymentHistory"
            },
            "nullable": true
          },
          "PaymentFees": {
            "type": "integer",
            "format": "int32",
            "nullable": true
          },
          "PaymentMethod": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.Policy.Detail.B2BPaymentMethod"
          },
          "PeriodEnd": {
            "type": "string",
            "format": "date-time",
            "nullable": true,
            "example": "2026-03-21T00:00:00-03:00"
          },
          "PeriodStart": {
            "type": "string",
            "format": "date-time",
            "nullable": true,
            "example": "2026-03-21T00:00:00-03:00"
          },
          "PolicyNumber": {
            "type": "string",
            "nullable": true
          },
          "PolicyPeriodId": {
            "type": "string",
            "nullable": true
          },
          "PolicyTerm": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "PolicyStatus": {
            "type": "string",
            "nullable": true
          },
          "PreviousPolicy": {
            "type": "string",
            "nullable": true
          },
          "NextPolicy": {
            "type": "string",
            "nullable": true
          },
          "PreferredCoverageCurrencies": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.KeyValueSelected"
            },
            "nullable": true
          },
          "PreferredSettlementCurrencies": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.KeyValueSelected"
            },
            "nullable": true
          },
          "ProducerAgent": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "ProducerCommission": {
            "type": "number",
            "format": "double",
            "nullable": true
          },
          "ProducerOfService": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "ServiceOrganizer": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "Status": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "Subtype": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "Ext_PolicyType": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "Offering": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "OfferingPlan": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "Ext_TrackingPAS": {
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
          },
          "Transactions": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bTransaction"
            },
            "nullable": true
          },
          "ReasonsCancellation": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bCancellationInfo"
          },
          "ScopeCoverage": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "LocationRisks": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.Policy.Detail.AgricultureLocationRisk"
            },
            "nullable": true
          }
        },
        "additionalProperties": false
      },
      "B2B.Api.Dtos.Dtos.Policy.Detail.PolicyBurialDetail": {
        "type": "object",
        "properties": {
          "AccountNumber": {
            "type": "string",
            "nullable": true
          },
          "AdditionalDataBank": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bAdditionalDataBank"
          },
          "AffinityGroup": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bAffinityGroup"
          },
          "AffinityGroupSub": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bAffinityGroup"
          },
          "AutomaticAdjustSum": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "BillingFrecuencies": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.KeyValueSelected"
            },
            "nullable": true
          },
          "BranchDescription": {
            "type": "string",
            "nullable": true
          },
          "BranchSSN": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "ChannelEntry": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "Contacts": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bContactDetail"
            },
            "nullable": true
          },
          "Claims": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.Policy.Detail.ClaimDetail"
            },
            "nullable": true
          },
          "CommercialAternative": {
            "type": "string",
            "nullable": true
          },
          "Country": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "Invoice": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bInvoiceSummary"
          },
          "IssueDate": {
            "type": "string",
            "format": "date-time",
            "nullable": true,
            "example": "2026-03-21T00:00:00-03:00"
          },
          "JobNumber": {
            "type": "string",
            "nullable": true
          },
          "MaillingAddress": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bAddressSummary"
          },
          "OrganizerAgents": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
            },
            "nullable": true
          },
          "OrganizerCommission": {
            "type": "number",
            "format": "double",
            "nullable": true
          },
          "Payments": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bPaymentHistory"
            },
            "nullable": true
          },
          "PaymentFees": {
            "type": "integer",
            "format": "int32",
            "nullable": true
          },
          "PaymentMethod": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.Policy.Detail.B2BPaymentMethod"
          },
          "PeriodEnd": {
            "type": "string",
            "format": "date-time",
            "nullable": true,
            "example": "2026-03-21T00:00:00-03:00"
          },
          "PeriodStart": {
            "type": "string",
            "format": "date-time",
            "nullable": true,
            "example": "2026-03-21T00:00:00-03:00"
          },
          "PolicyNumber": {
            "type": "string",
            "nullable": true
          },
          "PolicyPeriodId": {
            "type": "string",
            "nullable": true
          },
          "PolicyTerm": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "PolicyStatus": {
            "type": "string",
            "nullable": true
          },
          "PreviousPolicy": {
            "type": "string",
            "nullable": true
          },
          "NextPolicy": {
            "type": "string",
            "nullable": true
          },
          "PreferredCoverageCurrencies": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.KeyValueSelected"
            },
            "nullable": true
          },
          "PreferredSettlementCurrencies": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.KeyValueSelected"
            },
            "nullable": true
          },
          "ProducerAgent": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "ProducerCommission": {
            "type": "number",
            "format": "double",
            "nullable": true
          },
          "ProducerOfService": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "ServiceOrganizer": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "Status": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "Subtype": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "Ext_PolicyType": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "Offering": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "OfferingPlan": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "Ext_TrackingPAS": {
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
          },
          "Transactions": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bTransaction"
            },
            "nullable": true
          },
          "ReasonsCancellation": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bCancellationInfo"
          },
          "ScopeCoverage": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "Insureds": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.Policy.Insured.InsuredsGroupDto"
            },
            "nullable": true
          },
          "Coverages": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.Policy.Insured.InsuredGroupCoverageDto"
            },
            "nullable": true
          }
        },
        "additionalProperties": false
      },
      "B2B.Api.Dtos.Dtos.Policy.Detail.PolicyCautionDetail": {
        "type": "object",
        "properties": {
          "AccountNumber": {
            "type": "string",
            "nullable": true
          },
          "AdditionalDataBank": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bAdditionalDataBank"
          },
          "AffinityGroup": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bAffinityGroup"
          },
          "AffinityGroupSub": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bAffinityGroup"
          },
          "AutomaticAdjustSum": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "BillingFrecuencies": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.KeyValueSelected"
            },
            "nullable": true
          },
          "BranchDescription": {
            "type": "string",
            "nullable": true
          },
          "BranchSSN": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "ChannelEntry": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "Contacts": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bContactDetail"
            },
            "nullable": true
          },
          "Claims": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.Policy.Detail.ClaimDetail"
            },
            "nullable": true
          },
          "CommercialAternative": {
            "type": "string",
            "nullable": true
          },
          "Country": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "Invoice": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bInvoiceSummary"
          },
          "IssueDate": {
            "type": "string",
            "format": "date-time",
            "nullable": true,
            "example": "2026-03-21T00:00:00-03:00"
          },
          "JobNumber": {
            "type": "string",
            "nullable": true
          },
          "MaillingAddress": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bAddressSummary"
          },
          "OrganizerAgents": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
            },
            "nullable": true
          },
          "OrganizerCommission": {
            "type": "number",
            "format": "double",
            "nullable": true
          },
          "Payments": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bPaymentHistory"
            },
            "nullable": true
          },
          "PaymentFees": {
            "type": "integer",
            "format": "int32",
            "nullable": true
          },
          "PaymentMethod": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.Policy.Detail.B2BPaymentMethod"
          },
          "PeriodEnd": {
            "type": "string",
            "format": "date-time",
            "nullable": true,
            "example": "2026-03-21T00:00:00-03:00"
          },
          "PeriodStart": {
            "type": "string",
            "format": "date-time",
            "nullable": true,
            "example": "2026-03-21T00:00:00-03:00"
          },
          "PolicyNumber": {
            "type": "string",
            "nullable": true
          },
          "PolicyPeriodId": {
            "type": "string",
            "nullable": true
          },
          "PolicyTerm": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "PolicyStatus": {
            "type": "string",
            "nullable": true
          },
          "PreviousPolicy": {
            "type": "string",
            "nullable": true
          },
          "NextPolicy": {
            "type": "string",
            "nullable": true
          },
          "PreferredCoverageCurrencies": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.KeyValueSelected"
            },
            "nullable": true
          },
          "PreferredSettlementCurrencies": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.KeyValueSelected"
            },
            "nullable": true
          },
          "ProducerAgent": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "ProducerCommission": {
            "type": "number",
            "format": "double",
            "nullable": true
          },
          "ProducerOfService": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "ServiceOrganizer": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "Status": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "Subtype": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "Ext_PolicyType": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "Offering": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "OfferingPlan": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "Ext_TrackingPAS": {
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
          },
          "Transactions": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bTransaction"
            },
            "nullable": true
          },
          "ReasonsCancellation": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bCancellationInfo"
          },
          "ScopeCoverage": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "GLCoverage": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.Policy.Detail.GLCoverage"
          }
        },
        "additionalProperties": false
      },
      "B2B.Api.Dtos.Dtos.Policy.Detail.PolicyCombinedDetail": {
        "type": "object",
        "properties": {
          "AccountNumber": {
            "type": "string",
            "nullable": true
          },
          "AdditionalDataBank": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bAdditionalDataBank"
          },
          "AffinityGroup": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bAffinityGroup"
          },
          "AffinityGroupSub": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bAffinityGroup"
          },
          "AutomaticAdjustSum": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "BillingFrecuencies": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.KeyValueSelected"
            },
            "nullable": true
          },
          "BranchDescription": {
            "type": "string",
            "nullable": true
          },
          "BranchSSN": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "ChannelEntry": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "Contacts": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bContactDetail"
            },
            "nullable": true
          },
          "Claims": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.Policy.Detail.ClaimDetail"
            },
            "nullable": true
          },
          "CommercialAternative": {
            "type": "string",
            "nullable": true
          },
          "Country": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "Invoice": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bInvoiceSummary"
          },
          "IssueDate": {
            "type": "string",
            "format": "date-time",
            "nullable": true,
            "example": "2026-03-21T00:00:00-03:00"
          },
          "JobNumber": {
            "type": "string",
            "nullable": true
          },
          "MaillingAddress": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bAddressSummary"
          },
          "OrganizerAgents": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
            },
            "nullable": true
          },
          "OrganizerCommission": {
            "type": "number",
            "format": "double",
            "nullable": true
          },
          "Payments": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bPaymentHistory"
            },
            "nullable": true
          },
          "PaymentFees": {
            "type": "integer",
            "format": "int32",
            "nullable": true
          },
          "PaymentMethod": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.Policy.Detail.B2BPaymentMethod"
          },
          "PeriodEnd": {
            "type": "string",
            "format": "date-time",
            "nullable": true,
            "example": "2026-03-21T00:00:00-03:00"
          },
          "PeriodStart": {
            "type": "string",
            "format": "date-time",
            "nullable": true,
            "example": "2026-03-21T00:00:00-03:00"
          },
          "PolicyNumber": {
            "type": "string",
            "nullable": true
          },
          "PolicyPeriodId": {
            "type": "string",
            "nullable": true
          },
          "PolicyTerm": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "PolicyStatus": {
            "type": "string",
            "nullable": true
          },
          "PreviousPolicy": {
            "type": "string",
            "nullable": true
          },
          "NextPolicy": {
            "type": "string",
            "nullable": true
          },
          "PreferredCoverageCurrencies": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.KeyValueSelected"
            },
            "nullable": true
          },
          "PreferredSettlementCurrencies": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.KeyValueSelected"
            },
            "nullable": true
          },
          "ProducerAgent": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "ProducerCommission": {
            "type": "number",
            "format": "double",
            "nullable": true
          },
          "ProducerOfService": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "ServiceOrganizer": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "Status": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "Subtype": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "Ext_PolicyType": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "Offering": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "OfferingPlan": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "Ext_TrackingPAS": {
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
          },
          "Transactions": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bTransaction"
            },
            "nullable": true
          },
          "ReasonsCancellation": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bCancellationInfo"
          },
          "ScopeCoverage": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "LocationRisks": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.Policy.Detail.LocationRisk"
            },
            "nullable": true
          }
        },
        "additionalProperties": false
      },
      "B2B.Api.Dtos.Dtos.Policy.Detail.PolicyFireDetail": {
        "type": "object",
        "properties": {
          "AccountNumber": {
            "type": "string",
            "nullable": true
          },
          "AdditionalDataBank": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bAdditionalDataBank"
          },
          "AffinityGroup": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bAffinityGroup"
          },
          "AffinityGroupSub": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bAffinityGroup"
          },
          "AutomaticAdjustSum": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "BillingFrecuencies": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.KeyValueSelected"
            },
            "nullable": true
          },
          "BranchDescription": {
            "type": "string",
            "nullable": true
          },
          "BranchSSN": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "ChannelEntry": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "Contacts": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bContactDetail"
            },
            "nullable": true
          },
          "Claims": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.Policy.Detail.ClaimDetail"
            },
            "nullable": true
          },
          "CommercialAternative": {
            "type": "string",
            "nullable": true
          },
          "Country": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "Invoice": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bInvoiceSummary"
          },
          "IssueDate": {
            "type": "string",
            "format": "date-time",
            "nullable": true,
            "example": "2026-03-21T00:00:00-03:00"
          },
          "JobNumber": {
            "type": "string",
            "nullable": true
          },
          "MaillingAddress": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bAddressSummary"
          },
          "OrganizerAgents": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
            },
            "nullable": true
          },
          "OrganizerCommission": {
            "type": "number",
            "format": "double",
            "nullable": true
          },
          "Payments": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bPaymentHistory"
            },
            "nullable": true
          },
          "PaymentFees": {
            "type": "integer",
            "format": "int32",
            "nullable": true
          },
          "PaymentMethod": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.Policy.Detail.B2BPaymentMethod"
          },
          "PeriodEnd": {
            "type": "string",
            "format": "date-time",
            "nullable": true,
            "example": "2026-03-21T00:00:00-03:00"
          },
          "PeriodStart": {
            "type": "string",
            "format": "date-time",
            "nullable": true,
            "example": "2026-03-21T00:00:00-03:00"
          },
          "PolicyNumber": {
            "type": "string",
            "nullable": true
          },
          "PolicyPeriodId": {
            "type": "string",
            "nullable": true
          },
          "PolicyTerm": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "PolicyStatus": {
            "type": "string",
            "nullable": true
          },
          "PreviousPolicy": {
            "type": "string",
            "nullable": true
          },
          "NextPolicy": {
            "type": "string",
            "nullable": true
          },
          "PreferredCoverageCurrencies": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.KeyValueSelected"
            },
            "nullable": true
          },
          "PreferredSettlementCurrencies": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.KeyValueSelected"
            },
            "nullable": true
          },
          "ProducerAgent": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "ProducerCommission": {
            "type": "number",
            "format": "double",
            "nullable": true
          },
          "ProducerOfService": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "ServiceOrganizer": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "Status": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "Subtype": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "Ext_PolicyType": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "Offering": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "OfferingPlan": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "Ext_TrackingPAS": {
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
          },
          "Transactions": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bTransaction"
            },
            "nullable": true
          },
          "ReasonsCancellation": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bCancellationInfo"
          },
          "ScopeCoverage": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "LocationRisks": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.Policy.Detail.LocationRisk"
            },
            "nullable": true
          }
        },
        "additionalProperties": false
      },
      "B2B.Api.Dtos.Dtos.Policy.Detail.PolicyGeneralLiabilityDetail": {
        "type": "object",
        "properties": {
          "AccountNumber": {
            "type": "string",
            "nullable": true
          },
          "AdditionalDataBank": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bAdditionalDataBank"
          },
          "AffinityGroup": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bAffinityGroup"
          },
          "AffinityGroupSub": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bAffinityGroup"
          },
          "AutomaticAdjustSum": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "BillingFrecuencies": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.KeyValueSelected"
            },
            "nullable": true
          },
          "BranchDescription": {
            "type": "string",
            "nullable": true
          },
          "BranchSSN": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "ChannelEntry": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "Contacts": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bContactDetail"
            },
            "nullable": true
          },
          "Claims": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.Policy.Detail.ClaimDetail"
            },
            "nullable": true
          },
          "CommercialAternative": {
            "type": "string",
            "nullable": true
          },
          "Country": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "Invoice": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bInvoiceSummary"
          },
          "IssueDate": {
            "type": "string",
            "format": "date-time",
            "nullable": true,
            "example": "2026-03-21T00:00:00-03:00"
          },
          "JobNumber": {
            "type": "string",
            "nullable": true
          },
          "MaillingAddress": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bAddressSummary"
          },
          "OrganizerAgents": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
            },
            "nullable": true
          },
          "OrganizerCommission": {
            "type": "number",
            "format": "double",
            "nullable": true
          },
          "Payments": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bPaymentHistory"
            },
            "nullable": true
          },
          "PaymentFees": {
            "type": "integer",
            "format": "int32",
            "nullable": true
          },
          "PaymentMethod": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.Policy.Detail.B2BPaymentMethod"
          },
          "PeriodEnd": {
            "type": "string",
            "format": "date-time",
            "nullable": true,
            "example": "2026-03-21T00:00:00-03:00"
          },
          "PeriodStart": {
            "type": "string",
            "format": "date-time",
            "nullable": true,
            "example": "2026-03-21T00:00:00-03:00"
          },
          "PolicyNumber": {
            "type": "string",
            "nullable": true
          },
          "PolicyPeriodId": {
            "type": "string",
            "nullable": true
          },
          "PolicyTerm": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "PolicyStatus": {
            "type": "string",
            "nullable": true
          },
          "PreviousPolicy": {
            "type": "string",
            "nullable": true
          },
          "NextPolicy": {
            "type": "string",
            "nullable": true
          },
          "PreferredCoverageCurrencies": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.KeyValueSelected"
            },
            "nullable": true
          },
          "PreferredSettlementCurrencies": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.KeyValueSelected"
            },
            "nullable": true
          },
          "ProducerAgent": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "ProducerCommission": {
            "type": "number",
            "format": "double",
            "nullable": true
          },
          "ProducerOfService": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "ServiceOrganizer": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "Status": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "Subtype": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "Ext_PolicyType": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "Offering": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "OfferingPlan": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "Ext_TrackingPAS": {
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
          },
          "Transactions": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bTransaction"
            },
            "nullable": true
          },
          "ReasonsCancellation": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bCancellationInfo"
          },
          "ScopeCoverage": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "Coverages": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.Policy.Detail.CoverageBase"
            },
            "nullable": true
          },
          "GLExposures": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.Policy.Detail.GLExposure"
            },
            "nullable": true
          }
        },
        "additionalProperties": false
      },
      "B2B.Api.Dtos.Dtos.Policy.Detail.PolicyHullAircraftDetail": {
        "type": "object",
        "properties": {
          "AccountNumber": {
            "type": "string",
            "nullable": true
          },
          "AdditionalDataBank": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bAdditionalDataBank"
          },
          "AffinityGroup": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bAffinityGroup"
          },
          "AffinityGroupSub": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bAffinityGroup"
          },
          "AutomaticAdjustSum": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "BillingFrecuencies": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.KeyValueSelected"
            },
            "nullable": true
          },
          "BranchDescription": {
            "type": "string",
            "nullable": true
          },
          "BranchSSN": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "ChannelEntry": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "Contacts": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bContactDetail"
            },
            "nullable": true
          },
          "Claims": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.Policy.Detail.ClaimDetail"
            },
            "nullable": true
          },
          "CommercialAternative": {
            "type": "string",
            "nullable": true
          },
          "Country": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "Invoice": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bInvoiceSummary"
          },
          "IssueDate": {
            "type": "string",
            "format": "date-time",
            "nullable": true,
            "example": "2026-03-21T00:00:00-03:00"
          },
          "JobNumber": {
            "type": "string",
            "nullable": true
          },
          "MaillingAddress": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bAddressSummary"
          },
          "OrganizerAgents": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
            },
            "nullable": true
          },
          "OrganizerCommission": {
            "type": "number",
            "format": "double",
            "nullable": true
          },
          "Payments": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bPaymentHistory"
            },
            "nullable": true
          },
          "PaymentFees": {
            "type": "integer",
            "format": "int32",
            "nullable": true
          },
          "PaymentMethod": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.Policy.Detail.B2BPaymentMethod"
          },
          "PeriodEnd": {
            "type": "string",
            "format": "date-time",
            "nullable": true,
            "example": "2026-03-21T00:00:00-03:00"
          },
          "PeriodStart": {
            "type": "string",
            "format": "date-time",
            "nullable": true,
            "example": "2026-03-21T00:00:00-03:00"
          },
          "PolicyNumber": {
            "type": "string",
            "nullable": true
          },
          "PolicyPeriodId": {
            "type": "string",
            "nullable": true
          },
          "PolicyTerm": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "PolicyStatus": {
            "type": "string",
            "nullable": true
          },
          "PreviousPolicy": {
            "type": "string",
            "nullable": true
          },
          "NextPolicy": {
            "type": "string",
            "nullable": true
          },
          "PreferredCoverageCurrencies": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.KeyValueSelected"
            },
            "nullable": true
          },
          "PreferredSettlementCurrencies": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.KeyValueSelected"
            },
            "nullable": true
          },
          "ProducerAgent": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "ProducerCommission": {
            "type": "number",
            "format": "double",
            "nullable": true
          },
          "ProducerOfService": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "ServiceOrganizer": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "Status": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "Subtype": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "Ext_PolicyType": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "Offering": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "OfferingPlan": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "Ext_TrackingPAS": {
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
          },
          "Transactions": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bTransaction"
            },
            "nullable": true
          },
          "ReasonsCancellation": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bCancellationInfo"
          },
          "ScopeCoverage": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "IMHullAircrafts": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.Policy.Detail.IMHullAircrafts"
            },
            "nullable": true
          }
        },
        "additionalProperties": false
      },
      "B2B.Api.Dtos.Dtos.Policy.Detail.PolicyLifeDetail": {
        "type": "object",
        "properties": {
          "AccountNumber": {
            "type": "string",
            "nullable": true
          },
          "AdditionalDataBank": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bAdditionalDataBank"
          },
          "AffinityGroup": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bAffinityGroup"
          },
          "AffinityGroupSub": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bAffinityGroup"
          },
          "AutomaticAdjustSum": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "BillingFrecuencies": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.KeyValueSelected"
            },
            "nullable": true
          },
          "BranchDescription": {
            "type": "string",
            "nullable": true
          },
          "BranchSSN": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "ChannelEntry": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "Contacts": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bContactDetail"
            },
            "nullable": true
          },
          "Claims": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.Policy.Detail.ClaimDetail"
            },
            "nullable": true
          },
          "CommercialAternative": {
            "type": "string",
            "nullable": true
          },
          "Country": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "Invoice": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bInvoiceSummary"
          },
          "IssueDate": {
            "type": "string",
            "format": "date-time",
            "nullable": true,
            "example": "2026-03-21T00:00:00-03:00"
          },
          "JobNumber": {
            "type": "string",
            "nullable": true
          },
          "MaillingAddress": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bAddressSummary"
          },
          "OrganizerAgents": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
            },
            "nullable": true
          },
          "OrganizerCommission": {
            "type": "number",
            "format": "double",
            "nullable": true
          },
          "Payments": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bPaymentHistory"
            },
            "nullable": true
          },
          "PaymentFees": {
            "type": "integer",
            "format": "int32",
            "nullable": true
          },
          "PaymentMethod": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.Policy.Detail.B2BPaymentMethod"
          },
          "PeriodEnd": {
            "type": "string",
            "format": "date-time",
            "nullable": true,
            "example": "2026-03-21T00:00:00-03:00"
          },
          "PeriodStart": {
            "type": "string",
            "format": "date-time",
            "nullable": true,
            "example": "2026-03-21T00:00:00-03:00"
          },
          "PolicyNumber": {
            "type": "string",
            "nullable": true
          },
          "PolicyPeriodId": {
            "type": "string",
            "nullable": true
          },
          "PolicyTerm": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "PolicyStatus": {
            "type": "string",
            "nullable": true
          },
          "PreviousPolicy": {
            "type": "string",
            "nullable": true
          },
          "NextPolicy": {
            "type": "string",
            "nullable": true
          },
          "PreferredCoverageCurrencies": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.KeyValueSelected"
            },
            "nullable": true
          },
          "PreferredSettlementCurrencies": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.KeyValueSelected"
            },
            "nullable": true
          },
          "ProducerAgent": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "ProducerCommission": {
            "type": "number",
            "format": "double",
            "nullable": true
          },
          "ProducerOfService": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "ServiceOrganizer": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "Status": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "Subtype": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "Ext_PolicyType": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "Offering": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "OfferingPlan": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "Ext_TrackingPAS": {
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
          },
          "Transactions": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.Policy.Detail.AahTransaction"
            },
            "nullable": true
          },
          "ReasonsCancellation": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bCancellationInfo"
          },
          "ScopeCoverage": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "Coverages": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.Policy.Insured.InsuredGroupCoverageDto"
            },
            "nullable": true
          },
          "Insureds": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.Policy.Insured.InsuredsGroupDto"
            },
            "nullable": true
          }
        },
        "additionalProperties": false
      },
      "B2B.Api.Dtos.Dtos.Policy.Detail.PolicyOtherRiskDetail": {
        "type": "object",
        "properties": {
          "AccountNumber": {
            "type": "string",
            "nullable": true
          },
          "AdditionalDataBank": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bAdditionalDataBank"
          },
          "AffinityGroup": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bAffinityGroup"
          },
          "AffinityGroupSub": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bAffinityGroup"
          },
          "AutomaticAdjustSum": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "BillingFrecuencies": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.KeyValueSelected"
            },
            "nullable": true
          },
          "BranchDescription": {
            "type": "string",
            "nullable": true
          },
          "BranchSSN": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "ChannelEntry": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "Contacts": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bContactDetail"
            },
            "nullable": true
          },
          "Claims": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.Policy.Detail.ClaimDetail"
            },
            "nullable": true
          },
          "CommercialAternative": {
            "type": "string",
            "nullable": true
          },
          "Country": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "Invoice": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bInvoiceSummary"
          },
          "IssueDate": {
            "type": "string",
            "format": "date-time",
            "nullable": true,
            "example": "2026-03-21T00:00:00-03:00"
          },
          "JobNumber": {
            "type": "string",
            "nullable": true
          },
          "MaillingAddress": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bAddressSummary"
          },
          "OrganizerAgents": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
            },
            "nullable": true
          },
          "OrganizerCommission": {
            "type": "number",
            "format": "double",
            "nullable": true
          },
          "Payments": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bPaymentHistory"
            },
            "nullable": true
          },
          "PaymentFees": {
            "type": "integer",
            "format": "int32",
            "nullable": true
          },
          "PaymentMethod": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.Policy.Detail.B2BPaymentMethod"
          },
          "PeriodEnd": {
            "type": "string",
            "format": "date-time",
            "nullable": true,
            "example": "2026-03-21T00:00:00-03:00"
          },
          "PeriodStart": {
            "type": "string",
            "format": "date-time",
            "nullable": true,
            "example": "2026-03-21T00:00:00-03:00"
          },
          "PolicyNumber": {
            "type": "string",
            "nullable": true
          },
          "PolicyPeriodId": {
            "type": "string",
            "nullable": true
          },
          "PolicyTerm": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "PolicyStatus": {
            "type": "string",
            "nullable": true
          },
          "PreviousPolicy": {
            "type": "string",
            "nullable": true
          },
          "NextPolicy": {
            "type": "string",
            "nullable": true
          },
          "PreferredCoverageCurrencies": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.KeyValueSelected"
            },
            "nullable": true
          },
          "PreferredSettlementCurrencies": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.KeyValueSelected"
            },
            "nullable": true
          },
          "ProducerAgent": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "ProducerCommission": {
            "type": "number",
            "format": "double",
            "nullable": true
          },
          "ProducerOfService": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "ServiceOrganizer": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "Status": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "Subtype": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "Ext_PolicyType": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "Offering": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "OfferingPlan": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "Ext_TrackingPAS": {
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
          },
          "Transactions": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bTransaction"
            },
            "nullable": true
          },
          "ReasonsCancellation": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bCancellationInfo"
          },
          "ScopeCoverage": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "LocationRisks": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.Policy.Detail.LocationRisk"
            },
            "nullable": true
          }
        },
        "additionalProperties": false
      },
      "B2B.Api.Dtos.Dtos.Policy.Detail.PolicyPersonalAccidentsDetail": {
        "type": "object",
        "properties": {
          "AccountNumber": {
            "type": "string",
            "nullable": true
          },
          "AdditionalDataBank": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bAdditionalDataBank"
          },
          "AffinityGroup": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bAffinityGroup"
          },
          "AffinityGroupSub": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bAffinityGroup"
          },
          "AutomaticAdjustSum": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "BillingFrecuencies": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.KeyValueSelected"
            },
            "nullable": true
          },
          "BranchDescription": {
            "type": "string",
            "nullable": true
          },
          "BranchSSN": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "ChannelEntry": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "Contacts": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bContactDetail"
            },
            "nullable": true
          },
          "Claims": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.Policy.Detail.ClaimDetail"
            },
            "nullable": true
          },
          "CommercialAternative": {
            "type": "string",
            "nullable": true
          },
          "Country": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "Invoice": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bInvoiceSummary"
          },
          "IssueDate": {
            "type": "string",
            "format": "date-time",
            "nullable": true,
            "example": "2026-03-21T00:00:00-03:00"
          },
          "JobNumber": {
            "type": "string",
            "nullable": true
          },
          "MaillingAddress": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bAddressSummary"
          },
          "OrganizerAgents": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
            },
            "nullable": true
          },
          "OrganizerCommission": {
            "type": "number",
            "format": "double",
            "nullable": true
          },
          "Payments": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bPaymentHistory"
            },
            "nullable": true
          },
          "PaymentFees": {
            "type": "integer",
            "format": "int32",
            "nullable": true
          },
          "PaymentMethod": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.Policy.Detail.B2BPaymentMethod"
          },
          "PeriodEnd": {
            "type": "string",
            "format": "date-time",
            "nullable": true,
            "example": "2026-03-21T00:00:00-03:00"
          },
          "PeriodStart": {
            "type": "string",
            "format": "date-time",
            "nullable": true,
            "example": "2026-03-21T00:00:00-03:00"
          },
          "PolicyNumber": {
            "type": "string",
            "nullable": true
          },
          "PolicyPeriodId": {
            "type": "string",
            "nullable": true
          },
          "PolicyTerm": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "PolicyStatus": {
            "type": "string",
            "nullable": true
          },
          "PreviousPolicy": {
            "type": "string",
            "nullable": true
          },
          "NextPolicy": {
            "type": "string",
            "nullable": true
          },
          "PreferredCoverageCurrencies": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.KeyValueSelected"
            },
            "nullable": true
          },
          "PreferredSettlementCurrencies": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.KeyValueSelected"
            },
            "nullable": true
          },
          "ProducerAgent": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "ProducerCommission": {
            "type": "number",
            "format": "double",
            "nullable": true
          },
          "ProducerOfService": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "ServiceOrganizer": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "Status": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "Subtype": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "Ext_PolicyType": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "Offering": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "OfferingPlan": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "Ext_TrackingPAS": {
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
          },
          "Transactions": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.Policy.Detail.AahTransaction"
            },
            "nullable": true
          },
          "ReasonsCancellation": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bCancellationInfo"
          },
          "ScopeCoverage": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "Coverages": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.Policy.Insured.InsuredGroupCoverageDto"
            },
            "nullable": true
          },
          "Insureds": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.Policy.Insured.InsuredsGroupDto"
            },
            "nullable": true
          },
          "MaxEntryAge": {
            "type": "integer",
            "format": "int32"
          },
          "MinEntryAge": {
            "type": "integer",
            "format": "int32"
          },
          "MaxAdditionalStayAge": {
            "type": "integer",
            "format": "int32"
          },
          "MaxBasicStayAge": {
            "type": "integer",
            "format": "int32"
          },
          "MaxCompensation": {
            "type": "number",
            "format": "double"
          },
          "InsuredCapital": {
            "type": "number",
            "format": "double"
          }
        },
        "additionalProperties": false
      },
      "B2B.Api.Dtos.Dtos.Policy.Detail.PolicyTechnicalDetail": {
        "type": "object",
        "properties": {
          "AccountNumber": {
            "type": "string",
            "nullable": true
          },
          "AdditionalDataBank": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bAdditionalDataBank"
          },
          "AffinityGroup": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bAffinityGroup"
          },
          "AffinityGroupSub": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bAffinityGroup"
          },
          "AutomaticAdjustSum": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "BillingFrecuencies": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.KeyValueSelected"
            },
            "nullable": true
          },
          "BranchDescription": {
            "type": "string",
            "nullable": true
          },
          "BranchSSN": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "ChannelEntry": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "Contacts": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bContactDetail"
            },
            "nullable": true
          },
          "Claims": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.Policy.Detail.ClaimDetail"
            },
            "nullable": true
          },
          "CommercialAternative": {
            "type": "string",
            "nullable": true
          },
          "Country": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "Invoice": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bInvoiceSummary"
          },
          "IssueDate": {
            "type": "string",
            "format": "date-time",
            "nullable": true,
            "example": "2026-03-21T00:00:00-03:00"
          },
          "JobNumber": {
            "type": "string",
            "nullable": true
          },
          "MaillingAddress": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bAddressSummary"
          },
          "OrganizerAgents": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
            },
            "nullable": true
          },
          "OrganizerCommission": {
            "type": "number",
            "format": "double",
            "nullable": true
          },
          "Payments": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bPaymentHistory"
            },
            "nullable": true
          },
          "PaymentFees": {
            "type": "integer",
            "format": "int32",
            "nullable": true
          },
          "PaymentMethod": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.Policy.Detail.B2BPaymentMethod"
          },
          "PeriodEnd": {
            "type": "string",
            "format": "date-time",
            "nullable": true,
            "example": "2026-03-21T00:00:00-03:00"
          },
          "PeriodStart": {
            "type": "string",
            "format": "date-time",
            "nullable": true,
            "example": "2026-03-21T00:00:00-03:00"
          },
          "PolicyNumber": {
            "type": "string",
            "nullable": true
          },
          "PolicyPeriodId": {
            "type": "string",
            "nullable": true
          },
          "PolicyTerm": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "PolicyStatus": {
            "type": "string",
            "nullable": true
          },
          "PreviousPolicy": {
            "type": "string",
            "nullable": true
          },
          "NextPolicy": {
            "type": "string",
            "nullable": true
          },
          "PreferredCoverageCurrencies": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.KeyValueSelected"
            },
            "nullable": true
          },
          "PreferredSettlementCurrencies": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.KeyValueSelected"
            },
            "nullable": true
          },
          "ProducerAgent": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "ProducerCommission": {
            "type": "number",
            "format": "double",
            "nullable": true
          },
          "ProducerOfService": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "ServiceOrganizer": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "Status": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "Subtype": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "Ext_PolicyType": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "Offering": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "OfferingPlan": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "Ext_TrackingPAS": {
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
          },
          "Transactions": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bTransaction"
            },
            "nullable": true
          },
          "ReasonsCancellation": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bCancellationInfo"
          },
          "ScopeCoverage": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "IMContractorsEquipment": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.Policy.Detail.IMContractorsEquipment"
            },
            "nullable": true
          },
          "IMContractorsEquipmentPart": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.Policy.Detail.IMContractorsEquipmentPart"
          }
        },
        "additionalProperties": false
      },
      "B2B.Api.Dtos.Dtos.Policy.Detail.PolicyTheftDetail": {
        "type": "object",
        "properties": {
          "AccountNumber": {
            "type": "string",
            "nullable": true
          },
          "AdditionalDataBank": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bAdditionalDataBank"
          },
          "AffinityGroup": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bAffinityGroup"
          },
          "AffinityGroupSub": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bAffinityGroup"
          },
          "AutomaticAdjustSum": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "BillingFrecuencies": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.KeyValueSelected"
            },
            "nullable": true
          },
          "BranchDescription": {
            "type": "string",
            "nullable": true
          },
          "BranchSSN": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "ChannelEntry": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "Contacts": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bContactDetail"
            },
            "nullable": true
          },
          "Claims": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.Policy.Detail.ClaimDetail"
            },
            "nullable": true
          },
          "CommercialAternative": {
            "type": "string",
            "nullable": true
          },
          "Country": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "Invoice": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bInvoiceSummary"
          },
          "IssueDate": {
            "type": "string",
            "format": "date-time",
            "nullable": true,
            "example": "2026-03-21T00:00:00-03:00"
          },
          "JobNumber": {
            "type": "string",
            "nullable": true
          },
          "MaillingAddress": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bAddressSummary"
          },
          "OrganizerAgents": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
            },
            "nullable": true
          },
          "OrganizerCommission": {
            "type": "number",
            "format": "double",
            "nullable": true
          },
          "Payments": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bPaymentHistory"
            },
            "nullable": true
          },
          "PaymentFees": {
            "type": "integer",
            "format": "int32",
            "nullable": true
          },
          "PaymentMethod": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.Policy.Detail.B2BPaymentMethod"
          },
          "PeriodEnd": {
            "type": "string",
            "format": "date-time",
            "nullable": true,
            "example": "2026-03-21T00:00:00-03:00"
          },
          "PeriodStart": {
            "type": "string",
            "format": "date-time",
            "nullable": true,
            "example": "2026-03-21T00:00:00-03:00"
          },
          "PolicyNumber": {
            "type": "string",
            "nullable": true
          },
          "PolicyPeriodId": {
            "type": "string",
            "nullable": true
          },
          "PolicyTerm": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "PolicyStatus": {
            "type": "string",
            "nullable": true
          },
          "PreviousPolicy": {
            "type": "string",
            "nullable": true
          },
          "NextPolicy": {
            "type": "string",
            "nullable": true
          },
          "PreferredCoverageCurrencies": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.KeyValueSelected"
            },
            "nullable": true
          },
          "PreferredSettlementCurrencies": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.KeyValueSelected"
            },
            "nullable": true
          },
          "ProducerAgent": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "ProducerCommission": {
            "type": "number",
            "format": "double",
            "nullable": true
          },
          "ProducerOfService": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "ServiceOrganizer": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "Status": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "Subtype": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "Ext_PolicyType": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "Offering": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "OfferingPlan": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "Ext_TrackingPAS": {
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
          },
          "Transactions": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bTransaction"
            },
            "nullable": true
          },
          "ReasonsCancellation": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bCancellationInfo"
          },
          "ScopeCoverage": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "LocationRisks": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.Policy.Detail.LocationRisk"
            },
            "nullable": true
          }
        },
        "additionalProperties": false
      },
      "B2B.Api.Dtos.Dtos.Policy.Detail.PolicyTransportDetail": {
        "type": "object",
        "properties": {
          "AccountNumber": {
            "type": "string",
            "nullable": true
          },
          "AdditionalDataBank": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bAdditionalDataBank"
          },
          "AffinityGroup": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bAffinityGroup"
          },
          "AffinityGroupSub": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bAffinityGroup"
          },
          "AutomaticAdjustSum": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "BillingFrecuencies": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.KeyValueSelected"
            },
            "nullable": true
          },
          "BranchDescription": {
            "type": "string",
            "nullable": true
          },
          "BranchSSN": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "ChannelEntry": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "Contacts": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bContactDetail"
            },
            "nullable": true
          },
          "Claims": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.Policy.Detail.ClaimDetail"
            },
            "nullable": true
          },
          "CommercialAternative": {
            "type": "string",
            "nullable": true
          },
          "Country": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "Invoice": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bInvoiceSummary"
          },
          "IssueDate": {
            "type": "string",
            "format": "date-time",
            "nullable": true,
            "example": "2026-03-21T00:00:00-03:00"
          },
          "JobNumber": {
            "type": "string",
            "nullable": true
          },
          "MaillingAddress": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bAddressSummary"
          },
          "OrganizerAgents": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
            },
            "nullable": true
          },
          "OrganizerCommission": {
            "type": "number",
            "format": "double",
            "nullable": true
          },
          "Payments": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bPaymentHistory"
            },
            "nullable": true
          },
          "PaymentFees": {
            "type": "integer",
            "format": "int32",
            "nullable": true
          },
          "PaymentMethod": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.Policy.Detail.B2BPaymentMethod"
          },
          "PeriodEnd": {
            "type": "string",
            "format": "date-time",
            "nullable": true,
            "example": "2026-03-21T00:00:00-03:00"
          },
          "PeriodStart": {
            "type": "string",
            "format": "date-time",
            "nullable": true,
            "example": "2026-03-21T00:00:00-03:00"
          },
          "PolicyNumber": {
            "type": "string",
            "nullable": true
          },
          "PolicyPeriodId": {
            "type": "string",
            "nullable": true
          },
          "PolicyTerm": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "PolicyStatus": {
            "type": "string",
            "nullable": true
          },
          "PreviousPolicy": {
            "type": "string",
            "nullable": true
          },
          "NextPolicy": {
            "type": "string",
            "nullable": true
          },
          "PreferredCoverageCurrencies": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.KeyValueSelected"
            },
            "nullable": true
          },
          "PreferredSettlementCurrencies": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.KeyValueSelected"
            },
            "nullable": true
          },
          "ProducerAgent": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "ProducerCommission": {
            "type": "number",
            "format": "double",
            "nullable": true
          },
          "ProducerOfService": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "ServiceOrganizer": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "Status": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "Subtype": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "Ext_PolicyType": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "Offering": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "OfferingPlan": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "Ext_TrackingPAS": {
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
          },
          "Transactions": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bTransaction"
            },
            "nullable": true
          },
          "ReasonsCancellation": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bCancellationInfo"
          },
          "ScopeCoverage": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "IMGoodsTransportPart": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.Policy.Detail.IMGoodsTransportPart"
          }
        },
        "additionalProperties": false
      },
      "B2B.Api.Dtos.Dtos.Policy.Detail.ScheduleItem": {
        "type": "object",
        "properties": {
          "Coverages": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.Policy.Detail.ScheduleItemCoverage"
            },
            "nullable": true
          },
          "Attributes": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bAttribute"
            },
            "nullable": true
          }
        },
        "additionalProperties": false
      },
      "B2B.Api.Dtos.Dtos.Policy.Detail.ScheduleItemCoverage": {
        "type": "object",
        "properties": {
          "Description": {
            "type": "string",
            "nullable": true
          },
          "CoverageTerms": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.Policy.Detail.CoverageTerm"
            },
            "nullable": true
          },
          "VehicleNumber": {
            "type": "integer",
            "format": "int32"
          }
        },
        "additionalProperties": false
      },
      "B2B.Api.Dtos.Dtos.Policy.Detail.SpecificRisk": {
        "type": "object",
        "properties": {
          "PublicId": {
            "type": "string",
            "nullable": true
          },
          "ClassCode": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "Description": {
            "type": "string",
            "nullable": true
          },
          "Ext_CP7SpecClassCodeType": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "PreferredCoverageCurrency": {
            "type": "string",
            "nullable": true
          },
          "SpecialClassLocation": {
            "type": "string",
            "nullable": true
          },
          "SpecialClassNumber": {
            "type": "integer",
            "format": "int32"
          },
          "ExplProofElectInst": {
            "type": "boolean"
          },
          "HydrantNetwork": {
            "type": "boolean"
          },
          "SmokeHeatDetection": {
            "type": "boolean"
          },
          "Sprayers": {
            "type": "boolean"
          }
        },
        "additionalProperties": false
      },
      "B2B.Api.Dtos.Dtos.Policy.Detail.SpecificRiskWithCoverages": {
        "type": "object",
        "properties": {
          "PublicId": {
            "type": "string",
            "nullable": true
          },
          "ClassCode": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "Description": {
            "type": "string",
            "nullable": true
          },
          "Ext_CP7SpecClassCodeType": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "PreferredCoverageCurrency": {
            "type": "string",
            "nullable": true
          },
          "SpecialClassLocation": {
            "type": "string",
            "nullable": true
          },
          "SpecialClassNumber": {
            "type": "integer",
            "format": "int32"
          },
          "ExplProofElectInst": {
            "type": "boolean"
          },
          "HydrantNetwork": {
            "type": "boolean"
          },
          "SmokeHeatDetection": {
            "type": "boolean"
          },
          "Sprayers": {
            "type": "boolean"
          },
          "Conditions": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.Policy.Detail.CoverageBase"
            },
            "nullable": true
          },
          "Coverages": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.Policy.Detail.CoverageBase"
            },
            "nullable": true
          },
          "Exclusions": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.Policy.Detail.CoverageBase"
            },
            "nullable": true
          }
        },
        "additionalProperties": false
      },
      "B2B.Api.Dtos.Dtos.Policy.Detail.TermOption": {
        "type": "object",
        "properties": {
          "Description": {
            "type": "string",
            "nullable": true
          }
        },
        "additionalProperties": false
      },
      "B2B.Api.Dtos.Dtos.Policy.Insured.B2BInsuredDto": {
        "type": "object",
        "properties": {
          "Beneficiaries": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.Policy.Insured.BeneficiaryDto"
            },
            "nullable": true
          },
          "DateOfBirth": {
            "type": "string",
            "format": "date-time",
            "example": "2026-03-21T00:00:00-03:00"
          },
          "Ext_AAHBeneficiaryType": {
            "type": "string",
            "nullable": true
          },
          "FirstName": {
            "type": "string",
            "nullable": true
          },
          "Gender": {
            "type": "string",
            "nullable": true
          },
          "InsuredAmount": {
            "type": "number",
            "format": "double"
          },
          "InsuredNumber": {
            "type": "string",
            "nullable": true
          },
          "LastName": {
            "type": "string",
            "nullable": true
          },
          "OfficialIdType": {
            "type": "string",
            "nullable": true
          },
          "PersonOccupation": {
            "type": "string",
            "nullable": true
          },
          "TaxID": {
            "type": "string",
            "nullable": true
          }
        },
        "additionalProperties": false
      },
      "B2B.Api.Dtos.Dtos.Policy.Insured.BeneficiaryDto": {
        "type": "object",
        "properties": {
          "DateOfBirth": {
            "type": "string",
            "format": "date-time",
            "example": "2026-03-21T00:00:00-03:00"
          },
          "FirstName": {
            "type": "string",
            "nullable": true
          },
          "LastName": {
            "type": "string",
            "nullable": true
          },
          "Observations": {
            "type": "string",
            "nullable": true
          },
          "Percentage": {
            "type": "integer",
            "format": "int32"
          },
          "PublicID": {
            "type": "string",
            "nullable": true
          },
          "Relationship": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "TaxID": {
            "type": "string",
            "nullable": true
          }
        },
        "additionalProperties": false
      },
      "B2B.Api.Dtos.Dtos.Policy.Insured.InsuredGroupCoverageDto": {
        "type": "object",
        "properties": {
          "CoverageTerms": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.Policy.Insured.InsuredGroupCoverageTermDto"
            },
            "nullable": true
          },
          "PublicId": {
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
      "B2B.Api.Dtos.Dtos.Policy.Insured.InsuredGroupCoverageTermDto": {
        "type": "object",
        "properties": {
          "CoverageTermOptions": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.Policy.Insured.InsuredGroupCoverageTermOptionDto"
            },
            "nullable": true
          },
          "Description": {
            "type": "string",
            "nullable": true
          },
          "Value": {
            "type": "string",
            "nullable": true
          }
        },
        "additionalProperties": false
      },
      "B2B.Api.Dtos.Dtos.Policy.Insured.InsuredGroupCoverageTermOptionDto": {
        "type": "object",
        "properties": {
          "Description": {
            "type": "string",
            "nullable": true
          }
        },
        "additionalProperties": false
      },
      "B2B.Api.Dtos.Dtos.Policy.Insured.InsuredsGroupDto": {
        "type": "object",
        "properties": {
          "GroupName": {
            "type": "string",
            "nullable": true
          },
          "Insureds": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.Policy.Insured.B2BInsuredDto"
            },
            "nullable": true
          }
        },
        "additionalProperties": false
      },
      "B2B.Api.Dtos.Dtos.Policy.Location.PolicyLocationRisk": {
        "type": "object",
        "properties": {
          "AdditionalInterestContacts": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.Policy.Detail.AdditionalInterestContact"
            },
            "nullable": true
          },
          "Address": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bAddress"
          },
          "Buildings": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.Policy.Detail.BuildingRiskWithCoverages"
            },
            "nullable": true
          },
          "Coverages": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.Policy.Detail.CoverageBase"
            },
            "nullable": true
          },
          "Crops": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.Policy.Detail.Crops"
            },
            "nullable": true
          },
          "LocationNote": {
            "type": "string",
            "nullable": true
          },
          "PublicId": {
            "type": "string",
            "nullable": true
          },
          "SpecificRisks": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.Policy.Detail.SpecificRisk"
            },
            "nullable": true
          }
        },
        "additionalProperties": false
      },
      "B2B.Api.Dtos.Dtos.Producer.AffinityGroupDto": {
        "type": "object",
        "properties": {
          "AffinityGroupType": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
          },
          "AutomaticAssignment": {
            "type": "boolean",
            "nullable": true
          },
          "DisplayName": {
            "type": "string",
            "nullable": true
          },
          "EndDate": {
            "type": "string",
            "format": "date-time",
            "nullable": true,
            "example": "2026-03-21T00:00:00-03:00"
          },
          "Organization": {
            "type": "string",
            "nullable": true
          },
          "PublicId": {
            "type": "string",
            "nullable": true
          },
          "StartDate": {
            "type": "string",
            "format": "date-time",
            "nullable": true,
            "example": "2026-03-21T00:00:00-03:00"
          }
        },
        "additionalProperties": false
      },
      "B2B.Api.Dtos.Dtos.Producer.MovementPaymentDto": {
        "type": "object",
        "properties": {
          "Poliza": {
            "type": "string",
            "nullable": true
          },
          "Pagos": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.Producer.PaymentMovementItemDto"
            },
            "nullable": true
          }
        },
        "additionalProperties": false
      },
      "B2B.Api.Dtos.Dtos.Producer.OrganizationDto": {
        "type": "object",
        "properties": {
          "Carrier": {
            "type": "boolean"
          },
          "ContactPublicID": {
            "type": "string",
            "nullable": true
          },
          "ExtUniqueKeyBank": {
            "type": "string",
            "nullable": true
          },
          "MasterAdmin": {
            "type": "boolean"
          },
          "Name": {
            "type": "string",
            "nullable": true
          },
          "ProducerStatus": {
            "type": "string",
            "nullable": true
          },
          "PublicID": {
            "type": "string",
            "nullable": true
          },
          "Tier": {
            "type": "string",
            "nullable": true
          },
          "Type": {
            "type": "string",
            "nullable": true
          },
          "Country": {
            "type": "string",
            "nullable": true
          },
          "Ext_EmailAddress1": {
            "type": "string",
            "nullable": true
          },
          "Ext_TaxID": {
            "type": "string",
            "nullable": true
          },
          "WorkPhone": {
            "type": "string",
            "nullable": true
          },
          "CellPhone": {
            "type": "string",
            "nullable": true
          }
        },
        "additionalProperties": false
      },
      "B2B.Api.Dtos.Dtos.Producer.PaymentMovementItemDto": {
        "type": "object",
        "properties": {
          "Ext_ApplicationDate": {
            "type": "string",
            "format": "date-time",
            "example": "2026-03-21T00:00:00-03:00"
          },
          "PaymentAmount": {
            "type": "string",
            "nullable": true
          },
          "ReversedDate": {
            "type": "string",
            "format": "date-time",
            "example": "2026-03-21T00:00:00-03:00"
          }
        },
        "additionalProperties": false
      },
      "B2B.Api.Dtos.Dtos.Producer.ProducerAddressDto": {
        "type": "object",
        "properties": {
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
            "type": "string",
            "nullable": true
          },
          "CEDEX": {
            "type": "boolean"
          },
          "CEDEXBureau": {
            "type": "string",
            "nullable": true
          },
          "City": {
            "type": "string",
            "nullable": true
          },
          "Country": {
            "type": "string",
            "nullable": true
          },
          "County": {
            "type": "string",
            "nullable": true
          },
          "Description": {
            "type": "string",
            "nullable": true
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
            "type": "string",
            "nullable": true
          },
          "Ext_StreetNumber": {
            "type": "string",
            "nullable": true
          },
          "CountryDescription": {
            "type": "string",
            "nullable": true
          },
          "StateDescription": {
            "type": "string",
            "nullable": true
          }
        },
        "additionalProperties": false
      },
      "B2B.Api.Dtos.Dtos.Producer.ProducerDto": {
        "type": "object",
        "properties": {
          "Address": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.Producer.ProducerAddressDto"
          },
          "AppointmentDate": {
            "type": "string",
            "format": "date-time",
            "example": "2026-03-21T00:00:00-03:00"
          },
          "BranchPublicID": {
            "type": "string",
            "nullable": true
          },
          "Code": {
            "type": "string",
            "nullable": true
          },
          "Description": {
            "type": "string",
            "nullable": true
          },
          "EnrollmentNumber": {
            "type": "string",
            "nullable": true
          },
          "ParentPublicID": {
            "type": "string",
            "nullable": true
          },
          "PreferredUnderwriterPublicID": {
            "type": "string",
            "nullable": true
          },
          "ProducerStatus": {
            "type": "string",
            "nullable": true
          },
          "PublicID": {
            "type": "string",
            "nullable": true
          },
          "TerminationDate": {
            "type": "string",
            "format": "date-time",
            "example": "2026-03-21T00:00:00-03:00"
          },
          "orgPublicID": {
            "type": "string",
            "nullable": true
          },
          "Country": {
            "type": "string",
            "nullable": true
          },
          "OrganizationCode": {
            "type": "string",
            "nullable": true
          },
          "Ext_ChannelCategory": {
            "type": "string",
            "nullable": true
          },
          "Ext_ChannelCategoryDescrip": {
            "type": "string",
            "nullable": true
          },
          "Ext_BranchOffice": {
            "type": "string",
            "nullable": true
          },
          "Organization": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.Producer.OrganizationDto"
          }
        },
        "additionalProperties": false
      },
      "B2B.Api.Dtos.Dtos.Producer.ProducerInfoDto": {
        "type": "object",
        "properties": {
          "Name": {
            "type": "string",
            "nullable": true
          },
          "TaxID": {
            "type": "string",
            "nullable": true
          },
          "OrganizerCode": {
            "type": "string",
            "nullable": true
          },
          "OrganizerName": {
            "type": "string",
            "nullable": true
          },
          "DistributionChannel": {
            "type": "string",
            "nullable": true
          }
        },
        "additionalProperties": false
      },
      "B2B.Api.Dtos.OperationResult.AvailableCreditCardsResponse": {
        "type": "object",
        "properties": {
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
              "$ref": "#/components/schemas/B2B.Api.Dtos.OperationResult.Message"
            },
            "nullable": true
          },
          "CreditCards": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.Payment.Payment.CreditCardDto"
            },
            "nullable": true
          }
        },
        "additionalProperties": false
      },
      "B2B.Api.Dtos.OperationResult.B2BMovementByOrganizationResponse": {
        "type": "object",
        "properties": {
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
              "$ref": "#/components/schemas/B2B.Api.Dtos.OperationResult.Message"
            },
            "nullable": true
          },
          "ListJobSummary": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2BMovement"
            },
            "nullable": true
          }
        },
        "additionalProperties": false
      },
      "B2B.Api.Dtos.OperationResult.Level": {
        "enum": [0, 1, 2],
        "type": "integer",
        "format": "int32"
      },
      "B2B.Api.Dtos.OperationResult.Message": {
        "type": "object",
        "properties": {
          "NombreServicio": {
            "type": "string",
            "nullable": true
          },
          "VersionServicio": {
            "type": "string",
            "nullable": true
          },
          "Description": {
            "type": "string",
            "nullable": true
          },
          "MessageBeautiful": {
            "type": "string",
            "nullable": true
          },
          "StackTrace": {
            "type": "string",
            "nullable": true
          },
          "ErrorLevel": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.OperationResult.Level"
          }
        },
        "additionalProperties": false
      },
      "B2B.Api.Dtos.OperationResult.OperationResultCiudadesPorCodPostal": {
        "type": "object",
        "properties": {
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
              "$ref": "#/components/schemas/B2B.Api.Dtos.OperationResult.Message"
            },
            "nullable": true
          },
          "ciudadDTO": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bCityDto"
            },
            "nullable": true
          }
        },
        "additionalProperties": false
      },
      "B2B.Api.Dtos.OperationResult.OperationResultGetPolicyDetailByPolicyNumber": {
        "type": "object",
        "properties": {
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
              "$ref": "#/components/schemas/B2B.Api.Dtos.OperationResult.Message"
            },
            "nullable": true
          },
          "PolicyDetail": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bPolicyDetailAuto"
          }
        },
        "additionalProperties": false
      },
      "B2B.Api.Dtos.OperationResult.Producer.ProducerByProducerCodeResponse": {
        "type": "object",
        "properties": {
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
              "$ref": "#/components/schemas/B2B.Api.Dtos.OperationResult.Message"
            },
            "nullable": true
          },
          "producerInfo": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.Producer.ProducerInfoDto"
          }
        },
        "additionalProperties": false
      },
      "B2B.Api.Dtos.Requests.Inspection.DeferredInspectionRequest": {
        "type": "object",
        "properties": {
          "PolicyPeriodId": {
            "type": "string",
            "nullable": true
          },
          "QuoteId": {
            "type": "string",
            "nullable": true
          },
          "InspectionFiles": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bInspectionFiles"
            },
            "nullable": true
          }
        },
        "additionalProperties": false
      },
      "B2B.Api.Dtos.Requests.LoginRequest": {
        "required": [
          "Password",
          "UserName"
        ],
        "type": "object",
        "properties": {
          "UserName": {
            "minLength": 1,
            "type": "string"
          },
          "Password": {
            "minLength": 1,
            "type": "string"
          }
        },
        "additionalProperties": false
      },
      "B2B.Api.Dtos.Requests.Policy.PolicyCancellationRequest": {
        "type": "object",
        "properties": {
          "PolicyNumber": {
            "type": "string",
            "nullable": true
          },
          "Description": {
            "type": "string",
            "nullable": true
          },
          "ReasonCode": {
            "type": "string",
            "nullable": true
          },
          "CancelDate": {
            "type": "string",
            "nullable": true
          }
        },
        "additionalProperties": false
      },
      "B2B.Api.Dtos.Requests.Producer.B2BMovementByOrganizationRequest": {
        "required": [
          "EndDate",
          "StartDate",
          "TaxID"
        ],
        "type": "object",
        "properties": {
          "TaxID": {
            "minLength": 1,
            "type": "string"
          },
          "StartDate": {
            "type": "string",
            "format": "date-time",
            "example": "2026-03-21T00:00:00-03:00"
          },
          "EndDate": {
            "type": "string",
            "format": "date-time",
            "example": "2026-03-21T00:00:00-03:00"
          },
          "ProducerCode": {
            "type": "string",
            "nullable": true
          }
        },
        "additionalProperties": false
      },
      "B2B.Api.Dtos.Responses.Claim.ClaimByClaimNumberResponse": {
        "type": "object",
        "properties": {
          "Claims": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.Claim.ClaimSummary"
            },
            "nullable": true
          }
        },
        "additionalProperties": false
      },
      "B2B.Api.Dtos.Responses.Claim.ClaimByProducerCodeResponse": {
        "type": "object",
        "properties": {
          "Claims": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.Claim.ClaimSummary"
            },
            "nullable": true
          }
        },
        "additionalProperties": false
      },
      "B2B.Api.Dtos.Responses.Commission.EarnedCommissionsPaginatedResponse": {
        "type": "object",
        "properties": {
          "EarnedCommissions": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bEarnedCommission"
            },
            "nullable": true
          },
          "Totals": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Responses.Commission.TotalsSearchResponse"
          },
          "TotalsByProduct": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/B2B.Api.Dtos.Responses.Commission.TotalByProduct"
            },
            "nullable": true
          },
          "TotalItems": {
            "type": "integer",
            "format": "int32"
          }
        },
        "additionalProperties": false
      },
      "B2B.Api.Dtos.Responses.Commission.TotalByProduct": {
        "type": "object",
        "properties": {
          "Premium": {
            "type": "number",
            "format": "double"
          },
          "Basis": {
            "type": "number",
            "format": "double"
          },
          "Amount": {
            "type": "number",
            "format": "double"
          },
          "PolicyProductCode": {
            "type": "string",
            "nullable": true
          },
          "TotalItems": {
            "type": "integer",
            "format": "int32"
          }
        },
        "additionalProperties": false
      },
      "B2B.Api.Dtos.Responses.Commission.TotalsSearchResponse": {
        "type": "object",
        "properties": {
          "Premium": {
            "type": "number",
            "format": "double"
          },
          "Basis": {
            "type": "number",
            "format": "double"
          },
          "Amount": {
            "type": "number",
            "format": "double"
          }
        },
        "additionalProperties": false
      },
      "B2B.Api.Dtos.Responses.LoginResponse": {
        "type": "object",
        "properties": {
          "Id": {
            "type": "string",
            "nullable": true
          },
          "Auth_Token": {
            "type": "string",
            "nullable": true
          },
          "Expires_In": {
            "type": "integer",
            "format": "int32"
          },
          "Refresh_Token": {
            "type": "string",
            "nullable": true
          }
        },
        "additionalProperties": false
      },
      "B2B.Api.Dtos.Responses.Payments.B2bRejectedPaymentRequestsByProducerCodesResponse": {
        "type": "object",
        "properties": {
          "PaymentRejected": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bRejectedPaymentRequestDto"
            },
            "nullable": true
          }
        },
        "additionalProperties": false
      },
      "B2B.Api.Dtos.Responses.Policy.PolicyAgricultureDetailResponse": {
        "type": "object",
        "properties": {
          "PolicyDetails": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.Policy.Detail.PolicyAgricultureDetail"
          }
        },
        "additionalProperties": false
      },
      "B2B.Api.Dtos.Responses.Policy.PolicyBurialDetailResponse": {
        "type": "object",
        "properties": {
          "PolicyDetail": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.Policy.Detail.PolicyBurialDetail"
          }
        },
        "additionalProperties": false
      },
      "B2B.Api.Dtos.Responses.Policy.PolicyCautionDetailResponse": {
        "type": "object",
        "properties": {
          "PolicyDetail": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.Policy.Detail.PolicyCautionDetail"
          }
        },
        "additionalProperties": false
      },
      "B2B.Api.Dtos.Responses.Policy.PolicyCombinedDetailResponse": {
        "type": "object",
        "properties": {
          "PolicyDetail": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.Policy.Detail.PolicyCombinedDetail"
          }
        },
        "additionalProperties": false
      },
      "B2B.Api.Dtos.Responses.Policy.PolicyFireDetailResponse": {
        "type": "object",
        "properties": {
          "PolicyDetail": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.Policy.Detail.PolicyFireDetail"
          }
        },
        "additionalProperties": false
      },
      "B2B.Api.Dtos.Responses.Policy.PolicyGeneralLiabilityDetailResponse": {
        "type": "object",
        "properties": {
          "PolicyDetail": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.Policy.Detail.PolicyGeneralLiabilityDetail"
          }
        },
        "additionalProperties": false
      },
      "B2B.Api.Dtos.Responses.Policy.PolicyHullAircraftDetailResponse": {
        "type": "object",
        "properties": {
          "PolicyDetails": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.Policy.Detail.PolicyHullAircraftDetail"
          }
        },
        "additionalProperties": false
      },
      "B2B.Api.Dtos.Responses.Policy.PolicyLifeDetailResponse": {
        "type": "object",
        "properties": {
          "PolicyDetail": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.Policy.Detail.PolicyLifeDetail"
          }
        },
        "additionalProperties": false
      },
      "B2B.Api.Dtos.Responses.Policy.PolicyOtherRiskDetailResponse": {
        "type": "object",
        "properties": {
          "PolicyDetail": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.Policy.Detail.PolicyOtherRiskDetail"
          }
        },
        "additionalProperties": false
      },
      "B2B.Api.Dtos.Responses.Policy.PolicyPersonalAccidentsDetailResponse": {
        "type": "object",
        "properties": {
          "PolicyDetail": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.Policy.Detail.PolicyPersonalAccidentsDetail"
          }
        },
        "additionalProperties": false
      },
      "B2B.Api.Dtos.Responses.Policy.PolicyTechnicalDetailResponse": {
        "type": "object",
        "properties": {
          "PolicyDetails": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.Policy.Detail.PolicyTechnicalDetail"
          }
        },
        "additionalProperties": false
      },
      "B2B.Api.Dtos.Responses.Policy.PolicyTheftDetailResponse": {
        "type": "object",
        "properties": {
          "PolicyDetail": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.Policy.Detail.PolicyTheftDetail"
          }
        },
        "additionalProperties": false
      },
      "B2B.Api.Dtos.Responses.Policy.PolicyTransportDetailResponse": {
        "type": "object",
        "properties": {
          "PolicyDetail": {
            "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.Policy.Detail.PolicyTransportDetail"
          }
        },
        "additionalProperties": false
      },
      "B2B.Api.Dtos.Responses.Policy.PortfolioProducerResponse": {
        "type": "object",
        "properties": {
          "Policies": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/B2B.Api.Dtos.Responses.Policy.PortfolioSummaryPolicy"
            },
            "nullable": true
          }
        },
        "additionalProperties": false
      },
      "B2B.Api.Dtos.Responses.Policy.PortfolioSummaryPolicy": {
        "type": "object",
        "properties": {
          "State": {
            "type": "string",
            "nullable": true
          },
          "PolicyNumber": {
            "type": "string",
            "nullable": true
          },
          "InsuredName": {
            "type": "string",
            "nullable": true
          },
          "InsuredDocumentType": {
            "type": "string",
            "nullable": true
          },
          "InsuredDocument": {
            "type": "string",
            "nullable": true
          },
          "PolicyType": {
            "type": "string",
            "nullable": true
          },
          "ProducerCode": {
            "type": "string",
            "nullable": true
          },
          "OrganizerCode": {
            "type": "string",
            "nullable": true
          },
          "TypeOfContracting": {
            "type": "string",
            "nullable": true
          }
        },
        "additionalProperties": false
      },
      "B2B.Api.Dtos.Responses.PolicyLocation.LocationsByPolicyPeriodIdResponse": {
        "type": "object",
        "properties": {
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
              "$ref": "#/components/schemas/B2B.Api.Dtos.OperationResult.Message"
            },
            "nullable": true
          },
          "Locations": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.Policy.Location.PolicyLocationRisk"
            },
            "nullable": true
          }
        },
        "additionalProperties": false
      },
      "B2B.Api.Dtos.Responses.Producer.AffinityGroupsByProducerCodeResponse": {
        "type": "object",
        "properties": {
          "AffinityGroups": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.Producer.AffinityGroupDto"
            },
            "nullable": true
          }
        },
        "additionalProperties": false
      },
      "B2B.Api.Dtos.Responses.Producer.B2bProducerPromiseItemsByPublicIdResponse": {
        "type": "object",
        "properties": {
          "ProducerPromiseItems": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bProducerPromiseItem"
            },
            "nullable": true
          }
        },
        "additionalProperties": false
      },
      "B2B.Api.Dtos.Responses.Producer.B2bProducerPromiseResponse": {
        "type": "object",
        "properties": {
          "ProducerPromises": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bProducerPromise"
            },
            "nullable": true
          }
        },
        "additionalProperties": false
      },
      "B2B.Api.Dtos.Responses.Producer.MovementsPaymentsByTaxIdPerDayResponse": {
        "type": "object",
        "properties": {
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
              "$ref": "#/components/schemas/B2B.Api.Dtos.OperationResult.Message"
            },
            "nullable": true
          },
          "MovimientosCobranzas": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.Producer.MovementPaymentDto"
            },
            "nullable": true
          }
        },
        "additionalProperties": false
      },
      "B2B.Api.Dtos.Responses.Producer.ProducerInfoResponse": {
        "type": "object",
        "properties": {
          "Producer": {
            "type": "string",
            "nullable": true
          },
          "Code": {
            "type": "string",
            "nullable": true
          },
          "TaxId": {
            "type": "string",
            "nullable": true
          }
        },
        "additionalProperties": false
      },
      "B2B.Api.Dtos.Responses.Producer.ProducersInfoByTaxIdResponse": {
        "type": "object",
        "properties": {
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
              "$ref": "#/components/schemas/B2B.Api.Dtos.OperationResult.Message"
            },
            "nullable": true
          },
          "Productores": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.Producer.ProducerDto"
            },
            "nullable": true
          }
        },
        "additionalProperties": false
      },
      "B2B.Api.Dtos.Responses.Report.B2bReportResponse": {
        "type": "object",
        "properties": {
          "Reporte": {
            "type": "string",
            "format": "byte",
            "nullable": true
          }
        },
        "additionalProperties": false
      },
      "B2B.Api.Dtos.Responses.Typelist.B2bTypeListFreightTransportedResponse": {
        "type": "object",
        "properties": {
          "Values": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bFreightTransported"
            },
            "nullable": true
          }
        },
        "additionalProperties": false
      },
      "B2B.Api.Dtos.Responses.Typelist.B2bTypeListValuesByCategoryResponse": {
        "type": "object",
        "properties": {
          "Values": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
            },
            "nullable": true
          }
        },
        "additionalProperties": false
      },
      "B2B.Api.Dtos.Responses.Typelist.B2bTypeListValuesByFilterResponse": {
        "type": "object",
        "properties": {
          "Values": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
            },
            "nullable": true
          }
        },
        "additionalProperties": false
      },
      "B2B.Api.Dtos.Responses.Typelist.B2bTypeListValuesByNameResponse": {
        "type": "object",
        "properties": {
          "Values": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/B2B.Api.Dtos.Dtos.B2bKeyValue"
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
