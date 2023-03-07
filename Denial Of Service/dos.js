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

router.post("/list-users", (req, res) => { 
    var obj = req.body.users;
    var someArr = [];

    // Potential DoS if obj.length is large.
    for (var i = 0; i < obj.length; i++) { 
        someArr.push(obj[i]);
    } 

    //doing something with the code
    res.send(escapeHtml(someArr.join(',')));
});


module.exports = router
