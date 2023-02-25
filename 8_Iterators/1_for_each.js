const groceries = ['brown sugar', 'salt', 'cranberries', 'walnut'];


groceries.forEach(function(groceryItem){
    console.log(' * ' + groceryItem);
});

groceries.forEach(groceryItem => console.log(' - ' + groceryItem));

function printGrocery(element) {
    console.log(element);
}

groceries.forEach(printGrocery);