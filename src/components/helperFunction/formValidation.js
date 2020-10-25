const FormValidation = (formData) => {
  let errorKeys = [];
  const formEntries = Object.entries(formData);
  for (const [key, value] of formEntries) {
    if (value.trim() === "") errorKeys.push(key);
  }
  if (errorKeys.length === 0) return false;
  return errorKeys;
};

export default FormValidation;
