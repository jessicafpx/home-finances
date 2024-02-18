export const dateFormatter = new Intl.DateTimeFormat("pt-BR");

export const priceFormatter = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});

export const generateRandomId = () => {
  const prefix = "txn";
  const randomSuffix = Math.random().toString(36).substring(2, 10);
  const timestamp = new Date().getTime();
  return `${prefix}-${timestamp}-${randomSuffix}`;
};

export const formatCurrency = (value: number) =>
  value.toLocaleString("pt-BR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

export const formatCurrencyWithR$ = (value: number) =>
  value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

export const formatToMoneyWithLocaleString = (value: number) => {
  const formattedValue = (value / 100).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return formattedValue;
};

export const formatAmount = (value: string) => {
  const formattedValue = value
    .replace("R$ ", "")
    .replaceAll(".", "")
    .replace(",", ".");
  return Number(formattedValue);
};

export const getTenDigitsRandomNumberId = (): string => {
  return Math.random().toString().substring(2, 12);
};
