import { useEffect } from "react";

const useGoogleOauthHook = () => {
    const client = google.accounts.oauth2.initTokenClient({
        client_id: import.meta.env.VITE_APP_GOOGLE_CLIENT_ID,
        scope: "openid email profile",
        callback: (response) => {
            console.log("RESPONSE: ", response);
        },
        ux_mode: "popup",
    });

    const handleGoogleLogin = () => {
        client.requestAccessToken();
        // gapi.load("auth2", () => {
        //     gapi.auth2.init();
        // });
        // if (auth2.isSignedIn.get()) {
        //     var profile = auth2.currentUser.get().getBasicProfile();
        //     console.log("ID: " + profile.getId());
        //     console.log("Full Name: " + profile.getName());
        //     console.log("Given Name: " + profile.getGivenName());
        //     console.log("Family Name: " + profile.getFamilyName());
        //     console.log("Image URL: " + profile.getImageUrl());
        //     console.log("Email: " + profile.getEmail());
        // }
        // // Google's OAuth 2.0 endpoint for requesting an access token
        // const oauth2Endpoint = "https://accounts.google.com/o/oauth2/v2/auth";
        // // Create <form> element to submit parameters to OAuth 2.0 endpoint.
        // const form = document.createElement("form");
        // form.setAttribute("method", "GET"); // Send as a GET request.
        // form.setAttribute("action", oauth2Endpoint);
        // // Parameters to pass to OAuth 2.0 endpoint.
        // const params = {
        //     client_id: import.meta.env.VITE_APP_GOOGLE_CLIENT_ID,
        //     redirect_uri: `${window.location.origin}`,
        //     // redirect_uri: "https://arspatially.com",
        //     response_type: "token",
        //     scope: "openid%20email%20profile",
        //     include_granted_scopes: "true",
        //     state: "pass-through value",
        //     prompt: "select_account",
        // };
        // // Add form parameters as hidden input values.
        // for (const p in params) {
        //     const input = document.createElement("input");
        //     input.setAttribute("type", "hidden");
        //     input.setAttribute("name", p);
        //     input.setAttribute("value", params[p]);
        //     form.appendChild(input);
        // }
        // // Add form to page and submit it to open the OAuth 2.0 endpoint.
        // document.body.appendChild(form);
        // form.submit();
        // const str = `https://api.geonftapp.com/oauth2/authorize/google?redirect_uri=https://arspatially.com`;
        // // const callbackUrl = `${window.location.origin}`;
        // const callbackUrl = `https://arspatially.com`;
        // const googleClientId = import.meta.env.VITE_APP_GOOGLE_CLIENT_ID;
        // const targetUrl = `https://accounts.google.com/o/oauth2/v2/auth?redirect_uri=${encodeURIComponent(
        //     callbackUrl,
        // )}&response_type=token&client_id=${googleClientId}&scope=openid%20email%20profile`;
        // window.location.href = targetUrl;
    };

    useEffect(() => {
        const accessTokenRegex = /access_token=([^&]+)/;
        const isMatch = window.location.href.match(accessTokenRegex);

        if (isMatch) {
            const accessToken = isMatch[1];

            console.log("!!!!!!!!!!!", accessToken);
            // Cookies.set("access_token", accessToken);
            // setIsLoggedin(true);
        }
    }, []);

    return { handleGoogleLogin };
};

export { useGoogleOauthHook };
