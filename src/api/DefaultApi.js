/**
 * Billing Profiles
 * No descripton provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/BillingProfilesCollection', 'model/Error', 'model/BillingProfileDetails', 'model/BillingProfileEligibility'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/BillingProfilesCollection'), require('../model/Error'), require('../model/BillingProfileDetails'), require('../model/BillingProfileEligibility'));
  } else {
    // Browser globals (root is window)
    if (!root.SwisscomBillingprofilesJavascriptSdk) {
      root.SwisscomBillingprofilesJavascriptSdk = {};
    }
    root.SwisscomBillingprofilesJavascriptSdk.DefaultApi = factory(root.SwisscomBillingprofilesJavascriptSdk.ApiClient, root.SwisscomBillingprofilesJavascriptSdk.BillingProfilesCollection, root.SwisscomBillingprofilesJavascriptSdk.Error, root.SwisscomBillingprofilesJavascriptSdk.BillingProfileDetails, root.SwisscomBillingprofilesJavascriptSdk.BillingProfileEligibility);
  }
}(this, function(ApiClient, BillingProfilesCollection, Error, BillingProfileDetails, BillingProfileEligibility) {
  'use strict';

  /**
   * Default service.
   * @module api/DefaultApi
   * @version 1.0.21
   */

  /**
   * Constructs a new DefaultApi. 
   * @alias module:api/DefaultApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the gETBillingprofiles operation.
     * @callback module:api/DefaultApi~gETBillingprofilesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BillingProfilesCollection} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * #### Search Billing Profiles #### Searches for billing profiles owned by the Swisscom customer identifier provided or contained in access token. At present, only searching for a customer&#39;s best billing profile to be used for payment is supported. 
     * @param {Boolean} bestForPayment Determines whether to return only the identified best billing profile of the provided customer identifier. The best billing profile is always eligible for use with the Payments API and is owned by the customer specified. Currently, only the value \&quot;true\&quot; is supported. 
     * @param {String} sCSVersion The version of the API, value must be \&quot;**&lt;&lt;SCS-Version&gt;&gt;**\&quot;.  This header indicates which version of the API should serve the request. If the value of the header is missing or it indicates a wrong version, the API returns an error message. 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.customerId The Swisscom customer identifier that uniquely identifies a customer. Performing the request with this query parameter returns the list of billing profiles owned by the Swisscom customer identifier provided. It is mandatory when using the client credentials grant. 
     * @param {String} opts.sCSRequestID The request ID.  It is used by the API to trace the fulfillment of a request. The API user may provide its own request ID or can accept the request ID generated by the API. In both cases the request ID is returned in the header of the response.  This ID should be refered by the API users in their communication with Swisscom whenever requesting details about the execution of a request. 
     * @param {module:api/DefaultApi~gETBillingprofilesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/BillingProfilesCollection}
     */
    this.gETBillingprofiles = function(bestForPayment, sCSVersion, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'bestForPayment' is set
      if (bestForPayment == undefined || bestForPayment == null) {
        throw "Missing the required parameter 'bestForPayment' when calling gETBillingprofiles";
      }

      // verify the required parameter 'sCSVersion' is set
      if (sCSVersion == undefined || sCSVersion == null) {
        throw "Missing the required parameter 'sCSVersion' when calling gETBillingprofiles";
      }


      var pathParams = {
      };
      var queryParams = {
        'customerId': opts['customerId'],
        'bestForPayment': bestForPayment
      };
      var headerParams = {
        'SCS-Request-ID': opts['sCSRequestID'],
        'SCS-Version': sCSVersion
      };
      var formParams = {
      };

      var authNames = ['oauth_2_0_client_credentials'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = BillingProfilesCollection;

      return this.apiClient.callApi(
        '/billingprofiles', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the gETBillingprofilesBillingProfileId operation.
     * @callback module:api/DefaultApi~gETBillingprofilesBillingProfileIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BillingProfileDetails} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * #### Returns Billing Profile Information #### Allows to retrieve the details of the billing profile represented by the billing profile identifier provided as parameter. 
     * @param {String} billingProfileId The unique identifier used to identify a billing profile.  When using access tokens generated with Authorization Code grant, the request parameter must be \&quot;me\&quot; and the billingProfileId is extracted from the access token.  The value of the URI parameter must not contain spaces and should be URL encoded. 
     * @param {String} sCSVersion The version of the API, value must be \&quot;**&lt;&lt;SCS-Version&gt;&gt;**\&quot;.  This header indicates which version of the API should serve the request. If the value of the header is missing or it indicates a wrong version, the API returns an error message. 
     * @param {Object} opts Optional parameters
     * @param {String} opts.sCSRequestID The request ID.  It is used by the API to trace the fulfillment of a request. The API user may provide its own request ID or can accept the request ID generated by the API. In both cases the request ID is returned in the header of the response.  This ID should be refered by the API users in their communication with Swisscom whenever requesting details about the execution of a request. 
     * @param {module:api/DefaultApi~gETBillingprofilesBillingProfileIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/BillingProfileDetails}
     */
    this.gETBillingprofilesBillingProfileId = function(billingProfileId, sCSVersion, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'billingProfileId' is set
      if (billingProfileId == undefined || billingProfileId == null) {
        throw "Missing the required parameter 'billingProfileId' when calling gETBillingprofilesBillingProfileId";
      }

      // verify the required parameter 'sCSVersion' is set
      if (sCSVersion == undefined || sCSVersion == null) {
        throw "Missing the required parameter 'sCSVersion' when calling gETBillingprofilesBillingProfileId";
      }


      var pathParams = {
        'billingProfileId': billingProfileId
      };
      var queryParams = {
      };
      var headerParams = {
        'SCS-Request-ID': opts['sCSRequestID'],
        'SCS-Version': sCSVersion
      };
      var formParams = {
      };

      var authNames = ['oauth_2_0_authorization_code', 'oauth_2_0_client_credentials'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = BillingProfileDetails;

      return this.apiClient.callApi(
        '/billingprofiles/{billingProfileId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the gETBillingprofilesBillingProfileIdEligibility operation.
     * @callback module:api/DefaultApi~gETBillingprofilesBillingProfileIdEligibilityCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BillingProfileEligibility} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * #### Returns Billing Profile Eligibility #### This API provides the capability to verify the eligibility of a billing profile.  Before submitting the payment transactions using the Payments API, an API-Consumer can check if a specific billing profile is eligible  for making the payment transactions.  The eligibility is determined by considering various factors. Some of the reasons for the billing profile to be non-eligible are * credit has been reached * has been barred * has no paid invoices * does not have any active subscriptions * is not found in the Swisscom billing systems * is not active  This API additionally provides the capability to execute specific eligibility checks.  If only some certain eligiblity checks shall be executed, then a list of desired eligibility checks has to be provided.   If no specific eligibility checks are provided by the API-consumer, then some default checks are executed, depending to  the specific configuration of each API-Consumer.  
     * @param {String} billingProfileId The unique identifier used to identify a billing profile.  When using access tokens generated with Authorization Code grant, the request parameter must be \&quot;me\&quot; and the billingProfileId is extracted from the access token.  The value of the URI parameter must not contain spaces and should be URL encoded. 
     * @param {String} sCSVersion The version of the API, value must be \&quot;**&lt;&lt;SCS-Version&gt;&gt;**\&quot;.  This header indicates which version of the API should serve the request. If the value of the header is missing or it indicates a wrong version, the API returns an error message. 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.customerId The Swisscom customer identifier that uniquely identifies a customer.   It is only required for certain eligibilty checks and only when using access tokens generated with Client Credentials grant.  Which eligibility checks are executed, are depending to the configuration of each API-Consumer.  When using access tokens generated with Authorization Code grant, the customerId is extracted from the access token. 
     * @param {String} opts.sCSRequestID The request ID.  It is used by the API to trace the fulfillment of a request. The API user may provide its own request ID or can accept the request ID generated by the API. In both cases the request ID is returned in the header of the response.  This ID should be refered by the API users in their communication with Swisscom whenever requesting details about the execution of a request. 
     * @param {module:api/DefaultApi~gETBillingprofilesBillingProfileIdEligibilityCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/BillingProfileEligibility}
     */
    this.gETBillingprofilesBillingProfileIdEligibility = function(billingProfileId, sCSVersion, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'billingProfileId' is set
      if (billingProfileId == undefined || billingProfileId == null) {
        throw "Missing the required parameter 'billingProfileId' when calling gETBillingprofilesBillingProfileIdEligibility";
      }

      // verify the required parameter 'sCSVersion' is set
      if (sCSVersion == undefined || sCSVersion == null) {
        throw "Missing the required parameter 'sCSVersion' when calling gETBillingprofilesBillingProfileIdEligibility";
      }


      var pathParams = {
        'billingProfileId': billingProfileId
      };
      var queryParams = {
        'customerId': opts['customerId']
      };
      var headerParams = {
        'SCS-Request-ID': opts['sCSRequestID'],
        'SCS-Version': sCSVersion
      };
      var formParams = {
      };

      var authNames = ['oauth_2_0_authorization_code', 'oauth_2_0_client_credentials'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = BillingProfileEligibility;

      return this.apiClient.callApi(
        '/billingprofiles/{billingProfileId}/eligibility', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
