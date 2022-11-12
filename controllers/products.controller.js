exports.addEdit = function(req, res, next) {
    res.render(
        'product/add_edit', {
            title: 'Add Edit page',
            fullName: 'Arvin Almario',
            contactNumber: '09193033871',
            itemName: 'Iphone14',
            brand: 'Phones',
            category: 'Electronics',
            quantity: '5',
            price: '1000',
            addDate: 'Nov. 09 2022',
            location: 'Ontario',
            description: 'for sale, 9 months used, need to go, broken',
        }
    );
};

exports.displayList = function(req, res, next) {
    res.render(
        'product/edit', {
            title: 'List of Products',
            fullName: 'Arvin Almario',
            contactNumber: '09193033871',
            itemName: 'Iphone14',
            brand: 'Phones',
            category: 'Electronics',
            quantity: '5',
            price: '1000',
            addDate: 'Nov. 09 2022',
            location: 'Ontario',
            description: 'for sale, 9 months used, need to go, broken',
        }
    );
};



/*
  exports.displayList = function(req, res, next) {  

   

    displayList.find((err, displayList) => {



        if(err)

        {

            return console.error(err);

        }

        else

        {

            res.render('product/edit', {

                //title: 'Product List',

                //product: displayList,

                //userName: req.user ? req.user.username : ''

            })            

        }

    });

}
*/