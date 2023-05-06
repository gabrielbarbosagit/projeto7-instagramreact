import Stories from './stories'
import Posts from './posts'
import SideBar from './sidebar'

export default function Corpo() {
    return (
        <div className="corpo">
            <div className="esquerda">
                <Stories/>
                <Posts/>
            </div>
           <SideBar/>
        </div>
    );
}