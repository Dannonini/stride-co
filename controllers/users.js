//CREATE

function create(req, res, next){
    res.status(201).json({
        message: "user created",
        data: {}
    });
}

//READ

function list(req, res, next) {
  //no lleva protocolo http poq devuelve un 200 por default
    res.json({
    message: "Users list",
    data: []
  });
}

function find(req, res, next){
    res.json({
    message: "Users by id list",
    data: {}
  });
}

//UPDATE

function update(req, res, next){
    res.json({
        message: "User update",
        data: {}
    });
}

//DELETE
function destroy(req, res, next){
    res.json({
        message: "user deleted",
        data: {}
    });

}

module.exports = {create, list, find, update, destroy};