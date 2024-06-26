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
 * @interface PaylinkAttachmentRequest
 */
export interface PaylinkAttachmentRequest {
    /**
     * The name of the attachment normally taken from the filename. You should not include the filename path as appropriate.
     * @type {string}
     * @memberof PaylinkAttachmentRequest
     */
    filename: string;
    /**
     * The mime type of the attachment as defined in [RFC 9110](https://www.rfc-editor.org/rfc/rfc9110.html). Currently only `application/pdf` is supported.
     * @type {string}
     * @memberof PaylinkAttachmentRequest
     */
    mimeType: string;
    /**
     * base64 encoding of the file if less than 32kb in size.
     * @type {string}
     * @memberof PaylinkAttachmentRequest
     */
    data?: string;
    /**
     * A name for the file to identify it to the card holder when it is displayed in the payment form. For example Invoice, Statement.
     * @type {string}
     * @memberof PaylinkAttachmentRequest
     */
    name?: string;
    /**
     * The retention period in days of the attachment. Defaults to 180 days.
     * @type {number}
     * @memberof PaylinkAttachmentRequest
     */
    retention?: number;
}

/**
 * Check if a given object implements the PaylinkAttachmentRequest interface.
 */
export function instanceOfPaylinkAttachmentRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "filename" in value;
    isInstance = isInstance && "mimeType" in value;

    return isInstance;
}

export function PaylinkAttachmentRequestFromJSON(json: any): PaylinkAttachmentRequest {
    return PaylinkAttachmentRequestFromJSONTyped(json, false);
}

export function PaylinkAttachmentRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): PaylinkAttachmentRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'filename': json['filename'],
        'mimeType': json['mime_type'],
        'data': !exists(json, 'data') ? undefined : json['data'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'retention': !exists(json, 'retention') ? undefined : json['retention'],
    };
}

export function PaylinkAttachmentRequestToJSON(value?: PaylinkAttachmentRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'filename': value.filename,
        'mime_type': value.mimeType,
        'data': value.data,
        'name': value.name,
        'retention': value.retention,
    };
}

