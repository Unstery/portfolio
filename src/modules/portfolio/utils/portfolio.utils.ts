import { CategoryEnum } from '../../../api/enum/category.enum';
import {
  Education,
  Experience,
  ExperienceEntity,
  PortfolioRoot,
  Profile,
  Project,
  ProjectEntity
} from '../../../api/models';

export const findCategories = (
  portfolioRoot: PortfolioRoot
) => () => portfolioRoot.categories;

export const findProfile = (
  portfolioRoot: PortfolioRoot
) => () => portfolioRoot.categories
  .find((category) => category.type === CategoryEnum.PROFILE) as Profile;

export const findEducation = (
  portfolioRoot: PortfolioRoot
) => () => portfolioRoot.categories
  .find((category) => category.type === CategoryEnum.EDUCATION) as Education;

export const findExperience = (
  portfolioRoot: PortfolioRoot
) => () => portfolioRoot.categories
  .find((category) => category.type === CategoryEnum.EXPERIENCE) as Experience;

export const findExperienceById = (
  portfolioRoot: PortfolioRoot
) => (experienceId: string) => portfolioRoot.categories
  .find((category) => category.type === CategoryEnum.EXPERIENCE)
  ?.entities.find((experienceEntity) => experienceEntity.id === experienceId) as ExperienceEntity;

export const findProjects = (
  portfolioRoot: PortfolioRoot
) => () => portfolioRoot.categories
  .find((category) => category.type === CategoryEnum.PROJECT) as Project;

export const findProjectById = (
  portfolioRoot: PortfolioRoot
) => (projectId: string) => portfolioRoot.categories
  .find((category) => category.type === CategoryEnum.PROJECT)
  ?.entities.find((projectEntity) => projectEntity.id === projectId) as ProjectEntity;
