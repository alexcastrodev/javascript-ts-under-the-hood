export class FinancialNumber {
  private readonly decimals: number;
  private readonly formatter: Intl.NumberFormat;

  constructor(decimals = 2) {
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
  format(value: number | string): string {
    const number = typeof value === 'number' ? value : this.parse(value);

    return this.normalizeSpaces(this.formatter.format(number));
  }

  /**
   * Parses a formatted financial number.
   *
   * "1 234 567,89" -> 1234567.89
   */
  parse(value: string): number {
    const normalized = value.replace(/\s/g, '').replace(',', '.');
    const parsed = Number(normalized);

    return Number.isNaN(parsed) ? 0 : parsed;
  }

  /**
   * Cleans formatting without converting to number.
   *
   * "1 234,56" -> "1234,56"
   */
  clean(value: string): string {
    return value.replace(/\s+/g, '');
  }

  /**
   * Formats user input while typing.
   *
   * Keeps intermediate states such as:
   * "-" -> "-"
   * "1234" -> "1 234"
   * "1234," -> "1 234,"
   * "1234,5" -> "1 234,5"
   */
  input(value: string): string {
    const filtered = value
      .replace(/\./g, ',')
      .replace(/[^\d,-]/g, '')
      .replace(/(?!^)-/g, '')
      .replace(/^0+(?=\d)/, '')
      .replace(/,(?=.*,)/g, '');

    const sign = filtered.startsWith('-') ? '-' : '';
    const unsigned = sign ? filtered.slice(1) : filtered;

    if (!unsigned) {
      return sign;
    }

    if (this.decimals === 0) {
      const integer = unsigned.split(',')[0];

      return sign + this.formatInteger(integer);
    }

    const hasDecimal = unsigned.includes(',');

    if (!hasDecimal) {
      return sign + this.formatInteger(unsigned);
    }

    const [integer, decimal = ''] = unsigned.split(',');
    const truncated = decimal.slice(0, this.decimals);

    return `${sign}${this.formatInteger(integer)},${truncated}`;
  }

  private formatInteger(value: string): string {
    if (!value) {
      return '';
    }

    const number = Number(value);

    if (Number.isNaN(number)) {
      return value;
    }

    return this.normalizeSpaces(
      new Intl.NumberFormat('fr-FR', {
        useGrouping: true,
        maximumFractionDigits: 0,
      }).format(number),
    );
  }

  private normalizeSpaces(value: string): string {
    return value.replace(/\u202F/g, ' ');
  }
}

const financialNumber = new FinancialNumber();
const wholeFinancialNumber = new FinancialNumber(0);

console.log('format:', financialNumber.format(1234567.456));
console.log('format string:', financialNumber.format('1 234 567,89'));
console.log('parse:', financialNumber.parse('1 234 567,89'));
console.log('clean:', financialNumber.clean('1 234,56'));
console.log('input integer:', financialNumber.input('1234'));
console.log('input decimal:', financialNumber.input('1234,5'));
console.log('input trailing comma:', financialNumber.input('1234,'));
console.log('input negative:', financialNumber.input('-987654,321'));
console.log('input no decimals:', wholeFinancialNumber.input('1234567,89'));
