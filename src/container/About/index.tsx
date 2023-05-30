import Paragrafo from '../../components/Paragrafo'
import Title from '../../components/Title'
import { GithubSection } from './styles'

const About = () => (
  <section>
    <Title fontSize={16}>Sobre mim</Title>
    <Paragrafo tipo="secundario">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita
      cupiditate aperiam facilis libero quam consequuntur labore vitae fuga
      voluptate? In obcaecati nulla unde ut tenetur, et tempora! Est, nesciunt
      illum!
    </Paragrafo>
    <GithubSection>
      <img src="https://github-readme-stats.vercel.app/api?username=lucass-marques&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=lucass-marques&layout=compact&langs_count=7&theme=dracula" />
    </GithubSection>
  </section>
)

export default About
