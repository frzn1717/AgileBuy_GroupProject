exports.addEdit = function(req, res, next) {
    res.render(
      'product/add_edit', 
      { 
        title: 'Add Edit page',
        fullName: 'Arvin Almario',
        contactNumber: '09193033871',
        itemName: 'Iphone14',
        brand:'Phones',
        category: 'Electronics',
        quantity: '5',
        price: '1000',
        addDate: 'Nov. 09 2022', 
        location: 'Ontario',
        description: 'for sale, 9 months used, need to go, broken',
      }
    );
  };