"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var DemoWebApi_DemoData_Client;
(function (DemoWebApi_DemoData_Client) {
    var AddressType;
    (function (AddressType) {
        AddressType[AddressType["Postal"] = 0] = "Postal";
        AddressType[AddressType["Residential"] = 1] = "Residential";
    })(AddressType = DemoWebApi_DemoData_Client.AddressType || (DemoWebApi_DemoData_Client.AddressType = {}));
    var Days;
    (function (Days) {
        Days[Days["Sat"] = 1] = "Sat";
        Days[Days["Sun"] = 2] = "Sun";
        Days[Days["Mon"] = 3] = "Mon";
        Days[Days["Tue"] = 4] = "Tue";
        Days[Days["Wed"] = 5] = "Wed";
        /**
         * Thursday
         */
        Days[Days["Thu"] = 6] = "Thu";
        Days[Days["Fri"] = 7] = "Fri";
    })(Days = DemoWebApi_DemoData_Client.Days || (DemoWebApi_DemoData_Client.Days = {}));
    var MedicalContraindiationResponseTypeReason;
    (function (MedicalContraindiationResponseTypeReason) {
        MedicalContraindiationResponseTypeReason["M"] = "Mm";
        MedicalContraindiationResponseTypeReason["S"] = "Ss";
        MedicalContraindiationResponseTypeReason["P"] = "Pp";
        MedicalContraindiationResponseTypeReason["I"] = "I";
        MedicalContraindiationResponseTypeReason["A"] = "A";
    })(MedicalContraindiationResponseTypeReason = DemoWebApi_DemoData_Client.MedicalContraindiationResponseTypeReason || (DemoWebApi_DemoData_Client.MedicalContraindiationResponseTypeReason = {}));
    var MedicalContraindiationResponseTypeTypeCode;
    (function (MedicalContraindiationResponseTypeTypeCode) {
        MedicalContraindiationResponseTypeTypeCode["P"] = "P";
        MedicalContraindiationResponseTypeTypeCode["T"] = "Tt";
    })(MedicalContraindiationResponseTypeTypeCode = DemoWebApi_DemoData_Client.MedicalContraindiationResponseTypeTypeCode || (DemoWebApi_DemoData_Client.MedicalContraindiationResponseTypeTypeCode = {}));
    var MyEnumType;
    (function (MyEnumType) {
        MyEnumType[MyEnumType["First"] = 1] = "First";
        MyEnumType[MyEnumType["Two"] = 2] = "Two";
    })(MyEnumType = DemoWebApi_DemoData_Client.MyEnumType || (DemoWebApi_DemoData_Client.MyEnumType = {}));
    /**
     * Phone type
     * Tel, Mobile, Skyp and Fax
     */
    var PhoneType;
    (function (PhoneType) {
        /**
         * Land line
         */
        PhoneType[PhoneType["Tel"] = 0] = "Tel";
        /**
         * Mobile phone
         */
        PhoneType[PhoneType["Mobile"] = 1] = "Mobile";
        PhoneType[PhoneType["Skype"] = 2] = "Skype";
        PhoneType[PhoneType["Fax"] = 3] = "Fax";
    })(PhoneType = DemoWebApi_DemoData_Client.PhoneType || (DemoWebApi_DemoData_Client.PhoneType = {}));
})(DemoWebApi_DemoData_Client = exports.DemoWebApi_DemoData_Client || (exports.DemoWebApi_DemoData_Client = {}));
var Core3WebApi_Controllers_Client;
(function (Core3WebApi_Controllers_Client) {
    var Statistics = /** @class */ (function () {
        function Statistics(baseUri) {
            if (baseUri === void 0) { baseUri = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/'; }
            this.baseUri = baseUri;
        }
        /**
         * GET api/Statistics/distribution
         */
        Statistics.prototype.getDistribution = function (headersHandler) {
            return axios_1["default"].get(this.baseUri + 'api/Statistics/distribution', { headers: headersHandler ? headersHandler() : undefined });
        };
        return Statistics;
    }());
    Core3WebApi_Controllers_Client.Statistics = Statistics;
})(Core3WebApi_Controllers_Client = exports.Core3WebApi_Controllers_Client || (exports.Core3WebApi_Controllers_Client = {}));
var DemoCoreWeb_Controllers_Client;
(function (DemoCoreWeb_Controllers_Client) {
    var SpecialTypes = /** @class */ (function () {
        function SpecialTypes(baseUri) {
            if (baseUri === void 0) { baseUri = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/'; }
            this.baseUri = baseUri;
        }
        /**
         * Anonymous Dynamic of C#
         * GET api/SpecialTypes/AnonymousDynamic
         * @return {any} dyanmic things
         */
        SpecialTypes.prototype.getAnonymousDynamic = function (headersHandler) {
            return axios_1["default"].get(this.baseUri + 'api/SpecialTypes/AnonymousDynamic', { headers: headersHandler ? headersHandler() : undefined });
        };
        /**
         * GET api/SpecialTypes/AnonymousDynamic2
         */
        SpecialTypes.prototype.getAnonymousDynamic2 = function (headersHandler) {
            return axios_1["default"].get(this.baseUri + 'api/SpecialTypes/AnonymousDynamic2', { headers: headersHandler ? headersHandler() : undefined });
        };
        /**
         * GET api/SpecialTypes/AnonymousObject
         */
        SpecialTypes.prototype.getAnonymousObject = function (headersHandler) {
            return axios_1["default"].get(this.baseUri + 'api/SpecialTypes/AnonymousObject', { headers: headersHandler ? headersHandler() : undefined });
        };
        /**
         * GET api/SpecialTypes/AnonymousObject2
         */
        SpecialTypes.prototype.getAnonymousObject2 = function (headersHandler) {
            return axios_1["default"].get(this.baseUri + 'api/SpecialTypes/AnonymousObject2', { headers: headersHandler ? headersHandler() : undefined });
        };
        /**
         * POST api/SpecialTypes/AnonymousObject
         */
        SpecialTypes.prototype.postAnonymousObject = function (obj, headersHandler) {
            return axios_1["default"].post(this.baseUri + 'api/SpecialTypes/AnonymousObject', JSON.stringify(obj), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }) : { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' });
        };
        /**
         * POST api/SpecialTypes/AnonymousObject2
         */
        SpecialTypes.prototype.postAnonymousObject2 = function (obj, headersHandler) {
            return axios_1["default"].post(this.baseUri + 'api/SpecialTypes/AnonymousObject2', JSON.stringify(obj), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }) : { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' });
        };
        return SpecialTypes;
    }());
    DemoCoreWeb_Controllers_Client.SpecialTypes = SpecialTypes;
})(DemoCoreWeb_Controllers_Client = exports.DemoCoreWeb_Controllers_Client || (exports.DemoCoreWeb_Controllers_Client = {}));
var DemoWebApi_Controllers_Client;
(function (DemoWebApi_Controllers_Client) {
    var Entities = /** @class */ (function () {
        function Entities(baseUri) {
            if (baseUri === void 0) { baseUri = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/'; }
            this.baseUri = baseUri;
        }
        /**
         * POST api/Entities/createCompany
         */
        Entities.prototype.createCompany = function (p, headersHandler) {
            return axios_1["default"].post(this.baseUri + 'api/Entities/createCompany', JSON.stringify(p), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }) : { 'Content-Type': 'application/json;charset=UTF-8' } }).then(function (d) { return d.data; });
        };
        /**
         * POST api/Entities/createPerson
         */
        Entities.prototype.createPerson = function (p, headersHandler) {
            return axios_1["default"].post(this.baseUri + 'api/Entities/createPerson', JSON.stringify(p), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }) : { 'Content-Type': 'application/json;charset=UTF-8' } }).then(function (d) { return d.data; });
        };
        /**
         * POST api/Entities/createPerson2
         */
        Entities.prototype.createPerson2 = function (p, headersHandler) {
            return axios_1["default"].post(this.baseUri + 'api/Entities/createPerson2', JSON.stringify(p), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }) : { 'Content-Type': 'application/json;charset=UTF-8' } }).then(function (d) { return d.data; });
        };
        /**
         * POST api/Entities/createPerson3
         */
        Entities.prototype.createPerson3 = function (p, headersHandler) {
            return axios_1["default"].post(this.baseUri + 'api/Entities/createPerson3', JSON.stringify(p), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }) : { 'Content-Type': 'application/json;charset=UTF-8' } }).then(function (d) { return d.data; });
        };
        /**
         * DELETE api/Entities/{id}
         */
        Entities.prototype["delete"] = function (id, headersHandler) {
            return axios_1["default"]["delete"](this.baseUri + 'api/Entities/' + id, { headers: headersHandler ? headersHandler() : undefined });
        };
        /**
         * GET api/Entities/Company/{id}
         */
        Entities.prototype.getCompany = function (id, headersHandler) {
            return axios_1["default"].get(this.baseUri + 'api/Entities/Company/' + id, { headers: headersHandler ? headersHandler() : undefined }).then(function (d) { return d.data; });
        };
        /**
         * POST api/Entities/Mims
         */
        Entities.prototype.getMims = function (p, headersHandler) {
            return axios_1["default"].post(this.baseUri + 'api/Entities/Mims', JSON.stringify(p), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }) : { 'Content-Type': 'application/json;charset=UTF-8' } }).then(function (d) { return d.data; });
        };
        /**
         * POST api/Entities/MyGeneric
         */
        Entities.prototype.getMyGeneric = function (s, headersHandler) {
            return axios_1["default"].post(this.baseUri + 'api/Entities/MyGeneric', JSON.stringify(s), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }) : { 'Content-Type': 'application/json;charset=UTF-8' } }).then(function (d) { return d.data; });
        };
        /**
         * POST api/Entities/MyGenericPerson
         */
        Entities.prototype.getMyGenericPerson = function (s, headersHandler) {
            return axios_1["default"].post(this.baseUri + 'api/Entities/MyGenericPerson', JSON.stringify(s), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }) : { 'Content-Type': 'application/json;charset=UTF-8' } }).then(function (d) { return d.data; });
        };
        /**
         * Get a person
         * so to know the person
         * GET api/Entities/getPerson/{id}
         * @param {number} id unique id of that guy
         * @return {DemoWebApi_DemoData_Client.Person} person in db
         */
        Entities.prototype.getPerson = function (id, headersHandler) {
            return axios_1["default"].get(this.baseUri + 'api/Entities/getPerson/' + id, { headers: headersHandler ? headersHandler() : undefined }).then(function (d) { return d.data; });
        };
        /**
         * GET api/Entities/getPerson2/{id}
         */
        Entities.prototype.getPerson2 = function (id, headersHandler) {
            return axios_1["default"].get(this.baseUri + 'api/Entities/getPerson2/' + id, { headers: headersHandler ? headersHandler() : undefined }).then(function (d) { return d.data; });
        };
        /**
         * PUT api/Entities/link?id={id}&relationship={relationship}
         */
        Entities.prototype.linkPerson = function (id, relationship, person, headersHandler) {
            return axios_1["default"].put(this.baseUri + 'api/Entities/link?id=' + id + '&relationship=' + (relationship == null ? '' : encodeURIComponent(relationship)), JSON.stringify(person), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }) : { 'Content-Type': 'application/json;charset=UTF-8' } }).then(function (d) { return d.data; });
        };
        /**
         * PATCH api/Entities/patchPerson
         */
        Entities.prototype.patchPerson = function (person, headersHandler) {
            return axios_1["default"].patch(this.baseUri + 'api/Entities/patchPerson', JSON.stringify(person), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }) : { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' }).then(function (d) { return d.data; });
        };
        /**
         * PUT api/Entities/updatePerson
         */
        Entities.prototype.updatePerson = function (person, headersHandler) {
            return axios_1["default"].put(this.baseUri + 'api/Entities/updatePerson', JSON.stringify(person), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }) : { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' }).then(function (d) { return d.data; });
        };
        return Entities;
    }());
    DemoWebApi_Controllers_Client.Entities = Entities;
    var Heroes = /** @class */ (function () {
        function Heroes(baseUri) {
            if (baseUri === void 0) { baseUri = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/'; }
            this.baseUri = baseUri;
        }
        /**
         * DELETE api/Heroes/{id}
         */
        Heroes.prototype["delete"] = function (id, headersHandler) {
            return axios_1["default"]["delete"](this.baseUri + 'api/Heroes/' + id, { headers: headersHandler ? headersHandler() : undefined });
        };
        /**
         * GET api/Heroes/asyncHeroes
         */
        Heroes.prototype.getAsyncHeroes = function (headersHandler) {
            return axios_1["default"].get(this.baseUri + 'api/Heroes/asyncHeroes', { headers: headersHandler ? headersHandler() : undefined }).then(function (d) { return d.data; });
        };
        /**
         * Get a hero.
         * GET api/Heroes/{id}
         */
        Heroes.prototype.getHero = function (id, headersHandler) {
            return axios_1["default"].get(this.baseUri + 'api/Heroes/' + id, { headers: headersHandler ? headersHandler() : undefined }).then(function (d) { return d.data; });
        };
        /**
         * Get all heroes.
         * GET api/Heroes
         */
        Heroes.prototype.getHeros = function (headersHandler) {
            return axios_1["default"].get(this.baseUri + 'api/Heroes', { headers: headersHandler ? headersHandler() : undefined }).then(function (d) { return d.data; });
        };
        /**
         * POST api/Heroes
         */
        Heroes.prototype.post = function (name, headersHandler) {
            return axios_1["default"].post(this.baseUri + 'api/Heroes', JSON.stringify(name), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }) : { 'Content-Type': 'application/json;charset=UTF-8' } }).then(function (d) { return d.data; });
        };
        /**
         * Add a hero
         * POST api/Heroes/q?name={name}
         */
        Heroes.prototype.postWithQuery = function (name, headersHandler) {
            return axios_1["default"].post(this.baseUri + 'api/Heroes/q?name=' + (name == null ? '' : encodeURIComponent(name)), null, { headers: headersHandler ? headersHandler() : undefined }).then(function (d) { return d.data; });
        };
        /**
         * Update hero.
         * PUT api/Heroes
         */
        Heroes.prototype.put = function (hero, headersHandler) {
            return axios_1["default"].put(this.baseUri + 'api/Heroes', JSON.stringify(hero), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }) : { 'Content-Type': 'application/json;charset=UTF-8' } }).then(function (d) { return d.data; });
        };
        /**
         * Search heroes
         * GET api/Heroes/search/{name}
         * @param {string} name keyword contained in hero name.
         * @return {Array<DemoWebApi_Controllers_Client.Hero>} Hero array matching the keyword.
         */
        Heroes.prototype.search = function (name, headersHandler) {
            return axios_1["default"].get(this.baseUri + 'api/Heroes/search/' + (name == null ? '' : encodeURIComponent(name)), { headers: headersHandler ? headersHandler() : undefined }).then(function (d) { return d.data; });
        };
        return Heroes;
    }());
    DemoWebApi_Controllers_Client.Heroes = Heroes;
    var Home = /** @class */ (function () {
        function Home(baseUri) {
            if (baseUri === void 0) { baseUri = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/'; }
            this.baseUri = baseUri;
        }
        /**
         * GET api/Home
         */
        Home.prototype.index = function (headersHandler) {
            return axios_1["default"].get(this.baseUri + 'api/Home', { headers: headersHandler ? headersHandler() : undefined, responseType: 'blob' }).then(function (d) { return d.data; });
        };
        return Home;
    }());
    DemoWebApi_Controllers_Client.Home = Home;
    var SuperDemo = /** @class */ (function () {
        function SuperDemo(baseUri) {
            if (baseUri === void 0) { baseUri = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/'; }
            this.baseUri = baseUri;
        }
        /**
         * GET api/SuperDemo/AthletheSearch?take={take}&skip={skip}&order={order}&sort={sort}&search={search}
         */
        SuperDemo.prototype.athletheSearch = function (take, skip, order, sort, search, headersHandler) {
            return axios_1["default"].get(this.baseUri + 'api/SuperDemo/AthletheSearch?' + (take ? 'take=' + take.toString() : '') + '&skip=' + skip + '&order=' + (order == null ? '' : encodeURIComponent(order)) + '&sort=' + (sort == null ? '' : encodeURIComponent(sort)) + '&search=' + (search == null ? '' : encodeURIComponent(search)), { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' }).then(function (d) { return d.data; });
        };
        /**
         * GET api/SuperDemo/ActionResult
         */
        SuperDemo.prototype.getActionResult = function (headersHandler) {
            return axios_1["default"].get(this.baseUri + 'api/SuperDemo/ActionResult', { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
        };
        /**
         * GET api/SuperDemo/ActionResult2
         */
        SuperDemo.prototype.getActionResult2 = function (headersHandler) {
            return axios_1["default"].get(this.baseUri + 'api/SuperDemo/ActionResult2', { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
        };
        /**
         * GET api/SuperDemo/ActionStringResult
         */
        SuperDemo.prototype.getActionStringResult = function (headersHandler) {
            return axios_1["default"].get(this.baseUri + 'api/SuperDemo/ActionStringResult', { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' }).then(function (d) { return d.data; });
        };
        /**
         * GET api/SuperDemo/bool
         */
        SuperDemo.prototype.getBool = function (headersHandler) {
            return axios_1["default"].get(this.baseUri + 'api/SuperDemo/bool', { headers: headersHandler ? headersHandler() : undefined }).then(function (d) { return d.data; });
        };
        /**
         * GET api/SuperDemo/byte
         */
        SuperDemo.prototype.getbyte = function (headersHandler) {
            return axios_1["default"].get(this.baseUri + 'api/SuperDemo/byte', { headers: headersHandler ? headersHandler() : undefined }).then(function (d) { return d.data; });
        };
        /**
         * GET api/SuperDemo/ByteArray
         */
        SuperDemo.prototype.getByteArray = function (headersHandler) {
            return axios_1["default"].get(this.baseUri + 'api/SuperDemo/ByteArray', { headers: headersHandler ? headersHandler() : undefined }).then(function (d) { return d.data; });
        };
        /**
         * GET api/SuperDemo/char
         */
        SuperDemo.prototype.getChar = function (headersHandler) {
            return axios_1["default"].get(this.baseUri + 'api/SuperDemo/char', { headers: headersHandler ? headersHandler() : undefined }).then(function (d) { return d.data; });
        };
        /**
         * GET api/SuperDemo/Collection
         */
        SuperDemo.prototype.getCollection = function (headersHandler) {
            return axios_1["default"].get(this.baseUri + 'api/SuperDemo/Collection', { headers: headersHandler ? headersHandler() : undefined }).then(function (d) { return d.data; });
        };
        /**
         * GET api/SuperDemo/enumGet?d={d}
         */
        SuperDemo.prototype.getDay = function (d, headersHandler) {
            return axios_1["default"].get(this.baseUri + 'api/SuperDemo/enumGet?d=' + d, { headers: headersHandler ? headersHandler() : undefined }).then(function (d) { return d.data; });
        };
        /**
         * GET api/SuperDemo/decimal
         */
        SuperDemo.prototype.getDecimal = function (headersHandler) {
            return axios_1["default"].get(this.baseUri + 'api/SuperDemo/decimal', { headers: headersHandler ? headersHandler() : undefined }).then(function (d) { return d.data; });
        };
        /**
         * GET api/SuperDemo/decimalArrayQ?a={a}
         */
        SuperDemo.prototype.getDecimalArrayQ = function (a, headersHandler) {
            return axios_1["default"].get(this.baseUri + 'api/SuperDemo/decimalArrayQ?' + a.map(function (z) { return "a=" + encodeURIComponent(z); }).join('&'), { headers: headersHandler ? headersHandler() : undefined }).then(function (d) { return d.data; });
        };
        /**
         * GET api/SuperDemo/decimal/{d}
         */
        SuperDemo.prototype.getDecimalSquare = function (d, headersHandler) {
            return axios_1["default"].get(this.baseUri + 'api/SuperDemo/decimal/' + d, { headers: headersHandler ? headersHandler() : undefined }).then(function (d) { return d.data; });
        };
        /**
         * GET api/SuperDemo/DecimalZero
         */
        SuperDemo.prototype.getDecimalZero = function (headersHandler) {
            return axios_1["default"].get(this.baseUri + 'api/SuperDemo/DecimalZero', { headers: headersHandler ? headersHandler() : undefined }).then(function (d) { return d.data; });
        };
        /**
         * GET api/SuperDemo/StringStringDic
         */
        SuperDemo.prototype.getDictionary = function (headersHandler) {
            return axios_1["default"].get(this.baseUri + 'api/SuperDemo/StringStringDic', { headers: headersHandler ? headersHandler() : undefined }).then(function (d) { return d.data; });
        };
        /**
         * GET api/SuperDemo/StringPersonDic
         */
        SuperDemo.prototype.getDictionaryOfPeople = function (headersHandler) {
            return axios_1["default"].get(this.baseUri + 'api/SuperDemo/StringPersonDic', { headers: headersHandler ? headersHandler() : undefined }).then(function (d) { return d.data; });
        };
        /**
         * GET api/SuperDemo/doulbe
         */
        SuperDemo.prototype.getdouble = function (headersHandler) {
            return axios_1["default"].get(this.baseUri + 'api/SuperDemo/doulbe', { headers: headersHandler ? headersHandler() : undefined }).then(function (d) { return d.data; });
        };
        /**
         * Result of 0.1d + 0.2d - 0.3d
         * GET api/SuperDemo/DoubleZero
         */
        SuperDemo.prototype.getDoubleZero = function (headersHandler) {
            return axios_1["default"].get(this.baseUri + 'api/SuperDemo/DoubleZero', { headers: headersHandler ? headersHandler() : undefined }).then(function (d) { return d.data; });
        };
        /**
         * GET api/SuperDemo/EmptyString
         */
        SuperDemo.prototype.getEmptyString = function (headersHandler) {
            return axios_1["default"].get(this.baseUri + 'api/SuperDemo/EmptyString', { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' }).then(function (d) { return d.data; });
        };
        /**
         * GET api/SuperDemo/enumArrayDays?a={a}
         */
        SuperDemo.prototype.getEnumArrayDays = function (a, headersHandler) {
            return axios_1["default"].get(this.baseUri + 'api/SuperDemo/enumArrayDays?' + a.map(function (z) { return "a=" + z; }).join('&'), { headers: headersHandler ? headersHandler() : undefined }).then(function (d) { return d.data; });
        };
        /**
         * GET api/SuperDemo/enumArrayQ2?a={a}
         */
        SuperDemo.prototype.getEnumArrayQ2 = function (a, headersHandler) {
            return axios_1["default"].get(this.baseUri + 'api/SuperDemo/enumArrayQ2?' + a.map(function (z) { return "a=" + z; }).join('&'), { headers: headersHandler ? headersHandler() : undefined }).then(function (d) { return d.data; });
        };
        /**
         * GET api/SuperDemo/FloatZero
         */
        SuperDemo.prototype.getFloatZero = function (headersHandler) {
            return axios_1["default"].get(this.baseUri + 'api/SuperDemo/FloatZero', { headers: headersHandler ? headersHandler() : undefined }).then(function (d) { return d.data; });
        };
        /**
         * GET api/SuperDemo/ICollection
         */
        SuperDemo.prototype.getICollection = function (headersHandler) {
            return axios_1["default"].get(this.baseUri + 'api/SuperDemo/ICollection', { headers: headersHandler ? headersHandler() : undefined }).then(function (d) { return d.data; });
        };
        /**
         * GET api/SuperDemo/IList
         */
        SuperDemo.prototype.getIList = function (headersHandler) {
            return axios_1["default"].get(this.baseUri + 'api/SuperDemo/IList', { headers: headersHandler ? headersHandler() : undefined }).then(function (d) { return d.data; });
        };
        /**
         * GET api/SuperDemo/int2d
         */
        SuperDemo.prototype.getInt2D = function (headersHandler) {
            return axios_1["default"].get(this.baseUri + 'api/SuperDemo/int2d', { headers: headersHandler ? headersHandler() : undefined }).then(function (d) { return d.data; });
        };
        /**
         * GET api/SuperDemo/int2dJagged
         */
        SuperDemo.prototype.getInt2DJagged = function (headersHandler) {
            return axios_1["default"].get(this.baseUri + 'api/SuperDemo/int2dJagged', { headers: headersHandler ? headersHandler() : undefined }).then(function (d) { return d.data; });
        };
        /**
         * GET api/SuperDemo/intArray
         */
        SuperDemo.prototype.getIntArray = function (headersHandler) {
            return axios_1["default"].get(this.baseUri + 'api/SuperDemo/intArray', { headers: headersHandler ? headersHandler() : undefined }).then(function (d) { return d.data; });
        };
        /**
         * GET api/SuperDemo/intArrayQ?a={a}
         */
        SuperDemo.prototype.getIntArrayQ = function (a, headersHandler) {
            return axios_1["default"].get(this.baseUri + 'api/SuperDemo/intArrayQ?' + a.map(function (z) { return "a=" + encodeURIComponent(z); }).join('&'), { headers: headersHandler ? headersHandler() : undefined }).then(function (d) { return d.data; });
        };
        /**
         * GET api/SuperDemo/intArrayQ2?a={a}
         */
        SuperDemo.prototype.getIntArrayQ2 = function (a, headersHandler) {
            return axios_1["default"].get(this.baseUri + 'api/SuperDemo/intArrayQ2?' + a.map(function (z) { return "a=" + encodeURIComponent(z); }).join('&'), { headers: headersHandler ? headersHandler() : undefined }).then(function (d) { return d.data; });
        };
        /**
         * GET api/SuperDemo/int/{d}
         */
        SuperDemo.prototype.getIntSquare = function (d, headersHandler) {
            return axios_1["default"].get(this.baseUri + 'api/SuperDemo/int/' + d, { headers: headersHandler ? headersHandler() : undefined }).then(function (d) { return d.data; });
        };
        /**
         * GET api/SuperDemo/IReadOnlyCollection
         */
        SuperDemo.prototype.getIReadOnlyCollection = function (headersHandler) {
            return axios_1["default"].get(this.baseUri + 'api/SuperDemo/IReadOnlyCollection', { headers: headersHandler ? headersHandler() : undefined }).then(function (d) { return d.data; });
        };
        /**
         * GET api/SuperDemo/IReadOnlyList
         */
        SuperDemo.prototype.getIReadOnlyList = function (headersHandler) {
            return axios_1["default"].get(this.baseUri + 'api/SuperDemo/IReadOnlyList', { headers: headersHandler ? headersHandler() : undefined }).then(function (d) { return d.data; });
        };
        /**
         * GET api/SuperDemo/KeyValuePair
         */
        SuperDemo.prototype.getKeyhValuePair = function (headersHandler) {
            return axios_1["default"].get(this.baseUri + 'api/SuperDemo/KeyValuePair', { headers: headersHandler ? headersHandler() : undefined }).then(function (d) { return d.data; });
        };
        /**
         * GET api/SuperDemo/List
         */
        SuperDemo.prototype.getList = function (headersHandler) {
            return axios_1["default"].get(this.baseUri + 'api/SuperDemo/List', { headers: headersHandler ? headersHandler() : undefined }).then(function (d) { return d.data; });
        };
        /**
         * GET api/SuperDemo/NullableDecimal/{hasValue}
         */
        SuperDemo.prototype.getNullableDecimal = function (hasValue, headersHandler) {
            return axios_1["default"].get(this.baseUri + 'api/SuperDemo/NullableDecimal/' + hasValue, { headers: headersHandler ? headersHandler() : undefined }).then(function (d) { return d.data; });
        };
        /**
         * GET api/SuperDemo/NullObject
         */
        SuperDemo.prototype.getNullPerson = function (headersHandler) {
            return axios_1["default"].get(this.baseUri + 'api/SuperDemo/NullObject', { headers: headersHandler ? headersHandler() : undefined }).then(function (d) { return d.data; });
        };
        /**
         * GET api/SuperDemo/NullString
         */
        SuperDemo.prototype.getNullString = function (headersHandler) {
            return axios_1["default"].get(this.baseUri + 'api/SuperDemo/NullString', { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' }).then(function (d) { return d.data; });
        };
        /**
         * GET api/SuperDemo/DoubleNullable?location={location}&dd={dd}&de={de}
         */
        SuperDemo.prototype.getPrimitiveNullable = function (location, dd, de, headersHandler) {
            return axios_1["default"].get(this.baseUri + 'api/SuperDemo/DoubleNullable?location=' + (location == null ? '' : encodeURIComponent(location)) + (dd ? '&dd=' + dd.toString() : '') + (de ? '&de=' + de.toString() : ''), { headers: headersHandler ? headersHandler() : undefined }).then(function (d) { return d.data; });
        };
        /**
         * GET api/SuperDemo/DoubleNullable2?dd={dd}&de={de}
         */
        SuperDemo.prototype.getPrimitiveNullable2 = function (dd, de, headersHandler) {
            return axios_1["default"].get(this.baseUri + 'api/SuperDemo/DoubleNullable2?' + (dd ? 'dd=' + dd.toString() : '') + (de ? '&de=' + de.toString() : ''), { headers: headersHandler ? headersHandler() : undefined }).then(function (d) { return d.data; });
        };
        /**
         * GET api/SuperDemo/sbyte
         */
        SuperDemo.prototype.getsbyte = function (headersHandler) {
            return axios_1["default"].get(this.baseUri + 'api/SuperDemo/sbyte', { headers: headersHandler ? headersHandler() : undefined }).then(function (d) { return d.data; });
        };
        /**
         * GET api/SuperDemo/short
         */
        SuperDemo.prototype.getShort = function (headersHandler) {
            return axios_1["default"].get(this.baseUri + 'api/SuperDemo/short', { headers: headersHandler ? headersHandler() : undefined }).then(function (d) { return d.data; });
        };
        /**
         * GET api/SuperDemo/stringArrayQ?a={a}
         */
        SuperDemo.prototype.getStringArrayQ = function (a, headersHandler) {
            return axios_1["default"].get(this.baseUri + 'api/SuperDemo/stringArrayQ?' + a.map(function (z) { return "a=" + encodeURIComponent(z); }).join('&'), { headers: headersHandler ? headersHandler() : undefined }).then(function (d) { return d.data; });
        };
        /**
         * GET api/SuperDemo/stringArrayQ2?a={a}
         */
        SuperDemo.prototype.getStringArrayQ2 = function (a, headersHandler) {
            return axios_1["default"].get(this.baseUri + 'api/SuperDemo/stringArrayQ2?' + a.map(function (z) { return "a=" + encodeURIComponent(z); }).join('&'), { headers: headersHandler ? headersHandler() : undefined }).then(function (d) { return d.data; });
        };
        /**
         * GET api/SuperDemo/TextStream
         */
        SuperDemo.prototype.getTextStream = function (headersHandler) {
            return axios_1["default"].get(this.baseUri + 'api/SuperDemo/TextStream', { headers: headersHandler ? headersHandler() : undefined, responseType: 'blob' }).then(function (d) { return d.data; });
        };
        /**
         * GET api/SuperDemo/uint
         */
        SuperDemo.prototype.getUint = function (headersHandler) {
            return axios_1["default"].get(this.baseUri + 'api/SuperDemo/uint', { headers: headersHandler ? headersHandler() : undefined }).then(function (d) { return d.data; });
        };
        /**
         * GET api/SuperDemo/ulong
         */
        SuperDemo.prototype.getulong = function (headersHandler) {
            return axios_1["default"].get(this.baseUri + 'api/SuperDemo/ulong', { headers: headersHandler ? headersHandler() : undefined }).then(function (d) { return d.data; });
        };
        /**
         * GET api/SuperDemo/ushort
         */
        SuperDemo.prototype.getUShort = function (headersHandler) {
            return axios_1["default"].get(this.baseUri + 'api/SuperDemo/ushort', { headers: headersHandler ? headersHandler() : undefined }).then(function (d) { return d.data; });
        };
        /**
         * POST api/SuperDemo/ActionResult
         */
        SuperDemo.prototype.postActionResult = function (headersHandler) {
            return axios_1["default"].post(this.baseUri + 'api/SuperDemo/ActionResult', null, { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
        };
        /**
         * POST api/SuperDemo/PostActionResult2
         */
        SuperDemo.prototype.postActionResult2 = function (s, headersHandler) {
            return axios_1["default"].post(this.baseUri + 'api/SuperDemo/PostActionResult2', JSON.stringify(s), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }) : { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'blob' }).then(function (d) { return d.data; });
        };
        /**
         * POST api/SuperDemo/PostActionResult3
         */
        SuperDemo.prototype.postActionResult3 = function (person, headersHandler) {
            return axios_1["default"].post(this.baseUri + 'api/SuperDemo/PostActionResult3', JSON.stringify(person), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }) : { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' });
        };
        /**
         * POST api/SuperDemo/Collection
         */
        SuperDemo.prototype.postCollection = function (list, headersHandler) {
            return axios_1["default"].post(this.baseUri + 'api/SuperDemo/Collection', JSON.stringify(list), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }) : { 'Content-Type': 'application/json;charset=UTF-8' } }).then(function (d) { return d.data; });
        };
        /**
         * POST api/SuperDemo/enumPost?d={d}
         */
        SuperDemo.prototype.postDay = function (d, d2, headersHandler) {
            return axios_1["default"].post(this.baseUri + 'api/SuperDemo/enumPost?d=' + d, JSON.stringify(d2), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }) : { 'Content-Type': 'application/json;charset=UTF-8' } }).then(function (d) { return d.data; });
        };
        /**
         * POST api/SuperDemo/StringPersonDic
         */
        SuperDemo.prototype.postDictionary = function (dic, headersHandler) {
            return axios_1["default"].post(this.baseUri + 'api/SuperDemo/StringPersonDic', JSON.stringify(dic), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }) : { 'Content-Type': 'application/json;charset=UTF-8' } }).then(function (d) { return d.data; });
        };
        /**
         * POST api/SuperDemo/Guids
         */
        SuperDemo.prototype.postGuids = function (guids, headersHandler) {
            return axios_1["default"].post(this.baseUri + 'api/SuperDemo/Guids', JSON.stringify(guids), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }) : { 'Content-Type': 'application/json;charset=UTF-8' } }).then(function (d) { return d.data; });
        };
        /**
         * POST api/SuperDemo/ICollection
         */
        SuperDemo.prototype.postICollection = function (list, headersHandler) {
            return axios_1["default"].post(this.baseUri + 'api/SuperDemo/ICollection', JSON.stringify(list), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }) : { 'Content-Type': 'application/json;charset=UTF-8' } }).then(function (d) { return d.data; });
        };
        /**
         * POST api/SuperDemo/IList
         */
        SuperDemo.prototype.postIList = function (list, headersHandler) {
            return axios_1["default"].post(this.baseUri + 'api/SuperDemo/IList', JSON.stringify(list), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }) : { 'Content-Type': 'application/json;charset=UTF-8' } }).then(function (d) { return d.data; });
        };
        /**
         * POST api/SuperDemo/int2d
         */
        SuperDemo.prototype.postInt2D = function (a, headersHandler) {
            return axios_1["default"].post(this.baseUri + 'api/SuperDemo/int2d', JSON.stringify(a), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }) : { 'Content-Type': 'application/json;charset=UTF-8' } }).then(function (d) { return d.data; });
        };
        /**
         * POST api/SuperDemo/int2djagged
         */
        SuperDemo.prototype.postInt2DJagged = function (a, headersHandler) {
            return axios_1["default"].post(this.baseUri + 'api/SuperDemo/int2djagged', JSON.stringify(a), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }) : { 'Content-Type': 'application/json;charset=UTF-8' } }).then(function (d) { return d.data; });
        };
        /**
         * POST api/SuperDemo/intArray
         */
        SuperDemo.prototype.postIntArray = function (a, headersHandler) {
            return axios_1["default"].post(this.baseUri + 'api/SuperDemo/intArray', JSON.stringify(a), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }) : { 'Content-Type': 'application/json;charset=UTF-8' } }).then(function (d) { return d.data; });
        };
        /**
         * POST api/SuperDemo/IReadOnlyCollection
         */
        SuperDemo.prototype.postIReadOnlyCollection = function (list, headersHandler) {
            return axios_1["default"].post(this.baseUri + 'api/SuperDemo/IReadOnlyCollection', JSON.stringify(list), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }) : { 'Content-Type': 'application/json;charset=UTF-8' } }).then(function (d) { return d.data; });
        };
        /**
         * POST api/SuperDemo/IReadOnlyList
         */
        SuperDemo.prototype.postIReadOnlyList = function (list, headersHandler) {
            return axios_1["default"].post(this.baseUri + 'api/SuperDemo/IReadOnlyList', JSON.stringify(list), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }) : { 'Content-Type': 'application/json;charset=UTF-8' } }).then(function (d) { return d.data; });
        };
        /**
         * POST api/SuperDemo/List
         */
        SuperDemo.prototype.postList = function (list, headersHandler) {
            return axios_1["default"].post(this.baseUri + 'api/SuperDemo/List', JSON.stringify(list), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }) : { 'Content-Type': 'application/json;charset=UTF-8' } }).then(function (d) { return d.data; });
        };
        /**
         * POST api/SuperDemo/PostEmpty/{i}
         */
        SuperDemo.prototype.postWithQueryButEmptyBody = function (s, i, headersHandler) {
            return axios_1["default"].post(this.baseUri + 'api/SuperDemo/PostEmpty/' + i, JSON.stringify(s), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }) : { 'Content-Type': 'application/json;charset=UTF-8' } }).then(function (d) { return d.data; });
        };
        return SuperDemo;
    }());
    DemoWebApi_Controllers_Client.SuperDemo = SuperDemo;
    var Tuple = /** @class */ (function () {
        function Tuple(baseUri) {
            if (baseUri === void 0) { baseUri = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/'; }
            this.baseUri = baseUri;
        }
        /**
         * POST api/Tuple/ChangeName
         */
        Tuple.prototype.changeName = function (d, headersHandler) {
            return axios_1["default"].post(this.baseUri + 'api/Tuple/ChangeName', JSON.stringify(d), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }) : { 'Content-Type': 'application/json;charset=UTF-8' } }).then(function (d) { return d.data; });
        };
        /**
         * GET api/Tuple/PeopleCompany4
         */
        Tuple.prototype.getPeopleCompany4 = function (headersHandler) {
            return axios_1["default"].get(this.baseUri + 'api/Tuple/PeopleCompany4', { headers: headersHandler ? headersHandler() : undefined }).then(function (d) { return d.data; });
        };
        /**
         * GET api/Tuple/PeopleCompany5
         */
        Tuple.prototype.getPeopleCompany5 = function (headersHandler) {
            return axios_1["default"].get(this.baseUri + 'api/Tuple/PeopleCompany5', { headers: headersHandler ? headersHandler() : undefined }).then(function (d) { return d.data; });
        };
        /**
         * GET api/Tuple/Tuple1
         */
        Tuple.prototype.getTuple1 = function (headersHandler) {
            return axios_1["default"].get(this.baseUri + 'api/Tuple/Tuple1', { headers: headersHandler ? headersHandler() : undefined }).then(function (d) { return d.data; });
        };
        /**
         * GET api/Tuple/Tuple2
         */
        Tuple.prototype.getTuple2 = function (headersHandler) {
            return axios_1["default"].get(this.baseUri + 'api/Tuple/Tuple2', { headers: headersHandler ? headersHandler() : undefined }).then(function (d) { return d.data; });
        };
        /**
         * GET api/Tuple/Tuple3
         */
        Tuple.prototype.getTuple3 = function (headersHandler) {
            return axios_1["default"].get(this.baseUri + 'api/Tuple/Tuple3', { headers: headersHandler ? headersHandler() : undefined }).then(function (d) { return d.data; });
        };
        /**
         * GET api/Tuple/Tuple4
         */
        Tuple.prototype.getTuple4 = function (headersHandler) {
            return axios_1["default"].get(this.baseUri + 'api/Tuple/Tuple4', { headers: headersHandler ? headersHandler() : undefined }).then(function (d) { return d.data; });
        };
        /**
         * GET api/Tuple/Tuple5
         */
        Tuple.prototype.getTuple5 = function (headersHandler) {
            return axios_1["default"].get(this.baseUri + 'api/Tuple/Tuple5', { headers: headersHandler ? headersHandler() : undefined }).then(function (d) { return d.data; });
        };
        /**
         * GET api/Tuple/Tuple6
         */
        Tuple.prototype.getTuple6 = function (headersHandler) {
            return axios_1["default"].get(this.baseUri + 'api/Tuple/Tuple6', { headers: headersHandler ? headersHandler() : undefined }).then(function (d) { return d.data; });
        };
        /**
         * GET api/Tuple/Tuple7
         */
        Tuple.prototype.getTuple7 = function (headersHandler) {
            return axios_1["default"].get(this.baseUri + 'api/Tuple/Tuple7', { headers: headersHandler ? headersHandler() : undefined }).then(function (d) { return d.data; });
        };
        /**
         * GET api/Tuple/Tuple8
         */
        Tuple.prototype.getTuple8 = function (headersHandler) {
            return axios_1["default"].get(this.baseUri + 'api/Tuple/Tuple8', { headers: headersHandler ? headersHandler() : undefined }).then(function (d) { return d.data; });
        };
        /**
         * POST api/Tuple/PeopleCompany2
         */
        Tuple.prototype.linkPeopleCompany2 = function (peopleAndCompany, headersHandler) {
            return axios_1["default"].post(this.baseUri + 'api/Tuple/PeopleCompany2', JSON.stringify(peopleAndCompany), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }) : { 'Content-Type': 'application/json;charset=UTF-8' } }).then(function (d) { return d.data; });
        };
        /**
         * POST api/Tuple/PeopleCompany3
         */
        Tuple.prototype.linkPeopleCompany3 = function (peopleAndCompany, headersHandler) {
            return axios_1["default"].post(this.baseUri + 'api/Tuple/PeopleCompany3', JSON.stringify(peopleAndCompany), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }) : { 'Content-Type': 'application/json;charset=UTF-8' } }).then(function (d) { return d.data; });
        };
        /**
         * POST api/Tuple/PeopleCompany4
         */
        Tuple.prototype.linkPeopleCompany4 = function (peopleAndCompany, headersHandler) {
            return axios_1["default"].post(this.baseUri + 'api/Tuple/PeopleCompany4', JSON.stringify(peopleAndCompany), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }) : { 'Content-Type': 'application/json;charset=UTF-8' } }).then(function (d) { return d.data; });
        };
        /**
         * POST api/Tuple/PeopleCompany5
         */
        Tuple.prototype.linkPeopleCompany5 = function (peopleAndCompany, headersHandler) {
            return axios_1["default"].post(this.baseUri + 'api/Tuple/PeopleCompany5', JSON.stringify(peopleAndCompany), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }) : { 'Content-Type': 'application/json;charset=UTF-8' } }).then(function (d) { return d.data; });
        };
        /**
         * POST api/Tuple/PeopleCompany6
         */
        Tuple.prototype.linkPeopleCompany6 = function (peopleAndCompany, headersHandler) {
            return axios_1["default"].post(this.baseUri + 'api/Tuple/PeopleCompany6', JSON.stringify(peopleAndCompany), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }) : { 'Content-Type': 'application/json;charset=UTF-8' } }).then(function (d) { return d.data; });
        };
        /**
         * POST api/Tuple/PeopleCompany7
         */
        Tuple.prototype.linkPeopleCompany7 = function (peopleAndCompany, headersHandler) {
            return axios_1["default"].post(this.baseUri + 'api/Tuple/PeopleCompany7', JSON.stringify(peopleAndCompany), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }) : { 'Content-Type': 'application/json;charset=UTF-8' } }).then(function (d) { return d.data; });
        };
        /**
         * POST api/Tuple/PeopleCompany8
         */
        Tuple.prototype.linkPeopleCompany8 = function (peopleAndCompany, headersHandler) {
            return axios_1["default"].post(this.baseUri + 'api/Tuple/PeopleCompany8', JSON.stringify(peopleAndCompany), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }) : { 'Content-Type': 'application/json;charset=UTF-8' } }).then(function (d) { return d.data; });
        };
        /**
         * POST api/Tuple/PersonCompany1
         */
        Tuple.prototype.linkPersonCompany1 = function (peopleAndCompany, headersHandler) {
            return axios_1["default"].post(this.baseUri + 'api/Tuple/PersonCompany1', JSON.stringify(peopleAndCompany), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }) : { 'Content-Type': 'application/json;charset=UTF-8' } }).then(function (d) { return d.data; });
        };
        /**
         * POST api/Tuple/Tuple1
         */
        Tuple.prototype.postTuple1 = function (tuple, headersHandler) {
            return axios_1["default"].post(this.baseUri + 'api/Tuple/Tuple1', JSON.stringify(tuple), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }) : { 'Content-Type': 'application/json;charset=UTF-8' } }).then(function (d) { return d.data; });
        };
        /**
         * POST api/Tuple/Tuple2
         */
        Tuple.prototype.postTuple2 = function (tuple, headersHandler) {
            return axios_1["default"].post(this.baseUri + 'api/Tuple/Tuple2', JSON.stringify(tuple), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }) : { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' }).then(function (d) { return d.data; });
        };
        /**
         * POST api/Tuple/Tuple3
         */
        Tuple.prototype.postTuple3 = function (tuple, headersHandler) {
            return axios_1["default"].post(this.baseUri + 'api/Tuple/Tuple3', JSON.stringify(tuple), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }) : { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' }).then(function (d) { return d.data; });
        };
        /**
         * POST api/Tuple/Tuple4
         */
        Tuple.prototype.postTuple4 = function (tuple, headersHandler) {
            return axios_1["default"].post(this.baseUri + 'api/Tuple/Tuple4', JSON.stringify(tuple), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }) : { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' }).then(function (d) { return d.data; });
        };
        /**
         * POST api/Tuple/Tuple5
         */
        Tuple.prototype.postTuple5 = function (tuple, headersHandler) {
            return axios_1["default"].post(this.baseUri + 'api/Tuple/Tuple5', JSON.stringify(tuple), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }) : { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' }).then(function (d) { return d.data; });
        };
        /**
         * POST api/Tuple/Tuple6
         */
        Tuple.prototype.postTuple6 = function (tuple, headersHandler) {
            return axios_1["default"].post(this.baseUri + 'api/Tuple/Tuple6', JSON.stringify(tuple), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }) : { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' }).then(function (d) { return d.data; });
        };
        /**
         * POST api/Tuple/Tuple7
         */
        Tuple.prototype.postTuple7 = function (tuple, headersHandler) {
            return axios_1["default"].post(this.baseUri + 'api/Tuple/Tuple7', JSON.stringify(tuple), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }) : { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' }).then(function (d) { return d.data; });
        };
        /**
         * POST api/Tuple/Tuple8
         */
        Tuple.prototype.postTuple8 = function (tuple, headersHandler) {
            return axios_1["default"].post(this.baseUri + 'api/Tuple/Tuple8', JSON.stringify(tuple), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }) : { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' }).then(function (d) { return d.data; });
        };
        return Tuple;
    }());
    DemoWebApi_Controllers_Client.Tuple = Tuple;
    var Values = /** @class */ (function () {
        function Values(baseUri) {
            if (baseUri === void 0) { baseUri = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/'; }
            this.baseUri = baseUri;
        }
        /**
         * DELETE api/Values/{id}
         */
        Values.prototype["delete"] = function (id, headersHandler) {
            return axios_1["default"]["delete"](this.baseUri + 'api/Values/' + id, { headers: headersHandler ? headersHandler() : undefined });
        };
        /**
         * Get a list of value
         * GET api/Values
         */
        Values.prototype.get = function (headersHandler) {
            return axios_1["default"].get(this.baseUri + 'api/Values', { headers: headersHandler ? headersHandler() : undefined }).then(function (d) { return d.data; });
        };
        /**
         * Get by both Id and name
         * GET api/Values/{id}?name={name}
         */
        Values.prototype.getByIdAndName = function (id, name, headersHandler) {
            return axios_1["default"].get(this.baseUri + 'api/Values/' + id + '?name=' + (name == null ? '' : encodeURIComponent(name)), { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' }).then(function (d) { return d.data; });
        };
        /**
         * GET api/Values?name={name}
         */
        Values.prototype.getByName = function (name, headersHandler) {
            return axios_1["default"].get(this.baseUri + 'api/Values?name=' + (name == null ? '' : encodeURIComponent(name)), { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' }).then(function (d) { return d.data; });
        };
        /**
         * GET api/Values/{id}
         */
        Values.prototype.getById = function (id, headersHandler) {
            return axios_1["default"].get(this.baseUri + 'api/Values/' + id, { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' }).then(function (d) { return d.data; });
        };
        /**
         * GET api/Values/Get2
         */
        Values.prototype.get2 = function (headersHandler) {
            return axios_1["default"].get(this.baseUri + 'api/Values/Get2', { headers: headersHandler ? headersHandler() : undefined }).then(function (d) { return d.data; });
        };
        /**
         * POST api/Values
         */
        Values.prototype.post = function (value, headersHandler) {
            return axios_1["default"].post(this.baseUri + 'api/Values', JSON.stringify(value), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }) : { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' }).then(function (d) { return d.data; });
        };
        /**
         * Update with valjue
         * PUT api/Values/{id}
         */
        Values.prototype.put = function (id, value, headersHandler) {
            return axios_1["default"].put(this.baseUri + 'api/Values/' + id, JSON.stringify(value), { headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }) : { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' });
        };
        return Values;
    }());
    DemoWebApi_Controllers_Client.Values = Values;
})(DemoWebApi_Controllers_Client = exports.DemoWebApi_Controllers_Client || (exports.DemoWebApi_Controllers_Client = {}));
