const path = require('node:path');

exports.getMain = (req, res) => {
    try {
    const mainPath = path.resolve(__dirname, '..', 'views', 'index.ejs');
    res.status(200).render(mainPath);
    } catch (error) {
        res.status(500).json({msg: error});
    }
    
}