import { MembersRolesList, MembersSearch } from "@pages/home/components";
import { getCollection } from "@pages/home/services";
import { getRolesOptions } from "@pages/home/utils";
import { Button, Modal, ModalProps } from "@shared/components";
import { addMembersToBoard } from "@shared/services/firebase";
import { MemberRoleType } from "@shared/types";
import { boardStore, User } from "@store";
import { Form } from "antd";
import { observer } from "mobx-react-lite";
import { useCallback, useState } from "react";

const { Item } = Form

export const AddMembersModal = observer(
    ({ isModalOpen, onClose }: ModalProps) => {
        const [membersOptions, setMembersOptions] = useState<MemberRoleType[]>([]);
        const rolesOptions = getRolesOptions();

        const handleValuesChange = (changedValues) => {
            if ('membersChoosen' in changedValues) {
                setMembersOptions(changedValues.membersChoosen);
            }
        }

        const [form] = Form.useForm()
        const fetchFunc = useCallback(
            (searchTerm: string) =>
                getCollection<User>({
                    collectionPaths: [USERS_COLLECTION_NAME],
                    searchKey: 'username',
                    searchTerm,
                }),
            [],
        );

        const onFinish = async () => {
            const { members } = form.getFieldsValue()

            await addMembersToBoard({ boardID: boardStore.currentBoardInfo?.boardID, members });

            await boardStore.updateBoard({ boardID: boardStore.currentBoardInfo?.boardID, boardData: { members: { ...boardStore.currentBoardInfo?.members, ...members } } })
            onClose?.()
        }

        return <Modal isModalOpen={isModalOpen} onCancel={onClose} onClose={onClose}>
            <Form form={form} onFinish={onFinish} onValuesChange={handleValuesChange}>
                <MembersSearch fetchFunc={fetchFunc} name='membersChoosen' />
                <Item >
                    <Button htmlType="submit">Add!</Button>
                </Item>
                <MembersRolesList members={membersOptions} roles={rolesOptions} />
            </Form>
        </Modal>
    }
)