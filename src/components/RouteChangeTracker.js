import React from 'react'
import { withRouter } from 'react-router-dom';
import ReactGA from "react-ga";
import ReactGA4 from 'react-ga4';
const RouteChangeTracker = ({ history }) => {

    history.listen((location, action) => {
        ReactGA.pageview(location.pathname);
        // const ref_link= location.href.includes("hufspnp.com") ? "(self)" : location.href;
        ReactGA4.send({hitType: "pageview", path: location.pathname, location: location.pathname, title: location.pathname}); //, page_referrer: "(self)"});
    });

    return <div></div>;
};

export default withRouter(RouteChangeTracker);