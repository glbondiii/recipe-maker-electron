import Recipe from "src/Recipe"

export interface IReciMakeAPI {
    makeRecipeList: () => Promise<string[]>,
    readRecipe: (dishName: string) => Promise<Recipe>,
    writeRecipe: (recipe: Recipe) => Promise<void>,
    deleteRecipe: (recipe: Recipe) => Promise<void>
}

declare global {
    interface Window {
        reciMakeAPI: IReciMakeAPI
    }
}