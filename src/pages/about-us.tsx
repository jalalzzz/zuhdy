// react
import React from 'react';
// third-party
import { FormattedMessage } from 'react-intl';
// application
import AppImage from '~/components/shared/AppImage';
import BlockReviews from '~/components/blocks/BlockReviews';
import BlockSpace from '~/components/blocks/BlockSpace';
import BlockTeammates from '~/components/blocks/BlockTeammates';
import Decor from '~/components/shared/Decor';
import PageTitle from '~/components/shared/PageTitle';
import { baseUrl } from '~/services/utils';

function Page() {
    return (
        <React.Fragment>
            <PageTitle>
                About Us
            </PageTitle>

            <div className="about">
                <div className="about__body">
                    <div className="about__image">
                        <div
                            className="about__image-bg"
                            style={{
                                backgroundImage: `url(${baseUrl('/images/about.jpg')})`,
                            }}
                        />
                        <Decor className="about__image-decor" type="bottom" />
                    </div>

                    <div className="about__card">
                        <div className="about__card-title">
						 <FormattedMessage id="ABOUT__CARD_TITLE" />
						</div>
                        <div className="about__card-text">
						 <FormattedMessage id="ABOUT__CARD_TEXT" />
                         </div>
                        <div className="about__card-author">
							 <FormattedMessage id="ABOUT__CARD_AUTHOR" />
						</div>
                        <div className="about__card-signature">
                            <AppImage src="/images/signature.jpg" width="160" height="55" />
                        </div>
                    </div>

                    <div className="about__indicators">
                        <div className="about__indicators-body">
                            <div className="about__indicators-item">
                                <div className="about__indicators-item-value">
									 <FormattedMessage id="ABOUT__INDICATORS-ITEM_VALUE1" />
								</div>
                                <div className="about__indicators-item-title">
									 <FormattedMessage id="ABOUT__INDICATORS-ITEM_TITLE1" />
								</div>
                            </div>
                            <div className="about__indicators-item">
                                <div className="about__indicators-item-value">
									 <FormattedMessage id="ABOUT__INDICATORS-ITEM_VALUE2" />
								</div>
                                <div className="about__indicators-item-title">
									 <FormattedMessage id="ABOUT__INDICATORS-ITEM_TITLE2" />
								</div>
                            </div>
                            <div className="about__indicators-item">
                                <div className="about__indicators-item-value">
									 <FormattedMessage id="ABOUT__INDICATORS-ITEM_VALUE3" />
								</div>
                                <div className="about__indicators-item-title">
									 <FormattedMessage id="ABOUT__INDICATORS-ITEM_TITLE3" />
								</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <BlockSpace layout="divider-xl" />

            <BlockTeammates />

            <BlockSpace layout="divider-xl" />

            <BlockReviews />

            <BlockSpace layout="before-footer" />
        </React.Fragment>
    );
}

export default Page;
