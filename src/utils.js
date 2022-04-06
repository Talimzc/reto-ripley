export const calculateAge = (dateOfBirth) => {
  let date = new Date(dateOfBirth);
  var ageDifMs = Date.now() - date.getTime();
  var ageDate = new Date(ageDifMs);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
};
