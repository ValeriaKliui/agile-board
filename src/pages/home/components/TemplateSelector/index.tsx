import { useTemplates } from "@pages/home/hooks"
import { getTemplateOptions } from "@pages/home/utils"
import { RadioGroup } from "@shared/components";
import { Flex, Form, Typography } from "antd"

const { Text } = Typography;
const { Item } = Form

export const TemplateSelector = () => {
    const templates = useTemplates()
    const templateOptions = getTemplateOptions(templates)

    return <Flex vertical gap={'small'}>
        <Text strong>Template</Text>
        <Item name="template">
            <RadioGroup options={templateOptions} />
        </Item>
    </Flex>
}
