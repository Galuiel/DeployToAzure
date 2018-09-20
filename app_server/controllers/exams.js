const index = function(req, res) {
    res.render('exams', { title: 'Express' })
};
module.exports = {
    index
};