import { BenefitsItemProps } from '../../../../../shared/models/interface';

export const BenefitsItem = (props: BenefitsItemProps) => {
  return (
    <a className="service-item-link" href="/#">
      <div className="service-item-icon-wrapper d-flex ai-center jc-center">
        <img className="service-item-icon" src={props.icon} alt={props.title} />
        <img
          className="service-item-icon-hover"
          src={props.iconHover}
          alt={props.title}
        />
      </div>
      <div>
        <h4 className="service-item-title">{props.title}</h4>
        <p className="service-item-desc">{props.desc}</p>
      </div>
    </a>
  );
};
