
let inventory = require('../models/product.model')

  exports.displayList = function(req, res, next) {
    inventory.find((err, displayList) => {
      if(err)
      {
          return console.error(err);
      }
      else
      {
          res.render('product/edit', {
              title: 'List Page', 
              product: displayList,
          })            
      }
    });  
  }

  exports.displayEditPage = (req, res, next) => {
    let id = req.params.id;

    inventory.findById(id, (err, itemToEdit) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            //show the edit view
            res.render('product/add_edit', {
                title: 'Edit Item', 
                item: itemToEdit,
            })
        }
    });
}


exports.processEditPage = (req, res, next) => {
  let id = req.params.id

  let updatedItem = inventory({
      _id: req.body.id,
      name: req.body.name,
      brand: req.body.brand,
      category: req.body.category,
      quantity: req.body.quantity,
      price: req.body.price,
      description: req.body.description,
  });

  inventory.updateOne({_id: id}, updatedItem, (err) => {
      if(err)
      {
          console.log(err);
          res.end(err);
      }
      else
      {
          console.log(req.body);
          res.redirect('/product/list');
      }
  });
}


exports.displayAddPage = (req, res, next) => {
  let newItem = inventory();

  res.render('product/add_edit', {
      title: 'Add new Item',
      item: newItem,
  })          
}

exports.processAddPage = (req, res, next) => {
  let newItem = inventory({
      _id: req.body.id,
      name: req.body.name,
      brand: req.body.brand,
      category: req.body.category,
      quantity: req.body.quantity,
      price: req.body.price,
      description: req.body.description,
  });

  inventory.create(newItem, (err, item) =>{
      if(err)
      {
          console.log(err);
          res.end(err);
      }
      else
      {
          console.log(item);
          res.redirect('/product/list');
      }
  });

}



exports.performDelete = (req, res, next) => {
  let id = req.params.id;

  inventory.remove({_id: id}, (err) => {
      if(err)
      {
          console.log(err);
          res.end(err);
      }
      else
      {
          // refresh list
          res.redirect('/product/list');
      }
  });
}




