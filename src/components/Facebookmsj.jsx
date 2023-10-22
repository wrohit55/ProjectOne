
"use client";
import { FacebookProvider, CustomChat } from 'react-facebook';

const Facebookmsj = () => {
    return (
        <FacebookProvider appId="1715101448991777" chatSupport>
            <CustomChat pageId="104233196023663" minimized={true} />
        </FacebookProvider>
    )
}

export default Facebookmsj