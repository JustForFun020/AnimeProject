import { useState } from "react"
import items from "./datas";
import Item from "./Item";
import Items from "./Items";
import Render from "./Render";
import {} from "./index.scss";

const allAnime = ['All', ...new Set(items.map(item => item.anime))]
const something = [...(items.map(item => item.details))]
const allId = [...(something.map(item => item.id))]



function Main() {
    const [post, setPost] = useState(items)
    const [kinds, setKinds] = useState(allAnime)
    const [show, setShow] = useState(false)
    const [info, setInfo] = useState(something)
    const [itemId, setItemId] = useState(allId)

    const filterItem = (species) => {
        if(species === 'All') {
            setPost(items)
            return;
        }
        const newKind = items.filter(item => item.anime === species)
        setPost(newKind)
    }

    const handleClick = (index) => {
        setShow(!show)
        setItemId(index)
        const newId = something.filter(item => item.id === index)
        setInfo(newId)
    }
    
    return (
        <main>
            <div className="container">
                <Items characters={kinds} filterItem={filterItem} />
                <Item items={post} handleShow={handleClick} />
                {show && <Render info={info} handleHide={handleClick}/>}
            </div>            
        </main>
    )
}

export default Main;