import { BenefitsItem } from './BenefitsItem';

import { benefits } from '../../../../../shared/data/data';
import { BenefitsItemProps } from '../../../../../shared/models/interface';

export const Benefits = () => {
  return (
    <section className="section section-service">
      <div className="container">
        <h3 className="section-header section-title section-title-center service-title">
          Why should you choose us?
        </h3>
        <ul className="service-list row">
          {benefits.map((benefit: BenefitsItemProps, index: number) => (
            <li key={index} className="col col-3 col-sm-12 service-item">
              <BenefitsItem {...benefit} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
