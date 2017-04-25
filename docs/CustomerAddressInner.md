# SwisscomBillingprofilesJavascriptSdk.CustomerAddressInner

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **String** | The address type of the billing profile. It will either be a street address or a PO Box. A street address consists of either a houseName or a street and houseNumber. A PO Box address always defines a postBox. All addresses may contain a zip code and city. | [optional] 
**houseName** | **String** | The name of the house. | [optional] 
**street** | **String** | The name of the street. | [optional] 
**houseNumber** | **String** | The house or street number. | [optional] 
**postBox** | **String** | The post office box number. If there is an empty value then the customer has a postBox but no number is indicated. | [optional] 
**zip** | **String** | The Postal Code. | [optional] 
**city** | **String** | The name of the city. | [optional] 


<a name="TypeEnum"></a>
## Enum: TypeEnum


* `main` (value: `"main"`)

* `bill` (value: `"bill"`)

* `correspondence` (value: `"correspondence"`)

* `envelope` (value: `"envelope"`)




