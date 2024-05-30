/* tslint:disable */
/* eslint-disable */
/**
 * CityPay Payment API
 *  Welcome to the CityPay API, a robust HTTP API payment solution designed for seamless server-to-server  transactional processing. Our API facilitates a wide array of payment operations, catering to diverse business needs.  Whether you\'re integrating Internet payments, handling Mail Order/Telephone Order (MOTO) transactions, managing  Subscriptions with Recurring and Continuous Authority payments, or navigating the complexities of 3-D Secure  authentication, our API is equipped to support your requirements. Additionally, we offer functionalities for  Authorisation, Refunding, Pre-Authorisation, Cancellation/Voids, and Completion processing, alongside the capability  for tokenised payments.  ## Compliance and Security Overview <aside class=\"notice\">   Ensuring the security of payment transactions and compliance with industry standards is paramount. Our API is    designed with stringent security measures and compliance protocols to safeguard sensitive information and meet    the rigorous requirements of Visa, MasterCard, and the PCI Security Standards Council. </aside>  ### Key Compliance and Security Measures  * **TLS Encryption**: All data transmissions must utilise TLS version 1.2 or higher, employing [strong cryptography](#enabled-tls-ciphers). Our infrastructure strictly enforces this requirement to maintain the integrity and confidentiality of data in transit. We conduct regular scans and assessments of our TLS endpoints to identify and mitigate vulnerabilities. * **Data Storage Prohibitions**: Storing sensitive cardholder data (CHD), such as the card security code (CSC) or primary account number (PAN), is strictly prohibited. Our API is designed to minimize your exposure to sensitive data, thereby reducing your compliance burden. * **Data Masking**: For consumer protection and compliance, full card numbers must not be displayed on receipts or any customer-facing materials. Our API automatically masks PANs, displaying only the last four digits to facilitate safe receipt generation. * **Network Scans**: If your application is web-based, regular scans of your hosting environment are mandatory to identify and rectify potential vulnerabilities. This proactive measure is crucial for maintaining a secure and compliant online presence. * **PCI Compliance**: Adherence to PCI DSS standards is not optional; it\'s a requirement for operating securely and legally in the payments ecosystem. For detailed information on compliance requirements and resources, please visit the PCI Security Standards Council website [https://www.pcisecuritystandards.org/](https://www.pcisecuritystandards.org/). * **Request Validation**: Our API includes mechanisms to verify the legitimacy of each request, ensuring it pertains to a valid account and originates from a trusted source. We leverage remote IP address verification alongside sophisticated application firewall technologies to thwart a wide array of common security threats.  ## Getting Started Before integrating with the CityPay API, ensure your application and development practices align with the outlined compliance and security measures. This preparatory step is crucial for a smooth integration process and the long-term success of your payment processing operations.  For further details on API endpoints, request/response formats, and code examples, proceed to the subsequent sections of our documentation. Our aim is to provide you with all the necessary tools and information to integrate our payment processing capabilities seamlessly into your application.  Thank you for choosing CityPay API. We look forward to supporting your payment processing needs with our secure, compliant, and versatile API solution. 
 *
 * The version of the OpenAPI document: 6.6.40
 * Contact: support@citypay.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  AuthResponse,
  DirectPostRequest,
  DirectTokenAuthRequest,
  TokenisationResponseModel,
} from '../models/index';
import {
    AuthResponseFromJSON,
    AuthResponseToJSON,
    DirectPostRequestFromJSON,
    DirectPostRequestToJSON,
    DirectTokenAuthRequestFromJSON,
    DirectTokenAuthRequestToJSON,
    TokenisationResponseModelFromJSON,
    TokenisationResponseModelToJSON,
} from '../models/index';

export interface DirectPostApiDirectCResAuthRequest {
    uuid: string;
    cres?: string;
    three_ds_session_data?: string;
}

export interface DirectPostApiDirectCResTokeniseRequest {
    uuid: string;
    cres?: string;
    three_ds_session_data?: string;
}

export interface DirectPostApiDirectPostAuthRequest {
    direct_post_request: DirectPostRequest;
}

export interface DirectPostApiDirectPostTokeniseRequest {
    direct_post_request: DirectPostRequest;
}

export interface DirectPostApiTokenRequest {
    direct_token_auth_request: DirectTokenAuthRequest;
}

/**
 * 
 */
