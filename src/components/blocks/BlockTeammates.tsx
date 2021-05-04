// react
import React,{ useMemo} from 'react';
// third-party
import { FormattedMessage } from 'react-intl';
// application
import AppImage from '~/components/shared/AppImage';
import AppSlick, { ISlickProps } from '~/components/shared/AppSlick';
import { getDefaultLanguage, getLanguageByPath } from '~/services/i18n/utils';
import { useOriginalRouter } from '~/services/router';
// data
import dataSiteTeammates from '~/data/siteTeammates';


const slickSettings: ISlickProps = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 400,
    slidesToShow: 5,
    slidesToScroll: 5,
    responsive: [
        {
            breakpoint: 1199,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 4,
            },
        },
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
            },
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            },
        },
        {
            breakpoint: 439,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
    ],
};

function BlockTeammates() {
	const router = useOriginalRouter();
    const language = useMemo(() => getLanguageByPath(router.asPath) || getDefaultLanguage(), [router.asPath]);
    const { locale } = language;
	const lang =locale;
    return (
        <div className="block block-teammates">
            <div className="container container--max--xl">
                <div className="block-teammates__title">
				 <FormattedMessage id="BLOCK_TEAMMATES__TITLE" />
				</div>
                <div className="block-teammates__subtitle">
				 <FormattedMessage id="BLOCK_TEAMMATES__SUBTITLE" />
				</div>
                <div className="block-teammates__list">
                    <AppSlick {...slickSettings}>
                        {dataSiteTeammates.map((teammate, index) => (
                            <div key={index} className="block-teammates__item teammate">
                                <div className="teammate__avatar">
                                    <AppImage src={teammate.avatar} />
                                </div>
                                <div className="teammate__info">
                                    <div className="teammate__name">{lang=='en'?teammate.name:teammate.nameA}</div>
                                    <div className="teammate__position">{lang=='en'?teammate.position:teammate.positionA}</div>
                                </div>
                            </div>
                        ))}
                    </AppSlick>
                </div>
            </div>
        </div>
    );
}

export default BlockTeammates;
