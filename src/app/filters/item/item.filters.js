
function priceRangeFilter(priceFrom, priceTo) {
    if(!priceFrom && !priceTo) { return undefined; }
    if( priceFrom > priceTo && priceTo) { return undefined; }

    let predicate = undefined;

    if(priceFrom && !priceTo) {
        predicate = (item) => item.price >= priceFrom;
    } else if(!priceFrom && priceTo) {
        predicate = (item) => item.price <= priceTo;
    } else {
        predicate = (item) => (item.price >= priceFrom && item.price <= priceTo);
    }

    return predicate;
}

function colorRangeFilter(allowedColors) {
    if(!allowedColors) { return undefined; }
    return (item) => _.contains(allowedColors, item.color);
}

function inStockFilter(isInStockOnly) {
    if(isInStockOnly === false) { return undefined; }
    return (item) => item.isInStock;
}

export function itemFilter(items, filters) {
    let predicates = [];
    let predicate = undefined;

    predicate = priceRangeFilter(filters.priceFrom, filters.priceTo)
    if(predicate) {
        predicates.push(predicate);
    }

    predicate = colorRangeFilter(filters.colors)
    if(predicate) {
        predicates.push(predicate);
    }

    predicate = inStockFilter(filters.inStockOnly)
    if(predicate) {
        predicates.push(predicate);
    }

    predicate = undefined;

    return _.filter(items, (item) => {
        for(let i = 0; i<predicates.length; ++i) {
            if(!predicates[i](item)) {
                return false;
            }
        }
        return true;
    });
}
