export const useResume = (prices: number[], total: number) => {
  const formatCurrency = (value: number) =>
    value.toLocaleString("pt-BR", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  const getIncome = () => {
    const income = prices
      .filter((price) => price > 0)
      .reduce((acc, val) => acc + val, 0);
    return formatCurrency(income);
  };

  const getOutcome = () => {
    const outcome = prices
      .filter((price) => price < 0)
      .reduce((acc, val) => acc + val, 0);
    return formatCurrency(outcome);
  };

  const getTotal = () => {
    const totalAmount = prices.reduce((acc, val) => acc + val, 0);
    return formatCurrency(totalAmount);
  };

  const getPercent = () => {
    const outcome = prices
      .filter((price) => price < 0)
      .reduce((acc, val) => acc + val, 0);
    const percent = (-outcome / total) * 100;
    return `${Math.max(0, parseFloat(percent.toFixed(2)))}%`;
  };

  return {
    getIncome,
    getOutcome,
    getTotal,
    getPercent,
  };
};
