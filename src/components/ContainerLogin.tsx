import { styled } from "../../stitches.config"
type Props = {
    children: React.ReactNode
}
const ContainerLogin = ({children}: Props) => {
    return (
        <Box>
            {children}
        </Box>
    )
}

const Box = styled('div', {

})
export default ContainerLogin