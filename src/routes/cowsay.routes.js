const { Router } = require('express');
const cowsay = require("cowsay");
const router = Router();

const printConsole = (text) => {
    console.log(cowsay.say({
        text: text,
        cow: '', // Template for a cow, get inspiration from `./cows`
        eyes: 'oo', // Select the appearance of the cow's eyes, equivalent to cowsay -e
        tongue: 'L|', // The tongue is configurable similarly to the eyes through -T and tongue_string, equivalent to cowsay -T
        wrap: false, // If it is specified, the given message will not be word-wrapped. equivalent to cowsay -n
        wrapLength: 40, // Specifies roughly where the message should be wrapped. equivalent to cowsay -W
        mode: 'b', // One of 	"b", "d", "g", "p", "s", "t", "w", "y"
    }));
}

router.get('/:text', (req, res) => {
    printConsole(req.params.text);
    res.send("<h1 style='text-align: center'>Mira el mensaje en consola</h1>");
});
router.post('/', (req, res) => {
    printConsole(req.body.text);
    res.send("<h1 style='text-align: center'>Mira el mensaje en consola</h1>");
});

module.exports = router;