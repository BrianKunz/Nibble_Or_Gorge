const RESOURCE_PATH = '/recipes'
const viewController = {
  index(req, res){
    res.render('recipes/Index', res.locals.data)
  },
  all(req,res){
    res.render('recipes/All', res.locals.data)
  },
  show(req, res){
    res.render('recipes/Show', res.locals.data)
  },
  edit(req, res){
    res.render('recipes/Edit', res.locals.data)
  },
  newView(req, res){
    res.render('recipes/New')
  },
  redirectHome(req, res){
    res.redirect(RESOURCE_PATH)
  },
  redirectShow(req, res){
    res.redirect(RESOURCE_PATH + `/${req.params.id}`)
  },
};

module.exports = viewController