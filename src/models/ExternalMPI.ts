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
 * @interface ExternalMPI
 */
export interface ExternalMPI {
    /**
     * The authentication result available from the MPI.
     * @type {string}
     * @memberof ExternalMPI
     */
    authenResult?: string;
    /**
     * A value determining the cardholder verification value supplied by the card scheme.
     * @type {string}
     * @memberof ExternalMPI
     */
    cavv?: string;
    /**
     * The obtained e-commerce indicator from the MPI.
     * @type {number}
     * @memberof ExternalMPI
     */
    eci?: number;
    /**
     * A value determining whether the card holder was enrolled.
     * @type {string}
     * @memberof ExternalMPI
     */
    enrolled?: string;
    /**
     * The XID used for processing with the MPI.
     * @type {string}
     * @memberof ExternalMPI
     */
    xid?: string;
}

/**
 * Check if a given object implements the ExternalMPI interface.
 */
export function instanceOfExternalMPI(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ExternalMPIFromJSON(json: any): ExternalMPI {
    return ExternalMPIFromJSONTyped(json, false);
}

export function ExternalMPIFromJSONTyped(json: any, ignoreDiscriminator: boolean): ExternalMPI {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'authenResult': !exists(json, 'authen_result') ? undefined : json['authen_result'],
        'cavv': !exists(json, 'cavv') ? undefined : json['cavv'],
        'eci': !exists(json, 'eci') ? undefined : json['eci'],
        'enrolled': !exists(json, 'enrolled') ? undefined : json['enrolled'],
        'xid': !exists(json, 'xid') ? undefined : json['xid'],
    };
}

export function ExternalMPIToJSON(value?: ExternalMPI | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'authen_result': value.authenResult,
        'cavv': value.cavv,
        'eci': value.eci,
        'enrolled': value.enrolled,
        'xid': value.xid,
    };
}
