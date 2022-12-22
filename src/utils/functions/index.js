export const formatDate = (time) => {
  const date = new Date(time);
  return date.toLocaleDateString();
};

export const sumTotal = (items) =>
  items?.map((item) => item.precioKg * item.quantity)?.reduce((a, b) => a + b, 0);
