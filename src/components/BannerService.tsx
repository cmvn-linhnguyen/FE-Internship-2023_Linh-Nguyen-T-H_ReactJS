interface BannerServiceProps {
  icon: string;
  title: string;
  desc: string;
}

const BannerService = (props: BannerServiceProps) => {
  return (
    <li className="service-item d-flex ai-center">
      <div className="service-icon-wrap d-flex ai-center jc-center">
        <img
          className="icon service-icon"
          src={props.icon}
          alt="Free Shipping Icon"
        />
      </div>
      <div className="service-content">
        <h4 className="service-title">{props.title}</h4>
        <p className="service-desc">{props.desc}</p>
      </div>
    </li>
  );
};

export default BannerService;
