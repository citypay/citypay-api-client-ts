import {PaylinkPostbackModel, PaylinkPostbackModelFromJSON} from "../models";
import {createHash} from "crypto";

export class PaylinkPostback {

    private model: PaylinkPostbackModel;

    constructor(model: PaylinkPostbackModel) {
        this.model = model
    }

    private hasKey(key: PropertyKey): key is keyof PaylinkPostbackModel {
        return key in this.model
    }

    get(field: string): any {
        if (this.hasKey(field)) {
            return this.model[field];

        } else {
            throw new ReferenceError(`Field ${field} does not exist in postback data`)
        }
    }

    static fromJson(json: any, licenceKey: string): PaylinkPostback {

        const data = (typeof json === 'string') ? JSON.parse(json) : json

        const model: PaylinkPostbackModel = PaylinkPostbackModelFromJSON(data)

        const hash = createHash('sha256');

        const errorcode = model.errorcode;
        const i = errorcode.indexOf(".");

        let ec: string;
        if (i > -1) {
            ec = errorcode.substring(0, i);
        } else {
            ec = errorcode;
        }

        hash.update(model.authcode)
        hash.update(model.amount.toString())
        hash.update(ec)
        hash.update(model.merchantid.toString())
        hash.update(model.transno.toString())
        hash.update(model.identifier)
        hash.update(licenceKey)

        const calculatedSha = hash.digest('base64')

        if (calculatedSha === model.sha256) {
            return new PaylinkPostback(model)

        } else {
            throw new RangeError("Failed to authenticate data. SHA256 signature does not match.")
        }
    }
}