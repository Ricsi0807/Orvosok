const path = require('node:path');
const Orvos = require('../models/Doctor');

exports.getEgyediOrvos = async (req, res) => {
    const parameter = req.params;
    const egyediOrvos = await Orvos.findById(parameter.id);
    console.log(egyediOrvos);

    try {
        const viewsUt = path.resolve(
            __dirname,
            '..',
            'views',
            'egyediOrvos.ejs'
        );
        res.status(200).render(viewsUt, { egyediOrvos });
    } catch (error) {
        res.status(500).json({ msg: error });
    }
};
exports.deleteEgyediOrvos = async (req, res) => {
    const { id } = req.body;
    try {
        await Orvos.findByIdAndDelete(id);
        res.status(200).json({ msg: 'Orvos sikeresen törölve.' });
    } catch (error) {
        res.status(500).json({ msg: error });
    }
};
