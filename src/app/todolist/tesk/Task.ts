export interface Task {
    name: string;
    description: string;
    date: string | null;
    isCompleted: boolean;
    isEditable: boolean;
  }