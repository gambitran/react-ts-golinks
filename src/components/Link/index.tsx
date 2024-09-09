import './index.css'

const Link = (prop: {name: string, description: string, url: string}) => {

    return (
        <div className='linkBox'>
            <div className='name'> go/{prop.name}</div>
            <div className='url'>{prop.url}</div>
            <div className='description'>{prop.description}</div>
        </div>
    )
}

export default Link