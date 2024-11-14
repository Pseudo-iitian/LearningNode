const ids = require('short-id');
const URL = require('../models/url');

async function handleGenerateNewShortURL(req,res){
    const body = req.body;
    console.log(body);
    if(!body.url){
        return res.status(400).json({error: "url is required."});
    }
    const shortID = ids.generate();
    await URL.create({
        shortId: shortID,
        redirectURL: body.url,
        visitHistory: [],
    });

    return res.render("home", {id: shortID});
}

async function handleGetUserByShortId(req,res){
    const shortId = req.params.shortId;
    const entry = await URL.findOneAndUpdate(
        {
            shortId,
        },
        {
            $push:{
                visitHistory: {
                    timestamp: Date.now(),
                },
            }
        }
    );
    if(!entry) return res.status(404).json({msg: "entry is null"})
    console.log("entry is: ",entry);
    return res.redirect(entry.redirectURL);
}

async function handleGetAnalytics(req,res){
    const shortId = req.params.shortId;
    const result = await URL.findOne({shortId});
    return res.json(
        {
            totalClicks: result.visitHistory.length,
            analytics: result.visitHistory,
        }
    )
}

module.exports = {
    handleGenerateNewShortURL,
    handleGetUserByShortId,
    handleGetAnalytics
}