import { observer } from 'mobx-react-lite';

export const BoardHeader = observer(({ title }) => {
    return (
        <header>
            {title}
            {/* {hasPermission({ permission: PERMISSIONS.boards.edit }) ? (
                <Text
                    editable={{
                        onChange: setText,
                        icon: <EditOutlined />,
                        tooltip: 'Edit text',
                        enterIcon: null,
                    }}
                >
                    {text}
                </Text>
            ) : (
                <Text>{text}</Text>
            )} */}
        </header>
    );
})
