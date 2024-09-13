export const getLinks = async () => {
    const response = fetch('/links', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
    
    return (response as Promise<any>)
}

interface postLink {
    name: string,
    url: string,
    description: string
} 

export const addLink = async ({name, url, description}: postLink) => {
    const response = fetch('/link', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: name,
            url: url,
            description: description
        })
    })

    return (response as Promise<any>)
}