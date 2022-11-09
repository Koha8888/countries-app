export interface Country {
    name: {
        official: string
    },
    currencies: {
        [key:string]:{
            name: string,
            symbol: string
        }
    },
    capital: string[],
    region: string,
    languages: {
        [key:string]: string
    },
    flags: {
        png: string,
        svg: string
    },


}