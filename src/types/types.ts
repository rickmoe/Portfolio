export interface Course {
  name: string;
  code: string;
  description: string;
}

export interface CourseTags {
  [tag: string]: Course[];
}