export class DirectPostApi extends runtime.BaseAPI {

    /**
     * Used to post from an ACS during a ThreeDSecure direct flow process. The endpoint requires a valid `threeDSSessionData` value which defines the unique transaction through its workflow. This endpoint may be used by merchants wishing to perform a `Direct Post` integration who wish to handle the challenge flow themselves. 
     * Handles a CRes response from ACS, returning back the result of authorisation
     */
    async directCResAuthRequestRaw(requestParameters: DirectPostApiDirectCResAuthRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AuthResponse>> {
        if (requestParameters.uuid === null || requestParameters.uuid === undefined) {
            throw new runtime.RequiredError('uuid','Required parameter requestParameters.uuid was null or undefined when calling directCResAuthRequest.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const consumes: runtime.Consume[] = [
            { contentType: 'application/x-www-form-urlencoded' },
        ];
        // @ts-ignore: canConsumeForm may be unused
        const canConsumeForm = runtime.canConsumeForm(consumes);

        let formParams: { append(param: string, value: any): any };
        let useForm = false;
        if (useForm) {
            formParams = new FormData();
        } else {
            formParams = new URLSearchParams();
        }

        if (requestParameters.cres !== undefined) {
            formParams.append('cres', requestParameters.cres as any);
        }

        if (requestParameters.three_ds_session_data !== undefined) {
            formParams.append('threeDSSessionData', requestParameters.three_ds_session_data as any);
        }

        const response = await this.request({
            path: `/direct/cres/auth/{uuid}`.replace(`{${"uuid"}}`, encodeURIComponent(String(requestParameters.uuid))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: formParams,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AuthResponseFromJSON(jsonValue));
    }

    /**
     * Used to post from an ACS during a ThreeDSecure direct flow process. The endpoint requires a valid `threeDSSessionData` value which defines the unique transaction through its workflow. This endpoint may be used by merchants wishing to perform a `Direct Post` integration who wish to handle the challenge flow themselves. 
     * Handles a CRes response from ACS, returning back the result of authorisation
     */
    async directCResAuthRequest(requestParameters: DirectPostApiDirectCResAuthRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AuthResponse> {
        const response = await this.directCResAuthRequestRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Used to post from an ACS during a ThreeDSecure direct flow process. The endpoint requires a valid `threeDSSessionData` value which defines the unique transaction through its workflow. This endpoint may be used by merchants wishing to perform a `Direct Post` integration who wish to handle the challenge flow themselves. 
     * Handles a CRes response from ACS, returning back a token for future authorisation
     */
    async directCResTokeniseRequestRaw(requestParameters: DirectPostApiDirectCResTokeniseRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TokenisationResponseModel>> {
        if (requestParameters.uuid === null || requestParameters.uuid === undefined) {
            throw new runtime.RequiredError('uuid','Required parameter requestParameters.uuid was null or undefined when calling directCResTokeniseRequest.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const consumes: runtime.Consume[] = [
            { contentType: 'application/x-www-form-urlencoded' },
        ];
        // @ts-ignore: canConsumeForm may be unused
        const canConsumeForm = runtime.canConsumeForm(consumes);

        let formParams: { append(param: string, value: any): any };
        let useForm = false;
        if (useForm) {
            formParams = new FormData();
        } else {
            formParams = new URLSearchParams();
        }

        if (requestParameters.cres !== undefined) {
            formParams.append('cres', requestParameters.cres as any);
        }

        if (requestParameters.three_ds_session_data !== undefined) {
            formParams.append('threeDSSessionData', requestParameters.three_ds_session_data as any);
        }

        const response = await this.request({
            path: `/direct/cres/tokenise/{uuid}`.replace(`{${"uuid"}}`, encodeURIComponent(String(requestParameters.uuid))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: formParams,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TokenisationResponseModelFromJSON(jsonValue));
    }

    /**
     * Used to post from an ACS during a ThreeDSecure direct flow process. The endpoint requires a valid `threeDSSessionData` value which defines the unique transaction through its workflow. This endpoint may be used by merchants wishing to perform a `Direct Post` integration who wish to handle the challenge flow themselves. 
     * Handles a CRes response from ACS, returning back a token for future authorisation
     */
    async directCResTokeniseRequest(requestParameters: DirectPostApiDirectCResTokeniseRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TokenisationResponseModel> {
        const response = await this.directCResTokeniseRequestRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Used to initiate a direct post request transaction flow. 
     * Direct Post Auth Request
     */
    async directPostAuthRequestRaw(requestParameters: DirectPostApiDirectPostAuthRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AuthResponse>> {
        if (requestParameters.direct_post_request === null || requestParameters.direct_post_request === undefined) {
            throw new runtime.RequiredError('direct_post_request','Required parameter requestParameters.direct_post_request was null or undefined when calling directPostAuthRequest.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            queryParameters["cp-domain-key"] = this.configuration.apiKey("cp-domain-key"); // cp-domain-key authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["cp-api-key"] = this.configuration.apiKey("cp-api-key"); // cp-api-key authentication
        }

        const response = await this.request({
            path: `/direct/auth`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: DirectPostRequestToJSON(requestParameters.direct_post_request),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AuthResponseFromJSON(jsonValue));
    }

    /**
     * Used to initiate a direct post request transaction flow. 
     * Direct Post Auth Request
     */
    async directPostAuthRequest(requestParameters: DirectPostApiDirectPostAuthRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AuthResponse> {
        const response = await this.directPostAuthRequestRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Used to initiate a direct post request transaction flow. 
     * Direct Post Tokenise Request
     */
    async directPostTokeniseRequestRaw(requestParameters: DirectPostApiDirectPostTokeniseRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AuthResponse>> {
        if (requestParameters.direct_post_request === null || requestParameters.direct_post_request === undefined) {
            throw new runtime.RequiredError('direct_post_request','Required parameter requestParameters.direct_post_request was null or undefined when calling directPostTokeniseRequest.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            queryParameters["cp-domain-key"] = this.configuration.apiKey("cp-domain-key"); // cp-domain-key authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["cp-api-key"] = this.configuration.apiKey("cp-api-key"); // cp-api-key authentication
        }

        const response = await this.request({
            path: `/direct/tokenise`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: DirectPostRequestToJSON(requestParameters.direct_post_request),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AuthResponseFromJSON(jsonValue));
    }

    /**
     * Used to initiate a direct post request transaction flow. 
     * Direct Post Tokenise Request
     */
    async directPostTokeniseRequest(requestParameters: DirectPostApiDirectPostTokeniseRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AuthResponse> {
        const response = await this.directPostTokeniseRequestRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Perform a request for authorisation for a previously generated token. This flow will return an authorisation response stating that the transaction was approved or declined. 
     * Direct Post Token Request
     */
    async tokenRequestRaw(requestParameters: DirectPostApiTokenRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AuthResponse>> {
        if (requestParameters.direct_token_auth_request === null || requestParameters.direct_token_auth_request === undefined) {
            throw new runtime.RequiredError('direct_token_auth_request','Required parameter requestParameters.direct_token_auth_request was null or undefined when calling tokenRequest.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            queryParameters["cp-domain-key"] = this.configuration.apiKey("cp-domain-key"); // cp-domain-key authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["cp-api-key"] = this.configuration.apiKey("cp-api-key"); // cp-api-key authentication
        }

        const response = await this.request({
            path: `/direct/token`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: DirectTokenAuthRequestToJSON(requestParameters.direct_token_auth_request),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AuthResponseFromJSON(jsonValue));
    }

    /**
     * Perform a request for authorisation for a previously generated token. This flow will return an authorisation response stating that the transaction was approved or declined. 
     * Direct Post Token Request
     */
    async tokenRequest(requestParameters: DirectPostApiTokenRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AuthResponse> {
        const response = await this.tokenRequestRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
