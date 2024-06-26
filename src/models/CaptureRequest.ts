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
import type { AirlineAdvice } from './AirlineAdvice';
import {
    AirlineAdviceFromJSON,
    AirlineAdviceFromJSONTyped,
    AirlineAdviceToJSON,
} from './AirlineAdvice';
import type { EventDataModel } from './EventDataModel';
import {
    EventDataModelFromJSON,
    EventDataModelFromJSONTyped,
    EventDataModelToJSON,
} from './EventDataModel';

/**
 * 
 * @export
 * @interface CaptureRequest
 */
export interface CaptureRequest {
    /**
     * Identifies the merchant account to perform the capture for.
     * @type {number}
     * @memberof CaptureRequest
     */
    merchantid: number;
    /**
     * 
     * @type {AirlineAdvice}
     * @memberof CaptureRequest
     */
    airlineData?: AirlineAdvice;
    /**
     * The completion amount provided in the lowest unit of currency for the specific currency of the merchant,
     * with a variable length to a maximum of 12 digits. No decimal points to be included. For example with
     * GBP 75.45 use the value 7545. Please check that you do not supply divisional characters such as 1,024 in the
     * request which may be caused by some number formatters.
     * 
     * If no amount is supplied, the original processing amount is used.
     * 
     * @type {number}
     * @memberof CaptureRequest
     */
    amount?: number;
    /**
     * 
     * @type {EventDataModel}
     * @memberof CaptureRequest
     */
    eventManagement?: EventDataModel;
    /**
     * The identifier of the transaction to capture. If an empty value is supplied then a `trans_no` value must be supplied.
     * @type {string}
     * @memberof CaptureRequest
     */
    identifier?: string;
    /**
     * The transaction number of the transaction to look up and capture. If an empty value is supplied then an identifier value must be supplied.
     * @type {number}
     * @memberof CaptureRequest
     */
    transno?: number;
}

/**
 * Check if a given object implements the CaptureRequest interface.
 */
export function instanceOfCaptureRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "merchantid" in value;

    return isInstance;
}

export function CaptureRequestFromJSON(json: any): CaptureRequest {
    return CaptureRequestFromJSONTyped(json, false);
}

export function CaptureRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): CaptureRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'merchantid': json['merchantid'],
        'airlineData': !exists(json, 'airline_data') ? undefined : AirlineAdviceFromJSON(json['airline_data']),
        'amount': !exists(json, 'amount') ? undefined : json['amount'],
        'eventManagement': !exists(json, 'event_management') ? undefined : EventDataModelFromJSON(json['event_management']),
        'identifier': !exists(json, 'identifier') ? undefined : json['identifier'],
        'transno': !exists(json, 'transno') ? undefined : json['transno'],
    };
}

export function CaptureRequestToJSON(value?: CaptureRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'merchantid': value.merchantid,
        'airline_data': AirlineAdviceToJSON(value.airlineData),
        'amount': value.amount,
        'event_management': EventDataModelToJSON(value.eventManagement),
        'identifier': value.identifier,
        'transno': value.transno,
    };
}

