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
 * @interface RemittanceData
 */
export interface RemittanceData {
    /**
     * Represents the date and time when the remittance was processed. This timestamp follows the ISO 8601 format for datetime representation.
     * @type {Date}
     * @memberof RemittanceData
     */
    dateCreated?: Date;
    /**
     * Represents the net amount after accounting for refunds. This is calculated as SalesAmount - RefundAmount and expressed in the smallest currency unit.
     * @type {number}
     * @memberof RemittanceData
     */
    netAmount?: number;
    /**
     * The total amount refunded to customers.
     * @type {number}
     * @memberof RemittanceData
     */
    refundAmount?: number;
    /**
     * The total number of refund transactions processed. This figure helps in understanding the frequency of refunds relative to sales.
     * @type {number}
     * @memberof RemittanceData
     */
    refundCount?: number;
    /**
     * The total monetary amount of sales transactions.
     * @type {number}
     * @memberof RemittanceData
     */
    salesAmount?: number;
    /**
     * Indicates the total number of sales transactions that occurred. This count provides insight into the volume of sales.
     * @type {number}
     * @memberof RemittanceData
     */
    salesCount?: number;
}

/**
 * Check if a given object implements the RemittanceData interface.
 */
export function instanceOfRemittanceData(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function RemittanceDataFromJSON(json: any): RemittanceData {
    return RemittanceDataFromJSONTyped(json, false);
}

export function RemittanceDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): RemittanceData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'dateCreated': !exists(json, 'date_created') ? undefined : (new Date(json['date_created'])),
        'netAmount': !exists(json, 'net_amount') ? undefined : json['net_amount'],
        'refundAmount': !exists(json, 'refund_amount') ? undefined : json['refund_amount'],
        'refundCount': !exists(json, 'refund_count') ? undefined : json['refund_count'],
        'salesAmount': !exists(json, 'sales_amount') ? undefined : json['sales_amount'],
        'salesCount': !exists(json, 'sales_count') ? undefined : json['sales_count'],
    };
}

export function RemittanceDataToJSON(value?: RemittanceData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'date_created': value.dateCreated === undefined ? undefined : (value.dateCreated.toISOString()),
        'net_amount': value.netAmount,
        'refund_amount': value.refundAmount,
        'refund_count': value.refundCount,
        'sales_amount': value.salesAmount,
        'sales_count': value.salesCount,
    };
}

