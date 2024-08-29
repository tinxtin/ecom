import { SiteRoute } from '../route/siteroute'
export const PromoBlock = ({ setClass }) => {

    return (
        <div className={`${setClass}__hero-block`}>
            <div className={`${setClass}__hero-content`}>
                <div className={`${setClass}__hero-header headline`}>
                    <h3>
                        Summer sale
                    </h3>
                </div>
                <div className={`${setClass}__hero-desc`}>
                    <p>
                        For a limited time, stock up and save 25% or more on select favorites.
                    </p>
                </div>
                <div className={`${setClass}__hero-action`}>
                    <SiteRoute
                        to={'/'}
                        className={`${setClass}__hero-btn btn`}
                    >
                        Shop Now
                    </SiteRoute>
                </div>
            </div>
        </div>
    )
}