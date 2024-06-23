export type TaskT = {
  id: string;
  title: string;
  description: string;
  priority: string;
  deadline: number;
  image?: string;
  alt?: string;
  tags: { title: string; bg: string; text: string }[];
  attributes: {
    approachDate: string;
    leadApproachPlatform: string;
    leadApproachSource: string;
    leadCompanyName: string;
    leadContactEmail: string;
    leadContactPersonName: string;
    leadContactPhoneNumber: string;
    leadStatus: string;
    nextStep: string;
  };
};

type Column = {
  name: string;
  items: TaskT[];
};

export type Columns = {
  [key: string]: Column;
};
