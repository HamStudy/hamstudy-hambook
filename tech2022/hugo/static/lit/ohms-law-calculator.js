import { LitElement, html, css } from 'https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js';

class OhmsLawCalculator extends LitElement {
  static properties = {
    voltage: { type: Number },
    current: { type: Number },
    resistance: { type: Number },
    power: { type: Number },
    equations: { type: Array },
    inputCount: { type: Number }, // Track how many inputs are filled
  };

  static styles = css`
    @media print {
      .ohms-law-component { display: none !important; }
    }
    .ohms-law-component {
      max-width: 500px;
      margin: 0 auto;
      padding: 20px;
      background-color: #f9f9f9;
      border-radius: 10px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }
    form {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
    form div {
      display: flex;
      justify-content: space-between;
    }
    label {
      width: 40%;
    }
    input {
      width: 55%;
    }
    input[readonly] {
      background-color: #f0f0f0;
      cursor: not-allowed;
    }
    .equation-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 10px;
    }
    .equation {
      font-weight: bold;
    }
    button {
      padding: 10px;
      background-color: #4caf50;
      color: white;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }
    button[disabled] {
      background-color: #ccc;
      cursor: not-allowed;
    }
    button:hover {
      background-color: #45a049;
    }
    .results {
      margin-top: 20px;
    }
    .results p {
      margin: 5px 0;
    }
    .button-row {
      display: flex;
      justify-content: space-between;
    }
    .clear-btn {
      background-color: #f44336;
    }
    .clear-btn:hover {
      background-color: #d32f2f;
    }

    :host {
      display: none;
    }

    :host([ready]) {
      display: block;
    }
  `;

  constructor() {
    super();
    this.voltage = null;
    this.current = null;
    this.resistance = null;
    this.power = null;
    this.equations = [];
    this.inputCount = 0;
  }

  firstUpdated() {
    this.setAttribute('ready', '');
  }

  handleInputChange(field, value) {
    this[field] = value ? parseFloat(value) : null;
    this.inputCount = [this.voltage, this.current, this.resistance, this.power].filter(val => val !== null).length;

    if (this.inputCount >= 2) {
      this.disableRemainingFields();
      this.calculateValues();
    }
  }

  disableRemainingFields() {
    if (this.voltage === null) {
      this.voltage = null;
    }
    if (this.current === null) {
      this.current = null;
    }
    if (this.resistance === null) {
      this.resistance = null;
    }
    if (this.power === null) {
      this.power = null;
    }
  }

  calculateValues() {
    let E = this.formatValue(this.voltage) || null;
    let I = this.formatValue(this.current) || null;
    let R = this.formatValue(this.resistance) || null;
    let P = this.formatValue(this.power) || null;
    this.equations = [];

    const eqParts = [];

    if (E === null && I !== null && R !== null) {
      E = this.formatValue(I * R);
      eqParts.push({
        equation: `<mi>E</mi><mo>=</mo><mi>I</mi><mo>×</mo><mi>R</mi>`,
        values: { E: `${E}V`, I: `${I}A`, R: `${R}Ω` },
      });
    }
    if (I === null && E !== null && R !== null) {
      I = this.formatValue(E / R);
      eqParts.push({
        equation: `<mi>I</mi><mo>=</mo><mfrac><mi>E</mi><mi>R</mi></mfrac>`,
        values: { E: `${E}V`, I: `${I}A`, R: `${R}Ω` },
      });
    }
    if (R === null && E !== null && I !== null) {
      R = this.formatValue(E / I);
      eqParts.push({
        equation: `<mi>R</mi><mo>=</mo><mfrac><mi>E</mi><mi>I</mi></mfrac>`,
        values: { E: `${E}V`, I: `${I}A`, R: `${R}Ω` },
      });
    }
    if (P === null && E !== null && I !== null) {
      P = this.formatValue(E * I);
      eqParts.push({
        equation: `<mi>P</mi><mo>=</mo><mi>E</mi><mo>×</mo><mi>I</mi>`,
        values: { P: `${P}W`, E: `${E}V`, I: `${I}A` },
      });
    }

    this.equations = eqParts.map(part => {
      const equation = `<math xmlns="http://www.w3.org/1998/Math/MathML"><mrow>${part.equation}</mrow></math>`;
      let value = equation;
      for (const key in part.values) {
        value = value.replace(new RegExp(`<mi>${key}</mi>`, 'g'), `<mi>${part.values[key]}</mi>`);
      }
      return { equation, value };
    });
  }

  formatValue(value) {
    if (!value) { return value; }
    return parseFloat(value.toFixed(3)).toString();
  }

  clearValues() {
    this.voltage = null;
    this.current = null;
    this.resistance = null;
    this.power = null;
    this.equations = [];
    this.inputCount = 0;
  }

  render() {
    return html`
      <div class="ohms-law-component">
        <h2>Ohm's Law & Power Law Calculator</h2>
        <p>Provide exactly two values to calculate the rest. Fields will be disabled after two inputs are filled.</p>
        <form>
          <div>
            <label for="voltage">Voltage (E):</label>
            <input type="number" 
                   step="any"
                   .value="${this.voltage || ''}" 
                   @input="${(e) => this.handleInputChange('voltage', e.target.value)}" 
                   ?readonly="${this.inputCount >= 2 && this.voltage === null}"
                   placeholder="Enter Voltage (E)">
          </div>

          <div>
            <label for="current">Current (I):</label>
            <input type="number" 
                   step="any"
                   .value="${this.current || ''}" 
                   @input="${(e) => this.handleInputChange('current', e.target.value)}" 
                   ?readonly="${this.inputCount >= 2 && this.current === null}"
                   placeholder="Enter Current (I)">
          </div>

          <div>
            <label for="resistance">Resistance (R):</label>
            <input type="number" 
                   step="any"
                   .value="${this.resistance || ''}" 
                   @input="${(e) => this.handleInputChange('resistance', e.target.value)}" 
                   ?readonly="${this.inputCount >= 2 && this.resistance === null}"
                   placeholder="Enter Resistance (Ω)">
          </div>

          <div>
            <label for="power">Power (P):</label>
            <input type="number" 
                   step="any"
                   .value="${this.power || ''}" 
                   @input="${(e) => this.handleInputChange('power', e.target.value)}" 
                   ?readonly="${this.inputCount >= 2 && this.power === null}"
                   placeholder="Enter Power (W)">
          </div>

          <div class="button-row">
            <button type="button" class="clear-btn" @click="${this.clearValues}">Clear</button>
          </div>
        </form>

        <div class="results" ?hidden="${!this.hasResults()}">
          <h3>Results:</h3>

          ${this.equations.map(eq => html`
            <div class="equation-row">
              <div class="equation" .innerHTML="${eq.equation}"></div>
              <div class="values" .innerHTML="${eq.value}"></div>
            </div>
          `)}
        </div>
      </div>
    `;
  }

  hasResults() {
    return this.voltage || this.current || this.resistance || this.power;
  }
}

customElements.define('ohms-law-calculator', OhmsLawCalculator);
