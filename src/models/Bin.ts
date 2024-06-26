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
 * @interface Bin
 */
export interface Bin {
    /**
     * Defines whether the card is a commercial card.
     * @type {boolean}
     * @memberof Bin
     */
    binCommercial?: boolean;
    /**
     * Defines whether the card is a corporate business card.
     * @type {boolean}
     * @memberof Bin
     */
    binCorporate?: boolean;
    /**
     * The determined country where the card was issued.
     * @type {string}
     * @memberof Bin
     */
    binCountryIssued?: string;
    /**
     * Defines whether the card is a credit card.
     * @type {boolean}
     * @memberof Bin
     */
    binCredit?: boolean;
    /**
     * The default currency determined for the card.
     * @type {string}
     * @memberof Bin
     */
    binCurrency?: string;
    /**
     * Defines whether the card is a debit card.
     * @type {boolean}
     * @memberof Bin
     */
    binDebit?: boolean;
    /**
     * A description of the bin on the card to identify what type of product the card is.
     * @type {string}
     * @memberof Bin
     */
    binDescription?: string;
    /**
     * Defines whether the card is regulated within the EU.
     * @type {boolean}
     * @memberof Bin
     */
    binEu?: boolean;
    /**
     * The scheme that issued the card.
     * @type {string}
     * @memberof Bin
     */
    scheme?: string;
}

/**
 * Check if a given object implements the Bin interface.
 */
export function instanceOfBin(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BinFromJSON(json: any): Bin {
    return BinFromJSONTyped(json, false);
}

export function BinFromJSONTyped(json: any, ignoreDiscriminator: boolean): Bin {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'binCommercial': !exists(json, 'bin_commercial') ? undefined : json['bin_commercial'],
        'binCorporate': !exists(json, 'bin_corporate') ? undefined : json['bin_corporate'],
        'binCountryIssued': !exists(json, 'bin_country_issued') ? undefined : json['bin_country_issued'],
        'binCredit': !exists(json, 'bin_credit') ? undefined : json['bin_credit'],
        'binCurrency': !exists(json, 'bin_currency') ? undefined : json['bin_currency'],
        'binDebit': !exists(json, 'bin_debit') ? undefined : json['bin_debit'],
        'binDescription': !exists(json, 'bin_description') ? undefined : json['bin_description'],
        'binEu': !exists(json, 'bin_eu') ? undefined : json['bin_eu'],
        'scheme': !exists(json, 'scheme') ? undefined : json['scheme'],
    };
}

export function BinToJSON(value?: Bin | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'bin_commercial': value.binCommercial,
        'bin_corporate': value.binCorporate,
        'bin_country_issued': value.binCountryIssued,
        'bin_credit': value.binCredit,
        'bin_currency': value.binCurrency,
        'bin_debit': value.binDebit,
        'bin_description': value.binDescription,
        'bin_eu': value.binEu,
        'scheme': value.scheme,
    };
}

