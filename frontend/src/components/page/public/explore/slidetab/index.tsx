import React from "react";
import { Flex, P } from "@/components/basic"
import { Hr, SlideTabContainer, SlideTabContent, SlideTabContentWrapper } from "./style"
import { Icon } from "@/components/custom";
import { GV } from "@/utils/style.util";

interface SlideTabPropsInterface {
    label: string;
    isDefaultOpened?: boolean;
    children: React.ReactNode;
}

const SlideTab: React.FC<SlideTabPropsInterface> = ({ label, isDefaultOpened, children }) => {
    const slideTabContentRef = React.useRef<HTMLDivElement>(null);
    const [opened, setOpened] = React.useState(isDefaultOpened);

    React.useEffect(() => {
        if (slideTabContentRef.current) {
            if (opened) {
                slideTabContentRef.current.style.height = slideTabContentRef.current.scrollHeight + "px";
                slideTabContentRef.current.style.marginBottom = "1.25rem";
            } else {
                slideTabContentRef.current.style.height = "0px";
                slideTabContentRef.current.style.marginBottom = "0px";
            }
        }
    }, [opened])

    return (
        <SlideTabContainer>
            <Flex $style={{ hAlign: 'space-between', w: '100%' }} onClick={() => setOpened(!opened)}>
                <P $style={{ size: GV('font-size-3'), weight: GV('weight-lg') }}>{label}</P>
                {opened ? <Icon icon='ChevronArrowRight' /> : <Icon icon='ChevronArrowDown' />}
            </Flex>
            <SlideTabContent ref={slideTabContentRef}>
                <SlideTabContentWrapper>
                    {
                        children
                    }
                </SlideTabContentWrapper>
            </SlideTabContent>
        </SlideTabContainer>
    )
}

export default SlideTab;
