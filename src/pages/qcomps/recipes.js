export const recipes = [{
    id: 'greek-salad',
    name: 'Greek Salad',
    ingredients: new Set(['tomatoes', 'cucumber', 'onion', 'olives', 'feta'])
}, {
    id: 'hawaiian-pizza',
    name: 'Hawaiian Pizza',
    ingredients: new Set(['pizza crust', 'pizza sauce', 'mozzarella', 'ham', 'pineapple'])
}, {
    id: 'hummus',
    name: 'Hummus',
    ingredients: new Set(['chickpeas', 'olive oil', 'garlic cloves', 'lemon', 'tahini'])
}];

export default function RecipeList() {
    const listItems = recipes.map((recipe) => (
        <div key={recipe.id}>
            <h1>{recipe.name}</h1>
            {Array.from(recipe.ingredients).map((ingredient) => (
                <li key={recipe.id + ' ' + recipe.name}>{ingredient}</li>
            ))}
        </div>
    ))
    return (<ul>{listItems}</ul>)
}