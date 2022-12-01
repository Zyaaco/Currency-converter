import uuid from "react-native-uuid";

const CurrencyRow = ({
  currencyOptions,
  selectedCurrency,
  onChangeCurrency,
  amount,
  onChangeAmount,
}) => {
  return (
    <div>
      <input
        type="number"
        className="input"
        value={amount}
        onChange={onChangeAmount}
      />
      <select
        className="currency"
        value={selectedCurrency}
        onChange={onChangeCurrency}
      >
        {currencyOptions.map((option) => (
          <option key={uuid.v4()} value={option}>
            {option}
          </option>
        ))}
        <option value="Hi">Hi</option>
      </select>
    </div>
  );
};

export default CurrencyRow;
