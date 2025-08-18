export interface ProjectEntity {
  id: string,
  title: string,
  startDate: Date,
  endDate: Date,
  description: string,
  images?: string[],
  skills: string[],
  content: string
}
