import { useEffect } from "react";

import { ApiEndpoints } from "@/shared/api";
import { useAuthorizeHook } from "@/shared/lib/authorize-hook";

export const TWITTER_STATE = "state";
const TWITTER_CODE_CHALLENGE = "challenge";
const TWITTER_AUTH_URL = "https://twitter.com/i/oauth2/authorize";
const TWITTER_SCOPE = ["tweet.read", "offline.access", "users.read"].join(" ");
const callbackUrl = `https://arspatially.com`;

const getURLWithQueryParams = (baseUrl: string, params: Record<string, string>) => {
    const query = Object.entries(params)
        .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
        .join("&");

    return `${baseUrl}?${query}`;
};

const useXOauthHook = () => {
    const { onLogin } = useAuthorizeHook();

    const getTwitterOAuthUrl = (redirectUri: string) =>
        getURLWithQueryParams(TWITTER_AUTH_URL, {
            response_type: "code",
            client_id: import.meta.env.VITE_APP_X_CLIENT_ID,
            redirect_uri: redirectUri,
            scope: TWITTER_SCOPE,
            state: TWITTER_STATE,

            code_challenge: TWITTER_CODE_CHALLENGE,
            code_challenge_method: "PLAIN",
        });

    const handleXAuth = async () => {
        const targetUrl = getTwitterOAuthUrl(callbackUrl);

        window.location.href = targetUrl;
    };

    useEffect(() => {
        const xCodeRegex = /code=([^&]+)/;
        const isMatch = window.location.href.match(xCodeRegex);

        if (isMatch) {
            const xCode = isMatch[1];

            ApiEndpoints.user
                .signupX({ twitterCode: xCode })
                .then((res) => {
                    onLogin({ token: res.token });
                })
                .catch((err) => console.error(err));
        }
    }, [onLogin]);

    return { handleXAuth };
};

export { useXOauthHook };
