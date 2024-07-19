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
    chat: {
      root: `${ROOTS.DASHBOARD}conversation`,
    },
    sales: {
      root: `${ROOTS.DASHBOARD}sales`,
      details: (id) => `${ROOTS.DASHBOARD}sales/details/${id}`,
    },
    clients: {
      root: `${ROOTS.DASHBOARD}client`,
      details: (id) => `${ROOTS.DASHBOARD}client/details/${id}`,
    },

    coreHr: `${ROOTS.DASHBOARD}core-hr`,
    leave: {
      leave: `${ROOTS.DASHBOARD}leave`,
      details: (id) => `${ROOTS.DASHBOARD}leave/details/${id}`,
    },
    project: {
      project: `${ROOTS.DASHBOARD}project`,
      addProject: `${ROOTS.DASHBOARD}project/add-project`,
      details: (id) => `${ROOTS.DASHBOARD}project/details/${id}`,
      taskDetails: (id) => `${ROOTS.DASHBOARD}project/task-detail/${id}`,
    },
    receipt: {
      receipt: `${ROOTS.DASHBOARD}receipt`,
      addReceipt: `${ROOTS.DASHBOARD}receipt/add-receipt`,
      analytics: `${ROOTS.DASHBOARD}receipt/analytics`,
      details: (id) => `${ROOTS.DASHBOARD}receipt/details/${id}`,
    },
  },
};
