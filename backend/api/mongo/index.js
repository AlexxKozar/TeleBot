export const addOneToCollection = (collection, name) => {
  collection.find({name:name})
    .then( res => {
      if (res.length===0){
        const toAdd = new collection({name:name});
        toAdd.save()
          .then(res => {
            console.log("Added: "+name);
            console.log(res)
          })
          .catch(err => {throw(err)});
      }
      else console.log('Exists: ' +res);
    })
    .catch(err => {throw(err)});
};
