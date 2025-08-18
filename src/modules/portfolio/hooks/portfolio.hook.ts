import { useContext } from 'react';

import { PortfolioContext } from '../components';
import {
  findCategories,
  findEducation,
  findExperience,
  findExperienceById,
  findProfile,
  findProjectById,
  findProjects
} from '../utils/portfolio.utils';

export const usePortfolio = () => {
  const { portfolioRoot } = useContext(PortfolioContext);

  return {
    findProfile: findProfile(portfolioRoot),
    findCategories: findCategories(portfolioRoot),
    findEducation: findEducation(portfolioRoot),
    findExperience: findExperience(portfolioRoot),
    findExperienceById: findExperienceById(portfolioRoot),
    findProjects: findProjects(portfolioRoot),
    findProjectById: findProjectById(portfolioRoot)
  };
};
