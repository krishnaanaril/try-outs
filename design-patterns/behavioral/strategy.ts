interface EncodingStrategy {
    encode(value: string) : void;
}

class RSAEncodingStrategy implements EncodingStrategy {
    encode(value: string) {
        console.log(`Value ${value} is Encoded using RSA Algorithm`);
    }
}

class DESEncodingStrategy implements EncodingStrategy {
    encode(value: string) {
        console.log(`Value ${value} is Encoded using DES Algorithm`);
    }
}

class BlowFishEncodingStrategy implements EncodingStrategy {
    encode(value: string) {
        console.log(`Value ${value} is Encoded using Blow Fish Algorithm`);
    }
}

class Encoding {
    private _encodingStrategy: EncodingStrategy;
    constructor(encodingStrategy: EncodingStrategy) {
        this._encodingStrategy = encodingStrategy
    }
    encode(value: string) {
        this._encodingStrategy.encode(value);
    }
}

(function(){
    let encoding: Encoding = new Encoding(new RSAEncodingStrategy());
    encoding.encode('10000011110');
    encoding = new Encoding(new DESEncodingStrategy());
    encoding.encode('10000011110');
    encoding = new Encoding(new BlowFishEncodingStrategy());
    encoding.encode('10000011110');
})();