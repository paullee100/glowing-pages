export class Recipe {
    name!: string;
    ingredients!: string[];
    steps!: string[];
    duration!: number;
    image!: string;

    constructor(name: string, ingredients: string[], steps: string[], duration: number, image: string) {
        Object.assign(this, {name, ingredients, steps, duration, image});
    }
}