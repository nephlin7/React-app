import React from 'react';
const home = () => (
    <section>
        <div className="section text-center section-landing">
            <div className="row">
                <div className="col-md-8 col-md-offset-2">
                    <h2 className="title">Let's talk product</h2>
                    <h5 className="description">This is the paragraph where you can write more
                        details about your product. Keep you user engaged by providing meaningful
                        information. Remember that by this time, the user is curious, otherwise he
                        wouldn't scroll to get here. Add a button if you want the user to see more.</h5>
                </div>
            </div>

            <div className="features">
                <div className="row">
                    <div className="col-md-4">
                        <div className="info">
                            <div className="icon icon-primary">
                                <i className="material-icons">chat</i>
                            </div>
                            <h4 className="info-title">First Feature</h4>
                            <p>Divide details about your product or agency work into parts. Write a few
                                lines about each one. A paragraph describing a feature will be enough.</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="info">
                            <div className="icon icon-success">
                                <i className="material-icons">verified_user</i>
                            </div>
                            <h4 className="info-title">Second Feature</h4>
                            <p>Divide details about your product or agency work into parts. Write a few
                                lines about each one. A paragraph describing a feature will be enough.</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="info">
                            <div className="icon icon-danger">
                                <i className="material-icons">fingerprint</i>
                            </div>
                            <h4 className="info-title">Third Feature</h4>
                            <p>Divide details about your product or agency work into parts. Write a few
                                lines about each one. A paragraph describing a feature will be enough.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);
export default home;