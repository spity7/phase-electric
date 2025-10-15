const SubscribeArea = () => {
  return (
    <div className="subscribe__two">
      <div className="container">
        <div className="row">
          <div className="col-xl-8 col-lg-7 lg-mb-20">
            <div className="subscribe__two-title lg-t-center">
              <h1>Subscribe To Our New Newsletter</h1>
            </div>
          </div>
          <div className="col-xl-4 col-lg-5">
            <div className="subscribe__two-form">
              <form action="#">
                <input
                  type="email"
                  name="email"
                  placeholder="Enter Your Email"
                  required
                />
                <button className="button-2" type="submit">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscribeArea;
