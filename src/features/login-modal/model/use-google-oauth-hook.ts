import { ApiEndpoints } from "@/shared/api";
import { LSConstants } from "@/shared/config/constants";
import { useAuthorizeHook } from "@/shared/lib/authorize-hook";

const useGoogleOauthHook = () => {
    const { onLogin } = useAuthorizeHook();

    const handleGoogleLogin = () => {
        const client = window.google.accounts.oauth2.initTokenClient({
            client_id: import.meta.env.VITE_APP_GOOGLE_CLIENT_ID,
            scope: "openid email profile",
            callback: handleAccessToken,
        });
        client.requestAccessToken();
    };

    function handleAccessToken(tokenResponse: { access_token: string }) {
        console.log(tokenResponse);
        ApiEndpoints.user.signupGoogle({ googleToken: tokenResponse.access_token }).then((res) => {
            onLogin({ token: res.token });
            localStorage.setItem(LSConstants.userData, JSON.stringify(res.user));
        });
    }

    return { handleGoogleLogin };
};

export { useGoogleOauthHook };
