"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FinancialNumber = void 0;
var FinancialNumber = /** @class */ (function () {
    function FinancialNumber(decimals) {
        if (decimals === void 0) { decimals = 2; }
        this.decimals = Math.max(0, decimals);
        this.formatter = new Intl.NumberFormat('fr-FR', {
            minimumFractionDigits: this.decimals,
            maximumFractionDigits: this.decimals,
            useGrouping: true,
        });
    }
    /**
     * Formats a number for read-only display.
     *
     * 1234567.456 -> "1 234 567,46"
     */
    FinancialNumber.prototype.format = function (value) {
        var number = typeof value === 'number' ? value : this.parse(value);
        return this.normalizeSpaces(this.formatter.format(number));
    };
    /**
     * Parses a formatted financial number.
     *
     * "1 234 567,89" -> 1234567.89
     */
    FinancialNumber.prototype.parse = function (value) {
        var normalized = value.replace(/\s/g, '').replace(',', '.');
        var parsed = Number(normalized);
        return Number.isNaN(parsed) ? 0 : parsed;
    };
    /**
     * Cleans formatting without converting to number.
     *
     * "1 234,56" -> "1234,56"
     */
    FinancialNumber.prototype.clean = function (value) {
        return value.replace(/\s+/g, '');
    };
    /**
     * Formats user input while typing.
     *
     * Keeps intermediate states such as:
     * "-" -> "-"
     * "1234" -> "1 234"
     * "1234," -> "1 234,"
     * "1234,5" -> "1 234,5"
     */
    FinancialNumber.prototype.input = function (value) {
        var filtered = value
            .replace(/\./g, ',')
            .replace(/[^\d,-]/g, '')
            .replace(/(?!^)-/g, '')
            .replace(/^0+(?=\d)/, '')
            .replace(/,(?=.*,)/g, '');
        var sign = filtered.startsWith('-') ? '-' : '';
        var unsigned = sign ? filtered.slice(1) : filtered;
        if (!unsigned) {
            return sign;
        }
        if (this.decimals === 0) {
            var integer_1 = unsigned.split(',')[0];
            return sign + this.formatInteger(integer_1);
        }
        var hasDecimal = unsigned.includes(',');
        if (!hasDecimal) {
            return sign + this.formatInteger(unsigned);
        }
        var _a = unsigned.split(','), integer = _a[0], _b = _a[1], decimal = _b === void 0 ? '' : _b;
        var truncated = decimal.slice(0, this.decimals);
        return "".concat(sign).concat(this.formatInteger(integer), ",").concat(truncated);
    };
    FinancialNumber.prototype.formatInteger = function (value) {
        if (!value) {
            return '';
        }
        var number = Number(value);
        if (Number.isNaN(number)) {
            return value;
        }
        return this.normalizeSpaces(new Intl.NumberFormat('fr-FR', {
            useGrouping: true,
            maximumFractionDigits: 0,
        }).format(number));
    };
    FinancialNumber.prototype.normalizeSpaces = function (value) {
        return value.replace(/\u202F/g, ' ');
    };
    return FinancialNumber;
}());
exports.FinancialNumber = FinancialNumber;
var financialNumber = new FinancialNumber();
var wholeFinancialNumber = new FinancialNumber(0);
console.log('format:', financialNumber.format(1234567.456));
console.log('format string:', financialNumber.format('1 234 567,89'));
console.log('parse:', financialNumber.parse('1 234 567,89'));
console.log('clean:', financialNumber.clean('1 234,56'));
console.log('input integer:', financialNumber.input('1234'));
console.log('input decimal:', financialNumber.input('1234,5'));
console.log('input trailing comma:', financialNumber.input('1234,'));
console.log('input negative:', financialNumber.input('-987654,321'));
console.log('input no decimals:', wholeFinancialNumber.input('1234567,89'));
