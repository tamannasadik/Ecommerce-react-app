export function FilterSection(){

const categories=[
    'Women',
    'Men',
    'Kid',
    'Electronics',
    'Skin Care',
    'MakeUp',
    'Home Decor',
    'Shoes'
];

return (
    <div className="py-4"> 
        <div className="flex mb-4">
{/* Making a Category List using map */}
          {categories.map((category)=>(
            <button key={category} className="bg-gray-200 hover:bg-grey-300 text-grey-800 font-semibold py-2 px-4 rounded mr-2">{category}</button>
        ))}
        </div>
        <button className="bg-gray-400 hover:bg-grey-300 text-grey-800 font-semibold py-2 px-4 rounded mr-2">Clear Filters</button>
    </div>
    );
}