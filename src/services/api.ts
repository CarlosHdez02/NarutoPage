
export  class FetchNarutoApi {
    private baseUrl = 'https://narutodb.xyz/api'
    constructor() {

    }

     public async getNarutoCharacters() {
        try {
            const response = await fetch(`${this.baseUrl}/character`)
            const data = await response.json()
            return data
        } catch (err) {
            console.log("error here", err)
            throw err
        }
    }

    public async getAkatsukiCharacters() {
        try {
            const response = await fetch(`${this.baseUrl}/akatsuki`)
            const data = await response.json()
            return data
        } catch (err) {
            console.log("err", err)
            throw err
        }
    }

    public async getTailedBeasts() {
        try {
            const response = await fetch(`${this.baseUrl}/tailed-beast`)
            const data = await response.json()
            return data
        } catch (err) {
            console.log("err", err)
            throw err
        }
    }
    public async getNarutoCharacterById(id: number) {
        try {
            const response = await fetch(`${this.baseUrl}/character/${id}`)
            const data = await response.json()
            return data;
        } catch (err) {
            console.log('err', err)
            throw err
        }
    }


    public async getTailedBeastById(id: number) {
        try {
            const response = await fetch(`${this.baseUrl}/tailed-beast/${id}`)
            const data = await response.json()
            return data;
        } catch (err) {
            console.log('err', err)
            throw err
        }
    }

    public async getAkatsukiById(id: number) {
        try {
            const response = await fetch(`${this.baseUrl}/akatsuki/${id}`)
            const data = await response.json()
            return data
        } catch (err) {
            console.log("err", err)
            throw err
        }
    }
}