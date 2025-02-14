import { FormRegister } from "@components/Forms/AuthForms/FormRegister";
import { FormAuthValues } from "@components/Forms/types";
import { auth } from "@config/firebase";
import { PATHS } from "@constants/index";
import authStore from "@store/auth/authStore";
import { observer } from "mobx-react-lite";
import { useNavigate } from "react-router";

export const FormRegisterContainer = observer(() => {
    const navigate = useNavigate();

    const onFormSubmit = async (userValues: FormAuthValues) => {
        await authStore.register({ auth, ...userValues });
        if (!authStore.errors.register) navigate(PATHS.LOGIN);
    };

    const onFormChange = () => authStore.resetError();

    const error = authStore.errors.register;
    const isLoading = authStore.inProgress;

    return (
        <FormRegister
            onFormSubmit={onFormSubmit}
            onFormChange={onFormChange}
            error={error}
            isLoading={isLoading}
            confirmPasswordRules={confirmPasswordRules}
        />
    );
});
