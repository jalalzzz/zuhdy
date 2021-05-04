// react
import React from 'react';
// third-party
import { FormattedMessage } from 'react-intl';

// application
import AppLink from '~/components/shared/AppLink';
import url from '~/services/url';
import { baseUrl } from '~/services/utils';

interface Props extends React.HTMLAttributes<HTMLElement> {}

function Logo(props: Props) {
	const logoPath=baseUrl('/images/logo.png');
	
    return (
	
	<div {...props}>
            <AppLink href={url.home()} className="logo">
                <div className="logo__slogan">
                    <FormattedMessage id="TEXT_SLOGAN" />
                </div>
                <div className="logo__image">
				
				<img src={logoPath} width="55" />
                    {/* logo */}
          
                    {/* logo / end */}
                </div>
            </AppLink>
        </div>
    );
}

export default Logo;
