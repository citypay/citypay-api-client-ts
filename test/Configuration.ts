import * as CityPay from "../src"
require('dotenv').config();

let configuration: CityPay.Configuration;

const clientId: string = process.env.CP_CLIENT_ID as string;
const licenceKey: string = process.env.CP_LICENCE_KEY as string;
const merchantId:number = Number(process.env.CP_MERCHANT_ID);

beforeEach(async () => {
    const basePath: string = "https://sandbox.citypay.com";
    const apiKey: string = await new CityPay.ApiKey(clientId, licenceKey, null, basePath).generateApiKey("256-bit-nonce");

    configuration = new CityPay.Configuration({
        basePath,
        apiKey,
    });
});

export const getConfiguration = (): CityPay.Configuration => configuration;
export const getMerchandId = (): number => merchantId;
export const getClientId = (): string => clientId;
