const SubscribeArea = () => {
  return (
    <div className="subscribe__area">
      <div className="container">
        <div className="row jc-center">
          <div className="col-lg-8 col-md-12">
            <div className="subscribe__area-title">
              <h1>Subscribe To Our New Newsletter</h1>
            </div>
            <div className="subscribe__area-form">
              <form action="#">
                <input
                  type="text"
                  name="email"
                  placeholder="Email Address"
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
