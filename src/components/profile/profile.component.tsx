import { useTranslation } from "react-i18next";
import { Fragment, RefObject, useEffect, useState } from "react";

import { usePortfolio } from "../../modules/portfolio";
import { LanguagesEnum } from "../../enums/languages.enum";

interface ProfileProps {
  categoriesRef: RefObject<Map<string, HTMLElement>>;
}

const CV_FR = "/cv/Bastien_Faisant_CV.pdf";
const CV_EN = "/cv/Bastien_Faisant_english_CV.pdf";

export const Profile = ({ categoriesRef }: ProfileProps) => {
  const { t, i18n } = useTranslation();

  const [cvPdf, setCVPdf] = useState(CV_EN);

  const { findProfile } = usePortfolio();

  const profile = findProfile();

  useEffect(() => {
    switch (i18n.language) {
      case LanguagesEnum.FR:
        setCVPdf(CV_FR);
        break;
      default:
        setCVPdf(CV_EN);
        break;
    }
  }, [i18n.language]);

  return (
    <section
      ref={(element) => {
        if (element) {
          categoriesRef.current.set(profile.id, element);
        }
      }}
      id={profile.type}
      className="h-[calc(100vh-80px)] w-full p-4 flex flex-col-reverse md:flex-row justify-evenly gap-4 items-center"
    >
      <div className="flex flex-col justify-center items-center gap-8 sm:gap-16">
        <div className="flex flex-col gap-4 text-2xl sm:text-3xl md:text-3xl lg:text-5xl xl:text-5xl">
          <span>{`${profile.welcome} ${profile.firstName} ${profile.lastName}`}</span>
          <span className="text-primary-200">{profile.status}</span>
          <span className="text-base sm:text-lg md:text-lg lg:text-2xl">
            {profile.formation}
          </span>
        </div>

        <div className="flex flex-col gap-2 sm:flex-row sm:gap-4 fill-primary-200 items-center">
          {profile.tags.map((tag, index) => (
            <Fragment key={tag}>
              <span className="">{tag}</span>
              {index < profile.tags.length - 1 && (
                <span className="w-2 h-2 rounded-full bg-primary-200" />
              )}
            </Fragment>
          ))}
        </div>

        <a
          href={cvPdf}
          // download={`cv_${i18n.language}_bastien_faisant`} // Directly download the PDF file
          target="_blank" // Open the PDF file in another tab
          className="btn-primary"
          rel="noreferrer"
        >
          {t("downloadResume")}
        </a>
      </div>
      <img
        src="/profile/pp.jpg"
        alt="profile"
        className="rounded-full object-cover max-h-[33%] max-w-[75%] md:max-h-[75%] md:max-w-[33%]"
      />
    </section>
  );
};
