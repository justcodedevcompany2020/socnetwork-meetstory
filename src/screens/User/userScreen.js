import Container from '../../components/Container'
import { UserNameBlock } from '../../components/UserNameBlock'
export const UserScreen = () =>{
    return <Container headerTitle = 'Профиль пользователя' goBack>
        <UserNameBlock />
    </Container>
}