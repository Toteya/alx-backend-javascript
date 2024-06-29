export default function createReportObject(employeesList) {
  const report = {
    getNumberOfDepartments(employeesList) {
      return Object.keys(employeesList).length;
    },
    allEmployees: { ...employeesList },
  };

  return report;
}
