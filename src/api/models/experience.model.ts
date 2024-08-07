import { CategoryEnum } from '../enum/category.enum';
import type { ExperienceEntity } from './experience-entity.model';

export interface Experience {
  id: string,
  type: CategoryEnum.EXPERIENCE;
  title: string,
  entities: ExperienceEntity[],
}
