import React from "react";
import { FeatureTab } from "@/types/featureTab";
import Image from "next/image";

const FeaturesTabItem = ({ featureTab }: { featureTab: FeatureTab }) => {
  const { title, desc1, desc2, image, imageDark } = featureTab;

  return (
    <>
      <div style={{display: 'flex', flexDirection: 'column'}}>
        <div className="md:w-1/2">
          <h2 className="mb-7 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle2">
            {title}
          </h2>
          <p className="mb-5">{desc1}</p>
          <p className="w-11/12">{desc2}</p>
        </div>
        <div style={{display: 'flex', justifyContent: 'center'}}>
            <Image width={300} height={475} src={image} alt={title} className="dark:hidden" />
            <Image
              src={imageDark}
              alt={title}
              width={300} height={475}
              className="hidden dark:block"
            />
        </div>
      </div>
    </>
  );
};

export default FeaturesTabItem;
