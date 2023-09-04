import { BannerItem } from './BannerItem';

import { bannerItems } from '../../../../../shared/data/data';
import { BannerItemProps } from '../../../../../shared/models/interface';

export const Banner = () => {
  return (
    <section className="section-banner">
      <div className="container">
        <div className="banner-wrap">
          <div className="banner-content">
            <h2 className="banner-title">
              Sale of the <span className="text-highlight">summer</span>{' '}
              collection
            </h2>
            <div className="banner-action d-flex ai-center">
              <div className="banner-icon-wrap d-flex jc-center ai-center">
                <img
                  className="icon banner-icon"
                  src={
                    require('../../../../../assets/icons/ic-arrow.svg').default
                  }
                  alt="Arrow Icon"
                />
              </div>
              <a className="banner-link" href="/#">
                SHOP NOW
              </a>
            </div>
          </div>
          <div className="banner-service">
            <ul className="service-list d-flex">
              {bannerItems.map((item: BannerItemProps, index: number) => (
                <BannerItem key={index} {...item} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
