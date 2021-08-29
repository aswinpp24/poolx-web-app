export const requiredValidator = (propertyType) => {
    return v =>
      (v && v.length > 0) ||
      v.length == undefined ||
      `Please input  ${propertyType}`;
  };
  
  export const minLengthValidator = (propertyType, minLength) => {
    return v =>
     (v && v.length >= minLength) ||
       `${propertyType} must be more than ${minLength} charecters `;
  };
  
  export const emailValidator = () => {
    return v => (v && /.+@.+\..+/.test(v)) || `Please input a valid email`;
  };
  export const phoneLengthValidator = (propertyType, length) => {
    return v =>
     (v && v.length === length) ||
       `${propertyType} must be have ${length} charecters `;
  };
  
  export const confirmPasswordValidator = password => {
    return v => (v && v && v == password) || `Passwords doesnt match`;
  };
  
  export const confirmnumberValidator = propertyType => {
    return v => (v && v && v == propertyType) || `Passwords doesnt match`;
  };
  // export const percentageValidator = propertyType => {
  //   return v => (v && parseFloat(v) < 100) || `Should be less than 100`;
  // };
  