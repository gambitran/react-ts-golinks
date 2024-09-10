import { useState } from 'react';
import './index.css';

export const Link = (prop: {name: string, description: string, url: string}) => {

    const [isVisible, setIsVisible] = useState(true)

    const removeLink = () => {
        setIsVisible(false)
    }

    const editLink = () => {
        console.log('hello')
    }

    return (
    <> 
        {isVisible && (
            <div className='linkContainer'>
                <div className='dataContainer'>
                    <div className='name'>go/{prop.name}</div>
                    <div className='url'>{prop.url}</div>
                    <div className='description'>{prop.description}</div>
                </div>
                <div className='actionContainer'>
                    <div 
                        onClick={() => editLink()}
                        style={{
                                borderRadius: '4px',
                                cursor: 'pointer',
                                border: '1px solid #ccc',
                            }}>
                        Edit
                    </div>
                    <div
                        onClick={() => removeLink()}
                        style={{
                            borderRadius: '4px',
                            cursor: 'pointer',
                            border: '1px solid #ccc',
                        }}>
                        x
                    </div>
                </div>
            </div>
        )}
    </>
    )
}
