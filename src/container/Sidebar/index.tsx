import Avatar from '../../components/Avatar'
import Paragrafo from '../../components/Paragrafo'
import Title from '../../components/Title'
import { Description, BotaoTema, SidebarContainer } from './styles'

const Sidebar = () => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Title fontSize={20}>Lucas Marques</Title>
      <Paragrafo tipo="secundario" fontSize={16}>
        Lucass-marques
      </Paragrafo>
      <Description tipo="principal" fontSize={12}>
        Estudante Front-end
      </Description>
      <BotaoTema>Trocar tema</BotaoTema>
    </SidebarContainer>
  </aside>
)

export default Sidebar
