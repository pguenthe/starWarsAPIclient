export interface Person {
    name: string;
    homeworld: string;
    films: string[];
}

export interface People {
    count: number;
    next: string;
    results: Person[];
}
