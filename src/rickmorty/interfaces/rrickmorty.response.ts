export interface RickMortyResponse {
    info: Info;
    results: Result[];
}

export interface Info {
    count: number;
    pages: number;
    next:string | null;
    prev: string | null;
}

export interface Result {
    id:number;
    name:string;
    status:string;
    species:string;
    gender:string;
    image:string;
}