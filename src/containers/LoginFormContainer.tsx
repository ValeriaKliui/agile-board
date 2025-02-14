import { FormLogin } from "@components/Forms/AuthForms/FormLogin";
import { FormAuthValues } from "@components/Forms/types";
import { auth } from "@config/firebase";
import { PATHS } from "@constants/index";
import authStore from "@store/auth/authStore";
import { observer } from "mobx-react-lite";
import { useNavigate } from "react-router";

export const LoginFormContainer = observer(() => {
    const navigate = useNavigate();

    const onFormSubmit = async (userValues: FormAuthValues) => {
        await authStore.login({ auth, ...userValues });
        if (!authStore.errors.login) navigate(PATHS.HOME);
    };

    const onFormChange = () => authStore.resetError();

    const error = authStore.errors.login
    const isLoading = authStore.inProgress

    return <FormLogin onFormSubmit={onFormSubmit} onFormChange={onFormChange} error={error} isLoading={isLoading} />
})