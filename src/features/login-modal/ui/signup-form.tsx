import { SignInPopupModes } from "@/shared/stores/auth-provider";

import { useSignUpHook } from "../model";
import { LoginActionButtons, LoginTextField } from "./components";

const SignUpForm = ({ toggleSigninModalMode }: { toggleSigninModalMode: (e: SignInPopupModes) => void }) => {
    const {
        handleClickSignUp,
        register,
        handleSubmit,
        checkVerifyCode,
        onChangeVerifyCode,
        maskEmail,
        errors,
        waitingVerificationCode,
        signUpData,
        verifyCodeError,
        remainingSeconds,
    } = useSignUpHook();

    if (waitingVerificationCode !== false) {
        return (
            <div className="flex flex-col w-full gap-4">
                <LoginTextField
                    value={waitingVerificationCode}
                    onChange={onChangeVerifyCode}
                    label={`Verification code (sent to ${maskEmail(signUpData!.email ?? "")})`}
                    id="verification-code"
                    placeholder="Verification code"
                    errorMessage={verifyCodeError ?? undefined}
                />

                <div
                    className={`manrope-semibold-16 cursor-pointer text-white ${!remainingSeconds && "underline-offset-auto"}`}
                    onClick={() => handleClickSignUp()}
                >
                    {remainingSeconds
                        ? `Request the code again after ${remainingSeconds} seconds`
                        : "Request the code again"}
                </div>

                <button
                    // type={"submit"}
                    onClick={checkVerifyCode}
                    className={`flex justify-center flex-nowrap w-full text-nowrap gap-2.5 border border-gray70 rounded-[25px] px-5 py-3 manrope-semibold-16 cursor-pointer bg-white text-black`}
                >
                    Continue
                </button>
            </div>
        );
    } else {
        return (
            <form className="flex flex-col w-full gap-4" onSubmit={handleSubmit(handleClickSignUp)}>
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

                <LoginTextField
                    {...register("passwordAgain", {
                        required: "Required field",
                    })}
                    id="password_again"
                    label=""
                    placeholder="Your Password Again"
                    type="password"
                    errorMessage={errors.passwordAgain?.message}
                />

                <LoginActionButtons
                    signInPopupMode={SignInPopupModes.SignUp}
                    handleSubmitForm={() => {}}
                    toggleSigninModalMode={toggleSigninModalMode}
                />
            </form>
        );
    }
};

export { SignUpForm };
