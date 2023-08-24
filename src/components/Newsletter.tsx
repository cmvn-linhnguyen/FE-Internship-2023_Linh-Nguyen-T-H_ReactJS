const Newsletter = () => {
  return (
    <section className="section section-newsletter">
      <div className="container">
        <ul className="flex-center row">
          <li className="col col-6 col-sm-12">
            <h4 className="newsletter-title">
              Subscribe to our newsletter andreceive exclusive offers every week
            </h4>
          </li>
          <li className="col col-6 col-sm-12">
            <form className="newsletter-form">
              <ul className="row">
                <li className="col col-9 col-sm-12">
                  <input
                    className="newsletter-input"
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                  />
                </li>
                <li className="col col-3 col-sm-12">
                  <button className="btn newsletter-button">SUBSCRIBE</button>
                </li>
              </ul>
            </form>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Newsletter;
