import { SignInPopupModes } from "@/shared/stores/auth-provider";

import { useSignInHook } from "../model";
import { LoginActionButtons, LoginTextField } from "./components";

const SignInForm = ({ toggleSigninModalMode }: { toggleSigninModalMode: (e: SignInPopupModes) => void }) => {
    const { handleClickSignIn, register, handleSubmit, errors } = useSignInHook();

    return (
        <form className="flex flex-col w-full gap-4" onSubmit={handleSubmit(handleClickSignIn)}>
            <LoginTextField
                {...register("login", {
                    required: "Required field",
                })}
                type="email"
                label="Email"
                id="email"
                placeholder="Your Email"
                errorMessage={errors.login?.message}
            />

            <LoginTextField
                {...register("password", {
                    required: "Required field",
                })}
                id="password"
                label="Password"
                placeholder="Your Password"
                type="password"
                errorMessage={errors.password?.message}
            />

            <LoginActionButtons
                signInPopupMode={SignInPopupModes.SignIn}
                handleSubmitForm={() => handleSubmit(handleClickSignIn)}
                toggleSigninModalMode={toggleSigninModalMode}
            />
        </form>
    );
};

export { SignInForm };
