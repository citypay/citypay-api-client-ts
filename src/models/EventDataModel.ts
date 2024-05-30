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
 * @interface EventDataModel
 */
export interface EventDataModel {
    /**
     * The date when the event ends in ISO format (yyyy-MM-dd).
     * @type {Date}
     * @memberof EventDataModel
     */
    eventEndDate?: Date;
    /**
     * An id of the event.
     * @type {string}
     * @memberof EventDataModel
     */
    eventId?: string;
    /**
     * An id of the event organiser.
     * @type {string}
     * @memberof EventDataModel
     */
    eventOrganiserId?: string;
    /**
     * The date when the event starts in ISO format (yyyy-MM-dd).
     * @type {Date}
     * @memberof EventDataModel
     */
    eventStartDate?: Date;
    /**
     * The type of payment such as `deposit` or `balance`.
     * @type {string}
     * @memberof EventDataModel
     */
    paymentType?: string;
}

/**
 * Check if a given object implements the EventDataModel interface.
 */
export function instanceOfEventDataModel(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function EventDataModelFromJSON(json: any): EventDataModel {
    return EventDataModelFromJSONTyped(json, false);
}

export function EventDataModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): EventDataModel {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'eventEndDate': !exists(json, 'event_end_date') ? undefined : (new Date(json['event_end_date'])),
        'eventId': !exists(json, 'event_id') ? undefined : json['event_id'],
        'eventOrganiserId': !exists(json, 'event_organiser_id') ? undefined : json['event_organiser_id'],
        'eventStartDate': !exists(json, 'event_start_date') ? undefined : (new Date(json['event_start_date'])),
        'paymentType': !exists(json, 'payment_type') ? undefined : json['payment_type'],
    };
}

export function EventDataModelToJSON(value?: EventDataModel | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'event_end_date': value.eventEndDate === undefined ? undefined : (value.eventEndDate.toISOString().substring(0,10)),
        'event_id': value.eventId,
        'event_organiser_id': value.eventOrganiserId,
        'event_start_date': value.eventStartDate === undefined ? undefined : (value.eventStartDate.toISOString().substring(0,10)),
        'payment_type': value.paymentType,
    };
}
