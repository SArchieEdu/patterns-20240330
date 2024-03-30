const calculateForPerson = (...params) => {
  return 1 + 1;
};

const calculateForOrganization = (...params) => {
  return 1 + 2;
};

const calculateForSmt = (...params) => {
  return 1 + 5;
};

const calculateForSmthElse = (...params) => {
  return 6 + 1;
};

function calculate(strategy) {
  const params = [];
  // высчитываем параметры
  return strategy(...params);
}

calculate(calculateForPerson);
calculate(calculateForOrganization);
calculate(calculateForSmt);
calculate(calculateForSmthElse);
