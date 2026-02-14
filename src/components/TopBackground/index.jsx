import { TopBackground } from "./styles"
import ImageUser from '../../assets/users.png' 

function Background(){
    return(
        <TopBackground>
            <img src={ImageUser} />
        </TopBackground>
    )
}

export default Background