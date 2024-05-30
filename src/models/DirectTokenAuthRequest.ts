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

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface DirectTokenAuthRequest
 */
export interface DirectTokenAuthRequest {
    /**
     * A random value string which is provided to the API to perform a digest.
     * The value will be used by its UTF-8 byte representation of any digest function.
     * 
     * @type {string}
     * @memberof DirectTokenAuthRequest
     */
    nonce?: string;
    /**
     * The URL used to redirect back to your site when a transaction has been rejected or declined. Required if a url-encoded request.
     * 
     * @type {string}
     * @memberof DirectTokenAuthRequest
     */
    redirectFailure?: string;
    /**
     * The URL used to redirect back to your site when a transaction has been authorised. Required if a url-encoded request.
     * 
     * @type {string}
     * @memberof DirectTokenAuthRequest
     */
    redirectSuccess?: string;
    /**
     * The token required to process the transaction as presented by the direct post methodology.
     * 
     * @type {string}
     * @memberof DirectTokenAuthRequest
     */
    token?: string;
}

/**
 * Check if a given object implements the DirectTokenAuthRequest interface.
 */
export function instanceOfDirectTokenAuthRequest(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function DirectTokenAuthRequestFromJSON(json: any): DirectTokenAuthRequest {
    return DirectTokenAuthRequestFromJSONTyped(json, false);
}

export function DirectTokenAuthRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): DirectTokenAuthRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'nonce': !exists(json, 'nonce') ? undefined : json['nonce'],
        'redirectFailure': !exists(json, 'redirect_failure') ? undefined : json['redirect_failure'],
        'redirectSuccess': !exists(json, 'redirect_success') ? undefined : json['redirect_success'],
        'token': !exists(json, 'token') ? undefined : json['token'],
    };
}

export function DirectTokenAuthRequestToJSON(value?: DirectTokenAuthRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'nonce': value.nonce,
        'redirect_failure': value.redirectFailure,
        'redirect_success': value.redirectSuccess,
        'token': value.token,
    };
}

