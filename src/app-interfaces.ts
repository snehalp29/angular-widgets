class BaseEntity {
  id: string | null;
}

export class Widget extends BaseEntity {
  Title: string;
  Description: string;
  email: string;
}
