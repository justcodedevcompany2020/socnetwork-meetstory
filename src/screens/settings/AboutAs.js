import { View, Text } from 'react-native'
import Container from "../../components/Container"
import { Styles } from '../../styles/Styles'
import { AppColors } from '../../styles/AppColors'

export const AboutAs = () => {
    return <Container headerTitle='О нас' goBack>
        <View style={[Styles.whiteContainer, { marginTop: 30 }]}>
            <Text style={[Styles.blackMedium18, { paddingTop: 20 }]}>Есть над чем задуматься: активно развивающиеся страны третьего мира лишь добавляют фракционных разногласий и рассмотрены исключительно в разрезе маркетинговых и финансовых предпосылок. Современные технологии достигли такого уровня, что разбавленное изрядной долей эмпатии, рациональное мышление предоставляет широкие возможности для как самодостаточных, так и внешне зависимых концептуальных решений. Банальные, но неопровержимые выводы, а также некоторые особенности внутренней политики формируют глобальную экономическую сеть и при этом —  преданы социально-демократической анафеме.</Text>
            <Text style={{ marginVertical: 15, color: AppColors.BLACK_COLOR, fontSize: 18 }}> <Text style={Styles.blackMedium18}> MeetStory</Text> 2023</Text>
        </View>
    </Container>
}