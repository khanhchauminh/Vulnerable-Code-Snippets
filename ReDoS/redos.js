const express = require('express');
const router = express.Router()

function escapeHtml(str)
{
    var map =
    {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
    };
    return str.replace(/[&<>"']/g, function(m) {return map[m];});
}

router.get("/tstMe", (req, res) => { 
    var r = /([a-z]+)+$/;

    let match = r.test(req.params.id);
    res.send(escapeHtml(match))
    
});


module.exports = router
