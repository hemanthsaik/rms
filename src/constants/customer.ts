export type Customer = {
  id?: number;
  name: string;
  email: string;
  contact: string;
  currentstate?: string;
  city?: string;
  zip?: string;
};

export const customer: Customer[] = [
  {
    id: 1,
    name: "Alice Johnson",
    email: "alice.johnson@example.com",
    contact: "+1 (555) 123-4567",
  },
  {
    id: 2,
    name: "Bob Smith",
    email: "bob.smith@example.com",
    contact: "+44 777777777",
  },
  {
    id: 3,
    name: "Emily Brown",
    email: "emily.brown@example.com",
    contact: "+61 3 9876 5432",
  },
  {
    id: 4,
    name: "David Lee",
    email: "david.lee@example.com",
    contact: "+33 6 11223344",
  },
];
