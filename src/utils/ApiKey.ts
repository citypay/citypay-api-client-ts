/**
 * API Key Generation Handler
 */
export class ApiKey {
    private client_id: string;
    private licence_key: string;
    private subject: string | null;
    private host: string;

    constructor(client_id: string, licence_key: string, subject: string | null, host: string) {
        this.client_id = client_id;
        this.licence_key = licence_key;
        this.subject = subject;
        this.host = host;
    }

    async generateApiKey(nonce: string, dt: Date = new Date()): Promise<string> {
        const data: any = {
            clientid: this.client_id,
            licencekey: this.licence_key,
            nonce: nonce, // Assuming nonce needs to be included in the data payload
            timestamp: dt.toISOString() // Assuming the date is to be sent as ISO string
        };

        if (this.subject) {
            data.subject = this.subject;
        }

        const response = await fetch(`${this.host}/v6/authenticate`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const jsonResponse = await response.json();
        return jsonResponse.key;
    }
};
