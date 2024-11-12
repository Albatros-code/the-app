import "./main.css"
import { Suspense, lazy } from "react";
import type { ClassKey } from "keycloakify/login";
import type { KcContext } from "./KcContext";
import { useI18n } from "./i18n";
import DefaultPage from "keycloakify/login/DefaultPage";
import Template from "./Template";

const UserProfileFormFields = lazy(
    () => import("keycloakify/login/UserProfileFormFields")
);
const Login = lazy(() => import("./pages/Login"));

const doMakeUserConfirmPassword = true;

export default function KcPage(props: { kcContext: KcContext }) {
    const { kcContext } = props;

    const { i18n } = useI18n({ kcContext });

    return (
        <Suspense>
            {(() => {
                switch (kcContext.pageId) {
                    case "login.ftl": return (
                        <Login
                            {...{ kcContext, i18n, classes }}
                            Template={Template}
                            doUseDefaultCss={false}
                        />
                    );
                    default:
                        return (
                            <DefaultPage
                                kcContext={kcContext}
                                i18n={i18n}
                                classes={classes}
                                Template={Template}
                                doUseDefaultCss={true}
                                UserProfileFormFields={UserProfileFormFields}
                                doMakeUserConfirmPassword={doMakeUserConfirmPassword}
                            />
                        );
                }
            })()}
        </Suspense>
    );
}

const classes = {
    kcLoginClass: "min-h-full overflow-auto p-4 grid grid-rows-[minmax(min-content,_30%)_auto,_minmax(0,_20%)]",
    kcHeaderClass: "text-7xl font-extrabold m-auto pb-8",
    kcFormCardClass: "m-auto self-start gap-8 w-[350px]",
    kcFormSettingClass: "flex items-center justify-between",
    kcButtonLargeClass: "w-full",
    kcInputGroup: "flex gap-4",
    kcFormPasswordVisibilityButtonClass: "shrink-0",
    kcFormOptionsWrapperClass: "text-sm !mt-0",
    kcSignUpClass: "text-sm flex flex-col items-center",
} satisfies { [key in ClassKey]?: string };
