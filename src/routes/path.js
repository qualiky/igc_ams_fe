const ROOTS = {
  AUTH: "/auth",
  DASHBOARD: "/",
};

export const paths = {
  page404: "/404",

  auth: {
    login: `${ROOTS.AUTH}/login`,
  },

  dashboard: {
    root: ROOTS.DASHBOARD,

    employee: {
      employee: `${ROOTS.DASHBOARD}employee`,
      addEmployee: `${ROOTS.DASHBOARD}employee/add-employee`,
      details: {
        employeeDetails: (id) => `${ROOTS.DASHBOARD}employee/details/${id}`,
        employeeEdit: (id) => `${ROOTS.DASHBOARD}employee/edit-employee/${id}`,
      },
    },
    sales: {
      root: `${ROOTS.DASHBOARD}sales`,
      details: (id) => `${ROOTS.DASHBOARD}sales/details/${id}`,
    },

    coreHr: `${ROOTS.DASHBOARD}core-hr`,
    leave: {
      leave: `${ROOTS.DASHBOARD}leave`,
      details: (id) => `${ROOTS.DASHBOARD}leave/details/${id}`,
    },
    project: {
      project: `${ROOTS.DASHBOARD}project`,
      details: (id) => `${ROOTS.DASHBOARD}project/details/${id}`,
    },
  },
};
